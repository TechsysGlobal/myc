import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import FloatingShapes from './FloatingShapes'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-hero-glow pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <FloatingShapes variant="hero" />

      {/* Faint technical grid, fading toward the bottom */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-soft backdrop-blur"
          >
            <Sparkles size={15} className="text-brand-500" />
            Premium phones &amp; earphones, curated in Belgium
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl"
          >
            The brands you love,{' '}
            <span className="text-gradient">curated for you.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500"
          >
            MYC brings the world's most trusted mobile phones and earphones
            together under one roof. Genuine products, honest advice, and
            service that lasts — so you choose with confidence, every time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-brand-glow transition-all hover:bg-brand-700"
            >
              Discover the experience
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Our philosophy
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-ink-400"
          >
            {[
              ['100%', 'Genuine products'],
              ['Top', 'Trusted brands'],
              ['Expert', 'In-store advice'],
              ['Full', 'Official warranty'],
            ].map(([stat, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-base font-bold text-ink-800">{stat}</span>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Lifestyle hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-soft-lg ring-1 ring-ink-100">
            <img
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1600&q=80"
              alt="Listening to premium earphones"
              className="h-[280px] w-full object-cover sm:h-[420px]"
              loading="eager"
              width="1600"
              height="900"
            />
            {/* Soft brand wash for cohesion */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
