import Testimonials from '@/components/shared/Testimonials'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Opiniones de Propietarios — Gestión de Alquileres en Valencia",
    description:
      "Descubre las opiniones de propietarios que confían su vivienda a ISOLA en Valencia: alquiler garantizado, gestión sin preocupaciones y tranquilidad real.",
    keywords: [
      "opiniones ISOLA Valencia",
      "testimonios gestión de alquileres",
      "reseñas empresa gestión de propiedades Valencia",
      "opiniones alquiler garantizado",
    ],
    alternates: {
      canonical: "/testimonios",
    },
    openGraph: {
      title: "Opiniones de Propietarios — ISOLA Valencia",
      description:
        "Lo que dicen los propietarios que confían su vivienda a ISOLA en Valencia.",
      url: "/testimonios",
      siteName: "ISOLA",
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: `https://utfs.io/f/597d0520-95fb-4630-ac1e-65bc18b289c0-gmfrrw.jpg`,
          width: 1200,
          height: 630,
          alt: "Testimonios de propietarios de ISOLA en Valencia",
        },
      ],
    },
  };
export default function page() {
    return (
        <>
            <Testimonials />
        </>
    )
}
