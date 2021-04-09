interface Category {
  id: number;
  parent_id: number;
  slug: string;
  title: string;
  color: string;
  position: number;
  is_active: number;
  background_image: string;
  count: number
}

export type { Category };
