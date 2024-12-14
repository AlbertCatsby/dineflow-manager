export type Profile = {
  id: string;
  full_name: string | null;
  role: 'admin' | 'kitchen' | 'customer';
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category_id: string;
  icon: string;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type ItemTag = {
  id: string;
  name: string;
  created_at: string;
};

export type MenuItemTag = {
  menu_item_id: string;
  tag_id: string;
};