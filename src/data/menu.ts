import { CategoryKey, MenuItem } from "../types";

export const categoryLabels: Record<CategoryKey, string> = {
  aguachiles: "Especiales",
  cocteles: "Cocteles",
  camarones: "Mariscos",
  tostadas: "Ceviches",
  especialidades: "Filetes",
  bebidas: "Bebidas"
};

export const menuItems: MenuItem[] = [
  {
    id: "aguachile",
    category: "aguachiles",
    name: "Aguachile",
    description: "Preparacion estilo casa, servido frio.",
    price: 220,
    image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=900&q=80",
    active: true,
    featured: true,
    rating: 4.9,
    reviews: 182
  },
  {
    id: "tostadas-filete",
    category: "aguachiles",
    name: "Tostadas y Filete",
    description: "Combinacion de la casa (precio visible en tablero).",
    price: 175,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: "coctel-camaron",
    category: "cocteles",
    name: "Coctel de Camaron",
    description: "Coctel clasico con salsa de la casa.",
    price: 150,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    active: true,
    featured: true,
    rating: 4.8,
    reviews: 140
  },
  {
    id: "coctel-campechano",
    category: "cocteles",
    name: "Coctel Campechano",
    description: "Mix de mariscos, estilo mariscos Gutierrez.",
    price: 180,
    image: "https://images.unsplash.com/photo-1625944234217-3d4d7f5f2c6b?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: "caldo-camaron",
    category: "camarones",
    name: "Caldo de Camaron",
    description: "Caldito casero con camaron y verdura.",
    price: 150,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: "mojarra-frita",
    category: "camarones",
    name: "Mojarra Frita",
    description: "Servida dorada con guarnicion.",
    price: 190,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: "ceviche-preparado-litro",
    category: "tostadas",
    name: "Ceviche Preparado (Litro)",
    description: "Version grande para compartir.",
    price: 220,
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=80",
    active: true,
    featured: true,
    rating: 4.9,
    reviews: 166
  },
  {
    id: "ceviche-preparado-medio",
    category: "tostadas",
    name: "Ceviche Preparado (1/2 Litro)",
    description: "Misma receta en porcion media.",
    price: 110,
    image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.7,
    reviews: 105
  },
  {
    id: "ceviche-camaron-litro",
    category: "tostadas",
    name: "Ceviche de Camaron (Litro)",
    description: "Ceviche de camaron estilo local.",
    price: 230,
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.8,
    reviews: 121
  },
  {
    id: "ceviche-camaron-medio",
    category: "tostadas",
    name: "Ceviche de Camaron (1/2 Litro)",
    description: "Version media del ceviche de camaron.",
    price: 120,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.6,
    reviews: 96
  },
  {
    id: "filete-empanizado",
    category: "especialidades",
    name: "Filete Empanizado",
    description: "Filete dorado y crujiente.",
    price: 150,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.7,
    reviews: 119
  },
  {
    id: "filete-relleno",
    category: "especialidades",
    name: "Filete Relleno",
    description: "Relleno de mariscos estilo casa.",
    price: 170,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    active: true,
    featured: true,
    rating: 4.9,
    reviews: 171
  },
  {
    id: "michelada",
    category: "bebidas",
    name: "Michelada",
    description: "Con clamato, limon y escarchado.",
    price: 95,
    image: "https://images.unsplash.com/photo-1604908812451-ae5f7ec86f42?auto=format&fit=crop&w=900&q=80",
    active: true,
    featured: true,
    rating: 4.8,
    reviews: 207
  },
  {
    id: "agua-fresca",
    category: "bebidas",
    name: "Agua Fresca",
    description: "Sabor del dia.",
    price: 45,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
    active: true,
    rating: 4.5,
    reviews: 73
  }
];
