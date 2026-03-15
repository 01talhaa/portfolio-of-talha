'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, X, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 px-6 sm:px-8 overflow-hidden flex items-center bg-black">
      {/* Premium minimal background glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-zinc-400 rounded-full blur-[100px] opacity-[0.03] pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left" variants={containerVariants}>
          {/* Avatar & Badge */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
            <motion.div
              layoutId="hero-avatar"
              onClick={() => setIsAvatarExpanded(true)}
              className="relative w-[100px] h-[100px] sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] shrink-0 cursor-pointer group"
            >
              <Image
                src="/profile.png"
                alt="ABS Talha Profile"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
            </motion.div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              />
              <span className="text-[11px] font-medium text-zinc-300 tracking-wide uppercase">
                Currently building ShilpoMarket & BashaBhara
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter text-white">
              Building products that
              <br />
              <span className="gradient-text">
                look sharp, scale
              </span>
              <br />
              and solve problems.
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              Full-stack developer & startup founder. I build scalable web platforms, modern SaaS products, and digital experiences that define the standard.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-4 max-w-lg"
          >
            {[
              { label: 'Full-Stack', icon: '⌘' },
              { label: 'Product', icon: '✦' },
              { label: 'Founder', icon: '▲' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="text-2xl mb-2 text-zinc-500">{badge.icon}</div>
                <div className="text-xs font-medium text-zinc-300">
                  {badge.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
              >
                View Projects <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
            
            {/* Social Links - Mobile/Tablet */}
            <div className="flex items-center gap-2 justify-center lg:hidden">
              <span className="text-xs text-zinc-500 font-medium tracking-wide mr-2">Follow</span>
              <motion.a
                href="https://github.com/talha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full border border-white/20 text-white hover:border-white/40 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/talha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-full border border-white/20 text-white hover:border-white/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual (Abstract Premium Tech Art) */}
        <motion.div variants={itemVariants} className="hidden lg:block relative perspective-1000">
          <div className="flex flex-col items-center gap-8">
            <div className="relative aspect-square max-w-md mx-auto w-full">
              {/* Animated premium glass card */}
              <motion.div
                animate={{ y: [0, -15, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />

                <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-8">
                  <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center shadow-inner">
                    <div className="w-10 h-10 border-t-2 border-r-2 border-white/50 rounded-tr-lg animate-[spin_4s_linear_infinite]" />
                    <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                  </div>

                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      <p className="text-[10px] text-zinc-400 font-mono">SYSTEM_ONLINE</p>
                    </div>
                    <p className="text-xl font-medium tracking-tight text-white">Full-Stack Architecture</p>
                  </div>

                  <div className="w-full flex flex-wrap justify-center gap-2">
                    {['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'].map((tech) => (
                      <div key={tech} className="px-3 py-1.5 rounded-full bg-transparent border border-white/10 text-[11px] font-medium text-zinc-400">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-8 px-4 py-2 rounded-xl border border-white/5 bg-black/50 backdrop-blur-md"
              >
                <div className="text-[10px] text-zinc-500 font-mono mb-1">LOCATION</div>
                <div className="text-xs font-medium text-zinc-300">Dhaka, BD</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-8 right-0 px-4 py-2 rounded-xl border border-white/5 bg-black/50 backdrop-blur-md"
              >
                <div className="text-[10px] text-zinc-500 font-mono mb-1">STATUS</div>
                <div className="text-xs font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Deploying
                </div>
              </motion.div>
            </div>

            {/* Social Links - Desktop (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center items-center gap-4 pt-4"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/30 max-w-xs" />
              <motion.a
                href="https://github.com/talha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0_0_20px_rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-white/20 text-white hover:border-white/50 transition-all duration-300 flex-shrink-0"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/talha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0_0_20px_rgba(255,255,255,0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-white/20 text-white hover:border-white/50 transition-all duration-300 flex-shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/30 max-w-xs" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Full-screen Avatar Modal */}
      <AnimatePresence>
        {isAvatarExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setIsAvatarExpanded(false)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation()
                setIsAvatarExpanded(false)
              }}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              layoutId="hero-avatar"
              className="relative w-full max-w-[280px] sm:max-w-md md:max-w-xl aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.1)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/profile.png"
                alt="ABS Talha Profile Full"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
