'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/13F52aI-k-phsoG0hUGPwClzREVZ_IDGn/view?usp=sharing';

export const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col animate-fade-in-up">
      <div className="flex justify-center">
        <div className="w-full max-w-[700px] px-8 sm:px-11 pt-24 pb-24">

          {/* Header */}
          <div className="flex items-start justify-between mb-14">
            <div>
              <p style={{ fontSize: '20px', fontWeight: '500', color: '#1A1B1F', marginBottom: '6px' }}>
                YANG, YU-CHI
              </p>
              <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>
                Melbourne, Australia
              </p>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl transition-colors"
              style={{ width: '44px', height: '44px', color: '#9CA3AF', flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1A1B1F')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              title="Open resume"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Work Experience */}
          <section className="mb-12">
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Work Experience
            </p>

            <div className="space-y-10">

              {/* BenQ */}
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="sm:w-[160px] flex-shrink-0 mb-2 sm:mb-0">
                  <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F', marginBottom: '4px' }}>GUI Designer</p>
                  <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>BenQ Corporation</p>
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: '14px', color: '#737373', marginBottom: '8px' }}>2023 – 2025</p>

                  <ul className="space-y-2">
                    {[
                      'Designed and iterated cross-platform UI for EZWrite 6 interactive whiteboard software, adopted in schools across the US, India, and Germany.',
                      'Led interface redesign for AMS Files to improve search usability and visual consistency.',
                      'Applied a scalable design system to AMS Web, improving development efficiency by 1.5x.',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                        <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* YD Agency */}
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="sm:w-[160px] flex-shrink-0 mb-2 sm:mb-0">
                  <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F', marginBottom: '4px' }}>Web Designer</p>
                  <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>YD Digital & Creative Agency</p>
                </div>
                <div className="flex-1">
                   <p style={{ fontSize: '14px', color: '#737373', marginBottom: '8px' }}>2021 – 2023</p>

                  <ul className="space-y-2">
                    {[
                      'Delivered over 40 web design projects with 300+ pages, covering event sites, official websites, and promotional campaigns.',
                      'Collaborated with PMs and engineers to translate business needs into user-friendly designs.',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                        <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Microjet */}
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="sm:w-[160px] flex-shrink-0 mb-2 sm:mb-0">
                  <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F', marginBottom: '4px' }}>Visual Designer</p>
                  <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>Microjet Technology</p>
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: '14px', color: '#737373', marginBottom: '8px' }}>2020 – 2021</p>

                  <ul className="space-y-2">
                    {[
                      'Redesigned the UI of an air quality monitoring app, resulting in a 25% increase in user retention through improved clarity and usability.',
                      'Co-led the UI development of new wearable health monitoring devices from concept to launch.',
                      'Created cohesive visual content for e-commerce campaigns, contributing to a 15% boost in monthly sales during major promotional periods.',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                        <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <div className="border-t border-gray-200 mb-12" />

          {/* Education */}
          <section className="mb-12">
           <p style={{ fontSize: '12px', fontWeight: '600', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
             Education
           </p>

           <div className="space-y-8">

          <div className="flex gap-4">
          <div className="flex flex-col gap-1 flex-1">
          <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F' }}>National Taiwan University of Arts</p>
          <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>MFA in Visual Communication Design</p>
          <ul className="space-y-2">
                    {[
                      'Thesis: Interface Usability Study on E-book Readers',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3" style={{ fontSize: '14px', color: '#737373', lineHeight: '1.5' }}>
                        <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
          </div>
          <div className="w-[100px] flex-shrink-0">
          <p style={{ fontSize: '14px', color: '#737373' }}>2018 – 2020</p>
          </div>
          </div>

    <div className="flex gap-4">
      <div className="flex flex-col gap-1 flex-1">
        <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F' }}>National Taipei University</p>
        <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373' }}>BBA in Business Administration</p>
      </div>
      <div className="w-[100px] flex-shrink-0">
        <p style={{ fontSize: '14px', color: '#737373' }}>2014 – 2018</p>
      </div>
    </div>

  </div>
</section>

<div className="border-t border-gray-200 mb-12" />

          {/* Skills */}
          <section>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Skills
            </p>

            <div className="space-y-4">
              {[
                { label: 'Visual Design', tools: 'Illustrator, Photoshop' },
                { label: 'UI Design & Prototype', tools: 'Figma, Webflow, Framer' },
              ].map((skill) => (
                <div key={skill.label} className="flex flex-col sm:flex-row sm:gap-8">
                  <div className="sm:w-[170px] flex-shrink-0">
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#1A1B1F' }}>{skill.label}</p>
                  </div>
                  <p style={{ fontSize: '16px', color: '#737373' }}>{skill.tools}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};