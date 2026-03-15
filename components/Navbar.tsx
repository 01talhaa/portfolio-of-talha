'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#projects' },
    { label: 'Connect', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/40 backdrop-blur-md border-b border-white/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            A B S Talha
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="#contact"
            className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 border-t border-white/5 mt-4 space-y-3 pb-4 relative z-50 bg-black/90 backdrop-blur-xl rounded-b-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-white text-black mx-4 rounded-full font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
