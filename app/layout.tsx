import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Sharma — Backend Developer",
  description: "Backend Developer specializing in AI, Cybersecurity, and building intelligent systems.",
  keywords: ["Piyush Sharma", "Backend Developer", "AI", "Cybersecurity"],
  authors: [{ name: "Piyush Sharma" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
