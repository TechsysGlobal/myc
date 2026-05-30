// Shared Framer Motion variants — tuned for a smooth, luxurious feel.
// We deliberately avoid spring bounce; everything eases gently.

const smoothEase = [0.22, 1, 0.36, 1] // easeOutExpo-ish

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: smoothEase },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

// Standard viewport config for scroll-triggered reveals.
export const viewportOnce = { once: true, amount: 0.3 }
