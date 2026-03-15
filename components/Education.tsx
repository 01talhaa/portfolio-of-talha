'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface EducationItem {
  degree: string
  school: string
  field: string
  period: string
  details: string[]
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)',
    school: 'North South University, Dhaka, Bangladesh',
    field: 'Computer Science & Engineering',
    period: '2022 - Present',
    details: [
      'Focus on modern web technologies and system architecture',
      'Strong foundation in algorithms and robust data structures',
      'Active leadership in tech community and entrepreneurship',
    ],
  },
]

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="education" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-[0.02]"></div>
      </div>

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
            04. Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Education
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            Building rigorous foundations in computer science and modern engineering paradigms.
          </p>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-zinc-300 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-zinc-500 font-light">
                    {edu.field}
                  </p>
                </div>
                <div className="sm:text-right">
                  <div className="inline-flex px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <p className="text-xs text-zinc-300 font-medium whitespace-nowrap">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle size={18} className="text-zinc-500 flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-400 font-light leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
