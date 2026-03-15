'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Talha has a rare balance of technical execution and product intuition. He doesn\'t just build features—he builds systems. Fast, detail-oriented, and genuinely cares about solving structural problems.',
    author: 'Obaidul Qadir',
    role: 'Founder & CEO',
    company: 'PROSPECT BD LTD',
  },
  {
    quote: 'Working with Talha on scaling challenges has been exceptional. He brings both frontend finesse and backend rigor. Delivered complex architectural projects ahead of timeline with supreme code quality.',
    author: 'MD Saiful Islam Bhuiyan',
    role: 'CMO & Co-Founder',
    company: 'PROSPECT BD LTD',
  },
  {
    quote: 'What impressed me most was talha\'s approach to product design. He doesn\'t just code—he thinks about UX, scalability, and lifecycle impact. A genuine full-stack builder with a true founder\&apos;s mindset.',
    author: 'Anika Tabassum Tisiya',
    role: 'Founder and Team Lead',
    company: 'BASHA BHARA',
  },
]

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="testimonials" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-6xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            07. Client Feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Trusted by Builders
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
            Direct perspectives from founders, engineering leads, and stakeholders I&apos;ve had the privilege to collaborate with.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-white text-white opacity-80" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 mb-8 leading-relaxed font-light text-sm tracking-wide">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{t.author}</p>
                  <p className="text-xs text-white/80">{t.role} <span className="text-white/80 mx-1">•</span> {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
