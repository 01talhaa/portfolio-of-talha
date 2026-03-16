'use client'

import { motion } from 'framer-motion'
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

const experiences = [
  {
    role: 'Founder & Full-Stack Engineer',
    company: 'ShilpoMarket',
    period: '2025 - Present',
    highlights: [
      'Designed and implemented MongoDB product indexing system handling 100k+ SKUs with sub-100ms query response times.',
      'Built multi-tenant marketplace architecture with role-based access control for vendors, buyers, and admins.',
      'Implemented Redis caching layer for supplier queries, reducing database load by 70% and improving response times.',
      'Engineered REST APIs with Node.js/Express for order management, payment processing, and inventory synchronization.',
      'Optimized image pipeline using Cloudinary with auto-resizing and CDN delivery for product galleries.',
      'Architected scalable PostgreSQL schema with proper indexing for complex relational queries across marketplace entities.',
    ],
  },
  {
    role: 'Founder & Lead Developer',
    company: 'PQRIX Tech',
    period: '2024 - Present',
    highlights: [
      'Built high-concurrency SaaS platform handling 1000+ concurrent requests with sub-200ms response times using Node.js clustering.',
      'Implemented JWT-based authentication with refresh token rotation and session management across distributed servers.',
      'Designed real-time dashboard with WebSocket integration for live data updates and analytics streaming.',
      'Optimized frontend rendering with Next.js App Router, achieving Lighthouse scores of 95+ through code splitting and lazy loading.',
      'Set up comprehensive monitoring with structured logging, error tracking, and performance metrics using modern observability tools.',
      'Engineered payment gateway integration with Stripe, handling PCI compliance and secure transaction processing.',
    ],
  },
  {
    role: 'Co-Founder & Lead Developer',
    company: 'Basha Bhara',
    period: '2025 - Present',
    highlights: [
      'Built AI-powered property matching algorithm using embeddings and similarity scoring for accurate tenant-landlord pairing.',
      'Implemented real-time messaging system with Socket.io for instant notifications and seamless communication between users.',
      'Engineered image verification pipeline using computer vision techniques to validate property ownership and authenticity.',
      'Designed secure two-way authentication flow with OTP and document verification for both tenants and landlords.',
      'Built payment gateway integration with escrow mechanism for secure rental transaction processing.',
      'Implemented geo-based search with MongoDB geospatial queries for location-aware property recommendations.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Prospect Bd Ltd.',
    period: '2024 - 2026',
    highlights: [
      'Developed responsive UI components using Next.js and Vue.js with pixel-perfect design implementation and cross-browser compatibility.',
      'Optimized component rendering performance, reducing bundle size by 40% through code splitting and dynamic imports.',
      'Implemented complex state management for multi-step forms and data-heavy dashboards using Redux and Pinia.',
      'Built integration layer for multiple third-party APIs with error handling, retry logic, and request caching.',
      'Collaborated on high-traffic projects (Jobs platform and GrandSampan Resort) handling thousands of daily active users.',
      'Implemented SEO optimization and server-side rendering for improved search visibility and initial page load performance.',
    ],
  },
]

const Experience = () => {
  const isMobile = useIsMobile()

  // On mobile: skip all animation logic entirely — render static HTML instantly
  if (isMobile) {
    return (
      <section id="experience" className="relative py-16 px-4 bg-black overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-3">
            <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
              02. Professional Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Experience & Impact
            </h2>
            <p className="text-white/70 text-base font-light max-w-2xl leading-relaxed">
              A timeline of building ambitious products, architecting robust systems, and delivering measurable impact.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Line */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-[19px] top-12 bottom-[-16px] w-[1px] bg-white/10"></div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-3 top-6 w-3 h-3 rounded-full border-2 border-zinc-500 bg-black z-10 box-content shadow-[0_0_0_6px_black]"></div>

                <div className="ml-12 p-5 rounded-2xl border border-white/5 bg-transparent">
                  <div className="flex flex-col gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-medium tracking-tight text-white mb-0.5">{exp.role}</h3>
                      <p className="text-white/70 text-sm font-medium">{exp.company}</p>
                    </div>
                    <div className="inline-flex self-start px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                      <span className="text-xs font-medium text-white/70 whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-xs text-white/70 font-light leading-relaxed">
                        <span className="text-white/50 flex-shrink-0 mt-0.5">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop: full animated version
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
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            02. Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Experience & Impact
          </h2>
          <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
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
                    <p className="text-white/80 font-medium">{exp.company}</p>
                  </div>
                  <div className="inline-flex px-3 py-1.5 rounded-full border border-white/10 bg-white/5 h-fit">
                    <span className="text-xs font-medium text-white/80 whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4 text-sm text-white/80 font-light leading-relaxed">
                      <span className="text-white/80 flex-shrink-0 mt-1">—</span>
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