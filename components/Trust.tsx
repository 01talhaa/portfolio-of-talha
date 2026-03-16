'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Zap, Shield, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

interface Achievement {
  title: string
  description: string
  icon: React.ElementType
  category: string
}

const achievements: Achievement[] = [
  {
    title: 'Scalable Architecture',
    description: 'Design and build full-stack systems that handle complex business logic and scale efficiently.',
    icon: Zap,
    category: 'Engineering',
  },
  {
    title: 'Production Systems',
    description: 'End-to-end development of reliable, well-tested applications deployed to production.',
    icon: Trophy,
    category: 'Development',
  },
  {
    title: 'Performance Optimization',
    description: 'Deep focus on optimizing APIs, database queries, and frontend rendering for speed.',
    icon: Target,
    category: 'Technical',
  },
  {
    title: 'Code Quality',
    description: 'Commitment to clean architecture, best practices, and maintainable codebases.',
    icon: Shield,
    category: 'Standards',
  },
]

interface EngineeringProblem {
  title: string
  description: string
  technologies: string[]
}

const engineeringProblems: EngineeringProblem[] = [
  {
    title: 'Marketplace Architecture',
    description: 'Built a full-stack e-commerce platform with complex product management, vendor systems, and order processing. Designed scalable MongoDB schemas and implemented role-based access control.',
    technologies: ['Next.js App Router', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Product Discovery at Scale',
    description: 'Implemented efficient product indexing and search capabilities using MongoDB aggregation pipelines, enabling fast queries across millions of products.',
    technologies: ['MongoDB Indexing', 'Query Optimization', 'Node.js'],
  },
  {
    title: 'Media Pipeline',
    description: 'Built robust image handling system with Cloudinary integration for optimization, resizing, and CDN delivery. Reduced load times and storage costs significantly.',
    technologies: ['Cloudinary', 'Image Optimization', 'Next.js'],
  },
  {
    title: 'Real-time Caching Layer',
    description: 'Implemented Redis caching for supplier queries and frequently accessed data, reducing database load and improving response times by 70%.',
    technologies: ['Redis', 'Node.js', 'Performance Tuning'],
  },
  {
    title: 'Authentication & Security',
    description: 'Designed and implemented secure authentication flows with protected routes, JWT tokens, and role-based permissions across the platform.',
    technologies: ['Next.js', 'Node.js', 'Security'],
  },
]

const Trust = () => {
  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.08,
        delayChildren: isMobile ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] },
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
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            03. Credibility
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Developer Expertise
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Track record of building scalable systems, solving complex technical challenges, and delivering production-grade results.
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
                  <Icon className="text-white/80 group-hover:text-black transition-colors" size={20} />
                </div>

                {/* Content */}
                <div>
                  <div className="mb-2">
                    <span className="text-[10px] font-medium text-white/80 uppercase tracking-widest">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Engineering Section */}
        <motion.div variants={itemVariants} className="mt-24 pt-24 border-t border-white/5">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
              Technical Depth
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Solutions
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-base font-light leading-relaxed">
              Real-world problems solved with modern tech stack and architectural best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engineeringProblems.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="p-8 rounded-3xl border border-white/5 bg-transparent transition-all duration-300"
              >
                <h4 className="text-lg font-medium tracking-tight text-white mb-3">
                  {problem.title}
                </h4>
                <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                  {problem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {problem.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/70 hover:text-white hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Trust
