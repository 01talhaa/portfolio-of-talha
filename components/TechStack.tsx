'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Code2,
  Database,
  Lock,
  Cloud,
  Zap,
  Boxes,
  GitBranch,
  Palette,
  BookOpen,
  Network,
  Flame,
  Package,
  RefreshCw,
  Shield,
  Monitor,
  CircleDot,
} from 'lucide-react'

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

const iconMap: Record<string, React.ReactNode> = {
  'React & Next.js': <Code2 className="w-5 h-5" />,
  'TypeScript': <Shield className="w-5 h-5" />,
  'Tailwind CSS': <Palette className="w-5 h-5" />,
  'Framer Motion': <Zap className="w-5 h-5" />,
  'Zustand': <CircleDot className="w-5 h-5" />,
  'WebSockets': <Network className="w-5 h-5" />,
  'Node.js & Express': <Package className="w-5 h-5" />,
  'REST & GraphQL': <Monitor className="w-5 h-5" />,
  'Serverless Functions': <Cloud className="w-5 h-5" />,
  'JWT Authentication': <Lock className="w-5 h-5" />,
  'Microservices': <Boxes className="w-5 h-5" />,
  'PostgreSQL & Prisma': <Database className="w-5 h-5" />,
  'MongoDB & Mongoose': <Database className="w-5 h-5" />,
  'Firebase': <Flame className="w-5 h-5" />,
  'Redis': <Database className="w-5 h-5" />,
  'Vercel': <Zap className="w-5 h-5" />,
  'AWS Fundamentals': <Cloud className="w-5 h-5" />,
  'Docker': <Package className="w-5 h-5" />,
  'CI/CD Pipelines': <RefreshCw className="w-5 h-5" />,
  'GitHub Actions': <GitBranch className="w-5 h-5" />,
  'Figma Prototyping': <Palette className="w-5 h-5" />,
  'Git Version Control': <GitBranch className="w-5 h-5" />,
  'Notion': <BookOpen className="w-5 h-5" />,
  'VS Code': <Code2 className="w-5 h-5" />,
}

const techStack = [
  {
    category: 'Architecture & Frontend',
    items: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'WebSockets'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js & Express', 'REST & GraphQL', 'Serverless Functions', 'JWT Authentication', 'Microservices'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL & Prisma', 'MongoDB & Mongoose', 'Firebase', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['Vercel', 'AWS Fundamentals', 'Docker', 'CI/CD Pipelines', 'GitHub Actions'],
  },
  {
    category: 'Workflow & Design',
    items: ['Figma Prototyping', 'Git Version Control', 'Notion', 'VS Code'],
  },
]

const TechStack = () => {
  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0 : 0.08, delayChildren: isMobile ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="tech" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-6xl mx-auto z-10 relative"
        variants={containerVariants}
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-4">
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            06. Engineering Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technology Stack
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
            A comprehensive overview of the sophisticated tooling utilized to engineer reliable, hyper-scalable, and performant architectures.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-12">
          {techStack.map((cat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/80">0{idx + 1}</span>
                <h3 className="text-lg font-medium tracking-tight text-white">{cat.category}</h3>
                <div className="h-px flex-grow bg-white/5"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-all cursor-default flex items-center gap-2.5 hover:bg-white/10"
                  >
                    <span className="text-white/60 group-hover:text-white/80 transition-colors">
                      {iconMap[tech]}
                    </span>
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TechStack
