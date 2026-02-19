import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { AppleLogo } from './AppleLogo';
import { Project, SectionBlock } from '@/types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  projects: Project[];
  onProjectChange: (project: Project) => void;
}

// ─── Section renderers ────────────────────────────────────────────────────────

const MediaBlock: React.FC<{ src: string; alt?: string; title: string }> = ({ src, alt, title }) => {
  const isVideo = src?.toLowerCase().endsWith('.mp4') || src?.toLowerCase().endsWith('.webm');
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
      {isVideo ? (
        <video src={src} autoPlay loop muted playsInline className="w-full h-auto" />
      ) : (
        <img src={src} alt={alt ?? title} className="w-full h-auto" draggable="false" />
      )}
    </div>
  );
};

const GridBlock: React.FC<{ items: { src: string; alt?: string }[]; title: string }> = ({ items, title }) => (
  <div className="grid grid-cols-2 gap-4">
    {items.map((item, i) => (
      <MediaBlock key={i} src={item.src} alt={item.alt} title={title} />
    ))}
  </div>
);

const TextBlock: React.FC<{ heading?: string; subtitle?: string; body?: string }> = ({ heading, subtitle, body }) => (
  <div className="space-y-2">
    {heading && (
      <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#1A1B1F', lineHeight: '1.4' }}>{heading}</h2>
    )}
    {subtitle && (
      <p style={{ fontSize: '16px', fontWeight: 500, color: '#1A1B1F', lineHeight: '1.8' }}>{subtitle}</p>
    )}
    {body && (
      <p style={{ fontSize: '14px', fontWeight: 400, color: '#737373', lineHeight: '1.8' }} className="whitespace-pre-line">{body}</p>
    )}
  </div>
);

const MetadataBlock: React.FC<{ items: { label: string; value: string }[] }> = ({ items }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-gray-200 py-6">
    {items.map((item, i) => (
      <div key={i}>
        <p className="font-bold text-xs uppercase tracking-wider mb-1" style={{ color: '#737373' }}>{item.label}</p>
        <p className="font-medium text-sm" style={{ color: '#1A1B1F' }}>{item.value}</p>
      </div>
    ))}
  </div>
);

const TwoColumnBlock: React.FC<{
  left: { label: string; value: string }[];
  right: { heading?: string; body: string };
}> = ({ left, right }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {/* Left column */}
    <div className="flex flex-col gap-6">
      {left.map((item, i) => (
        <div key={i}>
          <p className="font-bold text-sm mb-1" style={{ color: '#1A1B1F' }}>{item.label}</p>
          <p className="text-sm leading-6 whitespace-pre-line" style={{ color: '#737373' }}>{item.value}</p>
        </div>
      ))}
    </div>

    {/* Right column */}
    <div>
      {right.heading && (
        <p className="font-bold text-sm mb-3" style={{ color: '#1A1B1F' }}>{right.heading}</p>
      )}
      <div className="text-sm leading-7 whitespace-pre-line" style={{ color: '#737373' }}>{right.body}</div>
    </div>
  </div>
);

const HighlightBlock: React.FC<{ emoji?: string; heading: string; body: string }> = ({
  emoji = '💡',
  heading,
  body,
}) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6">
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{emoji}</span>
      <p className="font-bold text-sm" style={{ color: '#1A1B1F' }}>{heading}</p>
    </div>
    <p className="text-sm leading-7 whitespace-pre-line" style={{ color: '#737373' }}>{body}</p>
  </div>
);

const renderSection = (section: SectionBlock, index: number, projectTitle: string) => {
  switch (section.type) {
    case 'media':
      return <MediaBlock key={index} src={section.src} alt={section.alt} title={projectTitle} />;
    case 'grid':
      return <GridBlock key={index} items={section.items} title={projectTitle} />;
    case 'text':
      return <TextBlock key={index} heading={section.heading} subtitle={section.subtitle} body={section.body} />;
    case 'metadata':
      return <MetadataBlock key={index} items={section.items} />;
    case 'two-column':
      return <TwoColumnBlock key={index} left={section.left} right={section.right} />;
    case 'highlight':
      return <HighlightBlock key={index} emoji={section.emoji} heading={section.heading} body={section.body} />;
    default:
      return null;
  }
};

