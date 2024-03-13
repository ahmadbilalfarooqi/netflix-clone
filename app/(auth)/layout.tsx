import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@context/ToasterContext";
import AuthProvider from "@context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Bilal - Netflix Clone",
  description: "Created with Next.js + Tailwind CSS + TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToasterContext />
        </AuthProvider>
        {children}
      </body>
    </html>
  );
}
