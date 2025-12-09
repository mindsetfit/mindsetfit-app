// Root layout híbrido: mantém integrações do Lasy + novo shell MindsetFit
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import { ReactNode } from "react";
import { AppProviders } from "../context/AppProviders";
import { AppShell } from "../components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindsetFit - Seu Personal Trainer Digital",
  description: "Planejamento nutricional e treinos personalizados",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <Script src="/lasy-bridge.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
