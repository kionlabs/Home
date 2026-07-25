import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    interest: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('개인정보 동의를 체크해 주세요.');
      return;
    }
    setStatus('submitting');
    try {
      // 실제 폼 전송 로직이 들어갈 곳입니다.
      await new Promise(res => setTimeout(res, 1500));
      setStatus('success');
    } catch (_) {
      setStatus('idle');
      alert('전송에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">상담 신청이 완료되었습니다.</h2>
          <p className="text-gray-600">빠른 시일 내에 연락드리겠습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
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
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
            <input
              type="tel"
              name="phone"
              placeholder="연락처"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">소속 (회사/학교/개인)</label>
            <input
              type="text"
              name="organization"
              placeholder="회사명, 학교명 혹은 '개인'이라 입력해주세요."
              value={formData.organization}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">관심 분야</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8D70] transition-shadow"
            >
              <option value="" disabled>관심 분야 선택</option>
              <option value="AI 교육">AI 교육</option>
              <option value="자동화 개발">자동화 개발</option>
              <option value="데이터 분석">데이터 분석</option>
              <option value="MVP 빌딩">MVP 빌딩</option>
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
            disabled={status === 'submitting'}
            className="w-full bg-[#FF8D70] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#ff7b5c] transition-all disabled:opacity-70 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                제출 중...
              </>
            ) : '지금 바로 가이드 신청하기'}
          </button>
        </form>
      </div>
    </section>
  );
}