// ─── Legacy fallback ──────────────────────────────────────────────────────────

const LegacyImages: React.FC<{ images: string[]; title: string }> = ({ images, title }) => (
  <>
    {images.map((src, i) => (
      <MediaBlock key={i} src={src} title={title} />
    ))}
  </>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  projects,
  onProjectChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleScrollToTop = () => {
    const detailView = document.querySelector('.fixed.inset-0');
    if (detailView) detailView.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => onBack(), 200);
  };

  const handleProjectChange = (newProject: Project) => {
    onProjectChange(newProject);
    const detailView = document.querySelector('.fixed.inset-0');
    if (detailView) detailView.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    setIsVisible(false);
    setIsExiting(false);
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && previousProject) handleProjectChange(previousProject);
      else if (e.key === 'ArrowRight' && nextProject) handleProjectChange(nextProject);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previousProject, nextProject]);

  return (
    <div
      className={[
        'fixed inset-0 bg-white z-50 overflow-y-auto custom-scrollbar transition-opacity duration-200',
        isVisible && !isExiting ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div className="px-4 sm:px-6 md:px-8 py-8 flex justify-center">
        <div
          className={[
            'max-w-[700px] w-full transition-all duration-300 ease-out',
            isVisible && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]',
          ].join(' ')}
        >
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-200 group"
          >
            <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-gray-300 transition-all shadow-sm group-hover:shadow-md group-hover:scale-110">
              <ArrowLeft size={16} />
            </div>
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Title + Subtitle */}
          <div className="mb-8 pb-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-base font-bold text-gray-900">{project.title}</h1>
                {project.subtitle && (
                  <p className="text-base text-gray-500 mt-1">{project.subtitle}</p>
                )}
              </div>
              {project.category && (
                <span className="shrink-0 mt-1 px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium">
                  {project.category === 'UI/UX' ? 'Design' : project.category}
                </span>
              )}
            </div>
          </div>

          {/* Flexible Sections */}
          <div className="flex flex-col">
           {project.sections.map((section, i) => (
           <div key={i} style={{ marginTop: i === 0 ? 0 : (section.gap ?? 40) }}>
           {renderSection(section, i, project.title)}
            </div>
            ))}
          </div>

          {/* iOS App Download Button */}
          {project.category === 'Side Project' && project.iosAppUrl && (
            <div className="mt-10">
              <a
                href={project.iosAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group"
              >
                <AppleLogo size={18} className="group-hover:-translate-y-0.5 transition-transform" src="/apple-icon.svg" />
                <span>Download on App Store</span>
              </a>
            </div>
          )}

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="mt-12 w-full flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-200 py-4 group"
          >
            <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-gray-300 transition-all shadow-sm group-hover:shadow-md group-hover:scale-110">
              <ArrowUp size={16} />
            </div>
            <span className="text-sm font-medium">Top</span>
          </button>

          {/* Previous / Next Navigation */}
          {(previousProject || nextProject) && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {previousProject ? (
                  <button
                    onClick={() => handleProjectChange(previousProject)}
                    className="group text-left p-5 rounded-2xl bg-transparent border border-transparent hover:border-[rgba(0,0,0,0.10)] transition-all duration-150 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <ChevronLeft size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Previous</span>
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                      {previousProject.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{previousProject.year} · {previousProject.category}</p>
                  </button>
                ) : <div />}

                {nextProject ? (
                  <button
                    onClick={() => handleProjectChange(nextProject)}
                    className="group text-left p-5 rounded-2xl bg-transparent border border-transparent hover:border-[rgba(0,0,0,0.10)] transition-all duration-150 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
                  >
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Next</span>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 group-hover:text-black transition-colors line-clamp-2 text-right">
                      {nextProject.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 text-right">{nextProject.year} · {nextProject.category}</p>
                  </button>
                ) : <div />}
              </div>
            </div>
          )}

          <div className="pb-12" />
        </div>
      </div>
    </div>
  );
};
