'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(100)
  const containerRef = useRef<HTMLDivElement>(null)

  // Keyboard controls
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null)
        setZoom(100)
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, images.length])

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex])

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length))
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 20, 300))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 20, 100))
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  return (
    <>
      {/* Gallery Grid */}
      <section className="mb-24 space-y-6">
        {/* Main Cover Image */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => setSelectedIndex(0)}
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 bg-white/5 group">
            <Image
              src={images[0]}
              alt={`${projectTitle} Cover`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur"
              >
                <ZoomIn size={24} className="text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid (if multiple images present) */}
        {images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.slice(1).map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
                onClick={() => setSelectedIndex(idx + 1)}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
                  <Image
                    src={img}
                    alt={`${projectTitle} Gallery Image ${idx + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="p-3 rounded-full bg-white/20 backdrop-blur"
                    >
                      <ZoomIn size={20} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => {
              setSelectedIndex(null)
              setZoom(100)
            }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(null)
                setZoom(100)
              }}
              className="absolute top-4 sm:top-8 right-4 sm:right-8 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110] group"
              aria-label="Close gallery"
            >
              <X size={24} className="text-white group-hover:scale-110 transition-transform" />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-4 sm:top-8 left-4 sm:left-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium text-white"
            >
              {selectedIndex + 1} / {images.length}
            </motion.div>

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-h-[90vh] max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full h-full flex items-center justify-center overflow-auto"
                onWheel={handleWheel}
              >
                <motion.div
                  animate={{ scale: zoom / 100 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                  style={{ transformOrigin: 'center center' }}
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`${projectTitle} Image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4 z-[110]">
              {/* Zoom Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomOut()
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} className="text-white" />
                </button>
                <div className="flex items-center px-3 text-sm font-medium text-white min-w-[50px] text-center">
                  {zoom}%
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomIn()
                  }}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} className="text-white" />
                </button>
              </motion.div>

              {/* Navigation Arrows */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex gap-2"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrev()
                  }}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors group"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors group"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-xs text-zinc-400 pointer-events-none px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur border border-white/10 hidden sm:block"
            >
              ← → to navigate • Scroll to zoom • ESC to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
