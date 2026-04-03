"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

const painPoints = [
  "Excel-based inventory that breaks every month",
  "Manual GST reconciliation eating 3 days/quarter",
  "Zero real-time visibility into production floor",
  "₹30L ERP systems built for Fortune 500 companies",
  "Implementation that takes 18 months and a consultant",
  "Paying for 200 features when you need 12",
];

const features = [
  { label: "Inventory", icon: "📦" },
  { label: "GST/Tax", icon: "🧾" },
  { label: "HR & Payroll", icon: "👥" },
  { label: "Production", icon: "🏭" },
  { label: "Purchasing", icon: "🛒" },
  { label: "Reporting", icon: "📊" },
];

export default function ERPTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signups] = useState(47);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) return;
    
    setLoading(true);
    
    const { error: supabaseError } = await supabase
      .from("erp_waitlist")
      .upsert([{ email: email.trim(), created_at: new Date().toISOString() }], { onConflict: 'email', ignoreDuplicates: true });

    setLoading(false);
    
    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      setError(`Error: ${supabaseError.message}`);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="erp"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--color-surface-2)" }}
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Copy */}
          <div>
            <div
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="badge badge-orange"
                  style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", border: "1px solid rgba(249,115,22,0.25)" }}
                >
                  Coming Soon
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  Lean ERP - India-first
                </span>
              </div>

              <h2
                className="text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-bricolage)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                ERP that actually{" "}
                <span
                  className="text-gradient-teal"
                >
                  fits Indian SMBs.
                </span>
              </h2>

              <p
                className="text-base mb-8"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
              >
                Built for 10–200 person manufacturing and trading companies in India. GST-ready, affordable, and
                deployable in days - not months. No consultants. No bloat.
              </p>

              {/* Pain Points */}
              <div className="space-y-2.5 mb-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#fb923c", letterSpacing: "0.12em" }}>
                  Sound familiar?
                </p>
                {painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA + Features */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Waitlist Card */}
            <div
              className="rounded-[24px] p-10 mb-8 relative group"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(249,115,22,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at top right, rgba(249,115,22,0.1), transparent 70%)",
                }}
              />
              {/* Live count */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: `hsl(${200 + i * 30}, 60%, 50%)`,
                        border: "2px solid var(--color-surface-2)",
                        zIndex: 4 - i,
                      }}
                    >
                      {["A", "R", "K", "M"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-bricolage)" }}>
                    {signups} founders already waiting
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
                    First 10 design partners get 6 months free
                  </p>
                </div>
              </div>

              {/* Form */}
              {submitted ? (
                <div
                  className="text-center py-6 rounded-[16px]"
                  style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
                >
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-bricolage)" }}>
                    You&apos;re on the list!
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
                    I&apos;ll reach out when we kick off private beta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 uppercase tracking-widest"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-[10px] text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff",
                        fontFamily: "var(--font-inter)",
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-[10px] text-sm font-bold transition-all duration-200 disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      color: "#fff",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      fontFamily: "var(--font-inter)",
                    }}
                    onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.boxShadow = "0 0 24px rgba(249,115,22,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    {loading ? "Joining..." : "Join the Waitlist →"}
                  </button>
                  {error && (
                    <p className="text-center text-[11px]" style={{ color: "#ef4444", fontFamily: "var(--font-inter)" }}>
                      {error}
                    </p>
                  )}
                  <p className="text-center text-[11px]" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
                    No spam. Unsubscribe anytime. Pilot pricing: ₹5,000–₹15,000/month.
                  </p>
                </form>
              )}
            </div>

            {/* 6 Modules */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-inter)" }}
              >
                6 Core Modules
              </p>
              <div className="grid grid-cols-3 gap-3">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col items-center gap-2 py-3 px-2 rounded-[10px] text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span className="text-xl">{f.icon}</span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
