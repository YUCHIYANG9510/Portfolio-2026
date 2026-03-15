'use client';

import React from 'react';

interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col animate-fade-in-up">
      <div className="flex justify-center">
        <div className="w-full max-w-[700px] px-8 sm:px-11 pt-24 pb-24">

          {/* Two-column: Photo + About Text */}
          <div className="flex flex-col sm:flex-row gap-10">

            {/* Left: Photo */}
            <div className="flex-shrink-0">
              <div
                className="overflow-hidden rounded-sm bg-gray-200"
                style={{ width: '286px', height: '348px' }}
              >
                <img
                  src="/daisy-photo.jpg"
                  alt="Daisy Yang"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-start space-y-6">

              <div>
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#1A1B1F', marginBottom: '12px' }}>
                  Hello, I'm Daisy Yang
                </p>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#1A1B1F', marginBottom: '12px' }}>
                  My path into design wasn't a straight line.
                </p>
                <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373', lineHeight: '1.8' }}>
                  I started with a business degree before discovering my passion for design and later pursuing a master’s in the field. It was there that I encountered human-centred design — the idea that design should start with people, not assumptions.
                </p>
              </div>

              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#1A1B1F', marginBottom: '12px' }}>
                  I care about asking better questions.
                </p>
                <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373', lineHeight: '1.8' }}>
                  I believe the most interesting space in any problem isn't the obvious yes or no — it's the grey area in between. The assumptions we never think to challenge. The "that's just how it is" moments that are actually worth questioning. That's where I think the most meaningful design happens.
                </p>
              </div>

              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#1A1B1F', marginBottom: '12px' }}>
                  Outside of design,
                </p>
                <p style={{ fontSize: '14px', fontWeight: '400', color: '#737373', lineHeight: '1.8' }}>
                  I enjoy reading, walking, listening to music, and playing guitar. Currently based in Australia, exploring what it means to bring my craft somewhere new.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};