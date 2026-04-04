"use client";

interface MatrixCell {
  label: string;
  sublabel?: string;
  action?: string;
  status: "success" | "warning" | "danger" | "info";
}

interface MatrixDiagramProps {
  title?: string;
  topLeft: MatrixCell;
  topRight: MatrixCell;
  bottomLeft: MatrixCell;
  bottomRight: MatrixCell;
  topLabel: string;
  bottomLabel: string;
  leftLabel: string;
  rightLabel: string;
}

const statusStyles = {
  success: { bg: "rgba(16, 185, 129, 0.15)", border: "#10B981", text: "#34D399" },
  warning: { bg: "rgba(245, 158, 11, 0.15)", border: "#F59E0B", text: "#FBBF24" },
  danger: { bg: "rgba(239, 68, 68, 0.15)", border: "#EF4444", text: "#F87171" },
  info: { bg: "rgba(99, 102, 241, 0.2)", border: "#6366F1", text: "#A5B4FC" },
};

export default function MatrixDiagram({
  title,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  topLabel,
  bottomLabel,
  leftLabel,
  rightLabel,
}: MatrixDiagramProps) {
  return (
    <div 
      className="my-8 overflow-x-auto"
      style={{ 
        padding: "28px 28px 36px 28px",
        background: "linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(99, 102, 241, 0.15)",
        boxShadow: "0 8px 32px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0px rgba(255, 255, 255, 0.04)",
      }}
    >
      {title && (
        <h4 className="text-center text-white font-medium mb-6" style={{ fontFamily: "var(--font-bricolage)" }}>
          {title}
        </h4>
      )}
      
      <div className="flex flex-col items-center">
        {/* Column Labels */}
        <div className="flex w-full max-w-md mb-2">
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {leftLabel}
          </div>
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {rightLabel}
          </div>
        </div>
        
        {/* Top Row */}
        <div className="flex gap-4 mb-3">
          <div 
            className="flex flex-col items-center justify-center p-5 text-center transition-all hover:scale-[1.02]"
            style={{ 
              background: statusStyles[topLeft.status].bg,
              border: `1px solid ${statusStyles[topLeft.status].border}`,
              borderRadius: "20px",
              minWidth: "140px",
            }}
          >
            <span className="text-2xl mb-2">{topLeft.label}</span>
            {topLeft.sublabel && (
              <span className="text-xs opacity-70" style={{ color: statusStyles[topLeft.status].text }}>
                {topLeft.sublabel}
              </span>
            )}
            {topLeft.action && (
              <span className="text-xs mt-2 px-2 py-1 rounded-full" style={{ 
                background: statusStyles[topLeft.status].border,
                color: "#fff"
              }}>
                {topLeft.action}
              </span>
            )}
          </div>
          
          <div 
            className="flex flex-col items-center justify-center p-5 text-center transition-all hover:scale-[1.02]"
            style={{ 
              background: statusStyles[topRight.status].bg,
              border: `1px solid ${statusStyles[topRight.status].border}`,
              borderRadius: "20px",
              minWidth: "140px",
            }}
          >
            <span className="text-2xl mb-2">{topRight.label}</span>
            {topRight.sublabel && (
              <span className="text-xs opacity-70" style={{ color: statusStyles[topRight.status].text }}>
                {topRight.sublabel}
              </span>
            )}
            {topRight.action && (
              <span className="text-xs mt-2 px-2 py-1 rounded-full" style={{ 
                background: statusStyles[topRight.status].border,
                color: "#fff"
              }}>
                {topRight.action}
              </span>
            )}
          </div>
        </div>
        
        {/* Row Labels */}
        <div className="flex w-full max-w-md mb-2">
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {topLabel}
          </div>
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {topLabel}
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="flex gap-4 mb-3">
          <div 
            className="flex flex-col items-center justify-center p-5 text-center transition-all hover:scale-[1.02]"
            style={{ 
              background: statusStyles[bottomLeft.status].bg,
              border: `1px solid ${statusStyles[bottomLeft.status].border}`,
              borderRadius: "20px",
              minWidth: "140px",
            }}
          >
            <span className="text-2xl mb-2">{bottomLeft.label}</span>
            {bottomLeft.sublabel && (
              <span className="text-xs opacity-70" style={{ color: statusStyles[bottomLeft.status].text }}>
                {bottomLeft.sublabel}
              </span>
            )}
            {bottomLeft.action && (
              <span className="text-xs mt-2 px-2 py-1 rounded-full" style={{ 
                background: statusStyles[bottomLeft.status].border,
                color: "#fff"
              }}>
                {bottomLeft.action}
              </span>
            )}
          </div>
          
          <div 
            className="flex flex-col items-center justify-center p-5 text-center transition-all hover:scale-[1.02]"
            style={{ 
              background: statusStyles[bottomRight.status].bg,
              border: `1px solid ${statusStyles[bottomRight.status].border}`,
              borderRadius: "20px",
              minWidth: "140px",
            }}
          >
            <span className="text-2xl mb-2">{bottomRight.label}</span>
            {bottomRight.sublabel && (
              <span className="text-xs opacity-70" style={{ color: statusStyles[bottomRight.status].text }}>
                {bottomRight.sublabel}
              </span>
            )}
            {bottomRight.action && (
              <span className="text-xs mt-2 px-2 py-1 rounded-full" style={{ 
                background: statusStyles[bottomRight.status].border,
                color: "#fff"
              }}>
                {bottomRight.action}
              </span>
            )}
          </div>
        </div>
        
        {/* Row Labels */}
        <div className="flex w-full max-w-md">
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {bottomLabel}
          </div>
          <div className="flex-1 text-center text-xs opacity-60" style={{ color: "var(--color-text-muted)" }}>
            {bottomLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
