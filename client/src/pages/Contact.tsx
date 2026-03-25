// NovaChair Contact Page
// Design: Scandinavian Minimalism + Industrial Edge

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkopwknz';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          이름_회사명: formData.name,
          연락처: formData.phone,
          이메일: formData.email,
          제목: formData.subject,
          내용: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        toast.success('문의가 전송되었습니다. 빠르게 답변 드리겠습니다!');
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      toast.error('문의 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#1C1C1E] py-16">
        <div className="container text-center">
          <p className="text-[#C4714A] text-xs tracking-[0.2em] uppercase mb-4">CONTACT</p>
          <h1 className="nova-heading text-5xl text-[#F5F0EB] mb-4">문의하기</h1>
          <p className="text-[#888] max-w-xl mx-auto">
            궁금한 점이나 기타 문의 사항을 남겨주시면 빠르게 답변해드리겠습니다.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="nova-heading text-2xl text-[#1C1C1E] mb-8">연락처 정보</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={24} className="text-[#C4714A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">주소</p>
                  <p className="text-sm text-[#888]">남양주시 진접읍 진접로 51번길 54, 유원EPS</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-[#C4714A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">대표 번호</p>
                  <p className="text-sm text-[#888]">0507-1402-6431</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-[#C4714A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">사무실 전화</p>
                  <p className="text-sm text-[#888]">031-574-6431</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-[#C4714A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">팩스</p>
                  <p className="text-sm text-[#888]">031-574-6432</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-[#C4714A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">이메일</p>
                  <a href="mailto:tmdgurl3691@gmail.com" className="text-sm text-[#C4714A] hover:underline">
                    tmdgurl3691@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#E8E0D5] border-l-4 border-[#C4714A]">
              <p className="text-xs text-[#1C1C1E]">
                <strong>* 운영시간:</strong> 평일 09:00 – 18:00<br />
                문의 접수 후 빠르게 답변 드리겠습니다.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1C1C1E] mb-2">
                  회사명 / 담당자 <span className="text-[#C4714A]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="예: 유원산 / 홍길동"
                  required
                  className="w-full px-4 py-3 border border-[#E8E0D5] rounded bg-white text-[#1C1C1E] placeholder-[#888] focus:outline-none focus:border-[#C4714A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1C1C1E] mb-2">
                  연락처 <span className="text-[#C4714A]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  required
                  className="w-full px-4 py-3 border border-[#E8E0D5] rounded bg-white text-[#1C1C1E] placeholder-[#888] focus:outline-none focus:border-[#C4714A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1C1C1E] mb-2">
                  이메일 <span className="text-[#C4714A]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-3 border border-[#E8E0D5] rounded bg-white text-[#1C1C1E] placeholder-[#888] focus:outline-none focus:border-[#C4714A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1C1C1E] mb-2">
                  문의 제목 <span className="text-[#C4714A]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력해주세요"
                  required
                  className="w-full px-4 py-3 border border-[#E8E0D5] rounded bg-white text-[#1C1C1E] placeholder-[#888] focus:outline-none focus:border-[#C4714A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1C1C1E] mb-2">
                  문의 내용 <span className="text-[#C4714A]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="구체적인 문의 내용을 적어주세요."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E8E0D5] rounded bg-white text-[#1C1C1E] placeholder-[#888] focus:outline-none focus:border-[#C4714A] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full nova-btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} />
                <span>{isSubmitting ? '전송 중...' : '문의하기'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
