import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const PHONE = '+32466189454'
const PHONE_DISPLAY = '+32 466 18 94 54'
const EMAIL = 'srlmyc1853@gmail.com'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-white">
      {/* CTA band — vertical padding separates the blue band from the dark
          Mission section above and the footer body below. */}
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-14 text-center shadow-brand-glow sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(255,255,255,0.25),transparent)]" />
          <motion.h2
            variants={fadeUp}
            className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Experience MYC for yourself
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85"
          >
            Visit our store in Grimbergen or reach out — we’re always happy to
            help you find the right device.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:scale-[1.02]"
            >
              Email the team
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer body */}
      <div className="border-t border-ink-100 bg-ink-50/60">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-extrabold text-white">
                  M
                </span>
                <span className="text-lg font-extrabold tracking-tight text-ink-900">
                  MYC
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
                Premium mobile phones and earphones from the world’s most
                trusted brands — genuine products, expert advice, and lasting
                service. Curated and sold with care in Belgium.
              </p>
            </div>

            {/* Contact details */}
            <div>
              <h3 className="text-sm font-semibold text-ink-900">Visit us</h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-ink-500">
                <p className="flex items-start gap-2.5">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>
                    Mutsaardplein 2<br />
                    1853 Grimbergen, Belgium
                  </span>
                </p>
              </address>
            </div>

            {/* Reach */}
            <div>
              <h3 className="text-sm font-semibold text-ink-900">Reach us</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-500">
                <li>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-700"
                  >
                    <Phone size={17} className="shrink-0 text-brand-600" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-700"
                  >
                    <Mail size={17} className="shrink-0 text-brand-600" />
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 text-sm text-ink-400 sm:flex-row">
            <p>© {new Date().getFullYear()} MYC. All rights reserved.</p>
            <p className="text-ink-400">
              Proudly serving Grimbergen, Belgium.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
