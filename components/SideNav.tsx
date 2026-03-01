'use client';

import React, { useState } from 'react';
import { Home, User, FileText } from 'lucide-react';

type Page = 'home' | 'about';

interface SideNavProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  resumeUrl?: string;
  isProjectDetail?: boolean; // when true, no item is highlighted
}

export const SideNav: React.FC<SideNavProps> = ({
  currentPage,
  onPageChange,
  resumeUrl = '#',
  isProjectDetail = false,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      id: 'home' as const,
      label: 'Home',
      icon: Home,
      onClick: () => onPageChange('home'),
      isActive: !isProjectDetail && currentPage === 'home',
    },
    {
      id: 'about' as const,
      label: 'About',
      icon: User,
      onClick: () => onPageChange('about'),
      isActive: !isProjectDetail && currentPage === 'about',
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: FileText,
      onClick: () => window.open(resumeUrl, '_blank'),
      isActive: false,
    },
  ];

  const showDesktopLabel = (id: string) => {
    const item = navItems.find((n) => n.id === id);
    return item?.isActive || hoveredItem === id;
  };

  return (
    <>
      <style>{`
        /* ─────────────────────────────────────────
           Desktop: top-left vertical nav
        ───────────────────────────────────────── */
        .side-nav {
          position: fixed;
          left: 40px;
          top: 40px;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .side-nav-mobile-bg {
          display: none;
        }

        .side-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .side-nav-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease, box-shadow 0.15s ease;
          flex-shrink: 0;
        }

        .side-nav-icon-wrap.active {
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06);
        }

        .side-nav-icon-wrap.inactive {
          background: transparent;
        }

        .side-nav-icon-wrap.hovered-inactive {
          background: rgba(255,255,255,0.7);
          box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
        }

        .side-nav-label-desktop {
          font-size: 14px;
          font-weight: 500;
          color: #1A1B1F;
          white-space: nowrap;
          animation: label-fade-in 0.15s ease forwards;
        }

        @keyframes label-fade-in {
          from { opacity: 0; transform: translateX(-4px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .side-nav-label-mobile {
          display: none;
        }

        /* ─────────────────────────────────────────
           Mobile: bottom horizontal nav
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .side-nav-mobile-bg {
            display: block;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            height: 140px;
            pointer-events: none;
            z-index: 199;
            background: linear-gradient(
              to bottom,
              rgba(248, 248, 247, 0) 0%,
              rgba(248, 248, 247, 0.95) 55%,
              rgba(248, 248, 247, 1) 100%
            );
          }

          .side-nav {
            left: 0;
            right: 0;
            top: auto;
            bottom: 0;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: rgba(248, 248, 247, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: none;
            padding: 12px 16px max(16px, env(safe-area-inset-bottom));
            z-index: 200;
          }

          .side-nav-item {
            flex: unset;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0;
            padding: 0;
          }

          .side-nav-icon-wrap {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .side-nav-icon-wrap.active {
            background: #ffffff !important;
            box-shadow: 0 1px 4px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06) !important;
          }

          .side-nav-icon-wrap.inactive {
            background: transparent !important;
            box-shadow: none !important;
          }

          .side-nav-icon-wrap.hovered-inactive {
            background: transparent !important;
            box-shadow: none !important;
          }

          .side-nav-label-desktop {
            display: none;
          }

          .side-nav-label-mobile {
            display: none;
          }
        }
      `}</style>

      <div className="side-nav-mobile-bg" aria-hidden="true" />

      <nav className="side-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredItem === item.id;
          const isActive = item.isActive;

          let wrapClass = 'side-nav-icon-wrap ';
          if (isActive) wrapClass += 'active';
          else if (isHovered) wrapClass += 'hovered-inactive';
          else wrapClass += 'inactive';

          const iconColor = isActive ? '#1A1B1F' : '#9CA3AF';

          return (
            <button
              key={item.id}
              className="side-nav-item"
              onClick={item.onClick}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              title={item.label}
            >
              <div className={wrapClass}>
                <Icon size={18} color={iconColor} strokeWidth={isActive ? 2.2 : 1.8} />
              </div>

              {showDesktopLabel(item.id) && (
                <span className="side-nav-label-desktop">{item.label}</span>
              )}

              <span className={`side-nav-label-mobile${isActive ? ' active' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};