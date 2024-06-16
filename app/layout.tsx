import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBAr from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '4SRENT | Home',
  description: "Gestionamos tu propiedad, garantizamos tu ingreso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBAr />
        <div className=" md:px-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
