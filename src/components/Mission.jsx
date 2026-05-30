import { motion } from 'framer-motion'
import { Compass, Heart, Layers } from 'lucide-react'
import FloatingShapes from './FloatingShapes'
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from '../lib/motion'

const pillars = [
  {
    icon: Compass,
    title: 'Curated, not cluttered',
    body: 'We stock only what we’d recommend to a friend — the best brands, the right models, nothing to wade through.',
  },
  {
    icon: Layers,
    title: 'Only the genuine article',
    body: 'Authentic products through official channels, every time. Original, sealed, and fully warranted.',
  },
  {
    icon: Heart,
    title: 'Here for the long run',
    body: 'Honest advice and real support that continue long after you’ve taken your device home.',
  },
]

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-32"
    >
      <FloatingShapes variant="mission" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/40 via-ink-950 to-ink-950" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Narrative */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300"
            >
              Why MYC exists
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            >
              We started MYC because buying premium tech had become{' '}
              <span className="text-brand-300">far too complicated.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-ink-300"
            >
              Endless models, confusing specs, pushy upsells, and the nagging
              worry of whether a product is even authentic. MYC was founded in
              Grimbergen to make buying a premium phone or pair of earphones
              feel simple and trustworthy again.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg leading-relaxed text-ink-300"
            >
              We bring together the world’s most respected brands, keep only the
              devices truly worth owning, and give straight, honest advice — so
              you walk away with the right product and complete peace of mind.
            </motion.p>
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {pillars.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeIn}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600/20 text-brand-300 ring-1 ring-inset ring-brand-400/30">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
