import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-bricolage)" }}>Privacy Policy</h1>
          <div className="prose prose-invert space-y-4" style={{ color: "var(--color-text-muted)" }}>
            <p>Last updated: March 2026</p>
            <h2 className="text-xl font-bold text-white mt-8" style={{ fontFamily: "var(--font-bricolage)" }}>Data Collection</h2>
            <p>Our PDF tools process files entirely in your browser. No data is uploaded to any server.</p>
            <h2 className="text-xl font-bold text-white mt-8" style={{ fontFamily: "var(--font-bricolage)" }}>Analytics</h2>
            <p>We use PostHog for product analytics. You can block it with any ad blocker.</p>
            <h2 className="text-xl font-bold text-white mt-8" style={{ fontFamily: "var(--font-bricolage)" }}>Contact</h2>
            <p>For privacy concerns, contact us at privacy@khalidshaikh.dev</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
