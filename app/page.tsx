'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { Copy } from 'lucide-react';
import { ProjectTab, Project } from '@/types';
import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { ProjectList } from '@/components/ProjectList';
import { SideProjectCard } from '@/components/SideProjectCard';
import { AnimatedContent } from '@/components/AnimatedContent';

const Portfolio = () => {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [projectTab, setProjectTab] = useState<ProjectTab>('web');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'detail'>('preview');
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0, visible: false });
  const [activeRect, setActiveRect] = useState({ top: 0, height: 0, visible: false });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });

  // Category mapping
  const categoryMap: Record<ProjectTab, string> = {
    web: 'Web Design',
    uiux: 'UI/UX',
    sideproject: 'Side Project',
  };

  const filteredProjects = useMemo(() => {
    const target = categoryMap[projectTab];
    return projects.filter((p) => p.category === target);
  }, [projectTab]);

  const hoverProject = useMemo(() => {
    return filteredProjects.find((p) => p.id === hoveredId) ?? null;
  }, [filteredProjects, hoveredId]);

  // Effects
  useEffect(() => {
    setIsTransitioning(true);
    setSelectedProject(null);
    setViewMode('preview');
    setHoveredId(null);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [projectTab]);

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

    setRect({
      top: el.offsetTop,
      height: el.offsetHeight,
      visible: true,
    });
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
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [selectedProject, hoveredId]);

  useEffect(() => {
    setHoveredId(null);
  }, []);

  // Update tab indicator position
  useLayoutEffect(() => {
    const activeTab = tabRefs.current[projectTab];
    if (activeTab) {
      setTabIndicator({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [projectTab]);

  // Initialize tab indicator on mount
  useEffect(() => {
    const activeTab = tabRefs.current[projectTab];
    if (activeTab) {
      setTabIndicator({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    // Keep in detail view
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
        
        .nav-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .nav-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .nav-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 10px;
        }
        .nav-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* Project Detail View */}
      {selectedProject && viewMode === 'detail' && (
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleBackToPreview}
          projects={filteredProjects}
          onProjectChange={handleProjectChange}
        />
      )}

      {/* Main Layout */}
      {!(selectedProject && viewMode === 'detail') && (
        <>
          <header className="bg-gray-50">
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 py-10 md:pt-14 pb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
              <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
                <div className="flex items-center gap-6">
                  <img
                    src="/avatar.jpg"
                    alt="Daisy Yang"
                    className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full object-cover bg-gray-200"
                    draggable={false}
                  />
                  <div className="leading-tight">
                    <div className="text-[16px] font-medium tracking-tight text-gray-800">Daisy Yang</div>
                    <div className="text-[16px] font-normal text-gray-500 mt-2">Digital Designer</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex md:hidden items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  title="Copy email to clipboard"
                >
                  <Copy size={16} />
                  {emailCopied ? 'Copied!' : 'Email'}
                </button>
              </div>

              <button
                onClick={handleCopyEmail}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                title="Copy email to clipboard"
              >
                <Copy size={16} />
                {emailCopied ? 'Copied!' : 'Email'}
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8 py-2 md:py-2">
                <div className="max-w-[700px]">
                  <p className="text-base text-gray-600 leading-8 mb-5">
                      I'm a <span className="font-bold">freelance designer</span> focused on web and product design. <br />I care deeply about details and quality, and I like to create designs that shape how people experience the world.               
                   </p>
                </div>
              </div>
            </div>
          </header>

          {/* Projects Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-[1100px] flex flex-col">
              {/* Sub Navigation */}
              <div className="px-4 sm:px-6 md:px-8 pt-3 md:pt-4 pb-5 md:pb-6">
                <div className="relative flex items-start justify-start gap-8 sm:gap-12 md:gap-16 flex-wrap">
                  {/* Animated underline indicator */}
                  <span
                    className="absolute bottom-0 h-0.5 bg-gray-800 transition-all duration-300 ease-out rounded-full"
                    style={{
                      left: `${tabIndicator.left}px`,
                      width: `${tabIndicator.width}px`,
                      transform: 'translateY(8px)',
                    }}
                  />
                  
                  {(
                    [
                      ['web', 'Web Design'],
                      ['uiux', 'UI/UX'],
                      ['sideproject', 'Side Project'],
                    ] as const
                  ).map(([key, label]) => {
                    const active = projectTab === key;
                    return (
                      <button
                        key={key}
                        ref={(el) => {
                          tabRefs.current[key] = el;
                        }}
                        type="button"
                        onClick={() => setProjectTab(key)}
                        className={[
                          'relative text-[16px] font-medium transition-all duration-200',
                          active ? 'text-gray-900 scale-105' : 'text-gray-500 hover:text-gray-800 hover:scale-102',
                        ].join(' ')}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* UI/UX Tab - Two Column Layout */}
              {projectTab === 'uiux' ? (
                <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
                  <ProjectList
                    projects={filteredProjects}
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

                  <main className="flex-1 md:overflow-y-auto bg-gray-50 custom-scrollbar">
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
              ) : projectTab === 'sideproject' ? (
                <div className="flex-1 px-4 sm:px-6 md:px-8 pb-12 md:pb-16">
                  <div className="mt-6 md:mt-8">
                    <div className="flex flex-wrap gap-6">
                      {filteredProjects.map((project, index) => (
                        <SideProjectCard key={project.id} project={project} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
                  <ProjectList
                    projects={filteredProjects}
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

                  <main className="flex-1 md:overflow-y-auto bg-gray-50 custom-scrollbar">
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
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;