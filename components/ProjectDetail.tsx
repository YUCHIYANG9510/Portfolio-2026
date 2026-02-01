import React from 'react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { Project } from '@/types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const handleScrollToTop = () => {
    const detailView = document.querySelector('.fixed.inset-0');
    if (detailView) {
      detailView.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto custom-scrollbar">
      <div className="px-4 sm:px-6 md:px-8 py-8 flex justify-center">
        <div className="max-w-[700px] w-full">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
          >
            <div className="p-2 rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <ArrowLeft size={16} />
            </div>
            <span className="text-sm font-medium">Back</span>
          </button>
          
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

          <div className="mb-12">
            <div className="text-gray-700 leading-8 whitespace-pre-line text-base">{project.intro}</div>
          </div>

          <div className="space-y-8">
            {project.detailImages.map((image, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
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

          <button
            onClick={handleScrollToTop}
            className="mt-8 pt-8 border-gray-200 w-full flex items-center gap-2 text-gray-500 hover:text-black transition-colors py-4"
          >
            <div className="p-2 rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <ArrowUp size={16} />
            </div>
            <span className="text-sm font-medium">Top</span>
          </button>

          <div className="pb-12" />
        </div>
      </div>
    </div>
  );
};
