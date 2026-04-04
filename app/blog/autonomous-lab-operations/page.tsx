"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogAutonomousLabOperations() {
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
                color: "#34d399",
                border: "1px solid #34d39930",
              }}
            >
              Technical
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              From LIMS to Autonomous Lab Operations: Designing Agent Workflows for Indian Labs
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">10 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Trajectory</h2>
              
              <p className="mb-6">Most Indian diagnostic labs are on a journey:</p>
              
              <Mermaid chart={`
flowchart LR
    P1[📄 Manual<br/>Paper] --> P2[💾 Basic<br/>LIMS] --> P3[🔗 Integrated<br/>ERP] --> P4[🤖 Agent<br/>Augmented] --> P5[🚀 Autonomous]
    
    style P1 fill:#475569,color:#fff,stroke:#475569,rx:24,ry:24
    style P2 fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style P3 fill:#8B5CF6,color:#fff,stroke:#8B5CF6,rx:24,ry:24
    style P4 fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style P5 fill:#10B981,color:#fff,stroke:#10B981,rx:24,ry:24
`} />
              
              <p className="mb-8">
                The leap from "Integrated ERP" to "Agent-Augmented" is where real efficiency lives. But most vendors don't know how to design agents for Indian lab realities — sample types, language preferences, payment collection patterns, regulatory requirements.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Four Agent Blueprints That Actually Work</h2>
              
              <p className="mb-8">Let me show you agent architectures I've deployed (or am building) for real labs.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 1: The Smart Sample Router</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Takes incoming sample registration data and decides exactly which machine, which shift, and which priority level.</p>
              
              <p className="mb-4"><strong>Inputs it needs:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Test codes (LOINC or local equivalent)</li>
                <li>Machine inventory (which analyzers can run which tests)</li>
                <li>Machine status (operational/offline/calibrating)</li>
                <li>Current queue length per machine</li>
                <li>Urgency markers (STAT, routine, wellness package)</li>
              </ul>
              
              <p className="mb-4"><strong>Decision logic (pseudocode):</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def route_sample(test_code, urgency, lab_config):
    capable_machines = find_machines_for_test(test_code)
    
    # Filter by availability
    available = [m for m in capable_machines if m.status == "online"]
    
    if urgency == "STAT":
        # Pick fastest, even if expensive
        return min(available, key=lambda m: m.estimated_time)
    else:
        # Balance load
        return min(available, key=lambda m: m.queue_length)
    
    # If none available, alert supervisor and suggest manual routing
    if not available:
        trigger_alert("No machine available for test " + test_code)
        return "manual_required"`}
              </pre>
              
              <p className="mb-4"><strong>Implementation reality:</strong> Most labs don't have real-time machine APIs. Start with a simple dropdown for staff to mark machine status (online/offline). The agent still adds value by remembering which tests each machine can run.</p>
              
              <p className="mb-8"><strong>ROI calculation:</strong></p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Before: 3-5 minutes per sample for routing decisions</li>
                <li>After: 10 seconds (staff just confirms agent's suggestion)</li>
                <li>For a 200-sample/day lab: 10-15 staff hours saved weekly</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 2: The Report Dispatcher</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Monitors report completion, compiles PDFs, chooses delivery channel (WhatsApp/email/SMS/fax/print), handles delivery failures.</p>
              
              <p className="mb-4"><strong>The Indian reality:</strong> Delivery preferences vary wildly. Corporate client wants email. Rural patient wants SMS with a link. Doctor wants WhatsApp. Old-school hospital wants fax (yes, still).</p>
              
              <p className="mb-4"><strong>Agent logic:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def dispatch_report(patient_id, report_pdf, delivery_preferences):
    # Get patient's channel preferences from profile
    prefs = get_delivery_preferences(patient_id)
    
    # Try primary channel
    success = send_via_channel(report_pdf, prefs.primary)
    
    if not success:
        # Log failure, try secondary
        log_failure(patient_id, prefs.primary, reason)
        success = send_via_channel(report_pdf, prefs.secondary)
    
    if not success:
        # Escalate to human with all details
        create_task(
            type="report_delivery_failure",
            patient_id=patient_id,
            failed_channels=[prefs.primary, prefs.secondary],
            priority="high"
        )
    
    return success`}
              </pre>
              
              <p className="mb-4"><strong>Real-world gotchas:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>WhatsApp Business API has template restrictions for healthcare</li>
                <li>Some file sizes exceed channel limits (compress PDF automatically)</li>
                <li>Regulatory requirement: must retain proof of delivery (log everything)</li>
              </ul>
              
              <p className="mb-8"><strong>ROI:</strong> A dispatcher agent paying for itself? Absolutely. One receptionist in a mid-sized lab spends 2-3 hours daily on report delivery. At ₹25,000/month salary, that's ₹6,000-9,000/month of wasted labor. Agent costs: negligible.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 3: The Credit Control Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Before releasing any report, checks payment status, applies business rules, and either releases, holds, or flags for review.</p>
              
              <p className="mb-4"><strong>Rules engine example:</strong></p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Patient Type</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Outstanding Balance</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Walk-in</td>
                      <td className="py-3 px-4">₹0</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Auto-release report</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Walk-in</td>
                      <td className="py-3 px-4">{'>'} ₹500</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Hold report, send payment link</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Corporate client</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Auto-release, log to monthly bill</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Insurance/TMA</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Validate policy, auto-release if valid</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Known defaulter</td>
                      <td className="py-3 px-4">Any</td>
                      <td className="py-3 px-4" style={{ color: "var(--color-accent)" }}>Flag for supervisor, don't auto-release</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-4"><strong>Implementation note:</strong> This agent sits <em>between</em> report generation and delivery. Nothing goes out without passing through credit control.</p>
              
              <p className="mb-8">The tricky part: Handling edge cases. VIP patient? Doctor's family member? Emergency? Build override rules: specific user roles (lab manager, owner) can bypass with a reason code.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 4: The Inventory Reorder Agent</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Tracks reagent and consumable usage, forecasts reorder points, generates purchase requests.</p>
              
              <p className="mb-4"><strong>The data it needs:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Current inventory levels (from your stock module)</li>
                <li>Test volumes by test type (from registration data)</li>
                <li>Lead times per supplier (from procurement history)</li>
                <li>Minimum order quantities (from vendor contracts)</li>
              </ul>
              
              <p className="mb-4"><strong>Forecasting logic (simplified):</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def should_reorder(item_id):
    current_stock = get_stock_level(item_id)
    
    # Calculate daily usage from last 30 days
    daily_usage = calculate_average_daily_usage(item_id, days=30)
    
    # Days until stockout
    days_remaining = current_stock / daily_usage
    
    # Supplier lead time in days
    lead_time = get_supplier_lead_time(item_id)
    
    # Reorder if days_remaining < (lead_time + safety_days)
    safety_days = 3  # Configurable
    if days_remaining < (lead_time + safety_days):
        suggested_qty = (lead_time + safety_days + 7) * daily_usage
        create_purchase_request(item_id, suggested_qty)
        return True
    
    return False`}
              </pre>
              
              <p className="mb-8">Why this matters in India: Kit-based labs (thyroid, diabetes, allergy) have huge working capital tied up in inventory. A good reorder agent can reduce stock holding by 20-30% without stockouts.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Putting It All Together</h2>
              
              <p className="mb-6">A fully agent-augmented lab looks like this:</p>
              
              <Mermaid chart={`
