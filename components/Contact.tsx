'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/8801401658685?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abstalha192@gmail.com',
      href: 'mailto:abstalha192@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abu-bakar-siddique-talha',
      href: 'https://www.linkedin.com/in/abu-bakar-siddique-talha-802417215/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/01talhaa',
      href: 'https://github.com/01talhaa',
    },
  ]

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
    <section id="contact" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <motion.div
        className="max-w-5xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            08. Communication
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Initialize Contact
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
            Have an ambitious project, a systemic challenge, or a venture in mind? Let&apos;s engineer the solution together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-transparent border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-medium tracking-wider text-white/80 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-wider text-white/80 uppercase mb-2">
                  Email Configuration
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all"
                  placeholder="john@startup.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium tracking-wider text-white/80 uppercase mb-2">
                  Message Payload
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all resize-none"
                  placeholder="Initiate message payload..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 rounded-xl font-medium tracking-wide bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                {submitted ? 'TRANSMISSION SENT ✓' : 'TRANSMIT MESSAGE'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6 flex flex-col justify-center">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="group p-6 rounded-2xl border border-white/10 bg-transparent transition-all block"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white/80 group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium tracking-tight text-white mb-1">
                        {method.label}
                      </p>
                      <p className="text-sm font-light text-white/80">{method.value}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
