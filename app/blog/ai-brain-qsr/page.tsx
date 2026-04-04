"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogAIBrainQSR() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <article className="wrap py-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-sm font-medium hover:text-gradient transition-all" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
            </div>
            
            <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-6" style={{ background: "rgba(255,255,255,0.05)", color: "#60A5FA", border: "1px solid #60A5FA30" }}>QSR</span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Designing an AI 'Brain' for QSR Chains and Cloud Kitchens</h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">10 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Numbers That Should Scare You</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Industry Average</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">AI-Augmented</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Order accuracy</td>
                      <td className="py-3 px-4">92-95%</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>98.5%</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>3.5-6.5%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Remake rate</td>
                      <td className="py-3 px-4">5-8%</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>2-3%</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>50-60% reduction</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Labor cost (scheduling)</td>
                      <td className="py-3 px-4">Baseline</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>-5-15%</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Significant</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Reporting time</td>
                      <td className="py-3 px-4">2-4 hours/day</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>15 minutes</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>85%+ reduction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Problem: Your QSR Is a Set of Silos</h2>
              <p className="mb-6">Typical 5-outlet QSR chain:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Outlet 1: Demand is high on weekdays (office lunch crowd)</li>
                <li>Outlet 2: Demand is high on weekends (residential area)</li>
                <li>Outlet 3: UberEats does 60% of revenue</li>
                <li>Outlet 4: Walk-in does 80% of revenue</li>
                <li>Outlet 5: New outlet, no historical data</li>
              </ul>
              <p className="mb-8">Your current "brain" = spreadsheets + WhatsApp + gut feeling.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Agent Architecture for QSR/Cloud Kitchen</h2>
              
              <Mermaid chart={`
flowchart LR
    Brain[🧠 Central Brain<br/>Orchestrator] --> Demand[📈 Demand<br/>Forecast]
    Brain --> Labor[👥 Labor<br/>Scheduling]
    Brain --> Inventory[📦 Inventory<br/>Transfer]
    Brain --> Finance[💳 Financial<br/>Recon]
    
    POS[📊 POS] --> Brain
    Weather[🌤️ Weather] --> Brain
    Events[🎉 Events] --> Brain
    
    style Brain fill:#10B981,color:#fff,stroke:#10B981,rx:24,ry:24
    style Demand fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Labor fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Inventory fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Finance fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style POS fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style Weather fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style Events fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
`} />
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 1: Demand Forecast Agent</h3>
              <p className="mb-4"><strong>What it does:</strong> Predicts hourly demand for each outlet, 3 days in advance.</p>
              <p className="mb-4"><strong>Data sources:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Historical sales (hourly, by day of week)</li>
                <li>Weather forecast (rain reduces walk-in, increases delivery)</li>
                <li>Local events (concert near Outlet 2 = higher demand)</li>
                <li>Platform data (Zomato/Swiggy historical order volumes)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 2: Labor Scheduling Agent</h3>
              <p className="mb-4"><strong>What it does:</strong> Creates optimal staff schedule based on demand forecast, labor costs, and employee preferences.</p>
              <p className="mb-8"><strong>The math:</strong> Understaffing = lost sales. Overstaffing = wasted wages. The agent finds the sweet spot.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 3: Inventory Transfer Agent</h3>
              <p className="mb-4"><strong>What it does:</strong> Moves inventory between outlets to prevent stockouts and reduce waste.</p>
              <p className="mb-8"><strong>ROI:</strong> Reduces expiry waste by 40-60% for perishables.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 4: Financial Reconciliation Agent</h3>
              <p className="mb-8"><strong>What it does:</strong> Automatically matches orders, payments, and platform fees across Zomato, Swiggy, and direct orders.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Implementation Roadmap</h2>
              <p className="mb-4"><strong>Month 1:</strong> Data Foundation - Unify POS, clean SKU mapping, basic reporting</p>
              <p className="mb-4"><strong>Month 2:</strong> Demand Forecast Agent - Simple moving average + day-of-week</p>
              <p className="mb-4"><strong>Month 3:</strong> Labor Scheduling Agent - Connect to staff availability</p>
              <p className="mb-4"><strong>Month 4:</strong> Inventory Transfer Agent - Real-time tracking, expiry alerts</p>
              <p className="mb-8"><strong>Month 5-6:</strong> Financial Recon Agent - Connect Zomato/Swiggy APIs</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line</h2>
              <p className="text-lg mb-8">You cannot compete with Zomato/Swiggy's AI on their turf. But you can build AI for your operations. The chains that do this in 2025-2026 will have a 10-15% cost advantage by 2027.</p>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
