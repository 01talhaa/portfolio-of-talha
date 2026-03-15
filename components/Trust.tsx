'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Zap, Shield, Target } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  icon: React.ElementType
  category: string
}

const achievements: Achievement[] = [
  {
    title: 'Startup Builder',
    description: 'Founded and scaling multiple tech startups from zero to market release.',
    icon: Zap,
    category: 'Entrepreneurship',
  },
  {
    title: 'Full-Stack Excellence',
    description: 'Proven expertise in building production-grade web applications.',
    icon: Trophy,
    category: 'Engineering',
  },
  {
    title: 'Product Mindset',
    description: 'Strong focus on user-centric design and business-driven metrics.',
    icon: Target,
    category: 'Product',
  },
  {
    title: 'Trusted Partner',
    description: 'Collaborated with top-tier clients and ambitious teams globally.',
    icon: Shield,
    category: 'Trust',
  },
]

const Trust = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="trust" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-[100%] blur-[120px] opacity-[0.02]"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            03. Reputation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Driven by Excellence
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A track record of building reliable products, solving complex architectural challenges, and delivering high-caliber results.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="p-8 rounded-3xl border border-white/5 bg-transparent transition-all duration-300 group flex items-start gap-6"
              >
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Icon className="text-zinc-400 group-hover:text-black transition-colors" size={20} />
                </div>

                {/* Content */}
                <div>
                  <div className="mb-2">
                    <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Trust
