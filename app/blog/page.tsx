import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = [
    {
      tag: "Engineering",
      tagColor: "#F472B6",
      title: "Vibe-Coding Real Operator Tools: How I Use AI Agents to Go from Idea to Deployed MVP",
      excerpt: "I'm not a great coder. But in the last 6 months, I've built a lab ERP, restaurant bots, and inventory tools. Here's how I use AI to code faster.",
      readTime: "10 min read",
      date: "Mar 2026",
      href: "/blog/vibe-coding",
    },
    {
      tag: "Product",
      tagColor: "#0ABFBC",
      title: "Operator-First AI Workflows: How to Go from Chatbot Demos to Real Process Automation",
      excerpt: "Most AI demos are entertainment. Operator-first workflows are leverage. Here's how to build AI that actually does your work.",
      readTime: "9 min read",
      date: "Mar 2026",
      href: "/blog/operator-first-ai",
    },
    {
      tag: "Guide",
      tagColor: "#34d399",
      title: "Zapier vs Agent Platforms vs Custom ERP: How Operators Should Actually Choose",
      excerpt: "The wrong automation choice = wasted money and technical debt. The right choice = 10x leverage. Here's the decision framework.",
      readTime: "8 min read",
      date: "Mar 2026",
      href: "/blog/zapier-vs-agent-platforms",
    },
    {
      tag: "QSR",
      tagColor: "#60A5FA",
      title: "Designing an AI 'Brain' for QSR Chains and Cloud Kitchens",
      excerpt: "One brain that sees all outlets. Demand forecast, labor scheduling, inventory transfer, and financial recon — all automated.",
      readTime: "10 min read",
      date: "Mar 2026",
      href: "/blog/ai-brain-qsr",
    },
    {
      tag: "Restaurant",
      tagColor: "#F472B6",
      title: "From Missed Calls to AI Order Takers: Automating Front-of-House",
      excerpt: "AI voice agents that take orders 24/7. Here's the architecture, the costs, and how to implement in 2 weeks.",
      readTime: "7 min read",
      date: "Mar 2026",
      href: "/blog/ai-order-takers",
    },
    {
      tag: "Restaurant",
      tagColor: "#F472B6",
      title: "AI ERP for Multi-Outlet Restaurants: Inventory, Billing, and Kitchen Intelligence",
      excerpt: "From disconnected spreadsheets to unified AI-powered operations. The maturity model for Indian restaurant chains.",
      readTime: "9 min read",
      date: "Mar 2026",
      href: "/blog/ai-restaurant-erp",
    },
    {
      tag: "Architecture",
      tagColor: "#B794F4",
      title: "Designing an Agentic Diagnostics ERP: From Orders to Outcomes",
      excerpt: "The unified model where agents sit at the core, not as add-ons. Module-by-module agent design for diagnostic chains.",
      readTime: "12 min read",
      date: "Mar 2026",
      href: "/blog/agentic-diagnostics-erp",
    },
    {
      tag: "Product",
      tagColor: "#0ABFBC",
      title: "Agentic AI for Small Clinics: Automate Without Breaking Compliance",
      excerpt: "Three agents every small clinic can deploy today. Appointment scheduling, follow-up reminders, and prescription refills.",
      readTime: "7 min read",
      date: "Mar 2026",
      href: "/blog/agentic-ai-clinics",
    },
    {
      tag: "Technical",
      tagColor: "#34d399",
      title: "From LIMS to Autonomous Lab Operations: Designing Agent Workflows",
      excerpt: "Four agent blueprints that actually work for Indian labs. Smart routing, report dispatch, credit control, and inventory reorder.",
      readTime: "10 min read",
      date: "Mar 2026",
      href: "/blog/autonomous-lab-operations",
    },
    {
      tag: "Architecture",
      tagColor: "#B794F4",
      title: "AI Agents for NABL-Ready Labs: A Playbook for Indian Diagnostics",
      excerpt: "AI agents that see, decide, and act. The architecture, the implementation roadmap, and the ROI for diagnostic labs.",
      readTime: "8 min read",
      date: "Mar 2026",
      href: "/blog/nabl-ready-labs",
    },
    {
      tag: "Architecture",
      tagColor: "#B794F4",
      title: "How I Built 3 Android Apps as a Solo Dev - Architecture & Lessons",
      excerpt: "From idea to APK - the tools, patterns, and tradeoffs I used to ship three Android apps without a team.",
      readTime: "8 min read",
      date: "Mar 2026",
      href: "/blog/android-apps-solo-dev",
    },
    {
      tag: "Performance",
      tagColor: "#34d399",
      title: "Building Client-Side PDF Tools: Why WebAssembly Changes Everything",
      excerpt: "Zero server costs, zero privacy concerns, and faster processing than most cloud solutions. Here's how.",
      readTime: "6 min read",
      date: "Mar 2026",
      href: "/blog/client-side-pdf-tools",
    },
    {
      tag: "Product",
      tagColor: "#0ABFBC",
      title: "Lean ERP for Indian SMBs: What the Market Actually Needs",
      excerpt: "After talking to 40+ operations managers in Indian manufacturing, here's what they told me they actually need.",
      readTime: "10 min read",
      date: "Feb 2026",
      href: "/blog/lean-erp-india",
    },
  ];

  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              Blog
            </h1>
            <p className="text-lg" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
              Writing about building, shipping, and everything in between.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="glass-card group block p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}30`,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs ml-auto" style={{ color: "var(--color-text-muted)" }}>
                    {post.date}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all" style={{ fontFamily: "var(--font-bricolage)" }}>
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>
                    {post.readTime}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "var(--color-accent)" }}>
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
