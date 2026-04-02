import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
              About
            </h1>
            <p className="text-xl mb-8" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
              Hi, I&apos;m Khalid - AI enthusiast, vibe coder, workflow builder.
            </p>
            <div className="prose prose-invert">
            <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8 }}>
              I build AI workflows and automations that think for themselves. LLM integrations, AI agents, smart pipelines - 
              vibe-coded apps that solve real problems and ship in a weekend.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              No team. No process. No over-engineering. Just shipping. I use AI to move fast, build smarter workflows, 
              and focus on what actually matters - automating the boring stuff.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.8, marginTop: "1.5rem" }}>
              Currently building AI agents, exploring LLM integrations, and working on Lean ERP for Indian SMBs.
            </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
