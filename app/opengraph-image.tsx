import { ImageResponse } from "next/og";

export const alt = "Syed Muhammad Rehan, Systems, Automation and AI Software Engineer";
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
          color: "#0f172a",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f8fafc 52%, #eff6ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#2563eb",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#2563eb",
            }}
          />
          Systems, Automation &amp; AI Software Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 70, lineHeight: 1.03, fontWeight: 700 }}>
            Syed Muhammad Rehan
          </div>
          <div style={{ maxWidth: 920, fontSize: 31, lineHeight: 1.3, color: "#334155" }}>
            Workflow automation, API integrations, client systems, and applied AI from
            discovery through handover.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23 }}>
          <span style={{ color: "#2563eb" }}>@relinxx</span>
          <span style={{ color: "#64748b" }}>Rawalpindi, Pakistan</span>
        </div>
      </div>
    ),
    size,
  );
}
