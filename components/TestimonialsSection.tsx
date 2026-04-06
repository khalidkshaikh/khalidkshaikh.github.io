"use client"

import { useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "Khalid is an excellent team player. He has an innate ability to build over his existing skills. Learning is in his DNA and is very focused on Outcomes. Loved working with Khalid for the mere zeal of getting things done.",
    author: "Faisal Sayed",
    role: "Leadership Execution Advisor",
    company: "IIM Alumni | Ex-Vodafone, HP",
  },
  {
    quote: "Khalid is a highly skilled web developer and digital marketer with four years of invaluable experience. His technical proficiency, creative problem-solving, and attention to detail have consistently resulted in the successful execution of projects.",
    author: "Samad Shaikh",
    role: "AWS | CloudOps | SQL",
    company: "Customer Management",
  },
  {
    quote: "Khalid is an absolute pleasure to work with. He is super cheerful and humorous, always an amazing member to have in any team. Khalid is proactive, result oriented, and technically sound.",
    author: "Maitralee Abnav",
    role: "Sr. Graphic Designer",
    company: "Ex Mensa Brands | NIFT Alumni",
  },
  {
    quote: "Khalid is extremely disciplined and knows what he has to do to get the work done. As a professional Shopify developer, he has great understanding and he is the one you go to when you have any problems.",
    author: "Pooja Biradar",
    role: "Manager- Social Media Marketing",
    company: "Ex-Mensa Brands",
  },
]

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <div className="w-full">
      <h2 
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" 
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        What People Say
      </h2>
      
      <div
        ref={containerRef}
        className="relative max-w-3xl mx-auto"
        style={{ cursor: "none" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Custom magnetic cursor */}
        <motion.div
          className="pointer-events-none absolute z-50"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)",
            }}
            animate={{
              width: isHovered ? 80 : 0,
              height: isHovered ? 80 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <motion.span
              className="text-white text-xs font-bold uppercase tracking-wider"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            >
              Next
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Floating index indicator */}
        <motion.div
          className="absolute top-6 right-4 flex items-baseline gap-1"
          style={{ fontFamily: "var(--font-mono)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="text-3xl font-light"
            style={{ color: "#C4B5FD" }}
            key={activeIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>/</span>
          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Stacked avatar previews */}
        <motion.div
          className="absolute top-6 left-4 flex -space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`w-8 h-8 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                i === activeIndex ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0a0e1a]" : "grayscale opacity-50"
              }`}
              whileHover={{ scale: 1.1, opacity: 1 }}
              onClick={() => setActiveIndex(i)}
            >
              <div 
                className="w-full h-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)",
                  color: "#fff",
                }}
              >
                {t.author.split(' ').map(n => n[0]).join('')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main testimonial card */}
        <motion.div
          className="glass-card p-10 md:p-14 pt-24 cursor-pointer"
          layout
          onClick={handleNext}
        >
          {/* Quote icon */}
          <div 
            className="absolute top-12 left-8 text-6xl opacity-10"
            style={{ color: "#7C3AED" }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className="relative z-10 text-xl md:text-2xl font-light leading-relaxed tracking-tight min-h-[150px]"
              style={{ color: "var(--color-text)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SplitText text={currentTestimonial.quote} />
            </motion.div>
          </AnimatePresence>

          {/* Author info */}
          <motion.div className="mt-10 relative" layout>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {/* Avatar */}
                <div className="relative w-14 h-14">
                  <motion.div
                    className="absolute -inset-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED 0%, #0ABFBC 100%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div 
                    className="absolute inset-[2px] rounded-full flex items-center justify-center text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, #1e293b 0%, #111827 100%)",
                      color: "#fff",
                      fontFamily: "var(--font-bricolage)"
                    }}
                  >
                    {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Author details */}
                <div className="relative pl-4">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ 
                      background: "linear-gradient(180deg, #0ABFBC 0%, #7C3AED 100%)",
                    }}
                  />
                  <span 
                    className="block text-base font-semibold tracking-wide"
                    style={{ color: "#fff" }}
                  >
                    {currentTestimonial.author}
                  </span>
                  <span 
                    className="block text-xs mt-1"
                    style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
                  >
                    {currentTestimonial.role} — {currentTestimonial.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 mb-6 h-px relative overflow-hidden" style={{ background: "var(--color-border)" }}>
            <motion.div
              className="absolute inset-y-0 left-0"
              style={{ background: "linear-gradient(90deg, #7C3AED 0%, #0ABFBC 100%)" }}
              initial={{ width: "0%" }}
              animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between items-center">
            <span 
              className="text-[10px] uppercase tracking-widest"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
            >
              Click to navigate
            </span>
            <div className="flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="p-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff"
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--color-text-muted)"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ 
                  background: "linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%)",
                  color: "#fff"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8" : "w-2"
              }`}
              style={{
                background: i === activeIndex 
                  ? "linear-gradient(90deg, #7C3AED 0%, #0ABFBC 100%)" 
                  : "rgba(255,255,255,0.2)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
