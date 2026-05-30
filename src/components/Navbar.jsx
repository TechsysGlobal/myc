import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink-100/70 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center" aria-label="MYC home">
            <img
              src="/logo.svg"
              alt="MYC"
              className="h-10 w-auto sm:h-11"
              width="66"
              height="44"
            />
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
