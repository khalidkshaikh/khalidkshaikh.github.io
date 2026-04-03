"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Project = {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  status: "live" | "archived";
  href: string | null;
  accentColor: string;
  icon: string;
  category: string;
};

const projects: Project[] = [
  {
    name: "Karagiri",
    domain: "karagiri.com",
    tagline: "Ethnic Fashion",
    description: "Indian ethnic wear e-commerce with handcrafted sarees and traditional attire. Complete Shopify store with custom theme.",
    status: "live",
    href: "https://karagiri.com",
    accentColor: "#EC4899",
    icon: "👗",
    category: "E-commerce",
  },
  {
    name: "CollabCubicles",
    domain: "collabcubicles.com",
    tagline: "Coworking Spaces",
    description: "Coworking space discovery and booking platform. Built with modern booking system and space management.",
    status: "live",
    href: "https://collabcubicles.com",
    accentColor: "#8B5CF6",
    icon: "🏢",
    category: "SaaS",
  },
  {
    name: "Noshtek",
    domain: "noshtek.com",
    tagline: "Food Tech",
    description: "Food tech startup platform with restaurant discovery and ordering capabilities.",
    status: "live",
    href: "https://noshtek.com",
    accentColor: "#F97316",
    icon: "🍔",
    category: "E-commerce",
  },
  {
    name: "MedRelief",
    domain: "medrelief.co.in",
    tagline: "Healthcare",
    description: "Healthcare appointment booking and medical services platform for Indian patients.",
    status: "live",
    href: "https://medrelief.co.in",
    accentColor: "#10B981",
    icon: "🏥",
    category: "Healthcare",
  },
  {
    name: "Ranreet",
    domain: "ranreet.com",
    tagline: "Lifestyle",
    description: "Lifestyle and fashion e-commerce with curated collections and seamless checkout.",
    status: "live",
    href: "https://ranreet.com",
    accentColor: "#EF4444",
    icon: "✨",
    category: "E-commerce",
  },
  {
    name: "Nitaraa",
    domain: "nitaraa.com",
    tagline: "Beauty & Wellness",
    description: "Beauty and wellness products e-commerce with subscription model.",
    status: "live",
    href: "https://nitaraa.com",
    accentColor: "#EC4899",
    icon: "💄",
    category: "E-commerce",
  },
  {
    name: "HomeRun Burger",
    domain: "homerunburger.com",
    tagline: "Food Delivery",
    description: "Artisan burger joint with online ordering and delivery tracking.",
    status: "live",
    href: "https://homerunburger.com",
    accentColor: "#FBBF24",
    icon: "🍔",
    category: "E-commerce",
  },
  {
    name: "Olive Route",
    domain: "oliveroute.com",
    tagline: "Premium Fashion",
    description: "Premium fashion e-commerce featuring international brands and luxury collections.",
    status: "archived",
    href: null,
    accentColor: "#84CC16",
    icon: "🛍️",
    category: "E-commerce",
  },
  {
    name: "Steamz",
    domain: "steamz.io",
    tagline: "Gaming Platform",
    description: "Gaming marketplace and community platform for indie game discovery.",
    status: "archived",
    href: null,
    accentColor: "#6366F1",
    icon: "🎮",
    category: "Gaming",
  },
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filters = [
    { label: "All", count: projects.length },
    { label: "Live", count: projects.filter(p => p.status === "live").length },
    { label: "Archived", count: projects.filter(p => p.status === "archived").length },
  ];

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Live") return p.status === "live";
    if (activeFilter === "Archived") return p.status === "archived";
    return true;
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, var(--color-bg-dark) 50%, rgba(15, 23, 42, 0.5) 100%)",
      }}
    >
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="wrap relative z-10">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#8B5CF6", boxShadow: "0 0 10px #8B5CF6" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#8B5CF6", letterSpacing: "0.15em" }}
              >
                Portfolio
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Projects I&apos;ve Built
            </h2>
            <p
              className="text-base max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}
            >
              From e-commerce stores to SaaS platforms - {projects.filter(p => p.status === "live").length} live sites, {projects.filter(p => p.status === "archived").length} archived projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.label;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    background: isActive ? "rgba(139, 92, 246, 0.2)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${isActive ? "rgba(139, 92, 246, 0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: isActive ? "#C4B5FD" : "var(--color-text-muted)",
                  }}
                >
                  {filter.label} ({filter.count})
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.name}
                className={`relative rounded-2xl p-6 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  animationDelay: `${i * 100}ms`,
                }}
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    padding: "1px",
                    background: `linear-gradient(145deg, ${project.accentColor}30, ${project.accentColor}10)`,
                    opacity: hoveredProject === project.name ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <div
                  className="relative rounded-xl h-full"
                  style={{
                    background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
                    minHeight: "280px",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                      style={{
                        background: `${project.accentColor}15`,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.status === "live" ? (
                        <span
                          className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider"
                          style={{ color: "#10B981" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ background: "#10B981" }}
                          />
                          Live
                        </span>
                      ) : (
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "var(--color-text-muted)",
                          }}
                        >
                          Archived
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-bricolage)" }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-xs font-medium mb-2"
                      style={{ color: project.accentColor }}
                    >
                      {project.domain}
                    </p>
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{
                        background: `${project.accentColor}10`,
                        color: project.accentColor,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p
                    className="text-xs leading-relaxed mb-6"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {project.description}
                  </p>

                  <div className="absolute bottom-6 left-6 right-6">
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold transition-all duration-300 group"
                        style={{ color: project.accentColor }}
                      >
                        Visit Site
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 text-xs font-medium"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 6h18M3 12h18M3 18h18" />
                        </svg>
                        Project Archived
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 text-center"
          >
            <div
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
              }}
            >
              <span className="text-xl">🚀</span>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                More projects available on{" "}
                <Link
                  href="https://github.com/xdrkzx1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2"
                  style={{ color: "#C4B5FD" }}
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
