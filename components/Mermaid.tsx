"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    darkMode: true,
    background: "transparent",
    primaryColor: "#8B5CF6",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#8B5CF6",
    lineColor: "#6366F1",
    secondaryColor: "#14B8A6",
    tertiaryColor: "#1e293b",
    mainBkg: "transparent",
    nodeBorder: "#8B5CF6",
    clusterBkg: "rgba(139, 92, 246, 0.08)",
    clusterBorder: "#8B5CF6",
    titleColor: "#F8FAFC",
    titleTextColor: "#F8FAFC",
    edgeLabelBackground: "transparent",
    actorBorder: "#8B5CF6",
    actorBkg: "rgba(139, 92, 246, 0.12)",
    actorTextColor: "#F8FAFC",
    actorLineColor: "#8B5CF6",
    signalColor: "#14B8A6",
    signalTextColor: "#F8FAFC",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  flowchart: {
    curve: "catmullRom",
    padding: 25,
    nodeSpacing: 50,
    rankSpacing: 60,
    useMaxWidth: false,
    diagramPadding: 30,
    htmlLabels: true,
  },
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const renderChart = async () => {
      if (containerRef.current) {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        
        const container = containerRef.current;
        container.innerHTML = svg;
        
        const svgElement = container.querySelector("svg");
        if (svgElement) {
          svgElement.style.maxWidth = "100%";
          svgElement.style.height = "auto";
          
          const styles = document.createElement("style");
          styles.textContent = `
            .mermaid {
              font-family: 'Inter', system-ui, sans-serif !important;
            }
            .mermaid svg {
              background: transparent !important;
            }
            .mermaid .node rect, 
            .mermaid .node polygon,
            .mermaid .node circle,
            .mermaid .node ellipse {
              stroke-width: 1.5px !important;
              rx: 24px !important;
              ry: 24px !important;
              stroke-linecap: round !important;
              stroke-linejoin: round !important;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
              filter: drop-shadow(0 4px 12px rgba(139, 92, 246, 0.2)) !important;
            }
            .mermaid .node:hover rect,
            .mermaid .node:hover polygon {
              filter: brightness(1.2) drop-shadow(0 6px 20px rgba(139, 92, 246, 0.35)) !important;
              transform: translateY(-3px) !important;
            }
            .mermaid .edgeLabel .label {
              background: rgba(30, 41, 59, 0.95) !important;
              color: #CBD5E1 !important;
              padding: 8px 16px !important;
              border-radius: 24px !important;
              font-family: 'Inter', system-ui, sans-serif !important;
              font-size: 12px !important;
              font-weight: 500 !important;
              border: 1px solid rgba(139, 92, 246, 0.3) !important;
              box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
            }
            .mermaid .edgePath .path {
              stroke: url(#gradient) !important;
              stroke-width: 2.5px !important;
              stroke-dasharray: 0 !important;
              opacity: 0.8 !important;
            }
            .mermaid .marker {
              fill: #14B8A6 !important;
              stroke: #14B8A6 !important;
            }
            .mermaid .cluster rect {
              rx: 24px !important;
              ry: 24px !important;
              stroke-dasharray: 0 !important;
              stroke-width: 1px !important;
            }
            .mermaid .cluster text {
              font-weight: 600 !important;
              font-size: 14px !important;
              fill: #E2E8F0 !important;
            }
            .mermaid .label text {
              fill: #E2E8F0 !important;
              font-weight: 500 !important;
            }
            .mermaid .node text {
              font-weight: 500 !important;
              font-size: 13px !important;
              fill: #FFFFFF !important;
              text-shadow: 0 1px 3px rgba(0,0,0,0.4) !important;
            }
            .mermaid .node .label {
              font-weight: 500 !important;
              font-size: 13px !important;
            }
          `;
          container.appendChild(styles);
        }
      }
    };
    renderChart();
  }, [chart]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((s) => Math.min(s + 0.25, 3));
    setIsZoomed(true);
  };
  
  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((s) => Math.max(s - 0.25, 0.5));
    setIsZoomed(true);
  };
  
  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setIsZoomed(false);
  };

  return (
    <div className="relative my-8">
      <div 
        ref={containerRef} 
        className="flex justify-center"
        style={{ 
          minHeight: "200px",
          padding: "32px",
          background: "linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)",
          borderRadius: "24px",
          border: "1px solid rgba(139, 92, 246, 0.2)",
          boxShadow: "0 12px 40px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0px rgba(255, 255, 255, 0.05)",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          transition: "transform 0.3s ease",
        }}
      />
      
      <div 
        className="absolute top-4 right-4 flex items-center gap-1 z-10"
        style={{ 
          background: "rgba(15, 23, 42, 0.95)", 
          padding: "6px 10px", 
          borderRadius: "12px",
          border: "1px solid rgba(139, 92, 246, 0.3)"
        }}
      >
        <button
          onClick={handleZoomOut}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:bg-white/10"
          style={{ color: "#A78BFA" }}
          title="Zoom out"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
            <path d="M8 11h6"></path>
          </svg>
        </button>
        
        <button
          onClick={handleReset}
          className="px-2 text-xs font-medium rounded transition-all hover:bg-white/10"
          style={{ color: scale === 1 ? "#14B8A6" : "#A78BFA", minWidth: "45px" }}
        >
          {Math.round(scale * 100)}%
        </button>
        
        <button
          onClick={handleZoomIn}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:bg-white/10"
          style={{ color: "#A78BFA" }}
          title="Zoom in"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
            <path d="M11 8v6M8 11h6"></path>
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center mt-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
        Use controls to zoom
      </div>
    </div>
  );
}
