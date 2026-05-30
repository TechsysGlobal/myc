import { motion } from 'framer-motion'

// Abstract, continuously-floating blobs/orbs used behind the hero and
// other sections to add depth. Pointer-events disabled so they never
// interfere with interaction. Motion is slow and looping for a calm feel.

const float = (duration, distance = 24) => ({
  y: [0, -distance, 0],
  x: [0, distance / 2, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
  },
})

export default function FloatingShapes({ variant = 'hero' }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Large soft brand orb */}
      <motion.div
        animate={float(14, 30)}
        className="absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full bg-brand-400/25 blur-3xl"
      />

      {/* Secondary cooler orb */}
      <motion.div
        animate={float(18, 40)}
        className="absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-brand-600/20 blur-3xl"
      />

      {/* Lower accent orb */}
      <motion.div
        animate={float(20, 26)}
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />

      {variant === 'hero' && (
        <>
          {/* Thin floating rings for a premium, technical accent */}
          <motion.div
            animate={{
              y: [0, 18, 0],
              rotate: [0, 8, 0],
              transition: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute right-[12%] top-[18%] h-40 w-40 rounded-full border border-brand-300/40"
          />
          <motion.div
            animate={{
              y: [0, -22, 0],
              rotate: [0, -10, 0],
              transition: { duration: 19, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute left-[14%] bottom-[16%] h-24 w-24 rounded-full border border-brand-400/30"
          />
          {/* Tiny floating dots */}
          <motion.div
            animate={float(11, 18)}
            className="absolute left-[42%] top-[24%] h-3 w-3 rounded-full bg-brand-500/60"
          />
          <motion.div
            animate={float(13, 22)}
            className="absolute right-[30%] bottom-[28%] h-2 w-2 rounded-full bg-brand-600/60"
          />
        </>
      )}
    </div>
  )
}
