import { ImageResponse } from "next/og";

export const alt = "Syed Muhammad Rehan, AI-focused Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "74px 82px",
          color: "#f7f4ff",
          background:
            "radial-gradient(circle at 80% 20%, #342268 0%, #11101d 36%, #090912 72%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#d6bc70",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#a78bfa",
            }}
          />
          AI-focused Software Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 70, lineHeight: 1.03, fontWeight: 700 }}>
            Syed Muhammad Rehan
          </div>
          <div style={{ maxWidth: 920, fontSize: 31, lineHeight: 1.3, color: "#c4bfd3" }}>
            Production RAG systems, AI agents, NL2SQL workflows, and Azure-deployed
            applications.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}>
          <span style={{ color: "#a78bfa" }}>@relinxx</span>
          <span style={{ color: "#aaa4b9" }}>Rawalpindi, Pakistan</span>
        </div>
      </div>
    ),
    size,
  );
}
