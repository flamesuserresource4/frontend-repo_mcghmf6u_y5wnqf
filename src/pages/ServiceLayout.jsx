import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import BackgroundEffects from '../components/BackgroundEffects'
import { Link } from 'react-router-dom'

export default function ServiceLayout({ title, tagline, children, hero, gradient = true }) {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 relative">
      <Navbar />

      {/* Header */}
      <header className="relative overflow-hidden pt-28 pb-16">
        {gradient && (
          <BackgroundEffects />
        )}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs uppercase tracking-widest text-stone-500">Service</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-2 text-4xl sm:text-5xl font-bold text-stone-900">{title}</motion.h1>
          {tagline && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-3 text-lg text-stone-700 max-w-3xl">{tagline}</motion.p>}
          {hero}
        </div>
      </header>

      {/* Content */}
      <main className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
          {children}
          <div className="mt-12">
            <Link to="/" className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-5 py-3 text-sm shadow hover:shadow-md transition">Back to home</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
