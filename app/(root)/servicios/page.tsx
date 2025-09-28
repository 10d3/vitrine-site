import Service from "@/components/shared/Service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Servicios Inmobiliarios - Compra, Venta, Alquiler y Gestión de Propiedades",
  description:
    "Descubre los servicios inmobiliarios que ofrecemos, desde la compra y venta de propiedades hasta el alquiler y la gestión integral. Asesoramiento profesional para todas tus necesidades en bienes raíces.",
  keywords: [
    "servicios inmobiliarios",
    "compra de propiedades",
    "venta de propiedades",
    "alquiler de propiedades",
    "gestión de propiedades",
    "asesoramiento inmobiliario",
    "valoración de propiedades",
    "marketing inmobiliario",
    "consultoría inmobiliaria",
    "servicio integral",
  ],
  openGraph: {
    title:
      "Servicios Inmobiliarios - Compra, Venta, Alquiler y Gestión de Propiedades",
    description:
      "Descubre los servicios inmobiliarios que ofrecemos, desde la compra y venta de propiedades hasta el alquiler y la gestión integral. Asesoramiento profesional para todas tus necesidades en bienes raíces.",
    tags: [
      "servicios inmobiliarios",
      "venta de propiedades",
      "compra de propiedades",
      "alquiler de propiedades",
      "gestión de propiedades",
      "asesoramiento inmobiliario",
      "valoración de propiedades",
      "marketing inmobiliario",
      "servicio al cliente",
      "consultoría inmobiliaria",
    ],
    images: [
      {
        url: `https://utfs.io/f/2b830903-cdfc-4886-ae06-5aec83196528-gmfrrx.jpg`, // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: `https://utfs.io/f/2b830903-cdfc-4886-ae06-5aec83196528-gmfrrx.jpg`, // Dynamic og route
        width: 1800,
        height: 1600,
        alt: `image of ISOLA`,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <Service />
    </>
  );
}
