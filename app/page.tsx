'use client';

import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { ExternalLink, ArrowLeft, Menu, X, Copy, ArrowUp } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  year: string;
  category: string;
  url: string;
  role: string;
  date: string;
  intro: string;
  tags: string[];
  bgColor: string;
  image: string;
  detailImages: string[];
  credits?: string;
  previewBorderColor?: string;
  icon?: string;
  shortDescription?: string;
};

type ProjectTab = 'web' | 'uiux' | 'sideproject';

const Portfolio = () => {


  // ✅ Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Email copy feedback
  const [emailCopied, setEmailCopied] = useState(false);

  // ✅ Project sub navigation (Web Design / UI/UX / Side Project)
  const [projectTab, setProjectTab] = useState<ProjectTab>('web');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'detail'>('preview');

  // ✅ Track viewport (mobile < md)
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  // ✅ hover / active effect
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const [hoverRect, setHoverRect] = useState({ top: 0, height: 0, visible: false });
  const [activeRect, setActiveRect] = useState({ top: 0, height: 0, visible: false });

  const projects: Project[] = [
    {
      id: 1,
      title: 'WE ARE 我們的除夕夜',
      year: '2023',
      category: 'Web Design',
      url: 'https://beanfun/weare',
      role: 'Web Designer',
      date: 'Dec. 2022',
      intro:
        'WE ARE 是由文總會透過跨世界共通的企劃、融合經典與創新的編排，推出跨世代共賞的除夕特別節目，演出陣容超過1500人的 WE ARE____，在「我們」之後的詞彙，可以是自由、是多元、是疑惑、是自信、是友好、也可以是勇敢。\n\n此活動主視覺傳達不同世代族群融合的意象，在網頁設計上以自由的線條作為延伸，同時首屏讓兔子跳動與人物轉圈呈現年節團聚、歡樂的氛圍，共同迎接兔年的來臨。',
      tags: ['Web Design'],
      bgColor: 'from-red-900 via-red-800 to-orange-800',
      image: '/we-are/we-are.mp4',
      detailImages: ['/we-are/01_we-are.mp4', '/we-are/02_we-are.png', '/we-are/03_we-are.jpg', '/we-are/04_we-are.png', '/we-are/05_we-are.jpg'],
      credits: 'Client | 遊戲橘子\nKey Visual | 楊士慶\nWeb Designer | Daisy Yang\nFront-End Developer | Su-Fan Liu\nProject Manager | Christine Hong\nRelease Date | Dec. 2022',
      previewBorderColor: '#F5968C',
    },
    {
      id: 2,
      title: '111 臺灣閱讀節',
      year: '2022',
      category: 'Web Design',
      url: 'https://trf2022.ncl.edu.tw',
      role: 'Web Designer',
      date: 'Nov. 2022',
      intro:
        '國家圖書館承教育部指導，自民國 102 年開始持續耕耘，建立屬於臺灣的閱讀品牌——臺灣閱讀節（TAIWAN READING FESTIVAL）。「臺灣閱讀節」在本年度將邁入第十年，運用跨域整合的方式，注入新思維新活力，開創多元的閱讀型式，拉近愛書人、作者（譯者）及出版業的距離，讓閱讀的樂趣散佈臺灣的每一個角落。\n\n此網站設計透過延伸主視覺元素，讓其內容與繪畫產生互動性，並在設計上保留繪畫的筆觸，首頁重新排列主視覺，以波浪來傳達閱讀在日常中的趣味性和自在感。色彩上以深藍、粉紅及粉橘色搭配，呈現溫馨與童趣的氛圍，讓想參與閱讀節活動的使用者能感受到在閱讀世界中的溫暖與活力。',
      tags: ['Web Design'],
      bgColor: 'from-blue-900 via-blue-800 to-teal-700',
      image: '/reading-festival/reading-festival.mp4',
      detailImages: ['/reading-festival/01_reading.mp4', '/reading-festival/02_reading.jpg', '/reading-festival/03_reading.jpg', '/reading-festival/04_reading.jpg', '/reading-festival/05_reading.jpg', '/reading-festival/06_reading.jpg'],
      credits: 'Client | 國家圖書館\nKey Visual | 徐素霞\nWeb Designer | Daisy Yang\nFront-End Developer | Sara Xiao\nProject Manager | Christine Hong\nRelease Date | Nov. 2022',
      previewBorderColor: '#B1CCE3',
    },
    {
      id: 3,
      title: '第二十屆國際版畫雙年展',
      year: '2022',
      category: 'Web Design',
      url: 'https://example.com',
      role: 'Web Designer',
      date: 'Feb. 2022',
      intro:
        '國際版畫雙年展於 1983 年開辦，是當代歷史最長久的國際版畫展之一。雙年展為國內外版畫創作者提供一寬廣的平臺，辦理宗旨在於促進國際文化交流，加強東西方藝術價值相互瞭解，並網羅世界各地版畫工作者之優秀作品。\n\n此專案目標是將舊網站改版，在設計上運用現代風格呈現版畫元素，用簡潔乾淨的設計和字體，把主角留給作品本身，色彩上用主視覺的金色搭配黑色，表現沈穩、專業與大器的感覺。',
      tags: ['Web Design'],
      bgColor: 'from-purple-900 via-purple-800 to-pink-800',
      image: '/print/01_print.mp4',
      detailImages: ['/print/02_print.jpg', '/print/03_print.jpg', '/print/04_print.jpg', '/print/05_print.jpg', '/print/06_print.jpg', '/print/07_print.jpg', '/print/08_print.jpg', '/print/09_print.jpg', '/print/10_print.jpg'],
      credits: 'Client | 台灣美術館\nKey Visual | 台灣美術館\nWeb Designer | Daisy Yang\nFront-End Developer | MEI-JIA FU\nProject Manager | Alina Wu\nRelease Date | Feb. 2022',
      previewBorderColor: '#CC9F53',
    },
    {
      id: 4,
      title: 'EZWrite 6 - Infinite Canvas',
      year: '2023-2025',
      category: 'UI/UX',
      url: 'https://example.com/app',
      role: 'Product Designer',
      date: '2023 - 2025',
      intro:
        'EZWrite 6 is a cross-platform interactive whiteboard software designed for BenQ Boards, large-format displays commonly used in classrooms. Built around an infinite canvas, the software supports teaching and collaboration before, during, and after class, enabling more flexible and engaging learning experiences.\n\nI worked on EZWrite 6 as a product designer, responsible for building the design system and designing both new and existing core features across platforms.',
      tags: ['UI/UX'],
      bgColor: 'from-blue-600 via-blue-500 to-cyan-500',
      image: '/ezw/01_ezw.mp4',
      detailImages: ['/ezw/02_ezw.mp4', '/ezw/04_ezw.jpg'],
      credits: 'UI Designer | Daisy Yang\nFront-End Developer | MEI-JIA FU\nProject Manager | Alina Wu\nRelease Date | Feb. 2022',
      previewBorderColor: '#F9FAFB',
    },
    {
      id: 5,
      title: 'BenQ AMS',
      year: '2024',
      category: 'UI/UX',
      url: 'https://example.com/design-system',
      role: 'Product Designer',
      date: '2024 - 2025',
      intro:
        'AMS is a web-based account management system within BenQ Services, designed for both IT administrators and teachers. It allows administrators to manage multiple accounts at scale, while enabling teachers to personalize their experience on interactive displays—such as importing teaching bookmarks, customizing wallpapers, configuring desktop apps, and setting automatic logout behaviors.\n\nI worked as a product designer, redesigning the latest version of AMS by introducing an existing design system and extending it across desktop, tablet, and mobile. My focus was on reducing complexity, improving cross-device usability, and making individual user pages more approachable for teachers.\nAs a result, the product reached 46,000 daily active users, and the adoption of a unified design system helped double development efficiency by improving consistency and reducing rework.',
      tags: ['UI/UX'],
      bgColor: 'from-purple-600 via-purple-500 to-pink-500',
      image: '/ams/01_ams.png',
      detailImages: ['/ams/02_ams.jpg', '/ams/03_ams.jpg', '/ams/04_ams.jpg'],
      previewBorderColor: '#F9FAFB',

    },
    {
      id: 6,
      title: 'BenQ AMS Files',
      year: '2024',
      category: 'UI/UX',
      url: 'https://example.com/dashboard',
      role: 'Product Designer',
      date: 'Aug 2024',
      intro:
        '為 SaaS 產品設計複雜的數據儀表板介面。\n\n設計考慮了不同用戶角色的需求，提供可自訂的佈局、即時數據視覺化，以及直觀的導航結構。',
      tags: ['UI/UX'],
      bgColor: 'from-green-600 via-green-500 to-teal-500',
      image: '/ams-files/01_ams-files.jpg',
      detailImages: ['/ui-ux-4.jpg'],
      previewBorderColor: '#F9FAFB',

    },
    {
      id: 7,
      title: 'The Pigeon Book',
      year: '2024',
      category: 'Side Project',
      url: 'https://shorturl.at/I1YPG',
      role: 'Product Builder',
      date: '2025',
      intro: 'An app for everyday questions answered.',
      tags: ['Side Project'],
      bgColor: 'from-green-500 to-green-600',
      image: '/pigeon/icon.svg',
      detailImages: ['/pigeon/01.jpg'],
      icon: '/pigeon-book/pigeon_icon.svg',
      shortDescription: 'Everyday questions, answered.',
    },
    {
      id: 8,
      title: 'mythings+',
      year: '2024',
      category: 'Side Project',
      url: '',
      role: 'Product Designer',
      date: 'Aug 2024',
      intro: 'An app to organize your things.',
      tags: ['Side Project'],
      bgColor: 'from-blue-500 to-blue-600',
      image: '/mythings/icon.svg',
      detailImages: ['/mythings/01.jpg'],
      icon: '/mythings/mythings_icon.svg',
      shortDescription: 'Get things organized.',
    },
    {
      id: 9,
      title: 'WE ARE 我們的除夕夜',
      year: '2023',
      category: 'Web Design',
      url: 'https://beanfun/weare',
      role: 'Web Designer',
      date: 'Dec. 2022',
      intro:
        'WE ARE 是由文總會透過跨世界共通的企劃、融合經典與創新的編排，推出跨世代共賞的除夕特別節目，演出陣容超過1500人的 WE ARE____，在「我們」之後的詞彙，可以是自由、是多元、是疑惑、是自信、是友好、也可以是勇敢。\n\n此活動主視覺傳達不同世代族群融合的意象，在網頁設計上以自由的線條作為延伸，同時首屏讓兔子跳動與人物轉圈呈現年節團聚、歡樂的氛圍，共同迎接兔年的來臨。',
      tags: ['Web Design'],
      bgColor: 'from-red-900 via-red-800 to-orange-800',
      image: '/we-are/we-are.mp4',
      detailImages: ['/we-are/01_we-are.mp4', '/we-are/02_we-are.png', '/we-are/03_we-are.jpg', '/we-are/04_we-are.png', '/we-are/05_we-are.jpg'],
      credits: 'Client | 遊戲橘子\nKey Visual | 楊士慶\nWeb Designer | Daisy Yang\nFront-End Developer | Su-Fan Liu\nProject Manager | Christine Hong\nRelease Date | Dec. 2022',
      previewBorderColor: '#F5968C',
    },
  ];

  const categoryMap: Record<ProjectTab, string> = {
    web: 'Web Design',
    uiux: 'UI/UX',
    sideproject: 'Side Project',
  };

  const filteredProjects = useMemo(() => {
    const target = categoryMap[projectTab];
    return projects.filter((p) => p.category === target);
  }, [projects, projectTab]);

  // project currently hovered (desktop preview)
  const hoverProject = useMemo(() => {
    return filteredProjects.find((p) => p.id === hoveredId) ?? null;
  }, [filteredProjects, hoveredId]);

  useEffect(() => {
    // Always start with NO selection. Preview appears on hover.
    setSelectedProject(null);
    setViewMode('preview');
    setHoveredId(null);
  }, [projectTab]);

  useEffect(() => {
    // ✅ keep isMobileViewport in sync
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobileViewport(mql.matches);
    apply();

    // eslint-disable-next-line deprecation/deprecation
    if (mql.addEventListener) mql.addEventListener('change', apply);
    // eslint-disable-next-line deprecation/deprecation
    else mql.addListener(apply);

    return () => {
      // eslint-disable-next-line deprecation/deprecation
      if (mql.removeEventListener) mql.removeEventListener('change', apply);
      // eslint-disable-next-line deprecation/deprecation
      else mql.removeListener(apply);
    };
  }, []);

  // removed desktop auto-selection: previews are hover-driven now

  // (removed isMobile helper; use isMobileViewport state instead)

  const handleProjectClick = (project: Project) => {
    // Click -> open detail immediately on all viewports
    setSelectedProject(project);
    setViewMode('detail');

    if (isMobileViewport && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  // removed handleViewDetail (buttons removed); keep handler logic inline where needed
  const handleBackToPreview = () => {
    // Clear selection and return to preview on all viewports
    setSelectedProject(null);
    setHoveredId(null);
    setViewMode('preview');
  };

  const handleCopyEmail = () => {
    const email = 'daisyyang9510@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

    const updateRect = (
    id: number | null,
    setRect: React.Dispatch<
      React.SetStateAction<{
        top: number;
        height: number;
        visible: boolean;
      }>
    >
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

      // ✅ when entering desktop, close mobile menu
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [selectedProject, hoveredId]);

  useEffect(() => {
    setHoveredId(null);
  }, []);

  // ✅ lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }

        .nav-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .nav-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .nav-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .nav-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>

      {/* Full page detail view */}
      {selectedProject && viewMode === 'detail' && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto custom-scrollbar">
          <div className="px-4 sm:px-6 md:px-8 py-8 flex justify-center">
            <div className="max-w-[700px] w-full">
              <button
                onClick={handleBackToPreview}
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-full bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                  <ArrowLeft size={16} />
                </div>
                <span className="text-sm font-medium">Back</span>
              </button>
              <div className="mb-12">
                <h1 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900">{selectedProject.title}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-sm border-y border-gray-200 py-6">
                  <div>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-1">Role</p>
                    <p className="font-medium text-base text-gray-900">{selectedProject.role}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-1">Year</p>
                    <p className="font-medium text-base text-gray-900">{selectedProject.date}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="text-gray-700 leading-8 whitespace-pre-line text-base">{selectedProject.intro}</div>
              </div>

              <div className="space-y-8">
                {selectedProject.detailImages.map((image, index) => (
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
                        alt={`${selectedProject.title} detail ${index + 1}`}
                        className="w-full h-auto"
                        draggable="false"
                      />
                    )}
                  </div>
                ))}
              </div>

              {selectedProject.category === 'Web Design' && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Credits</h3>
                    <div className="text-sm text-gray-700 space-y-1">
                      {selectedProject.credits ? (
                        selectedProject.credits.split('\n').map((line, idx) => (
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
                onClick={() => {
                  const detailView = document.querySelector('.fixed.inset-0');
                  if (detailView) {
                    detailView.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
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
      )}

      {/* Main layout - hidden when viewing detail */}
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

            {/* ✅ Contact button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex md:hidden items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              title="Copy email to clipboard"
            >
              <Copy size={16} />
              {emailCopied ? 'Copied!' : 'Email'}
            </button>
          </div>

          {/* ✅ Contact button on the right (desktop) */}
          <button
            onClick={handleCopyEmail}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            title="Copy email to clipboard"
          >
            <Copy size={16} />
            {emailCopied ? 'Copied!' : 'Email'}
          </button>
          </div>
        </header>

        {/* ✅ About and Connect sections */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1100px] px-4 sm:px-6 md:px-8 py-2 md:py-2">
            <div className="max-w-[700px]">
              <p className="text-base text-gray-600 leading-8 mb-4">
                I'm currently a founding design engineer at <span className="font-bold">Interfere</span>, where we're building the self-healing layer of the internet. I care deeply about craft and quality, and I like to make people feel something through my work.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Projects section */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1100px] flex flex-col">
            {/* ✅ Sub Navigation */}
            <div className="px-4 sm:px-6 md:px-8 pt-3 md:pt-4 pb-5 md:pb-6">
              <div className="flex items-start justify-start gap-8 sm:gap-12 md:gap-16 flex-wrap">
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
                      type="button"
                      onClick={() => setProjectTab(key)}
                      className={[
                        'relative text-[16px] font-medium transition-colors',
                        active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800',
                      ].join(' ')}
                    >
                      {label}
                      {active && <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 h-1 w-1 rounded-full bg-gray-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {projectTab === 'uiux' ? (
              <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
                <aside
                  className={[
                    'w-full md:w-[320px] flex flex-col',
                    // ✅ Mobile: hide project list when viewing detail
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
                        {filteredProjects.map((project) => {
                          const isActive = selectedProject?.id === project.id;

                          return (
                            <button
                              key={project.id}
                              ref={(el) => {
                                itemRefs.current[project.id] = el;
                              }}
                              onClick={() => handleProjectClick(project)}
                              onMouseEnter={() => setHoveredId(project.id)}
                              onMouseLeave={() => setHoveredId(null)}
                              className={[
                                'w-full text-left p-5 rounded-2xl relative z-10',
                                'bg-transparent',
                                'transition-colors',
                                'cursor-pointer',
                                isActive ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900',
                              ].join(' ')}
                            >
                              <h3 className="font-semibold text-[16px] mb-1 text-gray-800">{project.title}</h3>
                              <p className={['text-[14px] transition-colors', isActive ? 'text-gray-600' : 'text-gray-500'].join(' ')}>
                                {project.year} · {project.category}
                              </p>
                            </button>
                          );
                        })}
                        {filteredProjects.length === 0 && (
                          <div className="px-2 py-6 text-sm text-gray-500">目前這個分類還沒有專案（你之後可以再補上）。</div>
                        )}
                      </div>
                    </div>
                  </div>
                </aside>

                <main className="flex-1 md:overflow-y-auto bg-gray-50 custom-scrollbar">
                  {/* Preview on desktop: show raw media for hovered project only */}
                  {hoverProject && viewMode === 'preview' && (
                    <div className="hidden md:block">
                      <div className="p-4 sm:p-6 md:p-8">
                        <div className="mx-auto w-full md:w-[700px]" style={{ maxWidth: '700px', padding: '20px', backgroundColor: hoverProject.previewBorderColor || '#E5E7EB', borderRadius: '16px' }}>
                          {hoverProject.image?.toLowerCase().endsWith('.mp4') ||
                          hoverProject.image?.toLowerCase().endsWith('.webm') ? (
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
                    {filteredProjects.map((project) => (
                      <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[310px] block hover:opacity-80 transition-opacity"
                      >
                        <div className="w-[310px]">
                          {/* Top Container: 310 × 161 px */}
                          <div className="h-[161px] bg-gray-100 rounded-t-2xl flex items-center justify-center border border-b-0 border-gray-200">
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
                          <div className="h-[68px] bg-gray-100 border border-t-0 border-gray-200 rounded-b-2xl p-0 pr-4 pb-4 pl-4 flex flex-col justify-end">
                            <h3 className="text-base font-semibold text-gray-800 leading-tight">{project.title}</h3>
                            <p className="text-base text-gray-500 leading-tight mt-1">{project.shortDescription}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col md:flex-row md:overflow-hidden">
                <aside
                  className={[
                    'w-full md:w-[320px] flex flex-col',
                    // ✅ Mobile: hide project list when viewing detail
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
                        {filteredProjects.map((project) => {
                          const isActive = selectedProject?.id === project.id;

                          return (
                            <button
                              key={project.id}
                              ref={(el) => {
                                itemRefs.current[project.id] = el;
                              }}
                              onClick={() => handleProjectClick(project)}
                              onMouseEnter={() => setHoveredId(project.id)}
                              onMouseLeave={() => setHoveredId(null)}
                              className={[
                                'w-full text-left p-5 rounded-2xl relative z-10',
                                'bg-transparent',
                                'transition-colors',
                                'cursor-pointer',
                                isActive ? 'text-gray-900' : 'text-gray-800 hover:text-gray-900',
                              ].join(' ')}
                            >
                              <h3 className="font-semibold text-[16px] mb-1 text-gray-800">{project.title}</h3>
                              <p className={['text-sm transition-colors', isActive ? 'text-gray-600' : 'text-gray-500'].join(' ')}>
                                {project.year} · {project.category}
                              </p>
                            </button>
                          );
                        })}
                        {filteredProjects.length === 0 && (
                          <div className="px-2 py-6 text-sm text-gray-500">目前這個分類還沒有專案（你之後可以再補上）。</div>
                        )}
                      </div>
                    </div>
                  </div>
                </aside>

                <main className="flex-1 md:overflow-y-auto bg-gray-50 custom-scrollbar">
                  {/* Preview on desktop: show raw media for hovered project only */}
                  {hoverProject && viewMode === 'preview' && (
                    <div className="hidden md:block">
                      <div className="p-4 sm:p-6 md:p-8">
                        <div className="mx-auto w-full md:w-[700px]" style={{ maxWidth: '700px', padding: '12px', backgroundColor: hoverProject.previewBorderColor || '#E5E7EB', borderRadius: '24px' }}>
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
