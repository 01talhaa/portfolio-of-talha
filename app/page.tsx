'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Trust from '@/components/Trust'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Trust />
      <Education />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
