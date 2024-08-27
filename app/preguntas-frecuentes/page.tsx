import Preguntas from "@/components/shared/Preguntas";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Preguntas Frecuentes - Respuestas y Consejos sobre el Mercado Inmobiliario",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre el proceso de compra, venta y alquiler de propiedades. Información útil y consejos prácticos para ayudarte en tu experiencia inmobiliaria.",
  keywords: [
    "preguntas frecuentes",
    "FAQ inmobiliario",
    "dudas comunes",
    "consultas inmobiliarias",
    "información para compradores",
    "información para vendedores",
    "guía de compra",
    "guía de venta",
    "consejos inmobiliarios",
    "mercado inmobiliario",
  ],
  openGraph: {
    title:
      "Preguntas Frecuentes - Respuestas y Consejos sobre el Mercado Inmobiliario",
    description:
      "Encuentra respuestas a las preguntas más frecuentes sobre el proceso de compra, venta y alquiler de propiedades. Información útil y consejos prácticos para ayudarte en tu experiencia inmobiliaria.",
    tags: [
      "preguntas frecuentes",
      "FAQ inmobiliario",
      "dudas comunes",
      "consultas inmobiliarias",
      "información para compradores",
      "información para vendedores",
      "guía inmobiliaria",
      "respuestas inmobiliarias",
      "consejos para el comprador",
      "consejos para el vendedor",
    ],
    images: [
      {
        url: `https://i.postimg.cc/FKLVqrQC/metadata.png`, // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: `https://i.postimg.cc/FKLVqrQC/metadata.png`, // Dynamic og route
        width: 1800,
        height: 1600,
        alt: `image of 4srent`,
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
