import { ImageResponse } from "next/og";

export const alt =
  "Christopher Jung, Computer Science senior at the University at Buffalo";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#ffffff",
          color: "#18181b",
        }}
      >
        <div style={{ fontSize: 28, color: "#6b6b74" }}>chrxsjung.me</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>
            Christopher Jung
          </div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#52525b" }}>
            Computer Science @ University at Buffalo
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 26,
            color: "#52525b",
            borderTop: "2px solid #ebebed",
            paddingTop: 32,
          }}
        >
          <span>Experience</span>
          <span>Projects</span>
          <span>Resume</span>
        </div>
      </div>
    ),
    size,
  );
}
