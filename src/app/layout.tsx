// Next Imports
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS Imports
import "./globals.css";

// UI Components Imports
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Created by Webmavericks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppWrapper>
        <body className={inter.className}>{children}</body>
      </AppWrapper>
    </html>
  );
}
