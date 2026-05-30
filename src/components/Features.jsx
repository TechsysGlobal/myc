import { motion } from 'framer-motion'
import { BadgeCheck, Sparkle, Headphones, LifeBuoy } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const features = [
  {
    icon: BadgeCheck,
    title: 'Only genuine products',
    body: 'Every phone and earphone we sell is 100% authentic, sourced through official channels — sealed, original, and backed by full manufacturer warranty.',
  },
  {
    icon: Sparkle,
    title: 'A curated selection',
    body: 'We carry only the devices worth owning, hand-picked from the world’s most trusted brands. No clutter, no guesswork — just the best of each category.',
  },
  {
    icon: Headphones,
    title: 'Expert guidance',
    body: 'Our team knows the catalogue inside out. Tell us how you live and listen, and we’ll match you to the phone or earphones that truly fit.',
  },
  {
    icon: LifeBuoy,
    title: 'Service that lasts',
    body: 'Setup help, honest after-sales support, and a relationship that doesn’t end at the counter. We’re here long after you take it home.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
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
            The MYC difference
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl"
          >
Premium tech, without the guesswork
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-ink-500"
          >
            Buying premium shouldn’t feel like a gamble. Here’s what you can
            count on every time you shop with MYC.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              {/* Soft brand wash on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-50/0 to-brand-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
