'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { Copy } from 'lucide-react';
import { Project } from '@/types';
import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { ProjectList } from '@/components/ProjectList';
import { AnimatedContent } from '@/components/AnimatedContent';
import { SideNav } from '@/components/SideNav';
import { AboutPage } from '@/components/AboutPage';

type Page = 'home' | 'about';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'detail'>('preview');
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0, visible: false });
  const [activeRect, setActiveRect] = useState({ top: 0, height: 0, visible: false });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isProjectDetail = currentPage === 'home' && viewMode === 'detail' && selectedProject !== null;

  const hoverProject = useMemo(() => {
    return projects.find((p) => p.id === hoveredId) ?? null;
  }, [hoveredId]);

  // Viewport detection
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobileViewport(mql.matches);
    apply();
    if (mql.addEventListener) mql.addEventListener('change', apply);
    else mql.addListener(apply);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', apply);
      else mql.removeListener(apply);
    };
  }, []);

  const updateRect = (
    id: number | null,
    setRect: React.Dispatch<React.SetStateAction<{ top: number; height: number; visible: boolean }>>
  ) => {
    if (!id) {
      setRect((p) => ({ ...p, visible: false }));
      return;
    }
    const el = itemRefs.current[id];
    if (!el) return;
    setRect({ top: el.offsetTop, height: el.offsetHeight, visible: true });
  };

  useLayoutEffect(() => {
    updateRect(selectedProject?.id ?? null, setActiveRect);
  }, [selectedProject]);

  useLayoutEffect(() => {
    updateRect(hoveredId, setHoverRect);
  }, [hoveredId]);

  useEffect(() => {
    const onResize = () => {
      updateRect(selectedProject?.id ?? null, setActiveRect);
      updateRect(hoveredId, setHoverRect);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [selectedProject, hoveredId]);

  // Nav page change — if in project detail and Home is tapped, go back to home list
  const handlePageChange = (page: Page) => {
    if (page === 'home') {
      // Always reset to home list view
      setSelectedProject(null);
      setHoveredId(null);
      setViewMode('preview');
    } else {
      setSelectedProject(null);
      setHoveredId(null);
      setViewMode('preview');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Event handlers
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setViewMode('detail');
    if (isMobileViewport && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleBackToPreview = () => {
    setSelectedProject(null);
    setHoveredId(null);
    setViewMode('preview');
  };

  const handleProjectChange = (newProject: Project) => {
    setSelectedProject(newProject);
    setViewMode('detail');
  };

  const handleCopyEmail = () => {
    const email = 'daisyyang9510@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 10px; height: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
        .nav-scrollbar::-webkit-scrollbar { width: 6px; }
        .nav-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .nav-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 10px; }
        .nav-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
      `}</style>

      {/* ── Side Navigation ─────────────────────────────────────── */}
      <SideNav
        currentPage={currentPage}
        onPageChange={handlePageChange}
        resumeUrl="https://your-resume-url.com"
        isProjectDetail={isProjectDetail}
      />

      {/* ── About Page ──────────────────────────────────────────── */}
      {currentPage === 'about' && (
        <AboutPage onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      )}

      {/* ── Home Page ───────────────────────────────────────────── */}
      {currentPage === 'home' && (
        <>
          {/* Project Detail View */}
          {selectedProject && viewMode === 'detail' && (
            <ProjectDetail
              project={selectedProject}
              onBack={handleBackToPreview}
              projects={projects}
              onProjectChange={handleProjectChange}
            />
          )}

          {/* Main Layout */}
          {!(selectedProject && viewMode === 'detail') && (
            <>
              <header className="bg-gray-50">
                <div className="flex justify-center">
                  <div className="w-full max-w-[700px] px-8 sm:px-11 pt-24 pb-16">
                    <div className="text-[20px] font-medium pb-3" style={{ color: '#1A1B1F' }}>Hello, I'm Daisy</div>
                    <p className="text-base leading-8 mb-5" style={{ color: '#737373' }}>
                      I'm a <span className="font-bold">freelance designer</span> focused on web and product design. <br />I care deeply about details and quality, and I like to create designs that shape how people experience the world.
                    </p>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-mono bg-[#EDEDED] text-[#1A1B1F] hover:bg-[#E3E3E3] transition-colors"
                      title="Copy email to clipboard"
                    >
                      <Copy size={16} />
                      {emailCopied ? 'Copied!' : 'Email'}
                    </button>
                  </div>
                </div>
              </header>

              {/* Work label */}
              <div className="flex justify-center">
                <div className="w-full max-w-[700px] px-8 sm:px-11">
                  <h2 className="text-base font-semibold text-gray-900 mb-1">Work</h2>
                </div>
              </div>

              {/* Projects Section */}
              <div className="flex justify-center">
                <div className="w-full max-w-[700px] flex flex-col pb-10">
                  <div className="flex-1 flex flex-col">
                    <ProjectList
                      projects={projects}
                      selectedProject={selectedProject}
                      onProjectClick={handleProjectClick}
                      onMouseEnter={setHoveredId}
                      onMouseLeave={() => setHoveredId(null)}
                      itemRefs={itemRefs}
                      hoverRect={hoverRect}
                      activeRect={activeRect}
                      isMobileViewport={isMobileViewport}
                      viewMode={viewMode}
                    />
                  </div>
                </div>
              </div>

              {/* Preview — fixed, starts from right edge of 700px container */}
              {hoverProject && viewMode === 'preview' && (
                <div
                  className="hidden md:flex items-center justify-center animate-fade-in-up pointer-events-none"
                  style={{
                    position: 'fixed',
                    top: '150px',
                    bottom: 0,
                    left: 'calc(10% + 400px)',
                    right: 0,
                    animationDuration: '0.3s',
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      padding: '12px',
                      backgroundColor: hoverProject.previewBorderColor || '#E5E7EB',
                      borderRadius: '24px',
                      maxWidth: '600px',
                      width: '90%',
                    }}
                  >
                    {hoverProject.image?.toLowerCase().endsWith('.mp4') || hoverProject.image?.toLowerCase().endsWith('.webm') ? (
                      <video
                        src={hoverProject.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto rounded-2xl block"
                      />
                    ) : (
                      <img
                        src={hoverProject.image}
                        alt={hoverProject.title}
                        className="w-full h-auto rounded-2xl block"
                        draggable="false"
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Portfolio;