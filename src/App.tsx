import { useMemo, useState } from "react";
import { ExtrasSections } from "./components/ExtrasSections";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { businessInfo } from "./data/landing";
import { menuItems } from "./data/menu";
import type { CategoryKey } from "./types";

export type MenuFilter = CategoryKey | "all";

const initialCategory: MenuFilter = "all";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<MenuFilter>(initialCategory);

  const visibleMenu = useMemo(
    () =>
      menuItems.filter(
        (item) => item.active && (selectedCategory === "all" || item.category === selectedCategory)
      ),
    [selectedCategory]
  );

  const featuredItems = useMemo(() => menuItems.filter((item) => item.featured).slice(0, 3), []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="app-surface min-h-screen font-body text-white">
      <header className="fixed left-0 right-0 top-0 z-40">
        <div className="section-shell pt-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/25 bg-brand-deep/80 px-3 py-2 shadow-card backdrop-blur">
            <div className="flex items-center gap-2">
              <img
                src="/logo-mariscos.png"
                alt="Logo Mariscos Gutierrez"
                className="h-11 w-11 rounded-full border-2 border-brand-gold object-cover"
              />
              <div>
                <p className="font-display text-2xl leading-none text-brand-sand">Mariscos Gutierrez</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-aqua">
                  Estilo de la casa
                </p>
              </div>
            </div>
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/85 bg-brand-coral px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-coral"
            >
              Instagram
            </a>
          </div>
        </div>
      </header>

      <Hero onMenuClick={scrollToMenu} />
      <MenuSection
        items={visibleMenu}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ExtrasSections bestSellers={featuredItems} />
    </main>
  );
}
