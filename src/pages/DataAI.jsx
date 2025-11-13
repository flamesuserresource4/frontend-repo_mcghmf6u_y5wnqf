import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ServiceLayout from './ServiceLayout'

export default function DataAI() {
  return (
    <ServiceLayout
      title="Data & AI Enablement"
      tagline="From data modeling and pipelines to analytics and applied AI in production."
      hero={
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/70 border border-stone-200 p-6">
            <ul className="grid gap-3 text-stone-700">
              {[
                'Data platform: ingestion, warehousing, governance',
                'Modeling with dbt, metrics layers, semantic models',
                'Analytics: dashboards, exec reporting, decision loops',
                'ML: from baseline to MLOps, evaluation & monitoring',
                'Responsible AI: privacy, bias testing, human-in-loop',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />{t}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[360px] rounded-2xl overflow-hidden border border-stone-200">
            <Spline scene="https://prod.spline.design/Wt2hNITQ33DP4N0i/scene.splinecode" />
          </motion.div>
        </div>
      }
    >
      <section className="grid lg:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 border border-stone-200">
            <h3 className="text-lg font-semibold">Capability #{i}</h3>
            <p className="mt-2 text-stone-600">Outcome-first analytics and ML, grounded in data quality and robust operations.</p>
          </motion.div>
        ))}
      </section>
    </ServiceLayout>
  )
}
