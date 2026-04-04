"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogAIRestaurantERP() {
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
                color: "#F472B6",
                border: "1px solid #F472B630",
              }}
            >
              Restaurant
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              AI ERP for Multi-Outlet Restaurants in India: Inventory, Billing, and Kitchen Intelligence in One Stack
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">9 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Indian Restaurant Math Problem</h2>
              
              <p className="mb-6">You own 4 outlets of a popular South Indian chain. Each outlet has:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>80-120 covers daily</li>
                <li>45-60 menu items</li>
                <li>200+ SKUs in inventory (rice, dal, spices, vegetables, oil, packaging)</li>
                <li>3-5 suppliers per ingredient</li>
                <li>Daily price fluctuations (vegetable mandi rates change daily)</li>
              </ul>
              
              <p className="mb-4">Your current stack:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Billing: different POS at each outlet (because "the franchisee chose it")</li>
                <li>Inventory: Excel sheets updated weekly</li>
                <li>Procurement: WhatsApp messages to suppliers</li>
                <li>Finance: Tally, but someone manually enters every bill</li>
              </ul>
              
              <p className="text-lg mb-8">Result: You have no idea:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Which outlet is actually profitable (after all costs)</li>
                <li>How much inventory is sitting in each godown</li>
                <li>Whether that 5% GST credit was claimed on the last vegetable bill</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Maturity Model for AI-Powered Restaurants</h2>
              
              <p className="mb-6">Based on the Supy framework, adapted for India:</p>
              
              <Mermaid chart={`
flowchart LR
    P1[🔗 Phase 1<br/>Connected<br/>3 months] --> P2[⚙️ Phase 2<br/>Automated<br/>6 months] --> P3[📈 Phase 3<br/>Predictive<br/>12 months] --> P4[🚀 Phase 4<br/>Autonomous<br/>18-24 months]
    
    P1 -->|Foundation| P2
    P2 -->|AI ROI| P3
    P3 -->|Scale| P4
    
    style P1 fill:#64748B,color:#fff
    style P2 fill:#6366F1,color:#fff
    style P3 fill:#8B5CF6,color:#fff
    style P4 fill:#14B8A6,color:#fff
`} />
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Phase</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Capabilities</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Typical Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">1. Connected</td>
                      <td className="py-3 px-4">Centralized POS, basic inventory tracking</td>
                      <td className="py-3 px-4">3 months</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">2. Automated</td>
                      <td className="py-3 px-4">Auto-reordering, wastage tracking, GST automation</td>
                      <td className="py-3 px-4">6 months</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">3. Predictive</td>
                      <td className="py-3 px-4">Demand forecasting, menu engineering, dynamic pricing</td>
                      <td className="py-3 px-4">12 months</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">4. Autonomous</td>
                      <td className="py-3 px-4">Auto-PO generation, supplier negotiation bots, self-optimizing menus</td>
                      <td className="py-3 px-4">18-24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-8">Most Indian restaurants are between Phase 0 (disconnected) and Phase 1. The leap to Phase 2 is where AI creates real margin expansion.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Phase 1: Connected (The Non-Negotiable Foundation)</h2>
              
              <p className="mb-6">Before any AI, you need data. Here's the minimal stack:</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Centralized POS across all outlets</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Same SKU codes at every outlet (Item_001 = Idli, not "IDLI_BLR" vs "IDLI_MAA")</li>
                <li>Real-time sync (or hourly batch)</li>
                <li>Cloud-based (Petal, Posist, or custom)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Unified inventory master</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Every ingredient mapped to a unit (kg, liter, piece, plate)</li>
                <li>Conversion factors (1 kg rice = 25 plates of biryani)</li>
                <li>Supplier mapping (Primary: Vendor A, Secondary: Vendor B)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Standardized procurement process</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>All POs created in system (not WhatsApp)</li>
                <li>All GRNs (Goods Receipt Notes) entered at delivery</li>
                <li>All invoices matched to POs</li>
              </ul>
              
              <p className="mb-8" style={{ color: "var(--color-accent)" }}>Without this foundation, AI is garbage in, garbage out.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Phase 2: Automated (Where AI Starts Paying)</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 1: The Auto-Reorder Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Monitors inventory levels across all outlets, calculates reorder quantities, generates POs.</p>
              
              <p className="mb-4"><strong>The Indian complexity:</strong> Your suppliers don't have APIs. They have phone numbers and minimum order quantities.</p>
              
              <p className="mb-4">Solution: The agent generates a PO that a human reviews and sends via WhatsApp. Still saves 80% of the time.</p>
              
              <p className="mb-4"><strong>Algorithm:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def calculate_reorder(item_id, outlet_id):
    current_stock = get_stock(item_id, outlet_id)
    daily_usage = calculate_avg_daily_usage(item_id, outlet_id, days=14)
    
    # Days until stockout
    days_remaining = current_stock / daily_usage if daily_usage > 0 else 999
    
    # Supplier lead time (in days)
    lead_time = get_lead_time(item_id, outlet_id)
    
    # Safety stock (cover unexpected demand)
    safety_days = 2
    
    if days_remaining < (lead_time + safety_days):
        # Order enough for lead_time + safety_days + 7 days
        order_qty = (lead_time + safety_days + 7) * daily_usage
        
        # Round to supplier's pack size
        pack_size = get_pack_size(item_id)
        order_qty = ceil(order_qty / pack_size) * pack_size
        
        create_po(item_id, outlet_id, order_qty, suggested_supplier=primary_supplier)
        return f"PO created for {order_qty} {unit}"
    
    return "Stock sufficient"`}
              </pre>
              
              <p className="mb-8"><strong>ROI:</strong> One store manager spends 1 hour daily on inventory checks and ordering. At 5 outlets, that's 25 hours/week. At ₹300/hour effective cost, that's ₹7,500/week saved.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 2: The Wastage Detection Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Identifies unusual wastage patterns before they become expensive.</p>
              
              <p className="mb-4"><strong>Data sources:</strong></p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Actual usage (what left inventory)</li>
                <li>Theoretical usage (based on sales × recipe)</li>
                <li>Wastage entries (staff-logged spoilage, overproduction, expiration)</li>
              </ul>
              
              <p className="mb-4"><strong>Alert logic:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def check_wastage(outlet_id, date):
    sales_data = get_sales(outlet_id, date)
    theoretical_usage = calculate_theoretical_usage(sales_data, recipes)
    actual_usage = get_actual_usage(outlet_id, date)
    wastage_logged = get_wastage_log(outlet_id, date)
    
    unexplained_loss = actual_usage - (theoretical_usage + wastage_logged)
    
    if unexplained_loss > 0.10 * theoretical_usage:  # 10% threshold
        create_alert(
            outlet_id=outlet_id,
            type="unexplained_wastage",
            severity="high",
            details=f"{unexplained_loss:.1f}kg of ingredients unaccounted",
            suggested_action="Review portion control and staff training"
        )`}
              </pre>
              
              <p className="mb-8">The insight: Most restaurants leak 5-15% of inventory through unmeasured waste. A detection bot that catches this early pays for itself in a week.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 3: The GST Auto-Reconciliation Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Matches purchase invoices with GST returns, flags mismatches.</p>
              
              <p className="mb-4"><strong>Indian context:</strong> GST on restaurant supplies is complex:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Input tax credit available on most ingredients (5% or 12%)</li>
                <li>No credit on certain items (packaged water? depends)</li>
                <li>Restaurant output tax is 5% (no ITC) or 18% (with ITC) — choose one scheme</li>
              </ul>
              
              <p className="mb-4"><strong>Agent logic:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def reconcile_gst(invoice):
    # Extract from uploaded invoice (using OCR)
    supplier_gstin = extract_gstin(invoice)
    invoice_value = extract_value(invoice)
    gst_charged = extract_gst(invoice)
    hsn_code = extract_hsn(invoice)
    
    # Check against supplier's filing
    gstr_2b = fetch_gstr_2b(supplier_gstin, invoice.month)
    match = gstr_2b.find_invoice(invoice.number, invoice_value)
    
    if not match:
        create_task(
            type="gst_mismatch",
            invoice_id=invoice.id,
            details=f"Invoice not found in supplier's GSTR-1",
            action="Contact supplier to file"
        )
        return False
    
    # Check eligibility for credit
    is_eligible = check_credit_eligibility(hsn_code, your_business_type)
    
    if not is_eligible and gst_charged > 0:
        create_alert(
            type="ineligible_credit_claimed",
            invoice_id=invoice.id,
            amount=gst_charged,
            action="Reverse ITC in next GSTR-3B"
        )
    
    return True`}
              </pre>
              
              <p className="mb-8"><strong>ROI:</strong> One accountant spends 2 days monthly on GST reconciliation for a 5-outlet chain. At ₹40,000/month salary, that's ₹4,000/month of time. Agent cost: negligible. Plus catches errors that would cost penalties.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Phase 3: Predictive (The Real Competitive Advantage)</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 4: Demand Forecasting Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Predicts tomorrow's sales for each item at each outlet, considering:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Day of week (Sundays = 30% higher)</li>
                <li>Weather (rain = more delivery, less dine-in)</li>
                <li>Local events (festivals, cricket matches)</li>
                <li>Historical patterns</li>
              </ul>
              
              <p className="mb-8">The magic: Combine this with auto-reorder, and you never run out of dosa batter on a busy Sunday, and you don't have 5kg of leftover idli batter on a rainy Tuesday.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 5: Menu Engineering Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong> Analyzes profitability and popularity of each menu item, suggests:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Items to promote (high profit, high popularity)</li>
                <li>Items to reformulate (low profit, high popularity — reduce portion or raise price)</li>
                <li>Items to remove (low profit, low popularity)</li>
                <li>Items to test (high profit, low popularity — improve description or placement)</li>
              </ul>
              
              <p className="mb-4"><strong>Menu matrix visualization:</strong></p>
              
              <Mermaid chart={`
