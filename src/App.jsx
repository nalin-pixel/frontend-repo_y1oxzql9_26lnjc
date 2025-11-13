import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react'

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md">
            <Icon className="h-5 w-5" />
          </span>
          {title}
        </motion.h2>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const nav = useMemo(
    () => [
      { id: 'summary', label: 'Summary' },
      { id: 'education', label: 'Education' },
      { id: 'work', label: 'Work' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 scroll-smooth">
      {/* Animated top progress bar */}
      <motion.div style={{ scaleX: progress }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500 z-[60]" />

      {/* Top nav */}
      <div className="fixed top-4 inset-x-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-lg px-4 py-3">
            <a href="#" className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-sky-500">Senior Engineer</a>
            <nav className="hidden sm:flex items-center gap-4">
              {nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-xl hover:bg-slate-200/60 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero with Spline */}
      <section className="relative pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Team Lead & Senior Software Engineer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mt-4 text-lg text-slate-600"
              >
                I design, build, and lead delivery of resilient platforms. I care about clean architecture, developer experience, and business impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-all">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold border border-slate-200 hover:bg-slate-50">
                  Contact Me
                </a>
              </motion.div>

              <div className="mt-8 flex items-center gap-4 text-slate-500">
                <div className="flex -space-x-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">FE</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700 text-xs font-bold">BE</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-xs font-bold">DevOps</span>
                </div>
                <span className="text-sm">10+ years shipping production systems</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/60 shadow-xl bg-gradient-to-br from-indigo-50 via-fuchsia-50 to-sky-50"
            >
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
            </motion.div>
          </div>
        </div>

        {/* Gradient decoration */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-[40rem] bg-gradient-to-b from-indigo-100/60 via-fuchsia-100/30 to-transparent blur-3xl" />
      </section>

      {/* Summary */}
      <Section id="summary" title="Summary" icon={Sparkles}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Leadership', desc: 'Led squads across frontend, backend, and platform; mentored engineers and standardized delivery.' },
            { title: 'Architecture', desc: 'Event-driven services, clean boundaries, observability, and performance as a feature.' },
            { title: 'Execution', desc: 'Roadmaps to releases: discovery, design, implementation, and continuous improvement.' },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="space-y-4">
          {[
            { school: 'B.Sc. in Computer Science', place: 'Your University', time: '2012 - 2016', notes: 'Graduated with honors; research in distributed systems.' },
          ].map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{e.school}</h3>
                <span className="text-sm text-slate-500">{e.time}</span>
              </div>
              <p className="text-slate-600 text-sm">{e.place}</p>
              <p className="mt-2 text-slate-600 text-sm leading-6">{e.notes}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" title="Work Experience" icon={Briefcase}>
        <div className="space-y-6">
          {[
            {
              role: 'Engineering Team Lead',
              company: 'TechCorp',
              period: '2021 — Present',
              highlights: [
                'Scaled platform to millions of monthly users with 99.95% uptime',
                'Drove migration to micro frontends and platform tooling to cut lead time by 40%'
              ],
            },
            {
              role: 'Senior Software Engineer',
              company: 'ProductCo',
              period: '2018 — 2021',
              highlights: [
                'Designed event-driven architecture with Kafka; reduced coupling and improved resilience',
                'Led feature squads; introduced CI/CD and observability practices'
              ],
            },
          ].map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{w.role} · {w.company}</h3>
                <span className="text-sm text-slate-500">{w.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                {w.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={Code2}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Realtime Analytics Platform',
              stack: ['React', 'FastAPI', 'Kafka', 'ClickHouse'],
              desc: 'Streaming metrics with sub-second dashboards and anomaly detection.',
              link: '#'
            },
            {
              name: 'Design System',
              stack: ['Storybook', 'Radix UI', 'Tailwind'],
              desc: 'Accessible components, tokens, and theming used across 5 products.',
              link: '#'
            },
            {
              name: 'DevEx Tooling',
              stack: ['NX', 'Vite', 'Turborepo'],
              desc: 'Accelerated builds and standard pipelines; 30% faster local feedback.',
              link: '#'
            },
          ].map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-6">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const name = data.get('name')
            const email = data.get('email')
            const message = data.get('message')
            const mailto = `mailto:your.email@example.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(String(name || ''))}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
            window.location.href = mailto
          }}
          className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur p-6 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-slate-500">I usually reply within 1 business day.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-700">
              Send <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </Section>

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} • Built with passion • Senior Software Engineer & Team Lead
        </div>
      </footer>
    </div>
  )
}
