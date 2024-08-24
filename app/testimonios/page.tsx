import Testimonials from '@/components/shared/Testimonials'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Testimonios de Clientes - Experiencias y Opiniones sobre Nuestros Servicios Inmobiliarios",
    description:
      "Lee los testimonios de nuestros clientes satisfechos que han comprado, vendido o alquilado propiedades con nosotros. Descubre sus experiencias, opiniones y valoraciones sobre nuestros servicios inmobiliarios. Conoce cómo hemos ayudado a otros a encontrar la casa de sus sueños o a vender su propiedad con éxito",
    openGraph: {
      title: "Testimonios de Clientes - Experiencias y Opiniones sobre Nuestros Servicios Inmobiliarios",
      description:
        "Lee los testimonios de nuestros clientes satisfechos que han comprado, vendido o alquilado propiedades con nosotros. Descubre sus experiencias, opiniones y valoraciones sobre nuestros servicios inmobiliarios. Conoce cómo hemos ayudado a otros a encontrar la casa de sus sueños o a vender su propiedad con éxito",
      tags: [
        "testimonios de clientes",
        "experiencias de clientes",
        "reseñas inmobiliarias",
        "opiniones de clientes",
        "comentarios de compradores",
        "satisfacción del cliente",
        "historias de éxito",
        "feedback inmobiliario",
        "valoraciones de clientes",
        "experiencias de compra de casa",
        "recomendaciones de clientes",
        "testimonios de vendedores",
        "experiencias de alquiler"
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
            <Testimonials />
        </>
    )
}
