import {BlurFade} from "@/components/ui/blur-fade";
import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import Nosotros from "@/components/shared/Nosotros";
import Preguntas from "@/components/shared/Preguntas";
import Proceso from "@/components/shared/Proceso";
import Services from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenido a ISOLA - Gestión Integral de Propiedades",
  description:
    "Descubre cómo ISOLA facilita el alquiler y la gestión de tu propiedad con un enfoque personalizado. Nos encargamos de todo para que disfrutes de los beneficios sin preocupaciones. ¡Contáctanos para más información!",
  keywords: [
    "inmobiliaria",
    "compra de casas",
    "venta de casas",
    "alquiler de propiedades",
    "propiedades en venta",
    "propiedades en alquiler",
    "búsqueda de propiedades",
    "asesoramiento inmobiliario",
    "mercado inmobiliario",
    "mejores ofertas inmobiliarias",
  ],
  openGraph: {
    title: "Bienvenido a ISOLA - Gestión Integral de Propiedades",
    description:
      "Descubre cómo ISOLA facilita el alquiler y la gestión de tu propiedad con un enfoque personalizado. Nos encargamos de todo para que disfrutes de los beneficios sin preocupaciones. ¡Contáctanos para más información!",
    tags: [
      "inicio",
      "página principal",
      "búsqueda de propiedades",
      "compra de casas",
      "venta de casas",
      "alquiler de propiedades",
      "inmobiliaria en línea",
      "propiedades en venta",
      "propiedades en alquiler",
      "inversiones inmobiliarias",
      "asesoramiento inmobiliario",
      "mejores ofertas inmobiliarias",
    ],
    images: [
      {
        url: `https://utfs.io/f/ecd60567-ed61-4f74-aca5-9f590cc35b5c-qt9zcy.jpg`, // Dynamic og route
        width: 800,
        height: 600,
      },
      {
        url: `https://utfs.io/f/ecd60567-ed61-4f74-aca5-9f590cc35b5c-qt9zcy.jpg`, // Dynamic og route
        width: 1800,
        height: 1600,
        alt: `image of ISOLA`,

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
      description:
        "En ISOLA, somos expertos en la gestión de propiedades, dedicados a ofrecer a los propietarios una solución completa y sin preocupaciones. Nuestro compromiso es gestionar tu propiedad de manera profesional, asegurándote un ingreso mensual fijo y manteniendo tu inmueble en óptimas condiciones. Con años de experiencia en el sector y un enfoque personalizado, nos aseguramos de maximizar la rentabilidad de tu propiedad mientras tú disfrutas de la tranquilidad que mereces.",

    },
    {
      title: "¿Cómo podemos ayudarte?",
      image: "/image9.jpg",
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
      <BlurFade delay={BLUR_FADE_DELAY * 10} inView>
        <Services />
      </BlurFade>
      {aboutHelp.map((ah: any, i: number) => (
        <BlurFade
          key={i}
          // delay={
          //   (i + 1) % 2 === 0 ? BLUR_FADE_DELAY * 60 : BLUR_FADE_DELAY * 45
          // }
          delay={BLUR_FADE_DELAY * 10}
          inView
        >
          <Nosotros ah={ah} index={i + 1} />
        </BlurFade>
      ))}
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
