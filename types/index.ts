export type Project = {
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

export type ProjectTab = 'web' | 'uiux' | 'sideproject';
