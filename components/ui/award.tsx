"use client"

import { motion } from "framer-motion"

interface AwardsProps {
  variant?: "certificate" | "badge" | "medal"
  title: string
  subtitle?: string
  recipient?: string
  issuer?: string
  date?: string
  icon?: React.ReactNode
  credentials?: string
}

export function Awards({
  variant = "certificate",
  title,
  subtitle,
  recipient,
  issuer = "SAP",
  date,
  icon,
  credentials,
}: AwardsProps) {
  if (variant === "certificate") {
    return (
      <motion.div
        className="relative max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="relative p-8 rounded-xl border"
          style={{
            background: "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
            borderColor: "rgba(124, 58, 237, 0.3)",
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: "#7C3AED" }} />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: "#7C3AED" }} />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: "#0ABFBC" }} />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: "#0ABFBC" }} />

          {/* Header */}
          <div className="text-center mb-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)",
                color: "#C4B5FD",
                fontFamily: "var(--font-mono)"
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              {issuer}
            </div>
            
            <p 
              className="text-sm uppercase tracking-[0.3em] mb-2"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}
            >
              SAP Certified Professional
            </p>
            
            <h3 
              className="text-2xl md:text-3xl font-bold"
              style={{ 
                color: "#fff",
                fontFamily: "var(--font-bricolage)"
              }}
            >
              {title}
            </h3>
            
            {subtitle && (
              <p 
                className="mt-2 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Decorative line */}
          <div className="h-px my-6" style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.5) 50%, transparent 100%)"
          }} />

          {/* Recipient */}
          {recipient && (
            <div className="text-center mb-4">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                Presented To
              </p>
              <p 
                className="text-xl font-semibold"
                style={{ 
                  color: "#0ABFBC",
                  fontFamily: "var(--font-bricolage)"
                }}
              >
                {recipient}
              </p>
            </div>
          )}

          {/* Credentials */}
          {credentials && (
            <div className="text-center mb-4 px-4">
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {credentials}
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="flex justify-between items-end mt-6">
            <div>
              {date && (
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Date
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#fff" }}>
                    {date}
                  </p>
                </div>
              )}
            </div>
            
            {icon && (
              <div 
                className="p-3 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(10, 191, 188, 0.1) 100%)",
                  color: "#C4B5FD"
                }}
              >
                {icon}
              </div>
            )}
            
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                Authorized By
              </p>
              <p className="text-sm font-medium" style={{ color: "#fff" }}>
                {issuer}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === "badge") {
    return (
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #0ABFBC 100%)",
          }}
        >
          {icon && <div className="text-white w-10 h-10">{icon}</div>}
        </div>
        <h4 className="text-lg font-bold text-white text-center">{title}</h4>
        {date && <p className="text-sm text-muted-foreground">{date}</p>}
      </motion.div>
    )
  }

  return null
}
