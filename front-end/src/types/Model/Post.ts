import { Auth } from "./Auth";
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
  author: Auth;
  date: string;
  views: number;
}

export type { Post };