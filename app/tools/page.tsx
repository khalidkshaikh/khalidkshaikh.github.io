import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    { name: "PDF Merger", href: "https://khalidkshaikh.github.io/pdf-merger/", desc: "Combine multiple PDFs into one. Zero uploads." },
    { name: "PDF Compressor", href: "https://khalidkshaikh.github.io/pdf-compressor/", desc: "Shrink PDF file sizes without losing quality." },
    { name: "PDF Splitter", href: "https://khalidkshaikh.github.io/pdf-splitter/", desc: "Extract individual pages from any PDF." },
    { name: "PDF Tools Hub", href: "https://khalidkshaikh.github.io/pdf-tools-hub/", desc: "All PDF tools in one place." },
    { name: "Neural Pulse", href: "https://khalidkshaikh.github.io/neural-pulse/", desc: "Automated AI & SAP intelligence news feed." },
  ];

  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Tools Hub</h1>
          <p className="text-lg mb-12" style={{ color: "var(--color-text-muted)" }}>Free, browser-based tools. No signup required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer" className="glass-card p-6 group">
                <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>{tool.name} →</h2>
                <p style={{ color: "var(--color-text-muted)" }}>{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
