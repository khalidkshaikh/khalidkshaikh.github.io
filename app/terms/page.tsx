import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-bricolage)" }}>Terms of Service</h1>
          <div className="prose prose-invert space-y-4" style={{ color: "var(--color-text-muted)" }}>
            <p>Last updated: March 2026</p>
            <p>By using our tools, you agree to use them responsibly. Our tools are provided &quot;as is&quot;.</p>
            <h2 className="text-xl font-bold text-white mt-8" style={{ fontFamily: "var(--font-bricolage)" }}>Usage</h2>
            <p>You may not use our services for any illegal purposes. All PDF tools are for lawful use only.</p>
            <h2 className="text-xl font-bold text-white mt-8" style={{ fontFamily: "var(--font-bricolage)" }}>Contact</h2>
            <p>Questions? Reach out at legal@khalidshaikh.dev</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
