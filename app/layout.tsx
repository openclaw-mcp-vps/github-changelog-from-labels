import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – Auto-generate changelogs from PR labels",
  description: "Scan GitHub PR labels and generate formatted changelogs for releases. Built for engineering managers shipping weekly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a5fcc4e-0ef1-412a-afd3-2a68c8f74991"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
