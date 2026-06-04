import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, MenuItem } from "../types";

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(({ item: cartItem }) => cartItem.id === item.id);
          if (existing) {
            return {
              items: state.items.map((entry) =>
                entry.item.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
              )
            };
          }
          return { items: [...state.items, { item, quantity: 1 }] };
        }),
      removeItem: (itemId) =>
        set((state) => ({ items: state.items.filter(({ item }) => item.id !== itemId) })),
      decrementItem: (itemId) =>
        set((state) => ({
          items: state.items
            .map((entry) =>
              entry.item.id === itemId ? { ...entry, quantity: entry.quantity - 1 } : entry
            )
            .filter((entry) => entry.quantity > 0)
        })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: "mariscos-gutierrez-cart"
    }
  )
);
