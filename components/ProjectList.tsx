import React from 'react';
import { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
  selectedProject: Project | null;
  onProjectClick: (project: Project) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  itemRefs: React.MutableRefObject<Record<number, HTMLButtonElement | null>>;
  hoverRect: { top: number; height: number; visible: boolean };
  activeRect: { top: number; height: number; visible: boolean };
  // Keep these for mobile layout compat in parent component
  isMobileViewport?: boolean;
  viewMode?: 'preview' | 'detail';
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  selectedProject,
  onProjectClick,
  onMouseEnter,
  onMouseLeave,
  itemRefs,
  hoverRect,
  activeRect,
  isMobileViewport,
  viewMode,
}) => {
  return (
    <aside
      className={[
        'w-full md:w-[320px] flex flex-col',
        isMobileViewport && viewMode === 'detail' ? 'hidden md:flex' : '',
      ].join(' ')}
    >
      <div className="flex-1 md:overflow-hidden">
        <div className="p-4 sm:px-6 py-4 relative">
          {/* Active highlight background */}
          <div
            className="absolute left-4 sm:left-6 right-4 sm:right-6 rounded-2xl bg-black/[0.06] pointer-events-none transition-opacity duration-75"
            style={{
              transform: `translateY(${activeRect.top}px)`,
              height: `${activeRect.height}px`,
              opacity: activeRect.visible ? 1 : 0,
            }}
          />

          {/* Hover highlight border */}
          <div
            className="absolute left-4 sm:left-6 right-4 sm:right-6 rounded-2xl transition-[transform,height,opacity] duration-150 ease-out pointer-events-none"
            style={{
              transform: `translateY(${hoverRect.top}px)`,
              height: `${hoverRect.height}px`,
              opacity: hoverRect.visible ? 1 : 0,
              border: '1px solid rgba(0,0,0,0.10)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
              background: 'transparent',
            }}
          />

          {/* All projects listed — no category tabs */}
          <div className="space-y-3 relative">
            {projects.map((project, index) => {
              const isActive = selectedProject?.id === project.id;

              return (
                <button
                  key={project.id}
                  ref={(el) => {
                    itemRefs.current[project.id] = el;
                  }}
                  onClick={() => onProjectClick(project)}
                  onMouseEnter={() => onMouseEnter(project.id)}
                  onMouseLeave={onMouseLeave}
                  className={[
                    'w-full text-left p-5 rounded-2xl relative z-10',
                    'bg-transparent',
                    'transition-all duration-200',
                    'cursor-pointer',
                    'animate-fade-in-up',
                  ].join(' ')}
                  style={{ color: isActive ? '#737373' : '#737373', animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-normal text-[16px] mb-2" style={{ color: '#737373' }}>{project.title}</h3>
                  <p className="text-sm text-gray-500" style={{ color: '#737373' }}>{project.year}・{project.category}</p>
                </button>
              );
            })}

            {projects.length === 0 && (
              <div className="px-2 py-6 text-sm" style={{ color: '#737373' }}>No projects yet.</div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
