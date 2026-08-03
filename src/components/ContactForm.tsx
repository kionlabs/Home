import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { createNotionPage } from '../lib/notion';

export default function ContactForm() {
  // Helper to sanitize contact input (allow digits and hyphens)
  const sanitizeContact = (value: string) => value.replace(/[^\d-]/g, '');
  // Optional auto-formatting to XXX-XXXX-XXXX (Korean style)
  const formatContact = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0,3)}-${digits.slice(3)}`;
    return `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7,11)}`;
  };
  const initialForm = {
    name: '',
    contact: '',
    organization: '',
    interest: '',
    message: '',
    consent: false,
  };
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    let newValue = value;
    if (name === 'contact') {
      // Remove disallowed characters, keep digits and hyphens
      const sanitized = sanitizeContact(newValue);
      // Auto‑format to XXX‑XXXX‑XXXX style while typing
      newValue = formatContact(sanitized);
    }
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : newValue,
    }));
  };

  const isNameValid = formData.name.trim().length >= 2;
  const cleanedContact = formData.contact.replace(/\D/g, '');
  const isContactValid = cleanedContact.length === 10 || cleanedContact.length === 11;

  // To avoid early error messages, only show error when not valid and is not empty
  const nameError = formData.name && !isNameValid;
  const contactError = formData.contact && !isContactValid;

  const isFormValid = isNameValid && isContactValid && formData.consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('개인정보 동의를 체크해 주세요.');
      return;
    }
    if (!isFormValid) {
      return;
    }
    setStatus('submitting');
    try {
      const { error } = await supabase
        .from('consultations')
        .insert([{ 
          name: formData.name,
          contact: cleanedContact,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.message 
        }]);
      
      if (error) throw error;

      // ---- Notion 연동 시작 ----
      try {
        await createNotionPage({
          name: formData.name,
          contact: cleanedContact,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.message,
        });
      } catch (nError) {
        console.error('Notion 연동 오류:', nError);
      }
      // ---- Notion 연동 끝 ----

      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('idle');
      alert('전송에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center border border-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">상담 신청이 완료되었습니다.</h2>
          <p className="text-gray-600 mb-6">빠른 시일 내에 연락드리겠습니다.</p>
          <button
            onClick={handleReset}
            className="bg-[#FF8D70] text-white font-bold py-2 px-6 rounded-xl hover:bg-[#ff7b5c] transition-all"
          >
            확인 및 다시 작성
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-32 pb-48 bg-gray-50">