flowchart LR
    Patient[🚶 Patient<br/>walks in] --> Reg[📝 Registration]
    Reg --> Credit[💳 Credit Check]
    Credit --> Collect[💉 Sample Collection]
    Collect --> Route[🔬 Sample Routing]
    Route --> Process[⚙️ Processing]
    Process --> QC[✅ QC Check]
    QC --> Report[📋 Reporting]
    Report --> Dispatch[📤 Dispatch]
    
    style Patient fill:#6366F1,color:#fff,stroke:#6366F1,rx:24,ry:24
    style Reg fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Credit fill:#3B82F6,color:#fff,stroke:#3B82F6,rx:24,ry:24
    style Collect fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style Route fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style Process fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style QC fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style Report fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style Dispatch fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
`} />
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Where Most Labs Get Stuck</h2>
              
              <p className="mb-4"><strong>Problem:</strong> "We tried an AI agent but it didn't work."</p>
              
              <p className="mb-4"><strong>Reasons:</strong></p>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li>You tried to build a general AI instead of a narrow, rule-based agent</li>
                <li>You didn't have clean data (patient IDs inconsistent, test codes messy)</li>
                <li>You expected 100% automation from day one (start with 80/20 rule)</li>
              </ol>
              
              <p className="mb-8">The fix: Start with one agent. Make it boring. The sample routing agent that just checks machine-test compatibility is simple but saves real time. Then add complexity.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>What This Means for MedRelief</h2>
              
              <p className="mb-6">We're designing agents that:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Work offline (many Indian labs have unreliable internet)</li>
                <li>Handle vernacular (reports in Hindi, Tamil, Telugu via WhatsApp)</li>
                <li>Integrate with India-specific payment gateways (Razorpay, Cashfree)</li>
                <li>Log everything for NABL audit trails</li>
              </ul>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
