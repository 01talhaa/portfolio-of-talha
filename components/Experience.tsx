'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Founder & Full-Stack Engineer',
    company: 'ShilpoMarket',
    period: '2023 - Present',
    highlights: [
      'Architecting a comprehensive B2B marketplace to connect businesses with raw material suppliers.',
      'Driving full-stack execution from initial data modeling and architecture to production deployment.',
      'Owning product strategy, technical roadmap, and feature prioritization.',
      'Managing infrastructure, frontend performability, and backend scalability.',
    ],
  },
  {
    role: 'Founder & Lead Developer',
    company: 'PQRIX Tech',
    period: '2023 - Present',
    highlights: [
      'Engineered a modern SaaS agency terminal with a focus on high-conversion UI/UX.',
      'Implemented robust, highly-concurrent architecture to handle global client requests.',
      'Spearheading product design and executing global client acquisition pipelines.',
      'Enforcing strict code quality, performance auditing, and service reliability metrics.',
    ],
  },
  {
    role: 'Product Builder',
    company: 'Independent Ventures',
    period: '2022 - Present',
    highlights: [
      'Shipped multiple resilient, end-to-end web applications scaling to robust user bases.',
      'Deepened full-stack proficiency utilizing edge-networks and the modern serverless ecosystem.',
      'Maintained an obsessive focus on seamless user experiences, scalable backend patterns, and clean architecture.',
      'Demonstrated high-velocity execution in transforming concepts into market-ready assets.',
    ],
  },
]

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="experience" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-4xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 space-y-4">
          <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            02. Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Experience & Impact
          </h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl leading-relaxed">
            A timeline of building ambitious products, architecting robust systems, and delivering measurable impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-[27px] top-16 bottom-[-16px] w-[1px] bg-white/10 group-hover:bg-white/30 transition-colors"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 border-zinc-500 bg-black group-hover:border-white group-hover:bg-white transition-all duration-300 z-10 box-content shadow-[0_0_0_8px_black]"></div>

              <div className="ml-16 sm:ml-20 p-8 sm:p-10 rounded-3xl border border-white/5 bg-transparent group-hover:border-white/10 group-hover:bg-white/[0.02] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white mb-1">{exp.role}</h3>
                    <p className="text-zinc-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/5 h-fit">
                    <span className="text-xs font-medium text-zinc-300 whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4 text-sm text-zinc-400 font-light leading-relaxed">
                      <span className="text-zinc-600 flex-shrink-0 mt-1">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
