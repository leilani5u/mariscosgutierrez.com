import { motion } from "framer-motion";
import { categoryLabels } from "../data/menu";
import type { MenuFilter } from "../App";
import type { CategoryKey, MenuItem } from "../types";

interface MenuSectionProps {
  items: MenuItem[];
  selectedCategory: MenuFilter;
  onSelectCategory: (category: MenuFilter) => void;
}

const categories = Object.keys(categoryLabels) as CategoryKey[];
const filterOptions: Array<{ key: MenuFilter; label: string }> = [
  { key: "all", label: "Todo el Menu" },
  ...categories.map((category) => ({ key: category, label: categoryLabels[category] }))
];

const renderStars = (rating: number) => "★".repeat(Math.round(rating));

export function MenuSection({ items, selectedCategory, onSelectCategory }: MenuSectionProps) {
  const averageRating = items.length
    ? (items.reduce((sum, item) => sum + item.rating, 0) / items.length).toFixed(1)
    : "0.0";
  const totalReviews = items.reduce((sum, item) => sum + item.reviews, 0);

  return (
    <section className="section-shell py-14" id="menu">
      <div className="board-panel board-lines rounded-[2rem] p-4 sm:p-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Menu Digital</h2>
          </div>
          <div className="sticker-pill rounded-2xl px-4 py-2">
            <p className="text-[11px] font-black uppercase tracking-[0.12em]">Calificacion General</p>
            <p className="text-sm font-extrabold text-brand-ink">
              {averageRating} · {totalReviews} reseñas
            </p>
          </div>
        </div>

        <div className="mb-5 flex snap-x gap-2 overflow-x-auto pb-2">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => onSelectCategory(option.key)}
              className={`snap-start whitespace-nowrap rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition ${
                selectedCategory === option.key
                  ? "bg-brand-ink text-white border-2 border-white/70"
                  : "sticker-pill"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              className="paper-card group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-40 overflow-hidden border-b-2 border-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {item.featured ? (
                  <span className="sticker-pill absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em]">
                    Top Costa
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="font-display text-3xl leading-none text-black">{item.name}</h3>
                <p className="mt-2 text-sm text-black/75">{item.description}</p>
                <div className="mt-3 rounded-xl border-2 border-black/20 bg-white/80 px-2 py-1 text-xs font-bold text-black">
                  <span className="text-amber-500">{renderStars(item.rating)}</span>
                  <span className="ml-2">{item.rating.toFixed(1)} · {item.reviews} reseñas</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
