import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Awards } from "@/components/ui/award";
import { CertificatesSection } from "@/components/ui/certificates-scroll";

const issuerLogos: Record<string, React.ReactNode> = {
  SAP: (
    <img src="/images/sap.png" alt="SAP" className="w-8 h-8 object-contain" />
  ),
  LinkedIn: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Microsoft: (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <path fill="#F25022" d="M1 1h10v10H1z"/>
      <path fill="#7FBA00" d="M1 13h10v10H1z"/>
      <path fill="#00A4EF" d="M13 1h10v10H13z"/>
      <path fill="#FFB900" d="M13 13h10v10H13z"/>
    </svg>
  ),
  Google: (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  ),
  Sololearn: (
    <img src="/images/sololearn.png" alt="Sololearn" className="w-8 h-8 rounded" />
  ),
  "6sigmastudy": (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6600"/>
      <text x="4" y="17" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">6σ</text>
    </svg>
  ),
  Forage: (
    <img src="/images/accenture.svg" alt="Forage" className="w-8 h-8 object-contain" />
  ),
};

const certifications = [
  {
    name: "SAP Certified - SAP Generative AI Developer",
    issuer: "SAP",
    year: "2025",
    credential: "434ec971-39eb-4204",
    skills: ["SAP BTP", "SAP AI", "SAP AI Launchpad", "SAP AI Core", "Generative AI Hub"],
    description: "Verified expertise in SAP Business AI capabilities and skills to extend SAP BTP applications using LLMs.",
    featured: true,
  },
  {
    name: "Discovering SAP Business Technology Platform",
    issuer: "SAP",
    year: "2026",
    skills: ["SAP BTP"],
    description: "Comprehensive understanding of SAP BTP services and capabilities.",
    featured: false,
  },
  {
    name: "ABAP for SAP Users",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["ABAP", "SAP Development"],
    description: "ABAP programming skills for SAP customization.",
    featured: false,
  },
  {
    name: "SAP S/4HANA Essential Training",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["SAP S/4HANA", "ERP"],
    description: "Essential training in SAP S/4HANA enterprise resource planning.",
    featured: false,
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    year: "2024",
    skills: ["Generative AI"],
    description: "Fundamentals of generative AI technologies and applications.",
    featured: false,
  },
  {
    name: "Six Sigma Black Belt",
    issuer: "6sigmastudy",
    year: "2024",
    skills: ["Six Sigma", "Process Improvement"],
    description: "Advanced Six Sigma methodology for process optimization and quality control.",
    featured: false,
  },
  {
    name: "Six Sigma Green Belt",
    issuer: "6sigmastudy",
    year: "2024",
    skills: ["Six Sigma", "Quality Management"],
    description: "Foundation in Six Sigma methodologies for process improvement.",
    featured: false,
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "6sigmastudy",
    year: "2024",
    skills: ["Scrum", "Agile", "Project Management"],
    description: "Certified in Scrum framework fundamentals and agile practices.",
    featured: false,
  },
  {
    name: "Accenture Project Management Simulation",
    issuer: "Forage",
    year: "2024",
    skills: ["Project Management", "Agile"],
    description: "Completed project management simulation for Accenture.",
    featured: false,
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2023",
    skills: ["Google Analytics", "Digital Marketing"],
    description: "Google Analytics certification for data-driven marketing decisions.",
    featured: false,
  },
  {
    name: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Generative AI", "Ethics"],
    description: "Understanding ethical considerations in AI development and deployment.",
    featured: false,
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["AI Fundamentals"],
    description: "Core concepts and principles of artificial intelligence.",
    featured: false,
  },
  {
    name: "What Is Generative AI?",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Generative AI"],
    description: "Understanding what generative AI is and how it works.",
    featured: false,
  },
  {
    name: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Generative AI", "Search"],
    description: "How generative AI is transforming online search and information discovery.",
    featured: false,
  },
  {
    name: "Generative AI in Learning and Development",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Generative AI", "L&D"],
    description: "Applying generative AI in learning and professional development.",
    featured: false,
  },
  {
    name: "Generative AI for Digital Marketers",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Generative AI", "Digital Marketing"],
    description: "Using generative AI tools for marketing campaigns and content creation.",
    featured: false,
  },
  {
    name: "Shopify Essential Training",
    issuer: "LinkedIn",
    year: "2024",
    skills: ["Shopify", "E-commerce"],
    description: "Building and managing Shopify stores.",
    featured: false,
  },
  {
    name: "Python",
    issuer: "Sololearn",
    year: "2020",
    skills: ["Python", "Backend"],
    description: "Python programming fundamentals.",
    featured: false,
  },
  {
    name: "React + Redux",
    issuer: "Sololearn",
    year: "2020",
    skills: ["React", "Redux", "Frontend"],
    description: "React framework with Redux state management.",
    featured: false,
  },
  {
    name: "SQL Fundamentals",
    issuer: "Sololearn",
    year: "2020",
    skills: ["SQL", "Database"],
    description: "SQL database querying and management.",
    featured: false,
  },
  {
    name: "JavaScript",
    issuer: "Sololearn",
    year: "2020",
    skills: ["JavaScript", "Web Development"],
    description: "JavaScript programming fundamentals.",
    featured: false,
  },
  {
    name: "HTML Fundamentals",
    issuer: "Sololearn",
    year: "2020",
    skills: ["HTML5", "Web Structure"],
    description: "HTML markup language for web development.",
    featured: false,
  },
  {
    name: "CSS",
    issuer: "Sololearn",
    year: "2020",
    skills: ["CSS3", "Web Styling"],
    description: "CSS styling for web pages.",
    featured: false,
  },
  {
    name: "PHP",
    issuer: "Sololearn",
    year: "2020",
    skills: ["PHP", "Backend"],
    description: "PHP server-side scripting.",
    featured: false,
  },
  {
    name: "jQuery",
    issuer: "Sololearn",
    year: "2020",
    skills: ["jQuery", "JavaScript Library"],
    description: "jQuery JavaScript library fundamentals.",
    featured: false,
  },
  {
    name: "Swift 4 Fundamentals",
    issuer: "Sololearn",
    year: "2020",
    skills: ["Swift", "iOS Development"],
    description: "Swift programming for iOS apps.",
    featured: false,
  },
  {
    name: "Ruby",
    issuer: "Sololearn",
    year: "2020",
    skills: ["Ruby", "Backend"],
    description: "Ruby programming language fundamentals.",
    featured: false,
  },
];

