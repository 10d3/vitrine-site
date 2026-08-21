import Preguntas from "@/components/shared/Preguntas";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Gestión de Alquileres en Valencia",
  description:
    "Respuestas a las dudas más comunes de propietarios: alquiler garantizado, costes de la gestión, mantenimiento, inquilinos y viviendas turísticas en Valencia.",
  keywords: [
    "preguntas frecuentes gestión de alquileres",
    "alquiler garantizado Valencia preguntas",
    "cuánto cuesta gestionar un alquiler Valencia",
    "gestión de propiedades Valencia dudas",
    "FAQ propiedad Valencia",
  ],
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
  openGraph: {
    title: "Preguntas Frecuentes sobre Gestión de Alquileres | ISOLA Valencia",
    description:
      "Resolvemos las dudas más comunes de los propietarios sobre la gestión de su alquiler en Valencia.",
    url: "/preguntas-frecuentes",
    siteName: "ISOLA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `https://utfs.io/f/2a333442-4858-4adf-92dc-0175144edc2d-jlo1c3.jpg`,
        width: 1200,
        height: 630,
        alt: "Preguntas frecuentes sobre gestión de propiedades en Valencia",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <Preguntas />
    </>
  );
}
