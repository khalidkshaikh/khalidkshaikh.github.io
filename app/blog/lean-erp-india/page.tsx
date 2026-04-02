import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LeanErpPost() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32 max-w-3xl">
          <Link href="/blog" className="text-sm mb-8 inline-block" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
          <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: "rgba(10,191,188,0.15)", color: "#0ABFBC", border: "1px solid rgba(10,191,188,0.25)" }}>Product</span>
          <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
            Lean ERP for Indian SMBs: What the Market Actually Needs
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>Feb 2026 · 10 min read</p>
          <div className="prose prose-invert" style={{ color: "var(--color-text-muted)" }}>
            <p>After talking to 40+ operations managers in Indian manufacturing, here&apos;s what they told me they actually need.</p>
            <p>The market is flooded with ERP systems built for Fortune 500 companies. Indian SMBs need something different.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
