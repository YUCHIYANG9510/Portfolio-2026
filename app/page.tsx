'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { Copy } from 'lucide-react';
import { Project } from '@/types';
import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { ProjectList } from '@/components/ProjectList';
import { AnimatedContent } from '@/components/AnimatedContent';

const Portfolio = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'detail'>('preview');
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0, visible: false });
  const [activeRect, setActiveRect] = useState({ top: 0, height: 0, visible: false });
  const [isTransitioning, setIsTransitioning] = useState(false);

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
              <div className="w-full max-w-[1100px] px-8 py-16 sm:px-11 md:px-11 py-2 py-16">
                <div className="max-w-[700px]">
                   <div className="text-[20px] font-medium pb-3" style={{ color: '#1A1B1F' }}>Hello, I'm Daisy</div>
                  <p className="text-base leading-8 mb-5" style={{ color: '#737373' }}>
                    I'm a <span className="font-bold">freelance designer</span> focused on web and product design. <br />I care deeply about details and quality, and I like to create designs that shape how people experience the world.
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    title="Copy email to clipboard"
                  >
                    <Copy size={16} />
                    {emailCopied ? 'Copied!' : 'Email'}
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Projects Section — all projects, no tab filtering */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1100px] px-8 sm:px-11 md:px-11">
              <h2 className="text-base font-semibold text-gray-900 mb-1">Work</h2>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[1100px] flex flex-col">
              <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
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

                <main className="flex-1 md:overflow-hidden bg-gray-50 custom-scrollbar">
                  {hoverProject && viewMode === 'preview' && (
                    <div className="hidden md:block animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                      <div className="p-4 sm:p-6 md:p-8">
                        <div
                          className="mx-auto w-full md:w-[700px] transition-transform duration-200 hover:scale-[1.01]"
                          style={{ maxWidth: '700px', padding: '12px', backgroundColor: hoverProject.previewBorderColor || '#E5E7EB', borderRadius: '24px' }}
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
                    </div>
                  )}
                </main>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;