flowchart TB
    subgraph HighProfit ["High Profitability"]
        HP["⭐ Stars<br/>Promote<br/>High Popularity"]
        WP["🐴 Workhorses<br/>Protect<br/>High Popularity"]
    end
    
    subgraph LowProfit ["Low Profitability"]
        PU["❓ Puzzles<br/>Rethink<br/>Low Popularity"]
        DG["🐕 Dogs<br/>Kill/Raise Price<br/>High Popularity"]
    end
    
    HP -->|Promote| HP
    WP -->|Protect| WP
    PU -->|Rethink| PU
    DG -->|Fix| DG
    
    style HP fill:#14B8A6,color:#fff
    style WP fill:#10B981,color:#fff
    style PU fill:#F59E0B,color:#fff
    style DG fill:#EF4444,color:#fff
`} />
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Tech Stack for Indian Restaurants</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Need</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Option 1 (DIY)</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Option 2 (All-in-One)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">POS</td>
                      <td className="py-3 px-4">Petal, Posist, Restolabs</td>
                      <td className="py-3 px-4">Our ERP (built-in)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Inventory</td>
                      <td className="py-3 px-4">Zoho Inventory, Megaventory</td>
                      <td className="py-3 px-4">Built-in</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Procurement</td>
                      <td className="py-3 px-4">Custom (Airtable + n8n)</td>
                      <td className="py-3 px-4">Built-in</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Accounting</td>
                      <td className="py-3 px-4">Tally, Zoho Books</td>
                      <td className="py-3 px-4">Built-in with GST</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">AI Agents</td>
                      <td className="py-3 px-4">Build custom or use n8n</td>
                      <td className="py-3 px-4">Built-in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-8"><strong>Our recommendation for 3-10 outlet chains:</strong> Start with Phase 1 in an all-in-one ERP (yes, we're building one). Once data is clean, enable Phase 2 agents one by one. Skip Phase 3 until you've mastered Phase 2.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line for Restaurant Owners</h2>
              
              <p className="text-lg mb-6">You don't need to understand transformers or neural networks. You need:</p>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li>Clean data (one POS, unified SKUs)</li>
                <li>Rule-based agents (if stock &lt; X, order Y)</li>
                <li>One person to review agent recommendations</li>
              </ol>
              
              <p className="text-lg mb-8">That's it. The margin expansion is real. A 5% reduction in food cost (from better inventory and less waste) on ₹1 crore annual revenue is ₹5 lakhs of additional profit. Pure bottom line.</p>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
