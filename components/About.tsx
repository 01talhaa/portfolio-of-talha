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
    { title: 'Product Thinking', description: 'User-first approach to building real solutions that drive engagement.', icon: '⌘' },
    { title: 'Full-Stack Execution', description: 'End-to-end development from database architecture to interface design.', icon: '◧' },
    { title: 'Startup Builder', description: 'Expertise in taking ideas from zero to one with velocity and precision.', icon: '▲' },
    { title: 'Design Sensibility', description: 'Pixel-perfect, premium interfaces backed by robust engineering.', icon: '✦' },
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
              <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                01. About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                Architecting the modern web.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
              <p>
                As a Computer Engineering student and startup founder from Bangladesh, I bring a unique blend of technical rigor and entrepreneurial vision to every project.
              </p>
              <p>
                I specialize in building scalable applications, highly-performant platforms, and digital products that redefine industry standards. I don&apos;t just write code—I architect systems designed to scale and craft experiences designed to mesmerize.
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
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">{h.description}</p>
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
