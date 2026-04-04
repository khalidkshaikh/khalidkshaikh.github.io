"use client";

interface FlowDiagramProps {
  nodes: {
    id: string;
    label: string;
    icon?: string;
    sublabel?: string;
    status?: "default" | "success" | "warning" | "info" | "purple";
  }[];
  connections: {
    from: string;
    to: string;
    label?: string;
    type?: "solid" | "dashed";
  }[];
  direction?: "TB" | "LR";
}

const statusColors = {
  default: { bg: "rgba(100, 116, 139, 0.2)", border: "#64748B", text: "#fff" },
  success: { bg: "rgba(20, 184, 166, 0.15)", border: "#14B8A6", text: "#fff" },
  warning: { bg: "rgba(245, 158, 11, 0.15)", border: "#F59E0B", text: "#fff" },
  info: { bg: "rgba(99, 102, 241, 0.2)", border: "#6366F1", text: "#fff" },
  purple: { bg: "rgba(139, 92, 246, 0.2)", border: "#8B5CF6", text: "#fff" },
};

export default function FlowDiagram({ nodes, connections, direction = "TB" }: FlowDiagramProps) {
  return (
    <div 
      className="my-8 overflow-x-auto"
      style={{ 
        padding: "28px 28px 36px 28px",
        background: "linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(99, 102, 241, 0.15)",
        boxShadow: "0 8px 32px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0px rgba(255, 255, 255, 0.04)",
        minHeight: "200px"
      }}
    >
      <div 
        className="flex gap-8 items-center justify-center flex-wrap"
        style={{ flexDirection: direction === "LR" ? "row" : "column" }}
      >
        {nodes.map((node, idx) => {
          const colors = statusColors[node.status || "default"];
          return (
            <div key={node.id} className="flex items-center">
              <div 
                className="flex flex-col items-center text-center p-4 transition-all hover:scale-[1.02]"
                style={{ 
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: "20px",
                  minWidth: "140px",
                  boxShadow: `0 4px 16px -2px ${colors.border}30`
                }}
              >
                {node.icon && (
                  <span className="text-2xl mb-2">{node.icon}</span>
                )}
                <span 
                  className="font-medium"
                  style={{ color: colors.text, fontFamily: "var(--font-inter)" }}
                >
                  {node.label}
                </span>
                {node.sublabel && (
                  <span 
                    className="text-xs mt-1 opacity-70"
                    style={{ color: colors.text, fontFamily: "var(--font-inter)" }}
                  >
                    {node.sublabel}
                  </span>
                )}
              </div>
              
              {idx < nodes.length - 1 && (
                <div className="flex items-center mx-2">
                  <svg 
                    width="40" 
                    height="24" 
                    viewBox="0 0 40 24" 
                    fill="none"
                    style={{ margin: "0 -4px" }}
                  >
                    <path 
                      d="M0 12H35M35 12L25 4M35 12L25 20" 
                      stroke="#6366F1" 
                      strokeWidth="2" 
                      strokeDasharray={connections[idx]?.type === "dashed" ? "4 2" : "none"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
