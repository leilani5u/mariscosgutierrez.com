export type CategoryKey =
  | "aguachiles"
  | "cocteles"
  | "camarones"
  | "tostadas"
  | "especialidades"
  | "bebidas";

export interface MenuItem {
  id: string;
  category: CategoryKey;
  name: string;
  description: string;
  price: number;
  image: string;
  active: boolean;
  featured?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
