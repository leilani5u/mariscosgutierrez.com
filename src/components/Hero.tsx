import { motion } from "framer-motion";

interface HeroProps {
  onMenuClick: () => void;
}

export function Hero({ onMenuClick }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      <img
        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1600&q=80"
        alt="Mariscos playa"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative section-shell flex min-h-screen flex-col justify-end pb-14 pt-36 sm:pb-20">
        <motion.img
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          src="/logo-mariscos.png"
          alt="Logo Mariscos Gutierrez"
          className="mb-4 h-24 w-24 rounded-full border-4 border-brand-gold bg-white/95 p-1 shadow-card"
        />

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="sticker-pill mb-4 inline-flex w-fit rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.22em]"
        >
          Colores oficiales del logo
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="max-w-2xl font-display text-5xl leading-[0.92] text-white sm:text-7xl"
        >
          Mariscos Gutiérrez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 max-w-xl text-sm text-brand-sand sm:text-base"
        >
          Carta completa y calificaciones visibles para explorar el menu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            onClick={onMenuClick}
            className="sticker-pill rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.15em] transition hover:-translate-y-0.5"
          >
            Ver Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
