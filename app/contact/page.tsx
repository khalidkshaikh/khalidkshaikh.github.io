"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Nav />
      <main className="min-h-screen" style={{ background: "var(--color-bg-dark)" }}>
        <div className="wrap py-32">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4 text-center" style={{ fontFamily: "var(--font-bricolage)" }}>
              Get in Touch
            </h1>
            <p className="text-center mb-10" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
              Have a question or want to collaborate? Send me a message.
            </p>

            {submitted ? (
              <div className="text-center py-12 px-6 rounded-2xl" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <div className="text-4xl mb-4">✓</div>
                <p className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>Message Sent!</p>
                    <p style={{ color: "var(--color-text-muted)" }}>I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text-muted)" }}>Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text-muted)" }}>Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text-muted)" }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  style={{ padding: "14px 32px" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
