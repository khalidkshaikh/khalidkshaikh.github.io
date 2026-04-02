import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = [
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
