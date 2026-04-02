import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ClientSidePdfPost() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32 max-w-3xl">
          <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
          <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(16,185,129,0.15)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}>Performance</span>
          <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
            Building Client-Side PDF Tools: Why WebAssembly Changes Everything
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>Mar 2026 · 6 min read</p>
          <div className="prose prose-invert" style={{ color: "var(--color-text-muted)" }}>
            <p>Zero server costs, zero privacy concerns, and faster processing than most cloud solutions. Here&apos;s how.</p>
            <p>WebAssembly has unlocked a new paradigm for browser-based tools. PDF processing can now happen entirely on the client.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
