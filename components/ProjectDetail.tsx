import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  projects: Project[];
  onProjectChange: (project: Project) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, projects, onProjectChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Find current project index and adjacent projects
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Handler functions
  const handleScrollToTop = () => {
    const detailView = document.querySelector('.fixed.inset-0');
    if (detailView) {
      detailView.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack();
    }, 200); // Faster exit
  };

  const handleProjectChange = (newProject: Project) => {
    onProjectChange(newProject);
    // Scroll to top when changing projects
    const detailView = document.querySelector('.fixed.inset-0');
    if (detailView) {
      detailView.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  useEffect(() => {
    // Reset states when project changes
    setIsVisible(false);
    setIsExiting(false);
    
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, [project.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && previousProject) {
        handleProjectChange(previousProject);
      } else if (e.key === 'ArrowRight' && nextProject) {
        handleProjectChange(nextProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previousProject, nextProject]);

  return (
    <div 
      className={[
        'fixed inset-0 bg-white z-50 overflow-y-auto custom-scrollbar transition-opacity duration-200',
        isVisible && !isExiting ? 'opacity-100' : 'opacity-0'
      ].join(' ')}
    >
      <div className="px-4 sm:px-6 md:px-8 py-8 flex justify-center">
        <div 
          className={[
            'max-w-[700px] w-full transition-all duration-300 ease-out',
            isVisible && !isExiting 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-[0.98]'
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
          
          {/* Title Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900">{project.title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-sm border-y border-gray-200 py-6">
              <div>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-1">Role</p>
                <p className="font-medium text-base text-gray-900">{project.role}</p>
              </div>
              <div>
                <p className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-1">Year</p>
                <p className="font-medium text-base text-gray-900">{project.date}</p>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="mb-12">
            <div className="text-gray-700 leading-8 whitespace-pre-line text-base">{project.intro}</div>
          </div>

          {/* Detail Images */}
          <div className="space-y-8">
            {project.detailImages.map((image, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"
              >
                {image?.toLowerCase().endsWith('.mp4') || image?.toLowerCase().endsWith('.webm') ? (
                  <video
                    src={image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-auto"
                    draggable="false"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Credits Section */}
          {project.category === 'Web Design' && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Credits</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  {project.credits ? (
                    project.credits.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))
                  ) : (
                    <>     
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="mt-8 pt-8 border-gray-200 w-full flex items-center gap-2 text-gray-500 hover:text-black transition-all duration-200 py-4 group"
          >
            <div className="p-2 rounded-full bg-white border border-gray-200 group-hover:border-gray-300 transition-all shadow-sm group-hover:shadow-md group-hover:scale-110">
              <ArrowUp size={16} />
            </div>
            <span className="text-sm font-medium">Top</span>
          </button>

          {/* Previous/Next Project Navigation */}
          {(previousProject || nextProject) && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {/* Previous Project */}
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
                    <p className="text-xs text-gray-500 mt-1">
                      {previousProject.year} · {previousProject.category}
                    </p>
                  </button>
                ) : (
                  <div />
                )}

                {/* Next Project */}
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
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {nextProject.year} · {nextProject.category}
                    </p>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}

          <div className="pb-12" />
        </div>
      </div>
    </div>
  );
};