import React from 'react';
import { Project } from '@/types';

interface SideProjectCardProps {
  project: Project;
  index?: number;
}

export const SideProjectCard: React.FC<SideProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[310px] block hover:opacity-80 transition-all duration-200 hover:scale-105 animate-fade-in-up"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="w-[310px]">
        {/* Top Container: 310 × 161 px */}
        <div className="h-[161px] bg-gray-100 rounded-t-2xl flex items-center justify-center border border-b-0 border-gray-200 transition-colors">
          {project.icon ? (
            <img
              src={project.icon}
              alt={project.title}
              className="w-[56px] h-[56px] object-contain"
              draggable="false"
            />
          ) : (
            <div className="w-[56px] h-[56px] rounded-xl bg-gray-300" />
          )}
        </div>

        {/* Bottom Container: 310 × 68 px */}
        <div className="h-[68px] bg-gray-100 border border-t-0 border-gray-200 rounded-b-2xl p-0 pr-4 pb-4 pl-4 flex flex-col justify-end transition-colors">
          <h3 className="text-base font-semibold text-gray-800 leading-tight">{project.title}</h3>
          <p className="text-base text-gray-500 leading-tight mt-1">{project.shortDescription}</p>
        </div>
      </div>
    </a>
  );
};
