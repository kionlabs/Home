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
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
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
      const sanitized = sanitizeContact(newValue);
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

  const nameError = formData.name && !isNameValid;
  const contactError = formData.contact && !isContactValid;

  const isFormValid = isNameValid && isContactValid && formData.consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('개인정보 동의를 체크해 주세요.');
      return;
    }
    if (!isFormValid) return;
    setStatus('submitting');
    try {
      const { error } = await supabase
        .from('consultations')
        .insert([
          {
            name: formData.name,
            contact: cleanedContact,
            organization: formData.organization,
            interest: formData.interest,
            message: formData.message,
          },
        ]);
      if (error) throw error;
      // Notion integration
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
      setStatus('success');
    } catch (err) {
      console.error('Error submitting form:', err);
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
          <button onClick={handleReset} className="bg-[#FF8D70] text-white font-bold py-2 px-6 rounded-xl hover:bg-[#ff7b5c] transition-all">
            확인 및 다시 작성
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-32 pb-48 bg-gray-50">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">맞춤형 AI 가이드 신청하기</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow ${nameError ? 'border-red-500' : 'border-gray-200'}`}
            />
            {nameError && <p className="mt-1 text-sm text-red-500">이름은 최소 2글자 이상 입력해주세요.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
            <input
              type="tel"
              name="contact"
              placeholder="연락처"
              value={formData.contact}
              onChange={handleChange}
              required
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow ${contactError ? 'border-red-500' : 'border-gray-200'}`}
            />
            {contactError && <p className="mt-1 text-sm text-red-500">연락처는 숫자와 - 만 허용하며 10~11자리여야 합니다.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">소속 (회사/학교/개인)</label>
            <input
              type="text"
              name="organization"
              placeholder="회사명, 학교명 혹은 '개인'이라 입력해주세요."
              value={formData.organization}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">관심 분야</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8D70]"
            >
              <option value="" disabled>관심 있는 분야를 선택해주세요</option>
              <option value="AI 리터러시 & 실무 교육 (학교/기업/개인)">AI 리터러시 & 실무 교육 (학교/기업/개인)</option>
              <option value="비즈니스 자동화 솔루션 및 개발">비즈니스 자동화 솔루션 및 개발</option>
              <option value="데이터 분석 및 인사이트 도출">데이터 분석 및 인사이트 도출</option>
              <option value="실전 MVP 제작 및 공모전 기획">실전 MVP 제작 및 공모전 기획</option>
              <option value="기타 문의">기타 문의</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
            <textarea
              name="message"
              placeholder="상담하고 싶은 내용을 자유롭게 적어주세요. (예: 자동화 툴 제작, 학교 출강 요청, 공모전 기술 검증, 1:1 코칭 등)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow resize-none"
            />
          </div>
          <div className="flex items-center pt-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 text-[#FF8D70] border-gray-300 rounded focus:ring-[#FF8D70]"
              />
              <span className="text-sm text-gray-600">개인정보 수집 및 이용에 동의합니다.</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting' || !isFormValid}
            className={`w-full text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4 ${
              status === 'submitting' || !isFormValid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FF8D70] hover:bg-[#ff7b5c] hover:shadow-lg'
            }`}
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                제출 중...
              </>
            ) : (
              '제출하기'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
