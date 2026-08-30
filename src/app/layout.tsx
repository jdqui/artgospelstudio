import type { Metadata } from "next";

import "./globals.css"

export const metadata: Metadata = {
  title: "Art Gospel - Providing skills & ideas to help propel your brand",
  description: "From brand identity to digital design, I craft visuals that tell stories and build connections. My expertise spans digital and print —bringing strategy and creativity together for impactful results.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}