/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { BlurFade } from "@/components/ui/blur-fade";
import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import Preguntas from "@/components/shared/Preguntas";
import Proceso from "@/components/shared/Proceso";
// import Services from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";
import { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/shared/service-grid";
import { NosotrosSection } from "@/components/shared/Nosotros";
import { Services } from "@/components/shared/Service";

export const metadata: Metadata = {
  title: {
    absolute: "Gestión Integral de Alquileres en Valencia | ISOLA",
  },
  description:
    "Alquiler garantizado y gestión integral de propiedades en Valencia. ISOLA se encarga de todo: inquilinos, contratos, mantenimiento y viviendas turísticas (VUT). Pide tu consulta gratuita.",
  keywords: [
    "gestión integral de propiedades Valencia",
    "empresa de gestión de alquileres Valencia",
    "alquiler garantizado Valencia",
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
      "Alquiler garantizado y gestión integral de propiedades en Valencia. Sin preocupaciones para el propietario.",
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
const BLUR_FADE_DELAY = 0.04;
export default function Home() {
  const aboutHelp = [
    {
      title: "¿Quiénes Somos?",
      image: "/vitrine5.jpg",
      alt: "Equipo de gestión de propiedades de ISOLA en Valencia",
      description:
        "En ISOLA, somos expertos en la gestión de propiedades, dedicados a ofrecer a los propietarios una solución completa y sin preocupaciones. Nuestro compromiso es gestionar tu propiedad de manera profesional, asegurándote un ingreso mensual fijo y manteniendo tu inmueble en óptimas condiciones. Con años de experiencia en el sector y un enfoque personalizado, nos aseguramos de maximizar la rentabilidad de tu propiedad mientras tú disfrutas de la tranquilidad que mereces.",

    },
    {
      title: "¿Cómo podemos ayudarte?",
      image: "/image9.jpg",
      alt: "Propietario recibiendo gestión integral de su alquiler en Valencia",
      description:
        "En ISOLA, te ofrecemos una gestión integral para alquilar tu propiedad sin preocupaciones. Evaluamos tu inmueble, lo preparamos para destacar en el mercado, y diseñamos estrategias de marketing efectivas. Seleccionamos cuidadosamente a los inquilinos adecuados y gestionamos toda la parte administrativa y contractual. Además, nos encargamos del mantenimiento y las reparaciones necesarias para mantener tu propiedad en las mejores condiciones. Con nosotros, tu inversión está en buenas manos, garantizando tranquilidad y rentabilidad.",

    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
        <Hero />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
        <Proceso />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <Services />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
        <ServicesGrid />
      </BlurFade>
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <Link
            href="/gestion-alquiler"
            className="group rounded-xl border border-border/50 p-8 transition-all hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Gestión de alquiler de larga duración
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alquiler garantizado, selección de inquilinos y mantenimiento de
              tu vivienda en Valencia.
            </p>
          </Link>
          <Link
            href="/gestion-turistica"
            className="group rounded-xl border border-border/50 p-8 transition-all hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              Gestión turística (VUT)
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Registro de turismo CV, SES Hospedajes y gestión en Airbnb y
              Booking.
            </p>
          </Link>
        </div>
      </section>
      <NosotrosSection items={aboutHelp} />
      <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
        <Testimonials />{" "}
      </BlurFade>
      <BlurFade
        className="w-[96%] md:w-full"
        delay={BLUR_FADE_DELAY * 10}
        inView
      >
        <Preguntas />
      </BlurFade>
      <BlurFade
        className="w-[96%] md:w-full"
        delay={BLUR_FADE_DELAY * 10}
        inView
      >
        <CallToAction />
      </BlurFade>
    </main>
  );
}
