import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogAgenticAIClinics() {
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
                color: "#0ABFBC",
                border: "1px solid #0ABFBC30",
              }}
            >
              Product
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              Agentic AI for Small Clinics: Automate the Boring Stuff Without Breaking Compliance
            </h1>
            
            <div className="flex items-center gap-4 mb-12" style={{ color: "var(--color-text-muted)" }}>
              <span className="text-sm">7 min read</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Mar 2026</span>
            </div>
            
            <div className="prose prose-invert max-w-none" style={{ color: "var(--color-text-muted)" }}>
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Clinic Owner's Lament</h2>
              
              <p className="mb-6">Dr. Sharma runs a small clinic in Pune. His day:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>9 AM: 15 patients already waiting</li>
                <li>10 AM: Someone needs a referral letter (handwrite it)</li>
                <li>12 PM: Insurance company calls to verify a claim</li>
                <li>2 PM: Patient wants their prescription emailed (clinic has no email setup)</li>
                <li>4 PM: Three no-shows for follow-ups he scheduled manually</li>
                <li>6 PM: Two hours of documentation before he goes home</li>
              </ul>
              
              <p className="text-lg mb-8">He's a good doctor. But he spends 40% of his day on non-clinical work.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Good News: You Don't Need Clinical AI</h2>
              
              <p className="mb-6">
                Everyone talks about AI diagnosing diseases. Ignore that for now. The compliance risk is too high, and Indian regulations haven't caught up.
              </p>
              
              <p className="text-lg mb-8">Instead, automate the <em>administrative</em> work. This is safe, legal, and immediately valuable.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>Three Agents Every Small Clinic Can Deploy Today</h2>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 1: The Appointment Scheduler & Reminder Bot</h3>
              
              <p className="mb-4"><strong>What it does:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Accepts appointment requests via WhatsApp</li>
                <li>Checks doctor's calendar (Google Calendar or simple DB)</li>
                <li>Confirms or offers alternatives</li>
                <li>Sends reminders 24h and 1h before</li>
                <li>Handles cancellations and rescheduling</li>
              </ul>
              
              <p className="mb-4"><strong>Why this is safe:</strong> It never makes clinical decisions. It's just a smarter calendar.</p>
              
              <p className="mb-4"><strong>Implementation (low-tech version):</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`// WhatsApp message received: "Book appointment tomorrow 11am"
const intent = parseIntent(message); // { action: "book", date: "tomorrow", time: "11am" }

if (intent.action === "book") {
    const requestedSlot = convertToDateTime(intent.date, intent.time);
    const isAvailable = checkCalendar(requestedSlot);
    
    if (isAvailable) {
        saveToCalendar(requestedSlot, patientNumber);
        sendWhatsApp("Confirmed for " + formatDate(requestedSlot) + 
                     ". Send CANCEL to cancel. Send RESCHEDULE to change.");
    } else {
        const alternatives = findNearestAvailable(requestedSlot);
        sendWhatsApp("11am not available. Options: " + 
                     alternatives.join(", ") + ". Reply with your choice.");
    }
}`}
              </pre>
              
              <p className="mb-8"><strong>ROI:</strong> Dr. Sharma's receptionist (or his own time) spends 1 hour daily on appointment management. At ₹300/hour for his time (conservative), that's ₹9,000/month. Agent cost: ₹0-500/month.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 2: The Follow-up & Recall Agent</h3>
              
              <p className="mb-4"><strong>What it does:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tracks which patients need follow-up (based on diagnosis code or doctor's instruction)</li>
                <li>Schedules reminder messages</li>
                <li>Handles "recall" campaigns (e.g., "Annual health checkup due for all patients over 40")</li>
              </ul>
              
              <p className="mb-4"><strong>Compliance note:</strong> This agent should never say "You have disease X, please come for follow-up." Instead: "As discussed during your last visit, please schedule a follow-up appointment."</p>
              
              <p className="mb-4"><strong>Data structure:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`{
  "patient_id": "P10023",
  "last_visit": "2025-01-15",
  "diagnosis_codes": ["I10", "E11"],  // Hypertension, Diabetes
  "followup_rules": [
    {"condition": "I10", "interval_days": 90, "next_due": "2025-04-15"},
    {"condition": "E11", "interval_days": 60, "next_due": "2025-03-15"}
  ],
  "consent_to_contact": true,
  "preferred_language": "hi"  // Hindi
}`}
              </pre>
              
              <p className="mb-4"><strong>Recall campaign logic:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`def run_daily_recall():
    today = date.today()
    
    # Patients with follow-up due today
    due_patients = Patient.query.filter(
        Patient.next_followup == today,
        Patient.consent_to_contact == True
    ).all()
    
    for patient in due_patients:
        message = generate_followup_message(
            patient.name,
            patient.preferred_language,
            patient.next_followup_reason
        )
        send_whatsapp(patient.phone, message)
        log_communication(patient.id, "followup_reminder_sent")`}
              </pre>
              
              <p className="mb-8"><strong>ROI:</strong> No-shows cost clinics real money. A missed ₹500 consultation is pure loss. At 10 no-shows per month, that's ₹5,000. Good recall drops no-shows by 30-50%.</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Agent 3: The Prescription Refill Request Handler</h3>
              
              <p className="mb-4"><strong>What it does:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Accepts refill requests via WhatsApp/SMS</li>
                <li>Checks if refill is appropriate (not a controlled substance, not expired)</li>
                <li>Creates a task for doctor to review and approve</li>
                <li>Sends digital prescription or informs patient to collect</li>
              </ul>
              
              <p className="mb-4"><strong>Safety boundaries:</strong></p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Never auto-approve any medication</li>
                <li>Flag controlled substances (Schedule H drugs) for mandatory in-person visit</li>
                <li>Log every request and approval</li>
              </ul>
              
              <p className="mb-4"><strong>Refill request flow:</strong></p>
              
              <pre className="bg-black/50 rounded-lg p-4 mb-8 overflow-x-auto text-sm" style={{ fontFamily: "var(--font-mono)", border: "1px solid rgba(255,255,255,0.1)" }}>
{`Patient: "Need refill for BP medicine"
    │
    ▼
Agent: Asks "Which medicine? Last prescribed on which date?"
    │
    ▼
Patient: "Amlodipine 5mg, prescribed 2 months ago"
    │
    ▼
Agent: Checks records → Valid prescription, not controlled, within refill window
    │
    ▼
Agent: Creates task "Review refill request for patient X"
    │
    ▼
Dr. Sharma: Opens app, sees request, approves with one click
    │
    ▼
Agent: Sends digital prescription via WhatsApp`}
              </pre>
              
              <p className="mb-8">Why patients love this: No waiting on hold. No "the doctor will call you back." Instant acknowledgment, fast resolution.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Compliance Framework (India-Specific)</h2>
              
              <p className="mb-6">Here's what's allowed and what's not, based on current interpretation (always verify with your legal advisor):</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      <th className="text-left py-3 px-4 text-white font-semibold">Activity</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Allowed?</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Appointment scheduling</td>
                      <td className="py-3 px-4" style={{ color: "#34d399" }}>✅ Yes</td>
                      <td className="py-3 px-4">None</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Sending reminders</td>
                      <td className="py-3 px-4" style={{ color: "#34d399" }}>✅ Yes</td>
                      <td className="py-3 px-4">Must have patient consent</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Sharing reports</td>
                      <td className="py-3 px-4" style={{ color: "#34d399" }}>✅ Yes</td>
                      <td className="py-3 px-4">Via secure channel (WhatsApp with patient consent is acceptable per NMC guidelines)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Auto-diagnosis</td>
                      <td className="py-3 px-4" style={{ color: "#f87171" }}>❌ No</td>
                      <td className="py-3 px-4">Not allowed without doctor supervision</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Auto-prescribing</td>
                      <td className="py-3 px-4" style={{ color: "#f87171" }}>❌ No</td>
                      <td className="py-3 px-4">Never allowed</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Refill requests with doctor approval</td>
                      <td className="py-3 px-4" style={{ color: "#34d399" }}>✅ Yes</td>
                      <td className="py-3 px-4">Doctor must review each</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td className="py-3 px-4">Collecting patient history via bot</td>
                      <td className="py-3 px-4" style={{ color: "#fbbf24" }}>⚠️ Conditional</td>
                      <td className="py-3 px-4">Must be reviewed by doctor, cannot replace clinical interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Tech Stack (Non-Technical Owner Edition)</h2>
              
              <p className="mb-6">You don't need to code. Here's what works for small clinics:</p>
              
              <h3 className="text-xl font-bold text-white mb-3">Option A: WhatsApp Business API + No-Code</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use WATI or Interakt for WhatsApp Business</li>
                <li>Set up auto-replies for common questions</li>
                <li>Connect to Google Calendar via Zapier/Make</li>
                <li>Total setup time: 2 hours</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Option B: All-in-One Clinic Management with AI</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Practo (has automation features)</li>
                <li>MediSeva (India-specific)</li>
                <li>Our MedRelief Clinic Edition (shameless plug)</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mb-3">Option C: Custom (if you have technical help)</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Twilio for WhatsApp/SMS</li>
                <li>Airtable or Supabase for data</li>
                <li>n8n or Pipedream for workflows</li>
                <li>Deploy on Railway or Render</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The 30-Day Rollout Plan</h2>
              
              <p className="mb-4"><strong>Week 1:</strong> Set up WhatsApp Business. Add appointment booking and reminders only.</p>
              <p className="mb-4"><strong>Week 2:</strong> Add follow-up tracking. Start with 10 chronic patients as pilot.</p>
              <p className="mb-4"><strong>Week 3:</strong> Launch refill request handling. Approve manually at first.</p>
              <p className="mb-8"><strong>Week 4:</strong> Measure. How many calls reduced? How many no-shows saved?</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>A Word on Data Privacy</h2>
              
              <p className="mb-6">Indian clinics must follow Digital Personal Data Protection Act (DPDPA) 2023. Key requirements:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Get explicit consent for WhatsApp communication</li>
                <li>Allow patients to opt out easily (send "STOP")</li>
                <li>Don't share data with third parties without consent</li>
                <li>Delete data when no longer needed</li>
              </ul>
              
              <p className="mb-8">Our templates include consent collection flows. Don't skip this.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>The Bottom Line</h2>
              
              <p className="text-lg mb-8">You became a doctor to treat patients, not to play receptionist. Agentic AI can handle the boring stuff while you focus on clinical care. Start small. Start safe. Start today.</p>
              
              <div className="glass-card p-6 rounded-lg mb-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white font-semibold mb-2">Want a checklist?</p>
                <p>Download our "Clinic Automation Readiness Assessment" (PDF). No email required — just click here.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
