'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:talha@example.com', label: 'Email' },
  ]

  const footerLinks = [
    {
      heading: 'Navigation',
      links: [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Snippets', href: '#' },
        { label: 'Resume', href: '#' },
        { label: 'Contacts', href: '#contact' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Twitter', href: '#' },
        { label: 'Email', href: 'mailto:talha@example.com' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Section */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1 space-y-6">
            <h3 className="text-xl font-medium tracking-tight text-white">
              A B S Talha
            </h3>
            <p className="text-sm font-light text-zinc-500 leading-relaxed">
              Engineering scalable platforms, leading technical architectures, and constructing the future of the web.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:border-white text-zinc-400 hover:text-black transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-medium tracking-tight text-white mb-6">
                {section.heading}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ExternalLink
                          size={12}
                          className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-zinc-600"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10"></div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-light text-zinc-500">
            © {new Date().getFullYear()} ABS Talha. All rights reserved. Code deployed via edge network.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs font-mono text-zinc-600">SYSTEM.STATUS: ONLINE</p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
