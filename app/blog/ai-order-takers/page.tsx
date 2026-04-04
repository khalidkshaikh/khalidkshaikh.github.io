"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogAIOrderTakers() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <article className="wrap py-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-sm font-medium hover:text-gradient transition-all" style={{ color: "var(--color-accent)" }}>
                ← Back to Blog
              </Link>
            </div>
            
            <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-6" style={{ background: "rgba(255,255,255,0.05)", color: "#F472B6", border: "1px solid #F472B630" }}>
              Restaurant
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              From Missed Calls to AI Order Takers: Automating Front-of-House for Busy Indian Restaurants
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">7 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The 3 AM Problem</h2>
              <p className="mb-4">Your phone rings at 3 AM. It's a customer: "I want to place an order for delivery."</p>
              <p className="mb-8">You're closed. They're annoyed. You lost a sale.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Solution: AI Order Takers</h2>
              <p className="mb-6">Not science fiction. Available today. Here's what an AI voice agent can do:</p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Customer: "Hi, I want to order biryani."
AI: "Sure! We have Chicken Biryani (₹250) and Mutton Biryani (₹350). Which would you like?"
Customer: "Chicken."
AI: "Great. Would you like a half or full portion? Half is ₹250, full is ₹450."
Customer: "Half is fine."
AI: "Anything to drink? We have Coke (₹40), Water (₹20), and Buttermilk (₹30)."
Customer: "One Coke."
AI: "Got it. Your order: Chicken Biryani Half (₹250), Coke (₹40). Total ₹290. Delivery or pickup?"
Customer: "Delivery. I'm at [address]."
AI: "Delivery in 35-40 minutes. Payment by Cash or UPI?"
Customer: "UPI."
AI: "Sending payment link to your WhatsApp now. Your order number is #142. Thank you!"

[Call ends. Order appears in your POS and kitchen display automatically.]`}
              </pre>
              
              <p className="mb-8"><strong>Time taken:</strong> 90 seconds. No staff involved. No "please hold" no "let me check." No errors.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Architecture</h2>
              
              <Mermaid chart={`
flowchart TD
    Call[📞 Incoming Call<br/>Twilio/Bulkit] --> Voice[🎤 Voice Agent<br/>Bland AI / Retell AI]
    Voice --> Logic[⚙️ Business Logic<br/>n8n / Pipedream]
    Logic --> POS[📻 POS / Kitchen<br/>Display System]
    Logic -.->|Creates order| Kitchen[Kitchen Display]
    Logic -.->|Notifies| Driver[🚚 Delivery Platform]
    
    style Call fill:#6366F1,color:#fff,stroke:#6366F1,rx:24,ry:24
    style Voice fill:#8B5CF6,color:#fff,stroke:#8B5CF6,rx:24,ry:24
    style Logic fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style POS fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style Kitchen fill:#64748B,color:#fff,stroke:#64748B,rx:24,ry:24
    style Driver fill:#F59E0B,color:#fff,stroke:#F59E0B,rx:24,ry:24
`} />
              
              <p className="mb-4"><strong>Cost breakdown (monthly):</strong></p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Twilio phone number + calling: ₹500-1,000</li>
                <li>Voice agent platform: ₹5,000-15,000</li>
                <li>Automation platform: ₹2,000-5,000</li>
                <li><strong>Total: ₹7,500-21,000</strong></li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Beyond Voice: WhatsApp Order Taking</h2>
              <p className="mb-6">Your customers are already on WhatsApp. Why make them call?</p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Customer: "Menu"
    ↓
Agent: Sends image of menu OR interactive buttons
    ↓
Customer: "Order: 2 butter chicken, 3 naan, 1 dal makhani"
    ↓
Agent: "Butter chicken (₹350) x2 = ₹700, Naan (₹40) x3 = ₹120, Dal makhani (₹250) = ₹250. Total ₹1070. Confirm?"
    ↓
Customer: "Confirm"
    ↓
Agent: "Delivery to [saved address]? Reply YES or change address"
    ↓
Customer: "YES"
    ↓
Agent: "Order confirmed. Payment link sent. ETA 35 min."`}
              </pre>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Handling Tricky Cases</h2>
              <p className="mb-4"><strong>Customer asks something not on menu:</strong> AI transfers to human or creates task for callback.</p>
              <p className="mb-4"><strong>Customer wants to modify order:</strong> AI checks if order is in preparation, modifies if possible.</p>
              <p className="mb-8"><strong>Customer is angry:</strong> Sentiment analysis triggers human escalation when anger detected.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Implementation Roadmap (2 Weeks)</h2>
              <p className="mb-4"><strong>Day 1-2:</strong> Set up WhatsApp Business API. Test with team.</p>
              <p className="mb-4"><strong>Day 3-5:</strong> Build basic order-taking flow (menu + price lookup). Test with 10 friendly customers.</p>
              <p className="mb-4"><strong>Day 6-7:</strong> Integrate with POS. Orders created automatically.</p>
              <p className="mb-4"><strong>Day 8-10:</strong> Add voice channel (Twilio + voice AI). Test with team.</p>
              <p className="mb-8"><strong>Day 11-14:</strong> Soft launch. AI handles 20% of calls, humans handle 80%. Gradually increase.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line</h2>
              <p className="text-lg mb-8">You're losing money on every phone call you handle manually. AI order takers are not "future technology" — they're available today, they work, and they cost less than a minimum-wage employee.</p>

              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
