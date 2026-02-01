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
  isMobileViewport: boolean;
  viewMode: 'preview' | 'detail';
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
      <div className="flex-1 md:overflow-y-auto nav-scrollbar">
        <div className="p-4 sm:p-6 relative">
          <div
            className="absolute left-4 sm:left-6 right-4 sm:right-6 rounded-2xl bg-black/[0.06] pointer-events-none transition-opacity duration-75"
            style={{
              transform: `translateY(${activeRect.top}px)`,
              height: `${activeRect.height}px`,
              opacity: activeRect.visible ? 1 : 0,
            }}
          />

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
                    isActive ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900',
                  ].join(' ')}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <h3 className="font-semibold text-[16px] mb-1 text-gray-800">{project.title}</h3>
                  <p className={['text-sm transition-colors', isActive ? 'text-gray-600' : 'text-gray-500'].join(' ')}>
                    {project.year} · {project.category}
                  </p>
                </button>
              );
            })}
            {projects.length === 0 && (
              <div className="px-2 py-6 text-sm text-gray-500">目前這個分類還沒有專案（你之後可以再補上）。</div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
