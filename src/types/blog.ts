export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author?: string;
  date?: string;
  category?: string;
  readTime?: string;
}

