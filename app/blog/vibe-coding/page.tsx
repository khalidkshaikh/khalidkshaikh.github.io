"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Mermaid from "@/components/Mermaid";
import BlogCTA from "@/components/BlogCTA";

export default function BlogVibeCoding() {
  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <article className="wrap py-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-sm font-medium hover:text-gradient transition-all" style={{ color: "var(--color-accent)" }}>← Back to Blog</Link>
            </div>
            
            <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-6" style={{ background: "rgba(255,255,255,0.05)", color: "#F472B6", border: "1px solid #F472B630" }}>Engineering</span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Vibe-Coding Real Operator Tools: How I Use AI Agents to Go from Idea to Deployed MVP</h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">10 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Confession</h2>
              <p className="mb-6">I'm not a great coder. I know enough to be dangerous — Python, basic JavaScript, some SQL. But I couldn't pass a LeetCode medium to save my life.</p>
              <p className="mb-8">And yet, in the last 6 months, I've built:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>A lab registration agent that auto-fills patient details</li>
                <li>A restaurant order-taking WhatsApp bot</li>
                <li>An inventory forecasting tool for a 5-outlet QSR chain</li>
                <li>The first version of MedRelief (lab ERP)</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>What "Vibe Coding" Actually Means</h2>
              <p className="mb-6">Vibe coding isn't "AI writes everything while I watch." That's a recipe for disaster.</p>
              <p className="mb-6">Vibe coding is:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>You understand the problem deeply</li>
                <li>You understand architecture at a high level</li>
                <li>You use AI to write the boring implementation details</li>
                <li>You review, test, and own every line</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>My Actual Stack</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Layer</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Editor</td>
                      <td className="py-3 px-4">VS Code + Cursor</td>
                      <td className="py-3 px-4">AI autocomplete that actually understands context</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">AI Model</td>
                      <td className="py-3 px-4">Claude 3.5 Sonnet (via Cursor)</td>
                      <td className="py-3 px-4">Best for code generation</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Backend</td>
                      <td className="py-3 px-4">FastAPI (Python)</td>
                      <td className="py-3 px-4">Simple, fast, AI knows it well</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Database</td>
                      <td className="py-3 px-4">Supabase (PostgreSQL)</td>
                      <td className="py-3 px-4">Generous free tier, AI-friendly</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Frontend</td>
                      <td className="py-3 px-4">Streamlit or plain HTML</td>
                      <td className="py-3 px-4">I hate frontend; Streamlit is tolerable</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Hosting</td>
                      <td className="py-3 px-4">Railway or Render</td>
                      <td className="py-3 px-4">Deploy from Git, reasonable pricing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-8"><strong>Monthly cost:</strong> ~₹3,000 for hosting + API credits</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Process: From Idea to Deployed MVP in 48 Hours</h2>
              
              <Mermaid chart={`
flowchart LR
    P1[📝 Define<br/>Problem] --> P2[🤖 Architecture<br/>Design] --> P3[💻 Build<br/>Core] --> P4[🔄 Add<br/>Retry] --> P5[🧪 Test<br/>Edge Cases] --> P6[🚀 Deploy<br/>Live]
    
    style P1 fill:#6366F1,color:#fff,stroke:#6366F1,rx:24,ry:24
    style P2 fill:#8B5CF6,color:#fff,stroke:#8B5CF6,rx:24,ry:24
    style P3 fill:#A78BFA,color:#fff,stroke:#A78BFA,rx:24,ry:24
    style P4 fill:#14B8A6,color:#fff,stroke:#14B8A6,rx:24,ry:24
    style P5 fill:#F59E0B,color:#fff,stroke:#F59E0B,rx:24,ry:24
    style P6 fill:#10B981,color:#fff,stroke:#10B981,rx:24,ry:24
`} />
               
               <h3 className="text-xl font-bold text-white mb-3">Hour 0-2: Problem Definition</h3>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`User story:
As a lab patient, I want to receive my report on WhatsApp as soon as it's ready, so I don't have to call the lab.

Acceptance criteria:
1. Lab staff uploads PDF to a dashboard
2. System looks up patient's phone number (by order ID)
3. System sends PDF via WhatsApp
4. If delivery fails, retry 3 times
5. If still fails, create task for staff to call patient
6. Log everything for audit`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Hour 2-4: Architecture Design (With AI as Consultant)</h3>
              <p className="mb-6">AI is great for "compare options" questions. It saves hours of reading documentation.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Hour 4-8: Building the Core</h3>
              <p className="mb-6">Prompt the AI with clear requirements. Read every line. Test it.</p>
              <p className="mb-8"><strong>Time saved:</strong> Writing this from scratch would have taken me 2-3 hours. AI did it in 2 minutes. My review took 15 minutes.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Hour 8-12: Adding Retry Logic</h3>
              <pre className="bg-black/50 rounded-lg p-4 mb-6 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def process_retries():
    pending = db.query("SELECT * FROM delivery_logs 
         WHERE status IN ('pending', 'retry') 
         AND next_retry_at <= NOW()")
    
    for log in pending:
        try:
            send_whatsapp(log.media_url, log.phone)
            db.execute("UPDATE delivery_logs SET status='sent' WHERE id=?", log.id)
        except Exception as e:
            new_retry_count = log.retry_count + 1
            if new_retry_count >= 3:
                create_manual_task(log.order_id, "WhatsApp delivery failed after 3 retries")`}
              </pre>
              
              <h3 className="text-xl font-bold text-white mb-3">Hour 16-24: Testing and Edge Cases</h3>
              <p className="mb-4">This is where you can't cheat. AI won't find your bugs.</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Invalid order ID → 404</li>
                <li>Missing phone number → graceful failure</li>
                <li>PDF too large ({'>'}5MB) → rejection</li>
                <li>Order ID case sensitivity (LAB123 vs lab123) → normalize to uppercase</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Hour 24-30: Deployment</h3>
              <p className="mb-8">Prompt AI for Dockerfile and config files. Deploy with <code>railway up</code> → 5 minutes later, it's live.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The "Vibe-Coding" Rules I Live By</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li><strong>Never paste code you don't understand</strong> — If AI generates something and you can't explain what each line does, ask it to explain.</li>
                <li><strong>Use AI for implementation, not architecture</strong> — AI is bad at "what should I build?" It's good at "how do I build this specific thing?"</li>
                <li><strong>Test edges manually</strong> — AI writes code for the happy path. You must write tests for the sad path.</li>
                <li><strong>Keep it simple</strong> — If AI suggests a complex solution (microservices, message queues, Kubernetes), ask for the simple version first.</li>
                <li><strong>Commit early, commit often</strong> — AI generates code fast. You'll break things. Git is your undo button.</li>
              </ol>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>What I've Built Using This Method</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Lines</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">AI %</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">WhatsApp report delivery</td>
                      <td className="py-3 px-4">500</td>
                      <td className="py-3 px-4">70%</td>
                      <td className="py-3 px-4">48 hrs</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Restaurant order bot</td>
                      <td className="py-3 px-4">800</td>
                      <td className="py-3 px-4">60%</td>
                      <td className="py-3 px-4">1 week</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Inventory forecaster</td>
                      <td className="py-3 px-4">300</td>
                      <td className="py-3 px-4">80%</td>
                      <td className="py-3 px-4">1 day</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">MedRelief v1 (lab ERP)</td>
                      <td className="py-3 px-4">5000</td>
                      <td className="py-3 px-4">50%</td>
                      <td className="py-3 px-4">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Limitations</h2>
              <p className="mb-4"><strong>What AI is bad at:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Complex business logic with many edge cases</li>
                <li>Performance optimization (it writes slow code)</li>
                <li>Security (it ignores SQL injection unless you prompt for it)</li>
                <li>Debugging subtle bugs (you're on your own)</li>
              </ul>
              
              <p className="mb-4"><strong>What you still need to know:</strong></p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Basic programming concepts (variables, loops, functions, classes)</li>
                <li>How to read error messages</li>
                <li>How to use Git</li>
                <li>How to deploy to a server</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line for Indie Hackers</h2>
              <p className="text-lg mb-6">You don't need to be a 10x engineer anymore. You need to be a 1x engineer who knows how to prompt, review, test, and deploy.</p>
              <p className="text-lg mb-8">Vibe coding with AI agents is real. It works. I've shipped production code this way. But it's not magic — it's a skill you learn.</p>
              <p className="mb-8">Start today: Pick a small tool you need. Open Cursor (or VS Code with Copilot). Prompt for the first function. Review it. Test it. Fix it. Repeat.</p>
              <p className="text-lg mb-8">In a month, you'll be shipping faster than you thought possible.</p>
              
              <BlogCTA />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