const expertise = [
  "SAP Generative AI",
  "SAP BTP",
  "LLM Integration",
  "Prompt Engineering",
  "AI Agent Development",
  "Generative AI",
  "RAG Systems",
  "SAP S/4HANA",
  "Six Sigma",
  "Scrum & Agile",
  "React & JavaScript",
  "HTML5 & CSS3",
  "Python",
  "SQL",
  "PHP",
  "jQuery",
  "Shopify Development",
  "Project Management",
  "Digital Marketing",
  "Process Improvement",
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-brand mb-4">About Me</span>
              <h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6" 
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Khalid Shaikh
              </h1>
              <p className="text-xl md:text-2xl text-gradient max-w-3xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
                AI Enthusiast • SAP Certified Developer • Builder
              </p>
            </div>

            <div className="glass-card p-8 md:p-12 mb-12">
              <div className="prose prose-invert max-w-none">
                <h2 style={{ fontFamily: "var(--font-bricolage)", fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
                  The AI Journey
                </h2>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                  I&apos;m an AI enthusiast who actively explores the intersection of enterprise technology and artificial intelligence. My focus areas include LLMs, AI-driven workflows, enterprise AI architecture, and building intelligent systems that solve real business problems.
                </p>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8, fontSize: "1.1rem", marginTop: "1.5rem" }}>
                  As a <strong style={{ color: "#C4B5FD" }}>SAP Certified Generative AI Developer</strong>, I bridge the gap between cutting-edge AI capabilities and enterprise-scale deployment. I believe AI is transforming how businesses operate — from rule-based systems to predictive analytics to generative AI and now agentic AI.
                </p>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8, fontSize: "1.1rem", marginTop: "1.5rem" }}>
                  At <strong style={{ color: "#5EEAD4" }}>NOSHTEK</strong>, I build AI workflows and automations that think for themselves. LLM integrations, AI agents, smart pipelines — vibe-coded apps that solve real problems and ship in a weekend.
                </p>
              </div>
            </div>

            {/* Featured Certificate */}
            <div className="mb-16">
              <Awards
                variant="certificate"
                title="SAP Generative AI Developer"
                subtitle="Verified expertise in SAP Business AI capabilities and skills to extend SAP BTP applications using LLMs."
                recipient="Khalid Shaikh"
                issuer="SAP"
                date="March 2026"
                credentials="SAP BTP, SAP AI, SAP AI Launchpad, SAP AI Core, Generative AI Hub, LLM Integration, Prompt Engineering, Enterprise AI Workflows"
                icon={
                  <img src="/images/sap.png" alt="SAP" className="w-10 h-10 object-contain" />
                }
              />
            </div>

            {/* Scrolling Certificates */}
            <CertificatesSection 
              certificates={certifications.filter(c => !c.featured)} 
              issuerLogos={issuerLogos} 
            />

            <div className="glass-card p-8 mb-12">
              <h2 
                className="text-2xl font-bold text-white mb-6" 
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="badge badge-accent"
                    style={{ fontSize: "0.8rem", padding: "8px 16px" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <TestimonialsSection />
            </div>

            <div className="glass-card p-8">
              <h2 
                className="text-2xl font-bold text-white mb-4" 
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Currently Building
              </h2>
              <div className="prose prose-invert max-w-none">
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8 }}>
                  Building AI agents, exploring LLM integrations, and working on <strong style={{ color: "#5EEAD4" }}>Lean ERP</strong> for Indian SMBs — bringing enterprise-grade AI capabilities to small and medium businesses.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a 
                  href="https://linkedin.com/in/or-khalid-shaikh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "12px 24px", fontSize: "14px" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a 
                  href="/blog" 
                  className="btn-ghost"
                  style={{ padding: "12px 24px", fontSize: "14px" }}
                >
                  Read My Blog
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
