import { Project } from '@/types';

export const projects: Project[] = [
  
  {
    id: 1,
    title: 'EZWrite 6 - Infinite Canvas',
    subtitle: 'Reimagining large-screen classroom interaction.',
    year: '2023-2025',
    category: 'UI/UX',
    url: 'https://example.com/app',
    role: 'Product Designer',
    date: '2023 - 2025',
    intro: 'EZWrite 6 is a cross-platform interactive whiteboard software designed for BenQ interactive displays.',
    tags: ['UI/UX'],
    bgColor: 'from-blue-600 via-blue-500 to-cyan-500',
    image: '/ezw/01_ezw.mp4',
    previewBorderColor: '#F9FAFB',
    sections: [
      // Info + Overview (two-column)
      {
        type: 'two-column',
        left: [
          { label: 'My Role', value: 'Product Designer' },
          { label: 'Team', value: 'Brian - Project Manager\nGracie - UX Designer\nRichard - VP Engineering' },
          { label: 'Brief', value: 'Improve the visual consistency and classroom usability of BenQ\'s built-in whiteboard software to strengthen hardware differentiation.' },
          { label: 'Platforms', value: 'Web, Android, iOS' },
        ],
        right: {
          heading: 'Overview',
          body: 'EZWrite 6 is a cross-platform interactive whiteboard software built into BenQ\'s large-format interactive displays, used in classrooms across the US, India, Germany, and beyond. The software sits at the core of BenQ\'s hardware value proposition — a well-designed whiteboard experience is what makes the display worth buying.\n\nI joined as the sole UI designer on a product that was already in market. Working alongside a UX designer responsible for wireframes and architecture, my scope covered visual design, design system ownership, and interaction design for large-screen environments — a context with physical constraints that most web or mobile designers never encounter.',
        },
      },
      // Highlight callout
      {
        type: 'highlight',
        emoji: '💡',
        heading: 'Highlight',
        body: 'The product\'s functional depth and classroom usability contributed to BenQ securing school procurement contracts across multiple countries — including a $12 million order from the United States covering 4,000 large-format displays.',
      },
      // Hero video
      { type: 'media', src: '/ezw/02_ezw.mp4' },
      // Business Goals
      {
        type: 'text',
        heading: 'Business Goals',
      },
      {
        type: 'text',
        icon: '/icon/01.svg',  
        iconSize: 44, 
        subtitle: 'Strengthen hardware sales through software differentiation',
        body: 'BenQ\'s primary business is hardware. EZWrite 6 is the built-in whiteboard software on BenQ\'s Interactive Flat Panels (IFPs). The goal was to make the software experience compelling enough to be a genuine reason to choose BenQ displays over competitors — not just a bundled afterthought.',
        gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/02.svg',  
        iconSize: 44, 
        subtitle: 'Improve teaching workflows across the full class lifecycle',
        body: 'The software needed to serve teachers before class (lesson preparation), during class (content delivery and student engagement), and after class (material accessibility and review). Every feature decision was evaluated against this three-stage framework.',
        gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/03.svg',  
        iconSize: 44, 
        subtitle: 'Establish a scalable, consistent product foundation',
        body: 'With a growing feature set and multiple contributors to the codebase and design files over time, the product needed a shared design language — one that could support faster iteration without accumulating visual debt.',
        gap: 16,
      },
      // The Challenge
      {
        type: 'text',
        heading: 'The Challenge',
      },
      {
        type: 'text',
        icon: '/icon/01.svg',  
        iconSize: 44, 
        subtitle: 'A fragmented design foundation',
        body: 'EZWrite 6 had been shaped by multiple designers before me. There was no unified component library, no naming conventions, and no single source of truth. Every time I needed to design a new feature, I\'d spend close to thirty minutes just tracking down existing dialogs — checking what sizes existed, which had already been built by engineering, making sure I wasn\'t creating duplicates or introducing inconsistencies. The time spent searching routinely outweighed the time spent designing.',
        gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/02.svg',  
        iconSize: 44, 
        subtitle: 'A non-standard interaction environment',
        body: 'This wasn\'t a typical screen. BenQ\'s interactive displays are wall-mounted panels — physically large, operated by teachers standing in front of a classroom. Buttons placed too high become unreachable. Toolbars that work fine on a laptop screen become obstacles when a teacher is mid-lesson, arms extended, students watching. The physical reality of the classroom shaped every layout decision in ways that standard mobile or web heuristics simply don\'t anticipate.',
        gap: 16,
      },
      // Key Features - Presentation Mode
      { type: 'text', heading: 'Key Features', body: 'Rather than expanding features indiscriminately, each feature addressed a specific classroom scenario.' },
      { type: 'text', 
        icon: '/icon/presentation-mode.svg',
        iconSize: 44,
        subtitle: 'Presentation Mode', 
        body: 'Giving structure to the teaching flow.\nEnables teachers and students to deliver content sequentially while maintaining the flexibility of a freeform whiteboard. The interface was optimized to minimize visual obstruction while preserving large touch targets for reliable interaction.',
        gap: 16,
      },
      { type: 'media', src: '/ezw/03_ezw.mp4', alt: 'Presentation Mode', gap: 16},
      { type: 'text', body: 'Balancing clarity and accessibility was key on large displays.', gap: 16},
      { type: 'media', src: '/ezw/04_ezw.jpg', alt: 'presentation mode toolbar', gap: 16},

      // Key Features - Spotlight
      { type: 'text', 
        icon: '/icon/spotlight.svg',
        iconSize: 44,
        subtitle: 'Spotlight & Revealer', 
        body: 'Guiding classroom focus through spatial interaction.\nAllows teachers to highlight or gradually reveal content, guiding student attention without interrupting teaching flow. The toolbar was repositioned vertically to improve reachability on large screens.',
        gap: 40,
      },
      { type: 'media', src: '/ezw/05_ezw.mp4', alt: 'Spotlight & Revealer', gap: 16},
      { type: 'text', body: 'Physical ergonomics directly influenced interface layout.', gap: 16},
      { type: 'media', src: '/ezw/06_ezw.jpg', alt: 'spotlight toolbar', gap: 16},

      // Other Features
      { type: 'text', 
        subtitle: 'Other Features',
        gap: 40},
      { type: 'media', src: '/ezw/07_ezw.jpg', alt: 'other features', gap: 16},
      // Results
      {
        type: 'text',
        heading: 'Results',
        body: '・Contributed to a $12M U.S. education tender\n・Strengthened BenQ\’s positioning in U.S., India, and Germany markets\n・Improved product consistency and iteration scalability through systemization',
      },
      // Key Takeaways
      {
        type: 'text',
        heading: 'Key Takeaways',
        body: 'Designing for large screens taught me that physical space changes interaction strategy entirely.\nUX is not just about interface clarity — it’s about aligning digital tools with real human movement.',
      },
    ],
  },
  {
    id: 2,
    title: 'BenQ AMS',
    subtitle: 'Account management system for schools at scale.',
    year: '2024',
    category: 'UI/UX',
    url: 'https://example.com/design-system',
    role: 'Product Designer',
    date: '2024 - 2025',
    intro: 'AMS is a web-based account management system within BenQ Services, designed for both IT administrators and teachers.',
    tags: ['UI/UX'],
    bgColor: 'from-purple-600 via-purple-500 to-pink-500',
    image: '/ams/cover_ams.jpg',
    previewBorderColor: '#F9FAFB',
    sections: [
      {
        type: 'two-column',
        left: [
          { label: 'My Role', value: 'Product Designer' },
          { label: 'Timeline', value: '2024 – 2025' },
          { label: 'Platforms', value: 'Web · Tablet · Mobile' },
        ],
        right: {
          heading: 'Overview',
          body: 'AMS is a web-based account management system within BenQ Services, designed for both IT administrators and teachers. It allows administrators to manage multiple accounts at scale, while enabling teachers to personalize their experience on interactive displays.\n\nI redesigned the latest version of AMS by introducing an existing design system and extending it across desktop, tablet, and mobile. The product reached 46,000 daily active users, and adoption of a unified design system helped double development efficiency.',
        },
      },
      {
        type: 'highlight',
        emoji: '📈',
        heading: 'Impact',
        body: '46,000 daily active users. Adopting a unified design system helped double development efficiency by improving consistency and reducing rework.',
      },
      { type: 'media', src: '/ams/01_ams.jpg' },
      { type: 'media', src: '/ams/02_ams.jpg' },
      { type: 'grid', items: [{ src: '/ams/03_ams.jpg' }, { src: '/ams/04_ams.jpg' }] },
      { type: 'media', src: '/ams/05_ams.jpg' },
      { type: 'grid', items: [{ src: '/ams/06_ams.jpg' }, { src: '/ams/07_ams.jpg' }] },
      { type: 'media', src: '/ams/08_ams.jpg' },
      { type: 'media', src: '/ams/09_ams.jpg' },
    ],
  },
  {
    id: 3,
    title: 'BenQ AMS Files',
    subtitle: 'Secure file access for shared classroom displays.',
    year: '2024',
    category: 'UI/UX',
    url: 'https://example.com/dashboard',
    role: 'Product Designer',
    date: 'Aug 2024',
    intro: 'AMS Files is a built-in file management application on BenQ interactive displays.',
    tags: ['UI/UX'],
    bgColor: 'from-green-600 via-green-500 to-teal-500',
    image: '/ams-files/cover_ams-files.jpg',
    previewBorderColor: '#F9FAFB',
    sections: [
      {
        type: 'two-column',
        left: [
          { label: 'My Role', value: 'Product Designer' },
          { label: 'Year', value: 'Aug 2024' },
          { label: 'Platform', value: 'Android · Large Display' },
        ],
        right: {
          heading: 'Overview',
          body: 'AMS Files is a built-in file management application on BenQ interactive displays, enabling secure, one-time access to personal cloud and network storage in shared environments.\n\nMy focus was on simplifying multi-source file access for classroom use—reducing cognitive load through clearer navigation, improved file search efficiency, and visual proposals aligned with the BenQ design system.',
        },
      },
      { type: 'media', src: '/ams-files/01_ams-files.jpg' },
      { type: 'media', src: '/ams-files/02_ams-files.jpg' },
      {
        type: 'grid',
        items: [{ src: '/ams-files/03_ams-files.jpg' }, { src: '/ams-files/04_ams-files.jpg' }],
      },
      { type: 'media', src: '/ams-files/05_ams-files.jpg' },
    ],
  },
  {
    id: 4,
    title: 'The Pigeon Book',
    subtitle: 'Everyday questions, answered.',
    year: '2025',
    category: 'Side Project',
    url: 'https://shorturl.at/I1YPG',
    role: 'Personal Project',
    date: 'Apr. 2025 - Present',
    intro: 'The Pigeon Book is a self-initiated product I built from 0 to 1.',
    tags: ['Side Project'],
    bgColor: 'from-green-500 to-green-600',
    image: '/pigeon-book/03_pigeon.mp4',
    iosAppUrl: 'https://shorturl.at/I1YPG',
    previewBorderColor: '#F9FAFB',
    sections: [
      {
        type: 'two-column',
        left: [
          { label: 'My Role', value: 'Product Builder (Solo)' },
          { label: 'Team', value: 'Daisy Yang - Solo Designer & Developer' },
          { label: 'Platform', value: 'iOS' },
        ],
        right: {
          heading: 'Overview',
          body: 'The Pigeon Book is a self-initiated product I built from 0 to 1, exploring how digital rituals can bring clarity and reflection into everyday decisions. Inspired by the idea of "asking the universe," the app answers life\'s small and big questions—work, relationships, the future, even what to eat.\n\nI independently designed and developed the product using a vibe-coding workflow. From concept validation to interaction design and monetization logic, I owned the entire product lifecycle end-to-end.',
        },
      },
      { type: 'media', src: '/pigeon-book/01_pigeon.jpg' },
      { type: 'media', src: '/pigeon-book/02_pigeon.jpg' },
      { type: 'media', src: '/pigeon-book/03_pigeon.mp4' },
      { type: 'media', src: '/pigeon-book/04_pigeon.jpg' },
      { type: 'media', src: '/pigeon-book/05_pigeon.mp4' },
      { type: 'media', src: '/pigeon-book/06_pigeon.jpg' },
    ],
  },

];
