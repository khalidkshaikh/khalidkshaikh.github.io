"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Marquee } from "@/components/ui/marquee"

interface Project {
  name: string
  domain: string
  tagline: string
  description: string
  status: "live" | "archived"
  href: string | null
  accentColor: string
  category: string
  logo: string
  whiteLogo?: boolean
}

const projects: Project[] = [
  {
    name: "Karagiri",
    domain: "karagiri.com",
    tagline: "Saree Brand",
    description: "Premium Indian ethnic wear e-commerce specializing in handcrafted sarees.",
    status: "live",
    href: "https://karagiri.com",
    accentColor: "#EC4899",
    category: "E-commerce",
    logo: "/karagiri.avif",
    whiteLogo: false,
  },
  {
    name: "Ranreet",
    domain: "ranreet.com",
    tagline: "Saree Brand",
    description: "Elegant saree brand with curated collections.",
    status: "live",
    href: "https://ranreet.com",
    accentColor: "#EF4444",
    category: "E-commerce",
    logo: "/ranreet.avif",
    whiteLogo: false,
  },
  {
    name: "CollabCubicles",
    domain: "collabcubicles.com",
    tagline: "Coworking Spaces",
    description: "Coworking space discovery and booking platform.",
    status: "live",
    href: "https://collabcubicles.com",
    accentColor: "#8B5CF6",
    category: "SaaS",
    logo: "/collab.png",
    whiteLogo: false,
  },
  {
    name: "Convista",
    domain: "convista.com",
    tagline: "Consulting",
    description: "SAP consulting and digital transformation.",
    status: "live",
    href: "https://convista.com",
    accentColor: "#0066CC",
    category: "Consulting",
    logo: "/convista-negative.png",
    whiteLogo: true,
  },
  {
    name: "Noshtek",
    domain: "noshtek.com",
    tagline: "SAP Consulting",
    description: "SAP consulting firm for businesses across North America.",
    status: "live",
    href: "https://noshtek.com",
    accentColor: "#F97316",
    category: "Consulting",
    logo: "favicon",
    whiteLogo: true,
  },
  {
    name: "MedRelief",
    domain: "medrelief.co.in",
    tagline: "Laboratory",
    description: "Medical laboratory services in Bihar, India.",
    status: "live",
    href: "https://medrelief.co.in",
    accentColor: "#10B981",
    category: "Healthcare",
    logo: "/mr-logo.png",
  },
  {
    name: "HomeRun Burger",
    domain: "homerunburger.com",
    tagline: "Burger Joint",
    description: "Artisan burger joint in the USA.",
    status: "live",
    href: "https://homerunburger.com",
    accentColor: "#FBBF24",
    category: "E-commerce",
    logo: "favicon",
    whiteLogo: true,
  },
  {
    name: "Beef O Brady's",
    domain: "beefobradys.com",
    tagline: "Restaurant",
    description: "Sports bar and restaurant chain.",
    status: "live",
    href: "https://beefobradys.com",
    accentColor: "#DC2626",
    category: "E-commerce",
    logo: "/beef-original.png",
    whiteLogo: true,
  },
  {
    name: "Dastaan",
    domain: "dastaan.com",
    tagline: "Fashion",
    description: "Ethnic fashion and lifestyle brand.",
    status: "live",
    href: "https://www.dastaanbistro.ca/",
    accentColor: "#7C3AED",
    category: "E-commerce",
    logo: "/dastaan.png",
    whiteLogo: false,
  },
  {
    name: "Old Town Grocery",
    domain: "oldtowngrocery.com",
    tagline: "Grocery",
    description: "Traditional grocery and provisions.",
    status: "live",
    href: "https://www.facebook.com/Oldetownesupermarket/",
    accentColor: "#65A30D",
    category: "E-commerce",
    logo: "/otg-trans.png",
    whiteLogo: false,
  },
  {
    name: "Olive Route",
    domain: "oliveroute.com",
    tagline: "Halal Store",
    description: "India's first halal store.",
    status: "archived",
    href: "https://www.instagram.com/olive.route/",
    accentColor: "#84CC16",
    category: "E-commerce",
    logo: "/olive-trans.png",
    whiteLogo: false,
  },
  {
    name: "Steamz",
    domain: "steamz.io",
    tagline: "Men's Fashion",
    description: "Men's fashion brand.",
    status: "archived",
    href: "https://www.facebook.com/wearsteamz/",
    accentColor: "#6366F1",
    category: "E-commerce",
    logo: "/steamz-new.png",
    whiteLogo: false,
  },
]

function getLogoUrl(project: Project): string {
  if (project.logo === "favicon") {
    return `https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`
  }
  return project.logo
}

function getLogoStyle(project: Project): React.CSSProperties {
  const logosWithoutFilter = ["/otg-trans.png", "/olive-trans.png"]
  if (logosWithoutFilter.includes(project.logo)) {
    return {}
  }
  return { filter: "brightness(0) invert(1)" }
}

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [containerRect, setContainerRect] = useState({ left: 0, top: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setContainerRect({ left: rect.left, top: rect.top })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerRect({ left: rect.left, top: rect.top })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-16"
      style={{ background: "var(--color-surface-2)" }}
    >
      <div className="wrap">
        <div className="text-center mb-8 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--color-brand-light)", boxShadow: "0 0 10px var(--color-brand-light)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-brand-light)", letterSpacing: "0.15em" }}
            >
              Portfolio
            </span>
          </div>
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em" }}
          >
            Brands I have worked with
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Consulting in Technology, Food & Beverage, and FMCG industries.
          </p>
        </div>

        <Marquee pauseOnHover className="py-2">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.href ?? "#"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noopener noreferrer" : undefined}
              className="mx-6 flex items-center justify-center w-28 h-16 rounded-lg transition-all duration-300 p-2"
              style={{ 
                opacity: 0.5,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                handleMouseEnter(index)
                e.currentTarget.style.borderColor = `${project.accentColor}60`
                e.currentTarget.style.boxShadow = `0 0 20px ${project.accentColor}40`
                e.currentTarget.style.opacity = "1"
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
              }}
              onMouseLeave={(e) => {
                handleMouseLeave()
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
                e.currentTarget.style.boxShadow = "none"
                e.currentTarget.style.opacity = "0.5"
                e.currentTarget.style.background = "rgba(255,255,255,0.05)"
              }}
            >
              <img
                src={getLogoUrl(project)}
                alt={project.name}
                className="max-w-full max-h-full object-contain"
                style={getLogoStyle(project)}
              />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default ProjectShowcase
