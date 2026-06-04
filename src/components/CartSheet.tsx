import { AnimatePresence, motion } from "framer-motion";
import { formatCurrency } from "../lib/format";
import type { CartItem } from "../types";

interface CartSheetProps {
  isOpen: boolean;
  items: CartItem[];
  total: number;
  count: number;
  onClose: () => void;
  onAdd: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export function CartSheet({
  isOpen,
  items,
  total,
  count,
  onClose,
  onAdd,
  onDecrement,
  onRemove,
  onCheckout
}: CartSheetProps) {
  return (
    <>
      <button
        onClick={onClose}
        className="fixed bottom-5 left-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-2xl border-2 border-black bg-brand-paper px-4 py-3 text-black shadow-card transition hover:-translate-y-0.5"
      >
        <span className="text-sm font-black uppercase tracking-[0.1em]">{count} productos</span>
        <span className="text-base font-black">{formatCurrency(total)}</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-black/65"
            />
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[82vh] overflow-y-auto rounded-t-3xl border-2 border-black bg-brand-paper p-4 pb-28"
            >
              <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-black/25" />
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-4xl text-black">Tu Pedido</h3>
                <button
                  onClick={onClose}
                  className="rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-black"
                >
                  Cerrar
                </button>
              </div>

              {items.length === 0 ? (
                <p className="rounded-2xl border-2 border-dashed border-black/40 p-6 text-center text-black/70">
                  Aun no agregas productos.
                </p>
              ) : (
                <div className="space-y-3">
                  {items.map(({ item, quantity }) => (
                    <article key={item.id} className="rounded-2xl border-2 border-black bg-white p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-black">{item.name}</h4>
                          <p className="text-xs text-black/70">{formatCurrency(item.price)}</p>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-xs font-black uppercase tracking-[0.1em] text-brand-coral"
                        >
                          Quitar
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => onDecrement(item.id)}
                          className="h-8 w-8 rounded-full border-2 border-black bg-white text-lg text-black"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-black text-black">{quantity}</span>
                        <button
                          onClick={() => onAdd(item.id)}
                          className="h-8 w-8 rounded-full border-2 border-black bg-brand-aqua font-black text-black"
                        >
                          +
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between rounded-2xl border-2 border-black bg-brand-ink p-4">
                <span className="font-semibold text-white">Total</span>
                <span className="text-xl font-extrabold text-brand-sand">{formatCurrency(total)}</span>
              </div>

              <button
                onClick={onCheckout}
                disabled={!items.length}
                className="mt-4 w-full rounded-2xl border-2 border-black bg-brand-coral px-4 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-coral disabled:cursor-not-allowed disabled:opacity-45"
              >
                Pedir por WhatsApp
              </button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
