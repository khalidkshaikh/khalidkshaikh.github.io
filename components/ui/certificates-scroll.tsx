'use client';

import React from 'react';
import { motion } from "framer-motion";

interface Certificate {
  name: string;
  issuer: string;
  skills: string[];
  year?: string;
  description?: string;
}

interface CertificatesColumnProps {
  certificates: Certificate[];
  issuerLogos: Record<string, React.ReactNode>;
  duration?: number;
  className?: string;
}

const CertificatesColumn = ({ certificates, issuerLogos, duration = 15, className = "" }: CertificatesColumnProps) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {certificates.map(({ name, issuer, skills }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-6 rounded-2xl border max-w-xs w-full transition-all duration-300 cursor-default select-none group" 
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
                    borderColor: "rgba(124, 58, 237, 0.3)",
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      {issuerLogos[issuer]}
                    </div>
                    <span 
                      className="text-xs font-medium" 
                      style={{ color: "#0ABFBC", fontFamily: "var(--font-mono)" }}
                    >
                      {issuer}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-sm font-bold mb-3 leading-tight" 
                    style={{ color: "#fff", fontFamily: "var(--font-inter)" }}
                  >
                    {name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1">
                    {skills.slice(0, 3).map((skill, j) => (
                      <span 
                        key={j}
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(124, 58, 237, 0.2)",
                          color: "#C4B5FD",
                          fontFamily: "var(--font-mono)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

const CertificatesSection = ({ certificates, issuerLogos }: { certificates: Certificate[], issuerLogos: Record<string, React.ReactNode> }) => {
  const firstColumn = certificates.slice(0, 6);
  const secondColumn = certificates.slice(6, 12);
  const thirdColumn = certificates.slice(12, 18);

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div 
              className="py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase"
              style={{
                background: "rgba(124, 58, 237, 0.2)",
                color: "#C4B5FD",
                fontFamily: "var(--font-mono)"
              }}
            >
              Credentials
            </div>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center"
            style={{ 
              color: "#fff", 
              fontFamily: "var(--font-bricolage)"
            }}
          >
            My Certifications
          </h2>
          <p 
            className="text-center mt-5 text-lg leading-relaxed max-w-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Professional certifications and credentials showcasing expertise in enterprise technology and AI.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 max-h-[740px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <CertificatesColumn certificates={firstColumn} issuerLogos={issuerLogos} duration={20} />
          <CertificatesColumn 
            certificates={secondColumn} 
            issuerLogos={issuerLogos}
            duration={25} 
            className="hidden md:block" 
          />
          <CertificatesColumn 
            certificates={thirdColumn} 
            issuerLogos={issuerLogos}
            duration={22} 
            className="hidden lg:block" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export { CertificatesSection, CertificatesColumn };
