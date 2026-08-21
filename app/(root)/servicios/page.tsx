import { Metadata } from "next";
import Service from "@/components/shared/service2";

export const metadata: Metadata = {
  title: "Servicios de Gestión de Alquileres en Valencia",
  description:
    "Gestión integral de alquileres en Valencia: registro turístico (NRU), SES Hospedajes, administración de propiedades y gestión Airbnb. Descubre todos los servicios de ISOLA.",
  keywords: [
    "servicios gestión de alquileres Valencia",
    "gestión de propiedades Valencia",
    "registro de turismo Comunitat Valenciana",
    "gestión SES Hospedajes",
    "gestión Airbnb Valencia",
    "administración de fincas Valencia",
  ],
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios de Gestión de Alquileres en Valencia | ISOLA",
    description:
      "Registro turístico NRU, SES Hospedajes, administración de propiedades y gestión de apartamentos turísticos en Valencia.",
    url: "/servicios",
    siteName: "ISOLA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `https://utfs.io/f/2b830903-cdfc-4886-ae06-5aec83196528-gmfrrx.jpg`,
        width: 1200,
        height: 630,
        alt: "Servicios de gestión de alquileres de ISOLA en Valencia",
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
