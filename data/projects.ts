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
          { label: 'My Role', value: 'UI Designer' },
          { label: 'Team', value: 'Brian Hsieh - Project Manager\nGracie Hsieh - UX Designer\nDaisy Yang - UI Designer\nRichard Ting - VP Engineering' },
          { label: 'Platforms', value: 'Web, Android, iOS' },
        ],
        right: {
          heading: 'Overview',
          body: 'EZWrite 6 is a cross-platform interactive whiteboard software built into BenQ\'s large-format displays, designed to enhance classroom teaching experiences through an infinite canvas — before, during, and after class.\n\nThe software is central to BenQ\'s hardware value proposition: a compelling whiteboard experience is what makes the display worth buying. My role was to improve visual consistency, own the design system, and iterate on features — all while designing for the unique physical constraints of large-screen environments that most designers never encounter.'},
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
    subtitle: 'Account Management System — B2B SaaS Platform Redesign',
    year: '2024',
    category: 'UI/UX',
    url: 'https://example.com/design-system',
    role: 'UI Designer',
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
          { label: 'My Role', value: 'UI Designer' },
          { label: 'Team', value: 'Barry Ho - Project Manager\nSammy Hong - UX Designer\nDaisy Yang - UI Designer\nWilson Chang - Front-end Engineer\nBernie Chen - Back-end Engineer' },
          { label: 'Platform', value: 'Web' },
        ],
        right: {
          heading: 'Overview',
          body: 'AMS Web is a role-based account management platform for BenQ Services, used by IT administrators and teachers to manage devices, accounts, and personalized settings across IFP displays.\n\nThe platform needed a full redesign — the interface had grown complex, lacked mobile support, and had no consistent design foundation. My role was to lead this overhaul, introducing a unified design system and restructuring the architecture to improve usability across devices and scale with the product long-term.',
        },
      },
      {
        type: 'highlight',
        emoji: '💡',
        heading: 'Highlight',
        body: 'The redesigned platform scaled to 46,000 daily active users and reduced development time by over 50% through the introduction of a systematic component library.',
      },
      { type: 'media', src: '/ams/cover_ams.jpg' },

      // The Challenge
      {
        type: 'text',
        heading: 'Challenge',
      },
      {
        type: 'text', 
        subtitle: 'The previous version of AMS Web had grown functionally but lacked structural clarity.',
        body: '1. Configuration settings were scattered and difficult to navigate\n2. No mobile experience existed\n3. Visual inconsistency across BenQ software products',
        gap: 16,
      },

       // Design Approach
      {
        type: 'text',
        heading: 'Design Approach',
      },
      {
        type: 'text',
        icon: '/icon/01.svg',  
        iconSize: 44, 
        subtitle: 'Reducing Complexity',
        body: 'Restructured the information architecture by reorganizing configuration settings into clear, categorized modules aligned with user intent rather than system structure.',
        gap: 16,
      },
      {
        type: 'media', src: '/ams/01_ams.jpg', alt: 'Information Architecture Redesign', gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/02.svg',  
        iconSize: 44, 
        subtitle: 'Mobile Friendly',
        body: 'Designed a responsive experience across desktop, tablet, and mobile — with device-appropriate layouts for each context.',
        gap: 32,
      },
      {
        type: 'media', src: '/ams/02_ams.jpg', alt: 'Mobile Experience', gap: 16,
      },
      {
        type: 'text',
        subtitle: 'Redefined task priorities by device context.',
        body: '・Desktop supports editing-heavy workflows\n・Mobile prioritizes viewing and quick verification',
        gap: 16,
      },
      {
        type: 'media', src: '/ams/03_ams.jpg', alt: 'Mobile datetable', gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/03.svg',  
        iconSize: 44, 
        subtitle: 'Experience Consistency',
        body: 'Introduced and expanded an existing design system to unify visual language, interactions, and components across the entire platform.',
        gap: 32,
      },
      {
        type: 'media', src: '/ams/04_ams.jpg', alt: 'web app design system', gap: 16,
      },
      
      // Results
      {
        type: 'text',
        heading: 'Results',
        body: '・46,000 global daily users (IT & teachers)\n・2x faster development through component reuse\n・Measurably improved visual consistency across the product',
      },
      {
        type: 'media', src: '/ams/05_ams.jpg', alt: 'final design', gap: 16,
      },
      {
        type: 'media', src: '/ams/06_ams.jpg', alt: 'final design', gap: 16,
      },
      {
        type: 'media', src: '/ams/07_ams.jpg', alt: 'final design', gap: 16,
      },
      {
        type: 'media', src: '/ams/08_ams.jpg', alt: 'final design', gap: 16,
      },
    ],
  },
  {
    id: 3,
    title: 'BenQ AMS Files',
    subtitle: 'Redesigning File Access for the Classroom',
    year: '2024',
    category: 'UI/UX',
    url: 'https://example.com/dashboard',
    role: 'UI Designer',
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
          { label: 'My Role', value: 'UI Designer' },
          { label: 'Team', value: 'Barry Ho - Project Manager\nSammy Hong - UX Designer\nDaisy Yang - UI Designer\nHoward - Engineer' },
          { label: 'Platform', value: 'Android' },
        ],
        right: {
          heading: 'Overview',
          body: 'AMS Files is a built-in file management app for BenQ interactive displays, enabling teachers to securely access personal cloud storage on shared classroom devices — without leaving files behind.\n\nMy role was to lead the redesign, focusing on simplifying the experience and establishing visual consistency through an expanded design system.',
        },
      },
     {
        type: 'highlight',
        emoji: '💡',
        heading: 'Highlight',
        body: 'A cleaner interface made file access faster and less effortful for teachers. Expanding the design system unified the product\'s visual language — and doubled development efficiency.',
      },
      { type: 'media', src: '/ams-files/01_ams-files.jpg' },

      // Design Decisions
      {
        type: 'text',
        heading: 'Design Decisions',
      },
      
      {
        type: 'text',
        icon: '/icon/01.svg',  
        iconSize: 44, 
        subtitle: 'Experience — Optimizing Teacher Workflows',
        gap: 16,
      },

      // Search Files
      {
        type: 'text',
        icon: '/icon/search-files.svg',  
        iconSize: 44, 
        subtitle: 'Searching Files',
        body: 'The previous search experience was easy to overlook — the entry point wasn\'t prominent, and files showed too little information to identify at a glance.',
        gap: 16,
      },
      
      { type: 'media', src: '/ams-files/02_ams-files.jpg', gap: 16 },

      {
        type: 'text',
        body: 'In the redesign, search was elevated in the hierarchy, filters were introduced to narrow results quickly, and thumbnail previews were added to make files immediately recognizable.',
        gap: 16,
      },

      { type: 'media', src: '/ams-files/03_ams-files.jpg', gap: 16 },

      {
        type: 'text',
        body: 'Introduced icon-based visual categorization for file types, making content scannable at a glance.',
        gap: 16,
      }, 

      {
      type: 'grid',
      items: [
        { src: '/ams-files/04_ams-files.jpg', alt: 'File Type Icons' },
        { src: '/ams-files/05_ams-files.jpg', alt: 'File Type Icons' }
      ],
      gap: 16,
      },

      // Manage Files
      {
        type: 'text',
        icon: '/icon/manage-files.svg',  
        iconSize: 44, 
        subtitle: 'Managing Files',
        body: 'The legacy navigation structure didn\'t follow conventions familiar from mainstream file management platforms, and key information was often hidden.',
        gap: 32,
      },
      {
        type: 'text',
        body: 'The redesign restructured the source panel in the sidebar, added visual storage indicators, and introduced starred file shortcuts — making everyday file management faster and more intuitive.',
        gap: 4,
      },
      
      {
        type: 'media', src: '/ams-files/06_ams-files.jpg', alt: 'Manage files', gap: 16,
      },
      
      // Edit Files
      {
        type: 'text',
        icon: '/icon/edit-files.svg',  
        iconSize: 44, 
        subtitle: 'Editing Files',
        body: 'Advanced editing actions were tucked away on the right side of the screen — fine for a laptop, but difficult to reach on a large interactive display.',
        gap: 32,
      },
      
      {
        type: 'media', src: '/ams-files/07_ams-files.jpg', alt: 'Edit files', gap: 16,
      },

      {
        type: 'text',
        body: 'The redesign relocated these actions to a centered horizontal layout, better suited for large-screen interaction.',
        gap: 16,
      }, 

      {
        type: 'media', src: '/ams-files/08_ams-files.jpg', alt: 'Edit files', gap: 16,
      },

      {
        type: 'text',
        icon: '/icon/02.svg',  
        iconSize: 44, 
        subtitle: 'Consistency — Cross-platform Visual Alignment',
        body: 'As BenQ\'s web apps gradually adopted a new Web App Design System, the IFP software began to feel visually disconnected from the broader product ecosystem. AMS Files became the first IFP app to align with the new design system — closing the visual gap between hardware and web experiences, and setting a precedent for future IFP redesigns.',
        gap: 32,
      },

      {
        type: 'media', src: '/ams-files/09_ams-files.jpg', alt: 'Edit files', gap: 16,
      },

      {
        type: 'media', src: '/ams-files/10_ams-files.jpg', alt: 'Edit files', gap: 16,
      },
      ],
    },
  {
    id: 5,
    title: 'MyThings App',
    subtitle: 'Everything matters.',
    year: '2026',
    category: 'Side Project',
    url: 'https://apps.apple.com/au/app/mythings-personal-inventory/id6752805842',
    role: 'Product Builder (Solo)',
    date: '2026 - Present',
    intro: 'MyThings is a self-initiated iOS app that turns physical belongings into a clean, searchable digital collection.',
    tags: ['Side Project'],
    bgColor: 'from-gray-100 to-gray-200',
    image: '/mythings/03_mythings.mp4',
    icon: '/mythings/mythings_icon.svg',
    iosAppUrl: 'https://apps.apple.com/au/app/mythings-personal-inventory/id6752805842',
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
          body: 'MyThings is a self-initiated iOS app that turns physical belongings into a clean, searchable digital collection. I designed and built it end-to-end, from capturing items with automatic background removal to organizing them across categories and flexible views.',
        },
      },
      {
        type: 'app-store-button',
        href: 'https://apps.apple.com/au/app/mythings-personal-inventory/id6752805842',
        svgSrc: '/icon/app-store-download-btn.svg',
        svgWidth: 120,
        svgHeight: 40,
        gap: 6,
      },
      {
        type: 'media',
        src: '/mythings/01_mythings.jpg',
        alt: 'MyThings App',
      },
      {
        type: 'text',
        heading: 'Features',
      },
      {
        type: 'media',
        src: '/mythings/02_mythings.jpg',
        alt: 'MyThings App features',
        gap: 16,
      },
      {
        type: 'text',
        icon: '/icon/01.svg',
        iconSize: 44,
        subtitle: 'Get Things Organized',
        body: 'Everything has its place. Create custom categories and keep useful details like brand, price, and purchase date together — so what you own is always easy to find.',
      },
      {
        type: 'media',
        src: '/mythings/03_mythings.mp4',
        alt: 'Organize items in MyThings App',
        gap: 12,
      },
      {
        type: 'text',
        icon: '/icon/02.svg',
        iconSize: 44,
        subtitle: 'Upload with Ease',
        body: 'Snap it and save it. Add items with a photo and automatic background removal, turning everyday belongings into a clean, visual collection in just a few steps.',
      },
      {
        type: 'media',
        src: '/mythings/04_mythings.mp4',
        alt: 'Upload an item in MyThings App',
        gap: 12,
      },
      {
        type: 'text',
        icon: '/icon/03.svg',
        iconSize: 44,
        subtitle: 'View Beyond Order',
        body: 'Your things, your view. Switch between grid, list, and canvas layouts to browse your collection your way — from neatly organized to freely explored.',
      },
      {
        type: 'media',
        src: '/mythings/05_mythings.mp4',
        alt: 'MyThings App collection views',
        gap: 12,
      },
    ],
  },
  {
    id: 4,
    title: 'The Pigeon Book',
    subtitle: 'Your daily guide to life\'s questions.',
    year: '2025',
    category: 'Side Project',
    url: 'https://apps.apple.com/au/app/%E8%A7%A3%E7%AD%94%E4%B9%8B%E6%9B%B8-%E9%B4%BF%E5%AD%90%E6%9C%89%E5%95%8F%E5%BF%85%E7%AD%94/id6748939885',
    role: 'Personal Project',
    date: 'Apr. 2025 - Present',
    intro: 'The Pigeon Book is a self-initiated product I built from 0 to 1.',
    tags: ['Side Project'],
    bgColor: 'from-green-500 to-green-600',
    image: '/pigeon-book/08_pigeon.mp4',
    iosAppUrl: 'https://apps.apple.com/au/app/%E8%A7%A3%E7%AD%94%E4%B9%8B%E6%9B%B8-%E9%B4%BF%E5%AD%90%E6%9C%89%E5%95%8F%E5%BF%85%E7%AD%94/id6748939885',
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
          body: 'The Pigeon Book is a self-initiated iOS app, live on the App Store. I designed and built it end-to-end — from the pigeon character to the UI to the App Store listing. Part creative outlet, part daily companion, part excuse to make something purely for the joy of it.',
        },
      },
      {
        type: 'app-store-button',
        href: 'https://apps.apple.com/au/app/%E8%A7%A3%E7%AD%94%E4%B9%8B%E6%9B%B8-%E9%B4%BF%E5%AD%90%E6%9C%89%E5%95%8F%E5%BF%85%E7%AD%94/id6748939885',
        svgSrc: '/icon/app-store-download-btn.svg', // replace with your SVG path
        svgWidth: 120,
        svgHeight: 40,
        gap: 6,
      },
      { type: 'media', src: '/pigeon-book/01_pigeon.jpg' },
      // Why I Built This App
      {
        type: 'text',
        heading: 'Why I Built This App',
        body: 'Some questions don\'t have serious answers — and that\'s okay. I built this app as a creative outlet: a place to carry a little lightness, have fun, and hopefully make someone else smile. The pigeon character came from wanting to create something that felt personal, a little absurd, and genuinely mine.',
      },

      // Features
      {
        type: 'text',
        heading: 'Features',
      },
      { type: 'media', src: '/pigeon-book/02_pigeon.jpg', gap: 16 },

      // Ask the Pigeon
      {
        type: 'text',
        icon: '/icon/01.svg',  
        iconSize: 44, 
        subtitle: 'Ask the Pigeon',
        body: 'Got a problem? The pigeon has an answer. Ask any question about work, love, the future, lunch, or what to drink — and the universe will respond accordingly.',
        gap: 32,
      },
      { type: 'media', src: '/pigeon-book/03_pigeon.mp4', gap: 12 },

      // Daily Idiom
      {
        type: 'text',
        icon: '/icon/02.svg',  
        iconSize: 44, 
        subtitle: 'Daily Idiom',
        body: 'One Chinese idiom a day, delivered with a little wisdom and a lot of character. A small habit to accumulate knowledge — one perfectly distilled phrase at a time.',
        gap: 32,
      },
      {
      type: 'grid',
      items: [
        { src: '/pigeon-book/04_pigeon.jpg', alt: 'Daily Idiom' },
        { src: '/pigeon-book/05_pigeon.jpg', alt: 'Daily Idiom' }
      ],
      gap: 16,
      },

      // 365-Day Countdown
      {
        type: 'text',
        icon: '/icon/03.svg',  
        iconSize: 44, 
        subtitle: '365-Day Countdown',
        body: 'A calendar that counts down the days of the year — a quiet daily reminder that today was once tomorrow, and tomorrow is worth looking forward to.',
        gap: 32,
      },
      {
        type: 'media', src: '/pigeon-book/06_pigeon.mp4', alt: '365-Day Countdown', gap: 16,
      },
      {
        type: 'media', src: '/pigeon-book/07_pigeon.jpg', alt: '365-Day Countdown', gap: 16,
      },

      // How I Built It
      {
        type: 'text',
        heading: 'How I Built It',
        body: 'I designed and shipped the full app independently — concept, character design, UI, and App Store launch. I leveraged AI tools throughout the build, using vibe coding to move fast from idea to working product without getting stuck in the details. The visual language was built around the pigeon as a central character, balancing a playful tone with enough polish to feel like a finished product.',
      },

      // What I Learned
      {
        type: 'text',
        heading: 'What I Learned',
        body: 'This project was less about solving a user problem and more about the joy of making something. It reminded me that good design doesn\'t always need a brief — sometimes it just needs a curious pigeon and a question worth asking.',
      },
    ],
  },

];
