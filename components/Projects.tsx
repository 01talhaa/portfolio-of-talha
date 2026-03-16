'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { projectsData } from '@/data/projects'

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

const Projects = () => {
  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0 : 0.2, delayChildren: isMobile ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="projects" className="relative py-32 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-7xl mx-auto z-10 relative"
        variants={containerVariants}
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-24 space-y-6">
          <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
            05. Featured Work
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Selected Projects
          </h2>
          <p className="text-lg text-white/80 font-light max-w-2xl">
            Curated selection of engineering and product work built with precision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projectsData.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group"
            >
              {/* Image - alternates left/right */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden cursor-pointer">
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 z-20 pointer-events-none" />
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </Link>
              </motion.div>

              {/* Content - alternates left/right */}
              <motion.div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-medium text-white tracking-wide uppercase">Featured</span>
                  </motion.div>
                )}

                {/* Title */}
                <Link href={`/projects/${project.slug}`}>
                  <motion.h3
                    whileHover={{ x: 4 }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight text-white transition-colors hover:text-white/80 cursor-pointer"
                  >
                    {project.title}
                  </motion.h3>
                </Link>

                {/* Descriptions */}
                <div className="space-y-3">
                  <p className="text-base font-medium text-white/80 tracking-wide">
                    {project.shortDesc}
                  </p>
                  <p className="text-base text-white/80 font-light leading-relaxed max-w-2xl">
                    {project.fullDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.slice(0, 6).map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/15 text-white/80 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/80">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                {/* CTA Footer */}
                <div className="flex gap-4 items-center pt-4">
                  <Link href={`/projects/${project.slug}`}>
                    <motion.button
                      whileHover={{ x: 6 }}
                      whileTap={{ x: 2 }}
                      className="text-white font-medium text-sm flex items-center gap-2.5 group/btn"
                    >
                      View Details
                      <motion.div>
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </motion.button>
                  </Link>

                  <div className="flex gap-2 ml-auto">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
                        aria-label="View Live"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
                        aria-label="View Code"
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
