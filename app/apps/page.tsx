import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AppsPage() {
  const apps = [
    { name: "Storage Cleaner", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Storage_Cleaner_v1.0.0.apk", desc: "One-tap junk & duplicate file cleaner. Reclaim gigabytes without the headache." },
    { name: "Status Saver", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/Status_Saver_v0.4.1.apk", desc: "Download WhatsApp & Instagram statuses in one tap. No account needed." },
    { name: "Card Optimizer", href: "https://github.com/xdrkzx1/khalid-apps-releases/releases/download/v1.0.0/FloatMax_v1.0.0.apk", desc: "Track spending, maximize rewards, never miss a cashback offer again." },
  ];

  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Android Apps</h1>
          <p className="text-lg mb-8" style={{ color: "var(--color-text-muted)" }}>Free Android apps built for real use cases.</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-12" style={{ background: "rgba(10, 191, 188, 0.1)", border: "1px solid rgba(10, 191, 188, 0.2)", color: "#5EEAD4" }}>
            <span>📥</span>
            <span>Download APK, enable unknown sources, and install</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apps.map((app) => (
              <Link key={app.name} href={app.href} target="_blank" rel="noopener noreferrer" className="glass-card p-6 group">
                <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>{app.name} →</h2>
                <p style={{ color: "var(--color-text-muted)" }}>{app.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
