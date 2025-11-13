import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 inset-x-0 z-50" style={{backdropFilter:'saturate(180%) blur(10px)'}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-rose-200 grid place-items-center shadow-sm">
              <Sparkles className="h-5 w-5 text-stone-700" />
            </div>
            <span className="font-semibold text-stone-800">Flames Tech Consulting</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-stone-700 hover:text-stone-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-sm shadow-sm hover:shadow-md transition-shadow">
              Get Proposal
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg bg-white/60 shadow-sm" onClick={() => setOpen((p) => !p)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/80 border-t border-stone-200"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-stone-700"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-sm shadow-sm">
                Get Proposal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
