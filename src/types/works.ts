export type Work = {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  image?: string;
  description: string;
  roles?: string[];
  tools?: string[];
  gallery?: string[]; // public/images/ 以下のパス
};