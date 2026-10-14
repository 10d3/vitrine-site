import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://isolatucasa.com"),
  title: {
    default: "Gestión Integral de Alquileres en Valencia | ISOLA",
    template: "%s | ISOLA",
  },
  description:
    "ISOLA gestiona tu piso en Valencia: media estancia, alquiler por habitaciones y viviendas turísticas (VUT). Inquilinos, contratos, limpiezas y mantenimiento. Sin permanencia.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
