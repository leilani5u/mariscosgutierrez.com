import { motion } from "framer-motion";
import { businessInfo, instagramGallery, promotions, testimonials } from "../data/landing";

interface ExtrasProps {
  bestSellers: Array<{ name: string; description: string; image: string }>;
}

export function ExtrasSections({ bestSellers }: ExtrasProps) {
  return (
    <>
      <section className="section-shell py-8">
        <div className="board-panel board-lines rounded-[2rem] p-5 sm:p-6">
          <h2 className="font-display text-4xl text-white">Promociones del Dia</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {promotions.map((promo, index) => (
              <motion.article
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="paper-card rounded-3xl p-5"
              >
                <h3 className="font-display text-3xl text-black">{promo.title}</h3>
                <p className="mt-2 text-sm text-black/80">{promo.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <h2 className="font-display text-4xl text-white">Mas Vendidos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {bestSellers.map((item) => (
            <article key={item.name} className="paper-card rounded-3xl p-3">
              <img src={item.image} alt={item.name} className="h-32 w-full rounded-2xl border-2 border-black object-cover" />
              <h3 className="mt-3 text-lg font-black text-black">{item.name}</h3>
              <p className="text-sm text-black/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <h2 className="font-display text-4xl text-white">Testimonios</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="paper-card rounded-3xl p-5">
              <p className="text-brand-coral">{"*".repeat(testimonial.stars)}</p>
              <p className="mt-2 text-sm text-black/85">{testimonial.text}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/70">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-10" id="instagram">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-4xl text-white">Galeria Instagram</h2>
          <a
            href={businessInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="sticker-pill rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.1em]"
          >
            Ver Perfil
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {instagramGallery.map((image, i) => (
            <img
              key={`${image}-${i}`}
              src={image}
              alt={`Instagram mariscos ${i + 1}`}
              className="aspect-square w-full rounded-2xl border-2 border-black object-cover"
            />
          ))}
        </div>
      </section>

      <section className="section-shell py-10" id="ubicacion">
        <h2 className="font-display text-4xl text-white">Ubicacion y Horarios</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-3xl border-2 border-white/30 bg-black/30">
            <iframe
              title="Ubicacion Mariscos Gutierrez"
              src={`https://www.google.com/maps?q=${businessInfo.mapQuery}&output=embed`}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="paper-card rounded-3xl p-5">
            <p className="text-sm text-black/90">{businessInfo.locationText}</p>
            <p className="mt-2 text-sm text-black/90">{businessInfo.schedule}</p>
          </div>
        </div>
      </section>

      <footer className="section-shell pb-16 pt-10 text-center text-xs uppercase tracking-[0.2em] text-white/60">
        Mariscos Gutierrez · Menu Digital
      </footer>
    </>
  );
}
