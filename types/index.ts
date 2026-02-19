export type SectionBlock =
  | {
      type: 'media';
      src: string;
      alt?: string;
      gap?: number;
    }
  | {
      type: 'text';
      heading?: string;
      subtitle?: string;
      body?: string;
      gap?: number;
    }
  | {
      type: 'metadata';
      items: { label: string; value: string }[];
      gap?: number;
    }
  | {
      type: 'grid';
      items: { src: string; alt?: string }[];
      gap?: number;
    }
  | {
      type: 'two-column';
      left: { label: string; value: string }[]; // \n supported in value
      right: { heading?: string; body: string };
      gap?: number;
    }
  | {
      type: 'highlight';
      emoji?: string;
      heading: string;
      body: string;
      gap?: number;
    };

export type Project = {
  id: number;
  title: string;
  subtitle?: string;
  year: string;
  category: string;
  url: string;
  role: string;
  date: string;
  intro: string;
  tags: string[];
  bgColor: string;
  image: string;
  detailImages?: string[];
  sections?: SectionBlock[];
  credits?: string;
  previewBorderColor?: string;
  icon?: string;
  shortDescription?: string;
  iosAppUrl?: string;
};

export type ProjectTab = 'web' | 'uiux' | 'sideproject';
