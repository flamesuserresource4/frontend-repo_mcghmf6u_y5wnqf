import { motion } from 'framer-motion'

export default function BackgroundEffects({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_0%,rgba(250,232,214,0.8),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(255,228,196,0.6),transparent),radial-gradient(600px_600px_at_50%_100%,rgba(253,244,215,0.7),transparent)]" />

      {/* Floating blobs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 0.7 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl"
      />
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: 0.6 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-0 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl"
      />

      {/* Parallax dots layer */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0" viewBox="0 0 800 400" preserveAspectRatio="none"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#e7e5e4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </motion.svg>
    </div>
  )
}
