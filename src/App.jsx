import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { ArrowRight, CheckCircle2, Cpu, LineChart, Shield, Sparkles } from 'lucide-react'
import ServiceCard from './components/ServiceCard'
import BackgroundEffects from './components/BackgroundEffects'

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500">
          <span className="h-px w-6 bg-stone-300" />
          {eyebrow}
          <span className="h-px w-6 bg-stone-300" />
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-stone-900">{title}</h2>
      {subtitle && <p className="mt-3 text-stone-600">{subtitle}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <BackgroundEffects />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-stone-700 shadow-sm"
            >
              <Sparkles className="h-4 w-4" /> Award-winning technical consultancy
            </motion.div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900">
              Build reliable, scalable products with a partner you can trust
            </h1>
            <p className="mt-4 text-lg text-stone-700">
              We design, architect, and deliver cloud-native systems, modern web platforms, and data pipelines—fast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-50 px-5 py-3 text-sm shadow hover:shadow-md transition">
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white text-stone-800 px-5 py-3 text-sm shadow hover:shadow-md transition">
                See our work
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50 p-2 shadow-lg"
            >
              <div className="h-full w-full rounded-xl bg-white grid grid-cols-2 gap-2 p-4">
                {[
                  { icon: Cpu, title: 'Architecture Reviews' },
                  { icon: Shield, title: 'Security & Compliance' },
                  { icon: LineChart, title: 'Data & Analytics' },
                  { icon: ArrowRight, title: 'Delivery Acceleration' },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="rounded-xl border border-stone-200 p-4 bg-amber-50/40"
                  >
                    <c.icon className="h-6 w-6 text-stone-700" />
                    <p className="mt-2 text-sm font-medium text-stone-800">{c.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      title: 'Cloud & DevOps',
      desc: 'CI/CD pipelines, IaC, observability, and cost optimization across AWS/Azure/GCP.',
      to: '/services/cloud-devops',
    },
    {
      title: 'Full‑stack Engineering',
      desc: 'Modern web apps, APIs, and microservices built with best practices.',
      to: '/services/fullstack',
    },
    {
      title: 'Data & AI Enablement',
      desc: 'From data modeling to analytics dashboards and ML integrations.',
      to: '/services/data-ai',
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What we do" title="Technical services that move the needle" subtitle="Engagements tailored to your goals, delivered by senior engineers." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ServiceCard key={i} title={item.title} description={item.desc} to={item.to} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Discover', text: 'Deep dive into goals, constraints, and success metrics.' },
    { title: 'Design', text: 'Architecture, milestones, and measurable outcomes.' },
    { title: 'Deliver', text: 'Agile execution with transparent reporting.' },
  ]
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-amber-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How we work" title="Simple, outcome‑driven process" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white p-6 border border-stone-200">
              <div className="text-5xl font-black text-stone-200">{i + 1}</div>
              <h4 className="mt-2 text-lg font-semibold text-stone-900">{s.title}</h4>
              <p className="mt-1 text-stone-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    {
      text:
        'They modernized our platform and cut our cloud costs by 38% in three months while improving reliability.',
      author: 'CTO, Fintech Scaleup',
    },
    {
      text:
        'Senior engineers who ship. Great communication and pragmatic decisions throughout.',
      author: 'VP Engineering, HealthTech',
    },
  ]
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Proof" title="Teams like yours trust us" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote key={i} whileHover={{ scale: 1.01 }} className="rounded-2xl bg-amber-50/60 border border-stone-200 p-6">
              <p className="text-stone-800">“{q.text}”</p>
              <footer className="mt-3 text-sm text-stone-600">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-amber-50/60 to-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get started" title="Tell us about your goals" subtitle="We’ll get back within 24 hours with a tailored proposal." />
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Your name" />
            <input type="email" className="rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Email" />
          </div>
          <input className="rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="Company" />
          <textarea rows={5} className="rounded-xl border border-stone-300 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-amber-300" placeholder="What problem are you solving?" />
          <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 text-stone-50 px-5 py-3 text-sm shadow hover:shadow-md transition">
            Request proposal <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-stone-600">
      © {new Date().getFullYear()} Flames Tech Consulting. All rights reserved.
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
