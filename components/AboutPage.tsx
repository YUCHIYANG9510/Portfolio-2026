'use client';

import React from 'react';
import { Copy, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onCopyEmail, emailCopied }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col animate-fade-in-up">
      <div className="flex justify-center">
        <div className="w-full max-w-[700px] px-8 sm:px-11 pt-24 pb-24">

          {/* Name + Title */}
          <div className="mb-12">
            <div className="text-[20px] font-medium mb-3" style={{ color: '#1A1B1F' }}>
              Daisy Yang
            </div>
            <p className="text-base leading-8" style={{ color: '#737373' }}>
              Freelance Product &amp; Web Designer
            </p>
          </div>

          {/* About section */}
          <div className="mb-10">
            <h2 className="text-base font-semibold mb-4" style={{ color: '#1A1B1F' }}>About</h2>
            <div className="space-y-4 text-base leading-8" style={{ color: '#737373' }}>
              <p>
                I'm a designer with 4+ years of experience working across product, UI/UX, and web design. I care deeply about craft — the kind of attention that makes interactions feel considered and interfaces feel alive.
              </p>
              <p>
                My background spans B2B SaaS, edtech, and self-initiated products. At BenQ I designed software used in classrooms across the US, India, and Germany. Outside of client work, I build my own products from 0 to 1.
              </p>
              <p>
                I'm currently available for freelance projects and collaborations.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-10">
            <h2 className="text-base font-semibold mb-4" style={{ color: '#1A1B1F' }}>Skills</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm" style={{ color: '#737373' }}>
              {[
                'Product Design',
                'UI / UX Design',
                'Web Design',
                'Design Systems',
                'Interaction Design',
                'Prototyping',
                'Figma',
                'React / Next.js',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2 py-1">
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#D1D5DB' }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <h2 className="text-base font-semibold mb-4" style={{ color: '#1A1B1F' }}>Experience</h2>
            <div className="space-y-6">
              {[
                {
                  company: 'BenQ',
                  role: 'Product Designer',
                  period: '2023 – 2025',
                  desc: 'Led UI design for EZWrite 6 and AMS — products used by 46K+ daily users and contributing to a $12M U.S. education contract.',
                },
                {
                  company: 'Freelance',
                  role: 'Designer & Builder',
                  period: '2025 – Present',
                  desc: 'Building and designing products end-to-end. Currently shipping The Pigeon Book on iOS.',
                },
              ].map((exp) => (
                <div key={exp.company} className="flex flex-col sm:flex-row sm:gap-8">
                  <div className="sm:w-[140px] flex-shrink-0 mb-1 sm:mb-0">
                    <p className="text-sm font-medium" style={{ color: '#1A1B1F' }}>{exp.company}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{exp.period}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: '#737373' }}>{exp.role}</p>
                    <p className="text-sm leading-7" style={{ color: '#9CA3AF' }}>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-base font-semibold mb-4" style={{ color: '#1A1B1F' }}>Get in touch</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-mono bg-[#EDEDED] text-[#1A1B1F] hover:bg-[#E3E3E3] transition-colors"
              >
                <Copy size={14} />
                {emailCopied ? 'Copied!' : 'daisyyang9510@gmail.com'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
