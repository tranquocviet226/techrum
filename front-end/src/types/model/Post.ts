import { Category } from "./Category";

interface Post {
  id: number;
  title: string;
  content: string;
  description: string;
  sort_description: string;
  background_url: string;
  redirect_to_url: string;
  categories: Category[];
  author: string;
  created_at: string;
  views: number;
}

interface ParamsPost {
  category_id?: number;
  total_result?: number;
  page?: number;
}

interface FindPostBody {
  total_result?: number;
  page?: number;
  category_id?: number;
  type?: string; //type == rand || null
  sort_by?: SortBy;
  condition?: Condition;
}

interface SortBy {
  target: string; // created_at
  order: string; // ASC
}

interface Condition {
  target: string, // created_at
  operator: string, // <=
  value: string
}

export type { Post, ParamsPost, FindPostBody };
