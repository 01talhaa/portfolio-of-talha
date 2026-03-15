'use client'

import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const highlights = [
    { title: 'Systems Design', description: 'Building scalable architectures that handle complex requirements and grow with demand.', icon: '⌘' },
    { title: 'Full-Stack Execution', description: 'End-to-end development from database architecture to interface design.', icon: '◧' },
    { title: 'Performance Optimization', description: 'Deep focus on API efficiency, query optimization, and frontend rendering speed.', icon: '▲' },
    { title: 'Clean Architecture', description: 'Commitment to maintainable code, best practices, and production-grade standards.', icon: '✦' },
  ]

  return (
    <section id="about" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header & Text */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
                01. About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Engineering reliable systems.
              </h2>
            </div>

            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p>
                Computer Engineering student from Bangladesh with deep expertise in full-stack development. I focus on building systems that are fast, reliable, and maintainable.
              </p>
              <p>
                I specialize in architecting scalable backends, optimizing database queries, and building responsive frontends. My goal is to write clean code that solves real problems efficiently.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="p-8 rounded-3xl border border-white/5 bg-transparent transition-colors group flex flex-col justify-between"
              >
                <div className="text-2xl text-zinc-600 group-hover:text-white transition-colors mb-8">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-2">{h.title}</h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
