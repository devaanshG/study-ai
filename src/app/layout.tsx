"use client";

import "./globals.css"; // Your Tailwind/global styles
import { Raleway } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      {/* Your application layout */}
      <html lang="en">
        <body className={raleway.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
