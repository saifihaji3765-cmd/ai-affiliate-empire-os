import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Affiliate Empire OS",
  description: "AI-powered affiliate automation system"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
