
export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: Author;
  date: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage: string;
  content: string;
  readTime: number;
}
