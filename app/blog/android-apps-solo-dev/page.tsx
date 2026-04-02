import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AndroidAppsPost() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32 max-w-3xl">
          <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
          <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(108,43,217,0.15)", color: "#B794F4", border: "1px solid rgba(108,43,217,0.25)" }}>Architecture</span>
          <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
            How I Built 3 Android Apps as a Solo Dev - Architecture & Lessons
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>Mar 2026 · 8 min read</p>
          <div className="prose prose-invert" style={{ color: "var(--color-text-muted)" }}>
            <p>From idea to APK &mdash; the tools, patterns, and tradeoffs I used to ship three Android apps without a team.</p>
            <p>Building Android apps solo means making strategic choices about architecture, dependencies, and scope. Here&apos;s what I learned.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
