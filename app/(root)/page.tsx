import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import Preguntas from "@/components/shared/Preguntas";
import Proceso from "@/components/shared/Proceso";
import { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/shared/service-grid";
import { NosotrosSection } from "@/components/shared/Nosotros";
import { Services } from "@/components/shared/Service";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Gestión Integral de Alquileres en Valencia | ISOLA",
  },
  description:
    "Gestión de alquileres en Valencia: media estancia, habitaciones y viviendas turísticas (VUT). ISOLA se encarga de inquilinos, contratos, limpiezas y mantenimiento. Sin permanencia. Pide tu estudio gratuito.",
  keywords: [
    "gestión integral de propiedades Valencia",
    "empresa de gestión de alquileres Valencia",
    "gestión media estancia Valencia",
    "gestión alquiler por habitaciones Valencia",
    "gestión de alquiler de pisos Valencia",
    "gestión Airbnb Valencia",
    "vivienda de uso turístico Valencia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gestión Integral de Alquileres en Valencia | ISOLA",
    description:
      "Gestión de alquileres en Valencia: media estancia, habitaciones y pisos turísticos. Sin permanencia.",
    url: "/",
    siteName: "ISOLA",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `https://utfs.io/f/ecd60567-ed61-4f74-aca5-9f590cc35b5c-qt9zcy.jpg`,
        width: 1200,
        height: 630,
        alt: "ISOLA — gestión de alquileres en Valencia",
      },
    ],
  },
};

export default function Home() {
  const aboutHelp = [
    {
      title: "¿Quiénes Somos?",
      image: "/vitrine5.jpg",
      alt: "Equipo de gestión de propiedades de ISOLA en Valencia",
      description:
        "ISOLA es una empresa de gestión y puesta a punto de viviendas con sede en Valencia. Llevamos 6 años en el sector y tenemos oficina abierta en Calle Editor Manuel Aguilar 13, junto al Mercado Central, y equipo propio de limpieza. Trabajamos para propietarios que quieren rentabilizar su piso sin dedicarle tiempo, y para inmobiliarias que necesitan a alguien de confianza para la parte operativa.",
    },
    {
      title: "¿Cómo podemos ayudarte?",
      image: "/image9.jpg",
      alt: "Propietario recibiendo gestión integral de su alquiler en Valencia",
      description:
        "En ISOLA, te ofrecemos una gestión integral para alquilar tu propiedad sin preocupaciones. Evaluamos tu inmueble, lo preparamos para destacar en el mercado, y diseñamos estrategias de marketing efectivas. Seleccionamos cuidadosamente a los inquilinos adecuados y gestionamos toda la parte administrativa y contractual. Además, si hay una avería buscamos y coordinamos la solución, y cada mes recibes un resumen claro de lo que ha ingresado tu piso. Sin permanencia: seguimos juntos porque las cosas funcionan.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* Kept unchanged as requested */}
      <Hero />

      {/* Animated Landing Sections with Nexora Style */}
      <Proceso />
      <Services />
      <ServicesGrid />

      {/* Featured Service Navigation Cards */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-8 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <Link
            href="/gestion-alquiler"
            className="group rounded-2xl border border-border/50 bg-foreground/[0.02] p-8 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-primary/40 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary font-medium tracking-wider uppercase">
                  Media Estancia
                </span>
                <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                Media estancia y habitaciones
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Alquileres de 1 a 11 meses en Airbnb y Booking, o habitación por habitación. Legal sin licencia turística y sin permanencia.
              </p>
            </div>
          </Link>

          <Link
            href="/gestion-turistica"
            className="group rounded-2xl border border-border/50 bg-foreground/[0.02] p-8 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-primary/40 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary font-medium tracking-wider uppercase">
                  Vivienda Turística
                </span>
                <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                Gestión turística (VUT)
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Registro de turismo de la Comunitat Valenciana, integración SES Hospedajes y gestión profesional en Airbnb y Booking.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <NosotrosSection items={aboutHelp} />
      <Preguntas />
      <CallToAction />
    </main>
  );
}
