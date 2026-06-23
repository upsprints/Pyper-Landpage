import { ImageResponse } from "next/og";
import { hero, siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f9f8",
          color: "#171b1d",
          padding: "70px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 10,
              background: "#69dd96",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#006d3d",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            p
          </div>
          <div style={{ fontSize: 32, fontWeight: 800 }}>pyper</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "#006d3d", fontSize: 24, marginBottom: 24 }}>
            CRM com IA e WhatsApp
          </div>
          <div
            style={{
              maxWidth: 870,
              fontSize: 72,
              lineHeight: 1.04,
              fontWeight: 800,
            }}
          >
            {hero.title}
          </div>
        </div>
        <div style={{ color: "#58615a", fontSize: 24 }}>{siteConfig.url}</div>
      </div>
    ),
    size,
  );
}
