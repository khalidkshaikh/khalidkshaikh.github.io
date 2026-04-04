"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogNablReadyLabs() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <article className="wrap py-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-sm font-medium hover:text-gradient transition-all"
                style={{ color: "var(--color-accent)" }}
              >
                ← Back to Blog
              </Link>
            </div>
            
            <span 
              className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#B794F4",
                border: "1px solid #B794F430",
              }}
            >
              Architecture
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              AI Agents for NABL-Ready Labs: A Playbook for Indian Diagnostics
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">8 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Reality Check</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                You run a diagnostic lab in India. Your day looks like this:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>8:00 AM: Samples arrive. Someone manually logs 200+ entries.</li>
                <li>11:00 AM: Three patients call asking "Is my report ready?"</li>
                <li>2:00 PM: A referring doctor's office calls because they never got the fax (yes, fax).</li>
                <li>4:00 PM: Accounts rejects a report because payment wasn't confirmed.</li>
                <li>6:00 PM: You discover 15 samples were routed to the wrong machine.</li>
              </ul>
              
              <p className="text-lg mb-8">Sound familiar?</p>
              
              <p className="text-lg mb-8">
                Now imagine this instead: AI agents handling all of it. Not "AI" as a buzzword. Actual software agents that see, decide, and act.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>What Are AI Agents in a Lab Context?</h2>
              
              <p className="mb-6">
                Unlike traditional LIMS (Lab Information Management Systems) that just <em>store</em> data, AI agents <em>do</em> things:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Traditional LIMS</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">AI-Enhanced LIMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Shows you a list of pending samples</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Routes each sample to the optimal machine automatically</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Stores patient contact info</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Sends WhatsApp reports when ready, retries on failure</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Records QC data</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Monitors QC trends and alerts before values drift out of range</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Generates a bill</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Checks credit limits, applies discounts, sends payment link</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The NABL-Ready Agent Architecture</h2>
              
              <p className="mb-6">Here's what an AI-aware lab stack actually looks like:</p>
              
              <Mermaid chart={`
flowchart LR
    Touch[📱 Patient<br/>Touchpoints] --> Orch[🤖<br/>Orchestrator]
    Orch --> Reg[📝 Registration]
    Orch --> Route[🔬 Sample Route]
    Orch --> Report[📋 Reporting]
    Orch --> Credit[💳 Credit/Claim]
    
    style Touch fill:#8B5CF6,color:#fff,stroke:#8B5CF6,rx:24,ry:24
    style Orch fill:#10B981,color:#fff,stroke:#10B981,rx:24,ry:24
    style Reg fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Route fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Report fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Credit fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
`} />
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Real Pain Points, Real Solutions</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Pain Point 1: Sample Routing Chaos</h3>
              
              <p className="mb-2"><strong>The problem:</strong> Your hematology analyzer is down, but someone just loaded 20 CBC samples. Now you need to manually redirect to the backup machine.</p>
              
              <p className="mb-6"><strong>The agent solution:</strong> A routing agent continuously monitors machine status (online/offline/calibration due). When a sample arrives, it checks:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Which machines can run this test?</li>
                <li>Which are currently idle?</li>
                <li>Which have the right reagents loaded?</li>
                <li>Which will give the fastest result?</li>
              </ul>
              
              <p className="mb-8">The agent routes instantly. Staff just load samples where indicated.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Pain Point 2: The "Where's My Report?" Flood</h3>
              
              <p className="mb-2"><strong>The problem:</strong> Patients call every 15 minutes. Your receptionist spends 2 hours daily just saying "not yet, call back."</p>
              
              <p className="mb-6"><strong>The agent solution:</strong> A reporting agent that:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Sends an automated "sample received" acknowledgment (WhatsApp)</li>
                <li>Sends "processing started" update at 50% completion</li>
                <li>Sends report PDF immediately when ready</li>
                <li>If delivery fails, retries 3 times, then logs for human follow-up</li>
              </ul>
              
              <p className="mb-8"><strong>Result:</strong> 90% fewer status inquiry calls.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Pain Point 3: Credit Control Nightmare</h3>
              
              <p className="mb-2"><strong>The problem:</strong> Corporate clients pay in 60 days. Walk-in patients pay upfront. Your finance person manually checks each case.</p>
              
              <p className="mb-6"><strong>The agent solution:</strong> A credit agent that:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>For known corporate clients: auto-approves, adds to monthly billing</li>
                <li>For walk-ins: checks against negative list, flags if previous payment failed</li>
                <li>For insurance/TMA cases: validates policy number before processing</li>
                <li>Flags any report {'>'}₹5000 for supervisor review</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The 90-Day Implementation Roadmap</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Month 1: Foundation</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Connect WhatsApp Business API to your LIMS</li>
                <li>Build a single agent: automated report delivery</li>
                <li>Measure: reduction in status calls</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Month 2: Operations</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Add sample routing agent for top 5 test types</li>
                <li>Integrate with machine status APIs (or simple manual status updates)</li>
                <li>Measure: reduction in routing errors</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Month 3: Finance</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Add credit control agent</li>
                <li>Integrate with your accounting software (Tally/Zoho)</li>
                <li>Measure: reduction in bad debt</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>What This Means for Your ERP Stack</h2>
              
              <p className="mb-6">If you're building or buying a lab ERP in India, ask these questions:</p>
              
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li><em>"Can I define custom agent rules without coding?"</em> (You need this)</li>
                <li><em>"Does it integrate with WhatsApp Business API natively?"</em> (Non-negotiable)</li>
                <li><em>"Can agents access data across modules (registration, inventory, finance)?"</em> (Critical)</li>
              </ol>
              
              <p className="text-lg mb-8">This is exactly what we're building at MedRelief — an ERP where AI agents are first-class citizens, not an afterthought.</p>
              
              <div className="glass-card p-6 rounded-lg mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white font-semibold mb-2">Next Step:</p>
                <p>Book a 15-min lab workflow audit. I'll map your current bottlenecks and show you exactly which agent would save you the most time first.</p>
              </div>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
