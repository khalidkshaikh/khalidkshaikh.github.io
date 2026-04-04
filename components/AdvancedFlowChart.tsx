"use client";

interface FlowNode {
  id: string;
  label: string;
  icon?: string;
  sublabel?: string;
  status?: "default" | "success" | "warning" | "info" | "purple" | "green";
}

interface FlowConnection {
  from: string;
  to: string;
  label?: string;
  type?: "solid" | "dashed";
}

interface Branch {
  label?: string;
  nodes: FlowNode[];
  connections: FlowConnection[];
}

interface AdvancedFlowChartProps {
  startNode?: FlowNode;
  branches?: Branch[];
  endNode?: FlowNode;
}

const statusColors = {
  default: { bg: "rgba(100, 116, 139, 0.2)", border: "#64748B", text: "#fff" },
  success: { bg: "rgba(16, 185, 129, 0.15)", border: "#10B981", text: "#fff" },
  warning: { bg: "rgba(245, 158, 11, 0.15)", border: "#F59E0B", text: "#fff" },
  info: { bg: "rgba(99, 102, 241, 0.2)", border: "#6366F1", text: "#fff" },
  purple: { bg: "rgba(139, 92, 246, 0.2)", border: "#8B5CF6", text: "#fff" },
  green: { bg: "rgba(20, 184, 166, 0.15)", border: "#14B8A6", text: "#fff" },
};

function FlowNodeComponent({ node }: { node: FlowNode }) {
  const colors = statusColors[node.status || "default"];
  return (
    <div 
      className="flex flex-col items-center text-center p-4 transition-all hover:scale-[1.02] cursor-pointer"
      style={{ 
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: "20px",
        minWidth: "130px",
        boxShadow: `0 4px 16px -2px ${colors.border}30`
      }}
    >
      {node.icon && <span className="text-2xl mb-1">{node.icon}</span>}
      <span className="font-medium text-sm" style={{ color: colors.text, fontFamily: "var(--font-inter)" }}>
        {node.label}
      </span>
      {node.sublabel && (
        <span className="text-xs mt-1 opacity-60" style={{ color: colors.text }}>
          {node.sublabel}
        </span>
      )}
    </div>
  );
}

function ConnectionArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center mx-1">
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
        <path 
          d="M2 10H26M26 10L18 4M26 10L18 16" 
          stroke="#6366F1" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label && (
        <span 
          className="text-xs px-2 py-1 rounded-full"
          style={{ 
            background: "rgba(30, 41, 59, 0.9)", 
            color: "#94A3B8",
            border: "1px solid rgba(99, 102, 241, 0.25)",
            marginLeft: "-4px"
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

function ConnectionLine({ dashed }: { dashed?: boolean }) {
  return (
    <svg width="32" height="2" viewBox="0 0 32 2" fill="none" className="mx-1">
      <path 
        d="M2 1H30" 
        stroke="#6366F1" 
        strokeWidth="1.5" 
        strokeDasharray={dashed ? "4 2" : "none"}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AdvancedFlowChart({ startNode, branches, endNode }: AdvancedFlowChartProps) {
  return (
    <div 
      className="my-8 overflow-x-auto"
      style={{ 
        padding: "28px 28px 36px 28px",
        background: "linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)",
        borderRadius: "20px",
        border: "1px solid rgba(99, 102, 241, 0.15)",
        boxShadow: "0 8px 32px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0px rgba(255, 255, 255, 0.04)",
        minHeight: "150px"
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Start Node */}
        {startNode && (
          <>
            <FlowNodeComponent node={startNode} />
            <ConnectionLine />
          </>
        )}
        
        {/* Branches */}
        {branches && branches.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {branches.map((branch, branchIdx) => (
              <div key={branchIdx} className="flex flex-col items-center gap-4">
                {branch.label && (
                  <span 
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ 
                      background: "rgba(99, 102, 241, 0.15)", 
                      color: "#A5B4FC",
                      border: "1px solid rgba(99, 102, 241, 0.3)"
                    }}
                  >
                    {branch.label}
                  </span>
                )}
                <div className="flex flex-wrap justify-center gap-2">
                  {branch.nodes.map((node, nodeIdx) => (
                    <div key={node.id} className="flex items-center">
                      <FlowNodeComponent node={node} />
                      {nodeIdx < branch.nodes.length - 1 && (
                        <ConnectionArrow label={branch.connections[nodeIdx]?.label} />
                      )}
                    </div>
                  ))}
                </div>
                {branchIdx < branches.length - 1 && (
                  <div className="absolute" style={{ width: "100%", height: "2px", background: "rgba(99, 102, 241, 0.1)", marginTop: "-24px" }} />
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* End Node */}
        {endNode && (
          <>
            <ConnectionLine />
            <FlowNodeComponent node={endNode} />
          </>
        )}
      </div>
    </div>
  );
}
