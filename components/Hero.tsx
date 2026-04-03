"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    
    const orbs = section.querySelectorAll<HTMLElement>("[data-orb]");
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      if (!canvas) return;
      const numberOfParticles = (canvas.height * canvas.width) / 12000;
      const colors = [
        "rgba(191, 148, 255, 0.6)",
        "rgba(139, 92, 246, 0.5)",
        "rgba(10, 191, 188, 0.4)",
        "rgba(124, 58, 237, 0.5)",
      ];
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 0.5;
        const x = Math.random() * (canvas.width - size * 2) + size * 2;
        const y = Math.random() * (canvas.height - size * 2) + size * 2;
        const directionX = Math.random() * 0.3 - 0.15;
        const directionY = Math.random() * 0.3 - 0.15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const connect = () => {
      if (!ctx || !canvas) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance =
            (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y);

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            const opacityValue = 1 - distance / 25000;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacityValue * 0.4})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
      }
      connect();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 10;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    };

    const onMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div
        data-orb="1"
        className="absolute rounded-full pointer-events-none animate-orb-1"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.05) 40%, transparent 70%)",
          top: "5%",
          left: "-10%",
          transition: "transform 0.15s ease-out",
          filter: "blur(60px)",
          zIndex: 2,
        }}
      />
      <div
        data-orb="2"
        className="absolute rounded-full pointer-events-none animate-orb-2"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(10, 191, 188, 0.15) 0%, rgba(10, 191, 188, 0.05) 40%, transparent 70%)",
          bottom: "0%",
          right: "-5%",
          transition: "transform 0.18s ease-out",
          filter: "blur(60px)",
          zIndex: 2,
        }}
      />
      <div
        data-orb="3"
        className="absolute rounded-full pointer-events-none animate-orb-3"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
          top: "40%",
          left: "55%",
          transition: "transform 0.12s ease-out",
          filter: "blur(50px)",
          zIndex: 2,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.08) 0%, transparent 50%)",
          zIndex: 2,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-bg-dark))",
          zIndex: 3,
        }}
      />

      <div className="wrap relative z-10 text-center" style={{ paddingTop: 140, paddingBottom: 100 }}>
        <div className="animate-fade-up flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#C4B5FD",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-inter)",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-dot"
              style={{ background: "#C4B5FD", boxShadow: "0 0 10px #C4B5FD" }}
            />
            Building Real Solutions
            <span className="text-[10px] opacity-60 font-mono" style={{ fontFamily: "var(--font-mono)" }}>
              khalidshaikh.dev
            </span>
          </div>
        </div>

        <h1
          className="animate-fade-up-1"
          style={{ fontFamily: "var(--font-bricolage)", lineHeight: 0.9 }}
        >
          <span
            className="block text-white"
            style={{
              fontSize: "clamp(72px, 12vw, 128px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textShadow: "0 0 80px rgba(255,255,255,0.1)",
            }}
          >
            BUILD.
          </span>
          <span
            className="block text-gradient"
            style={{
              fontSize: "clamp(72px, 12vw, 128px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            SHIP. REPEAT.
          </span>
        </h1>

        <p
          className="animate-fade-up-2 mx-auto"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(18px, 2.5vw, 22px)",
            color: "var(--color-text-muted)",
            maxWidth: 560,
            lineHeight: 1.6,
            marginTop: "2rem",
          }}
        >
          I build tools that solve real problems. Not just concepts.{" "}
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            Ship. Iterate. Improve.
          </span>
        </p>

        <div className="animate-fade-up-3 flex flex-wrap justify-center gap-3 mt-10">
          {[
            { label: "🤖 AI Workflows", color: "#5EEAD4" },
            { label: "🔧 Full-Stack Dev", color: "#C4B5FD" },
            { label: "🚀 Ship Fast", color: "#86EFAC" },
          ].map((tag) => (
            <span
              key={tag.label}
              className="px-5 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: tag.color,
                fontFamily: "var(--font-inter)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <div className="animate-fade-up-3 flex flex-wrap justify-center gap-4 mt-14">
          <Link href="#products" className="btn-primary" style={{ fontSize: "15px", padding: "16px 36px" }}>
            Explore Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="#erp" className="btn-ghost" style={{ fontSize: "15px", padding: "16px 36px" }}>
            Join ERP Waitlist
          </Link>
        </div>

        <div className="animate-fade-up-4 mt-20 flex flex-col items-center gap-3 opacity-60">
          <span className="text-xs tracking-widest uppercase animate-pulse" style={{ fontFamily: "var(--font-inter)", color: "var(--color-text-muted)" }}>
            Scroll
          </span>
          <div
            className="w-8 h-14 rounded-full border flex items-center justify-center"
            style={{
              borderColor: "rgba(139, 92, 246, 0.3)",
              background: "rgba(139, 92, 246, 0.05)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)",
            }}
          >
            <div
              className="w-1.5 h-3 rounded-full"
              style={{
                background: "linear-gradient(180deg, #C4B5FD 0%, #8B5CF6 50%, #7C3AED 100%)",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.4)",
                animation: "scrollBounce 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
