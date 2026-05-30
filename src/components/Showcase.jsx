import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

// Category showcase — brand-awareness only. No specific products or pricing,
// just the families of premium tech MYC curates.
const categories = [
  {
    name: 'Smartphones',
    blurb:
      'Flagship and everyday phones from the brands you already trust — genuine, sealed, and ready to go.',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    alt: 'Premium smartphone in hand',
  },
  {
    name: 'Earphones & Audio',
    blurb:
      'Wireless earbuds and headphones tuned for rich, immersive sound — hand-picked across the best names in audio.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    alt: 'Premium over-ear headphones',
  },
  {
    name: 'Wearables & Accessories',
    blurb:
      'Smartwatches, chargers, and the finishing touches that complete your setup — quality you can feel.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    alt: 'Smartwatch on a surface',
  },
]

export default function Showcase() {
  return (
    <section id="collection" className="relative bg-ink-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600"
          >
            What we carry
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl"
          >
            Explore the collection
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-ink-500"
          >
            From everyday essentials to flagship statements — a tightly curated
            range across the categories that matter most.
          </motion.p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.article
              key={cat.name}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  width="900"
                  height="600"
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/45 via-brand-950/0 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow">
                  {cat.name}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-ink-500">
                  {cat.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Ask in store
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
