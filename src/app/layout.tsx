// main.tsx file for react = layout.tsx in next.js
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// setting up the title for project
export const metadata: Metadata = {
  title: "ChatPDF YT",
};

// 1. clerkProvider wrapper to wrap whole app
// 2. Providers wrapper, getting from component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>{children}</body>
          <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  );
}
