import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ title, description, to, icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="group relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-amber-50/80 to-rose-50/60" />
      <div className="relative">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-200 to-rose-100 grid place-items-center">
          {Icon && <Icon className="h-5 w-5 text-stone-800" />}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-stone-900">{title}</h3>
        <p className="mt-2 text-stone-600">{description}</p>
        <Link
          to={to}
          className="mt-4 inline-flex items-center gap-2 text-stone-800 hover:text-stone-950"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
