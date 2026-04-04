"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogAgenticDiagnosticsERP() {
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
              Designing an Agentic Diagnostics ERP: From Orders to Outcomes
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">12 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Metrics That Matter</h2>
              
              <p className="mb-6">Before we design anything, let's look at what's possible. Data from real implementations:</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Metric</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Improvement</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Diagnostic accuracy</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>+15-25%</td>
                      <td className="py-3 px-4">Bluebrix Health</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Turnaround time</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>-50%</td>
                      <td className="py-3 px-4">Bluebrix Health</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Sepsis mortality</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Reduced</td>
                      <td className="py-3 px-4">Bluebrix Health (predictive agents)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">QC issue detection</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>-40% faster</td>
                      <td className="py-3 px-4">LabLynx</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Sample routing errors</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>-70%</td>
                      <td className="py-3 px-4">DigiQT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-8">These aren't theoretical. These are being achieved today.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Problem with Traditional LIMS + ERP</h2>
              
              <p className="mb-6">Most diagnostic chains run a Frankenstein stack:</p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>LIMS for lab operations (samples, results, QC)</li>
                <li>Separate ERP for finance (invoicing, collections, GST)</li>
                <li>CRM for patient communication</li>
                <li>Spreadsheets for procurement and inventory</li>
              </ul>
              
              <p className="mb-8">The result: No single source of truth. Patient updates in LIMS but not CRM. Payment received in ERP but report still on hold. Reorder needed but inventory spreadsheet hasn't been updated in 3 days.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Agentic Architecture: The Unified Model</h2>
              
              <p className="mb-6">Here's what changes when agents sit <em>at the core</em> of your ERP, not as add-ons:</p>
              
              <Mermaid chart={`
flowchart LR
    Core[🤖 Agent<br/>Orchestrator] --> Orders[📋 Orders]
    Core --> Logistics[🚚 Logistics]
    Core --> Lab[🔬 Lab]
    Core --> Finance[💰 Finance]
    
    Data[(💾 Data Lake<br/>Patients | Orders | Samples)] -.-> Core
    
    style Core fill:#10B981,color:#fff,stroke:#10B981,rx:24,ry:24
    style Orders fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Logistics fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Lab fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Finance fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Data fill:#8B5CF6,color:#fff,stroke:#8B5CF6,rx:24,ry:24
`} />
              
              <p className="mb-8">The magic: Any agent can read from any module. Any module can emit events that trigger agents.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Module-by-Module Agent Design</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Module 1: Orders (Test Booking)</h3>
              
              <p className="mb-4"><strong>Events emitted:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><code>order.created</code></li>
                <li><code>order.payment_received</code></li>
                <li><code>order.cancelled</code></li>
                <li><code>order.rescheduled</code></li>
              </ul>
              
              <p className="mb-4"><strong>Agents that listen:</strong></p>
              
              <p className="mb-2"><em>Booking Confirmation Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On order.created:
  - Generate unique order ID
  - Send confirmation WhatsApp (with instructions)
  - If home collection: route to logistics module
  - Add to lab's daily schedule`}
              </pre>
              
              <p className="mb-2"><em>Upsell Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On order.created for wellness package:
  - Check if patient qualifies for add-on tests (age, history)
  - If yes, send WhatsApp: "Based on your profile, doctor recommends Thyroid test. Add for ₹300?"
  - If patient agrees, create new order line item`}
              </pre>
              
              <p className="mb-2"><em>Credit Check Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On order.created for corporate client:
  - Query finance module for outstanding balance
  - If balance > credit limit: flag order, notify account manager
  - Else: auto-approve`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Module 2: Logistics (Sample Collection & Transport)</h3>
              
              <p className="mb-4"><strong>Events emitted:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><code>sample.collected</code></li>
                <li><code>sample.in_transit</code></li>
                <li><code>sample.received_at_lab</code></li>
                <li><code>sample.quantity_insufficient</code></li>
              </ul>
              
              <p className="mb-4"><strong>Agents that listen:</strong></p>
              
              <p className="mb-2"><em>Phlebotomist Assignment Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On order.created with home_collection=true:
  - Get order pincode
  - Find available phlebotomists within 5km
  - Check their current load (samples already assigned)
  - Assign to phlebotomist with lowest load
  - Send collection details to phlebotomist app`}
              </pre>
              
              <p className="mb-2"><em>Route Optimization Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Every 30 minutes, for unassigned samples:
  - Group by pickup area
  - Calculate optimal route for each phlebotomist
  - Push updated route to mobile app`}
              </pre>
              
              <p className="mb-2"><em>Quantity Check Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On sample.received_at_lab:
  - Compare collected quantity with required quantity
  - If insufficient: flag order, notify lab supervisor
  - Create "call patient for re-collection" task`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Module 3: Lab (Processing & QC)</h3>
              
              <p className="mb-4"><strong>Events emitted:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><code>sample.routed_to_machine</code></li>
                <li><code>result.available</code></li>
                <li><code>qc.passed</code> / <code>qc.failed</code></li>
                <li><code>report.generated</code></li>
              </ul>
              
              <p className="mb-2"><em>QC Monitoring Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On result.available for any test:
  - Compare result with historical range for this patient (if available)
  - Compare with lab's reference ranges
  - If flagrantly abnormal (>3 SD from mean): 
      → Auto-flag for pathologist review
      → Create high-priority task
  - If within normal: auto-approve to reporting`}
              </pre>
              
              <p className="mb-2"><em>Critical Value Alert Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On result.available with critical flag (e.g., potassium >6.5):
  - IMMEDIATE: Send SMS to ordering doctor
  - IMMEDIATE: Call lab supervisor
  - Log timestamp of first alert for audit
  - Retry every 5 minutes until acknowledged`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Module 4: Finance (Billing & Collections)</h3>
              
              <p className="mb-4"><strong>Events emitted:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><code>invoice.generated</code></li>
                <li><code>payment.received</code></li>
                <li><code>payment.failed</code></li>
                <li><code>credit_note.issued</code></li>
              </ul>
              
              <p className="mb-2"><em>Payment Reconciliation Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`On payment.received via any channel (UPI/card/cash):
  - Match to open invoice (amount, patient name, date)
  - If exact match: auto-reconcile, mark invoice paid
  - If partial: create task for accounts team
  - If no match: put in suspense, flag for review`}
              </pre>
              
              <p className="mb-2"><em>Follow-up Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Every day at 9 AM:
  - Query invoices due >15 days
  - For each: check communication history
  - If no reminder sent in last 7 days:
      → Send WhatsApp reminder to patient
      → Log reminder
      → If >30 days overdue: escalate to collection team`}
              </pre>
              
              <p className="mb-2"><em>GST Reconciliation Agent</em></p>
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Every month on 10th:
  - Aggregate all invoices from previous month
  - Calculate GST liability (CGST+SGST/IGST)
  - Generate GSTR-1 file
  - Flag any mismatches between invoice data and payment received`}
              </pre>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Cross-Module Agent Examples</h2>
              
              <p className="mb-6">This is where agentic ERP truly shines — agents that span multiple modules.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">The "End-to-End Turnaround" Agent</h3>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Monitors:
  - Order creation time (orders module)
  - Sample receipt time (logistics module)
  - Result completion time (lab module)
  - Report delivery time (communication module)

When any stage exceeds SLA:
  - Identify bottleneck
  - Alert supervisor with specific module and reason
  - If recurring pattern (e.g., always delayed at logistics), create process improvement ticket`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">The "Patient Experience" Agent</h3>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Tracks patient journey across modules:
  1. Booking (orders)
  2. Payment (finance)
  3. Sample collection (logistics)
  4. Processing (lab)
  5. Report delivery (communication)

