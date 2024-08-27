import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Sobre Mí - Conoce al Agente Inmobiliario y su Trayectoria Profesional",
  description:
    "Conoce al agente inmobiliario detrás de nuestro éxito. Aprende sobre nuestra experiencia, trayectoria profesional, y compromiso con ofrecer un servicio personalizado y de calidad en el mercado inmobiliario",
  keywords: [
    "sobre mí",
    "agente inmobiliario",
    "perfil del agente",
    "experiencia inmobiliaria",
    "trayectoria profesional",
    "historia del agente",
    "servicio personalizado",
    "compromiso con el cliente",
    "experto en bienes raíces",
    "conoce al agente",
  ],
  openGraph: {
    title:
      "Sobre Mí - Conoce al Agente Inmobiliario y su Trayectoria Profesional",
    description:
      "Conoce al agente inmobiliario detrás de nuestro éxito. Aprende sobre nuestra experiencia, trayectoria profesional, y compromiso con ofrecer un servicio personalizado y de calidad en el mercado inmobiliario",
    tags: [
      "sobre mí",
      "acerca del agente",
      "conoce al agente inmobiliario",
      "experiencia inmobiliaria",
      "historia profesional",
      "agente inmobiliario",
      "servicio personalizado",
      "compromiso con el cliente",
      "perfil del agente",
      "trayectoria en bienes raíces",
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
  return <div>page</div>;
}
