import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Gestión de Propiedades en Valencia",
  description:
    "Conoce a ISOLA: empresa de gestión integral de propiedades en Valencia. Nuestra experiencia, nuestro equipo y nuestro compromiso con cada propietario.",
  keywords: [
    "sobre ISOLA",
    "empresa gestión de propiedades Valencia",
    "quienes somos gestión de alquileres",
    "gestión de alquileres Valencia empresa",
  ],
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros — Gestión de Propiedades en Valencia | ISOLA",
    description:
      "Conoce al equipo detrás de ISOLA, gestión integral de propiedades y alquileres en Valencia.",
    url: "/sobre-nosotros",
    siteName: "ISOLA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `https://utfs.io/f/aae2c8f3-b614-4b1b-97b0-b4c32a2de7e2-gmfrrv.jpg`,
        width: 1200,
        height: 630,
        alt: "Equipo de ISOLA, gestión de propiedades en Valencia",
      },
    ],
  },
};

export default function page() {
  return <div>page</div>;
}