At each stage:
  - Send proactive update to patient
  - If delay detected, send apology + new ETA
  - After report delivery, send NPS survey

Result: Patient feels informed, not anxious.`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">The "Revenue Leakage" Agent</h3>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Compares:
  - Tests ordered (orders module)
  - Tests actually run (lab module)
  - Tests billed (finance module)

If any mismatch:
  - Tests ordered but not run: flag operations
  - Tests run but not billed: flag finance
  - Tests billed but not run: flag for refund

Typical leak detection: 2-5% of revenue recovered.`}
              </pre>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Implementation Roadmap (6 Months)</h2>
              
              <p className="mb-4"><strong>Month 1-2: Foundation</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Deploy unified data lake (all modules sharing same patient/invoice IDs)</li>
                <li>Implement event bus (Kafka/RabbitMQ or simpler: webhooks)</li>
                <li>Build ONE agent: order confirmation</li>
              </ul>
              
              <p className="mb-4"><strong>Month 3-4: Core Operations</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Add sample routing agent</li>
                <li>Add QC monitoring agent</li>
                <li>Add payment reconciliation agent</li>
              </ul>
              
              <p className="mb-8"><strong>Month 5-6: Intelligence</strong></p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Add cross-module agents (turnaround monitoring, revenue leakage)</li>
                <li>Implement basic predictive agents (forecast daily load)</li>
                <li>Add dashboard for agent performance metrics</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Technical Considerations for Indian Labs</h2>
              
              <p className="mb-4"><strong>Offline-first design:</strong> Many labs have unreliable internet. Agents must:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Queue events locally when offline</li>
                <li>Sync when connection resumes</li>
                <li>Never lose audit logs</li>
              </ul>
              
              <p className="mb-4"><strong>Vernacular support:</strong> Agent messages must support:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Hindi, Tamil, Telugu, Kannada, Bengali (at minimum)</li>
                <li>Mixed script (English medical terms + vernacular)</li>
                <li>Voice notes as fallback for low-literacy patients</li>
              </ul>
              
              <p className="mb-4"><strong>Regulatory logging:</strong> Every agent action must be logged:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Who/what triggered the action</li>
                <li>What decision was made</li>
                <li>What data was used</li>
                <li>Timestamp (with milliseconds)</li>
                <li>For audit: ability to replay any patient's journey</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line</h2>
              
              <p className="text-lg mb-8">An agentic diagnostics ERP isn't about replacing humans. It's about handling the 80% of work that's predictable, rule-based, and boring — so your skilled staff can focus on exceptions, complex cases, and patient care.</p>
              
              <div className="glass-card p-6 rounded-lg mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white font-semibold mb-2">Want to see a demo?</p>
                <p>I've built a reference implementation of this architecture. Book a 30-min walkthrough.</p>
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
