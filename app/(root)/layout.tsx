import type { ReactNode } from "react";
import NavBAr from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/lib/seo/JsonLd";
// import { Analytics } from "@vercel/analytics/react";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://isolatucasa.com/#business",
  name: "ISOLA — Gestión Integral de Propiedades",
  url: "https://isolatucasa.com",
  // TODO: confirmar número real con el cliente antes de desplegar
  telephone: "+34642815465",
  email: "info@isolatucasa.com",
  image: "https://isolatucasa.com/vitrine1.jpg",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressRegion: "Comunitat Valenciana",
    addressCountry: "ES",
  },
  areaServed: ["Valencia"],
  sameAs: [],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Analytics /> */}
      <JsonLd data={localBusinessSchema} />
      <NavBAr />
      <div className=" md:px-24 text-custom-button-secondary">{children}</div>
      <Footer />
    </>
  );
}
