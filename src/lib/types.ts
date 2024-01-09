export type ContactItem = {
  id: number;
  name: string;
  slug: string;
  theme: string;
  cover: string;
  url: string;
};

export type ProjectItem = {
  id: number;
  name: string;
  slug: string;
  sortID: number;
  techstack: string[];
  video_url: string;
  live_url: string;
  github_url: string;
  about: string;
  learned: string;
  images: {
    lg: string;
    md: string;
    sm: string;
  }[];
};

export type TechnologyItem = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  position: number;
};

export type AnimationType = "fadeIn" | "fadeHorizontal" | "fadeVertical";

export type ScreenshotProp = { sm: string; md: string; lg: string };
