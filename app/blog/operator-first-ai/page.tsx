"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogOperatorFirstAI() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <article className="wrap py-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-sm font-medium hover:text-gradient transition-all" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
            </div>
            
            <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-6" style={{ background: "rgba(255,255,255,0.05)", color: "#0ABFBC", border: "1px solid #0ABFBC30" }}>Product</span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Operator-First AI Workflows: How to Go from Chatbot Demos to Real Process Automation</h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">9 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Demo Trap</h2>
              <p className="mb-6">You've seen the demos. An AI assistant that books meetings, answers customer questions, writes emails.</p>
              <p className="mb-8">Impressive. But then you try to use it for your actual work — and it falls apart.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Operator-First Philosophy</h2>
              <p className="mb-6">Most AI demos are built by engineers for other engineers. They optimize for "cool."</p>
              <p className="mb-6">Operator-first AI is built by operators for operators. It optimizes for "done."</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Engineer-First</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Operator-First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">"Look, it can write a poem about your product!"</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>"Can it process 500 orders without errors?"</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">"It uses GPT-4 with a custom fine-tune"</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>"Does it work when the internet is down?"</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">"We have 99.9% accuracy on our test set"</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>"How do I fix the 0.1% when it breaks?"</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">"It's autonomous!"</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>"Where's the human review step?"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Three Real Operator-First Workflows</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Workflow 1: Lab Registration to Report (Full Cycle)</h3>
              <p className="mb-4"><strong>Before vs After:</strong></p>
              
              <Mermaid chart={`
flowchart TB
    subgraph BEFORE["📝 BEFORE: Manual Process (~20 min)"]
        direction LR
        B1[Patient<br/>arrives] --> B2[Register<br/>2min] --> B3[Select<br/>tests] --> B4[Print<br/>barcode] --> B5[Collect<br/>sample] --> B6[Enter<br/>LIMS] --> B7[Lab<br/>processes] --> B8[Compile<br/>report] --> B9[Doctor<br/>signs] --> B10[Send<br/>WhatsApp] --> B11[Patient<br/>receives]
    end
    
    subgraph AFTER["🤖 AFTER: AI-Enhanced (~6 min)"]
        direction LR
        A1[Patient] --> A2[🤖 Auto-fill<br/>10sec] --> A3[✅ Confirm<br/>30sec] --> A4[🤖 Auto<br/>process] --> A5[👨‍⚕️ Review<br/>30sec] --> A6[📱 Sent<br/>1min]
    end
    
    style BEFORE fill:#7F1D1D,color:#fff,stroke:#EF4444,rx:24,ry:24
    style AFTER fill:#064E3B,color:#fff,stroke:#10B981,rx:24,ry:24
    style B1 fill:#64748B,color:#fff,stroke:#64748B,rx:20,ry:20
    style B2 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B3 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B4 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B5 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B6 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B7 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B8 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B9 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B10 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style B11 fill:#DC2626,color:#fff,stroke:#DC2626,rx:20,ry:20
    style A1 fill:#64748B,color:#fff,stroke:#64748B,rx:20,ry:20
    style A2 fill:#10B981,color:#fff,stroke:#10B981,rx:20,ry:20
    style A3 fill:#10B981,color:#fff,stroke:#10B981,rx:20,ry:20
    style A4 fill:#10B981,color:#fff,stroke:#10B981,rx:20,ry:20
    style A5 fill:#10B981,color:#fff,stroke:#10B981,rx:20,ry:20
    style A6 fill:#10B981,color:#fff,stroke:#10B981,rx:20,ry:20
`} />
              
              <div className="flex items-center justify-center gap-4 mb-4 p-4 rounded-lg" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.15) 100%)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <span className="text-3xl">⚡</span>
                <span className="text-xl font-bold text-white">70% Time Reduction</span>
              </div>
              <p className="mb-8">The AI doesn't replace the lab staff. It replaces the coordination between them.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Workflow 2: Restaurant Order to Kitchen to Delivery</h3>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Customer sends WhatsApp or calls AI bot → Agent takes order, confirms, 
sends to POS → Agent displays on kitchen screen → 
Agent notifies delivery platform → Agent sends customer updates`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Workflow 3: Field Report to Inventory Adjustment</h3>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Sales rep visits store → Rep opens app, enters order/stock (30 sec) → 
Agent updates database → Agent creates PO if stock < threshold → 
Agent adds to dispatch schedule → Warehouse picks and ships (same day)`}
              </pre>
              <p className="mb-8"><strong>The key insight:</strong> Speed. What took 3 days now takes 3 hours.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>How to Build Operator-First Workflows</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 1: Map the Current Process</h3>
              <p className="mb-6">Don't assume you know. Watch someone do it. Time every step. Note every handoff.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 2: Separate "Decision" from "Action"</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Decisions:</strong> "If credit check fails, hold report" (needs business rule)</li>
                <li><strong>Actions:</strong> "Send WhatsApp message" (needs API call)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 3: Choose Your Automation Level</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Level</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">What it means</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">When to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">L1: Alert only</td>
                      <td className="py-3 px-4">AI detects issue, notifies human</td>
                      <td className="py-3 px-4">High-stakes decisions, new processes</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">L2: Suggest</td>
                      <td className="py-3 px-4">AI recommends action, human approves</td>
                      <td className="py-3 px-4">Most business processes (sweet spot)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">L3: Auto-execute</td>
                      <td className="py-3 px-4">AI acts without approval</td>
                      <td className="py-3 px-4">Low-risk, high-volume, time-sensitive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 4: Build the Agent (Using No-Code First)</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>n8n</strong> (self-hosted or cloud) for workflow logic</li>
                <li><strong>Airtable</strong> or <strong>Google Sheets</strong> for data storage</li>
                <li><strong>Make</strong> for simpler integrations</li>
                <li><strong>OpenAI API</strong> (via n8n) for AI decisions</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 5: Add the Human Review Step</h3>
              <p className="mb-8">Every automated action should be reviewable and reversible.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Step 6: Measure and Iterate</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Automation rate</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>70-80% (not 100%)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Human review time</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>&lt;30 min/day</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Error rate</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>&lt;1%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Time saved</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>50%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Operator's Toolkit</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Need</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Simple automation</td>
                      <td className="py-3 px-4">n8n (self-hosted)</td>
                      <td className="py-3 px-4">Free</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Complex automation</td>
                      <td className="py-3 px-4">Make.com</td>
                      <td className="py-3 px-4">₹5,000-15,000/month</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">AI decisions</td>
                      <td className="py-3 px-4">OpenAI API via n8n</td>
                      <td className="py-3 px-4">Pay per use</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">WhatsApp</td>
                      <td className="py-3 px-4">WATI or Interakt</td>
                      <td className="py-3 px-4">₹2,000-5,000/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line</h2>
              <p className="text-lg mb-8">Chatbot demos are entertainment. Operator-first workflows are leverage.</p>
              <p className="mb-8">Start with one process. Map it. Identify the handoffs. Build an agent that handles one handoff. Add human review. Measure. Iterate.</p>
              <p className="text-lg mb-8">In 30 days, you'll have a workflow that runs itself. In 90 days, you'll have three. In a year, you'll have a business that scales without adding headcount.</p>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
