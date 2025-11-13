import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ServiceLayout from './ServiceLayout'

export default function Fullstack() {
  return (
    <ServiceLayout
      title="Full‑stack Engineering"
      tagline="Modern product engineering across web, APIs, and microservices with an eye for DX and performance."
      hero={
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/70 border border-stone-200 p-6">
            <ul className="grid gap-3 text-stone-700">
              {[
                'Design systems and accessible UI with Tailwind + Radix',
                'API design first: OpenAPI, tRPC, GraphQL, REST',
                'Service decomposition and platform foundations',
                'Edge and SSR strategies for speed and SEO',
                'Testing strategies from unit to E2E',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />{t}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[360px] rounded-2xl overflow-hidden border border-stone-200">
            <Spline scene="https://prod.spline.design/mVjZb1yK0jG5kGQO/scene.splinecode" />
          </motion.div>
        </div>
      }
    >
      <section className="grid lg:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 border border-stone-200">
            <h3 className="text-lg font-semibold">Case Study #{i}</h3>
            <p className="mt-2 text-stone-600">Delivered responsive UIs, robust APIs, and automated deployments with measurable KPIs.</p>
          </motion.div>
        ))}
      </section>
    </ServiceLayout>
  )
}
