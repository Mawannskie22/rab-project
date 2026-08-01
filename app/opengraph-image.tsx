import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = "Cost Guard | Cost Control Partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            background: "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 60%, #DBEAFE 100%)",
            color: "#0F172A",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
                borderRadius: "16px",
                fontSize: "32px",
                fontWeight: 700,
                color: "white",
              }}
            >
              CG
            </div>
            <span style={{ fontSize: "32px", color: "#1D4ED8", fontWeight: 600 }}>
              Cost Control Partner
            </span>
          </div>

          <h1 style={{ fontSize: "64px", lineHeight: 1.15, fontWeight: 800, margin: 0 }}>
            Hitung RAB, Audit BQ &amp;
            <br />
            Kontrol Biaya Proyek
          </h1>

          <p style={{ fontSize: "28px", color: "#475569", marginTop: "28px", maxWidth: "900px" }}>
            Solusi praktis untuk kontraktor, owner, developer, dan konsultan di Indonesia.
          </p>

          <div
            style={{
              display: "flex",
              marginTop: "auto",
              fontSize: "24px",
              color: "#1D4ED8",
              fontWeight: 600,
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
    ),
    {
      ...size,
    }
  );
}
