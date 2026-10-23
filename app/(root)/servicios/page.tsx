import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home } from "lucide-react";
import { JsonLd } from "@/lib/seo/JsonLd";
import { Services } from "@/components/shared/Service";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/landing/section-wrapper";
import InViewReveal from "@/components/shared/landing/in-view-reveal";
import ScrollRevealText from "@/components/shared/landing/scroll-reveal-text";
import RollingText from "@/components/shared/landing/rolling-text";
import Reveal from "@/components/shared/landing/reveal";
import ServiceHero from "@/components/shared/ServiceHero";

export const metadata: Metadata = {
  title: "Servicios de Gestión de Alquileres en Valencia",
  description:
    "Servicios y tarifas de ISOLA en Valencia: media estancia, alquiler turístico y de temporada, gestión por habitaciones y limpieza. Desde el 15 % + IVA, sin permanencia.",
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
      "Media estancia, alquiler turístico y de temporada, gestión por habitaciones y limpieza. Precios claros y sin permanencia.",
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

const lineas = [
  {
    eyebrow: "MEDIA ESTANCIA Y HABITACIONES",
    title: "Alquiler de media estancia y por habitaciones",
    description:
      "Contratos de temporada y alquiler habitación por habitación, con selección de inquilinos, cobros y gestión de la convivencia. Más rentable que la larga duración y con menos rotación que el turístico.",
    href: "/gestion-alquiler",
    linkLabel: "Ver media estancia y habitaciones",
    icon: Home,
  },
  {
    eyebrow: "TURÍSTICO Y DE TEMPORADA",
    title: "Alquiler turístico y de temporada",
    description:
      "Pisos con licencia turística en vigor o alquiler de temporada desde 11 noches. Anuncios en Airbnb y Booking, check-in, limpieza y registro de huéspedes en SES Hospedajes.",
    href: "/gestion-turistica",
    linkLabel: "Ver alquiler turístico y de temporada",
    icon: Building2,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta la gestión de alquileres en Valencia?",
    answer:
      "Depende del servicio. El alquiler turístico y de temporada se cobra al 15–20 % + IVA sobre lo cobrado, según la rotación y el estado del piso; la gestión por habitaciones, desde el 15 % + IVA. La limpieza y la operativa se presupuestan a medida, por horas o con precio fijo por piso. En media y larga estancia el precio se cierra después de ver el piso. Sin permanencia y sin cuota de alta.",
  },
  {
    question: "¿Cuál es la diferencia entre alquiler turístico y de temporada?",
    answer:
      "El alquiler turístico solo es posible en pisos con licencia turística en vigor. El alquiler de temporada es a partir de 11 noches y es legal sin licencia turística, con contrato de temporada. Si tu piso no tiene licencia, la vía legal es el alquiler de temporada o la media estancia.",
  },
  {
    question: "¿Qué incluye la gestión de un piso turístico?",
    answer:
      "Publicación y ajuste de precios en Airbnb, Booking y otras plataformas, check-in y check-out, atención a los huéspedes, limpieza entre estancias, gestión de incidencias y mantenimiento, y el registro de huéspedes en SES Hospedajes.",
  },
  {
    question: "¿Quién paga las limpiezas?",
    answer:
      "En alquiler turístico, de temporada y por habitaciones, la limpieza de salida y entre estancias la paga el huésped: no supone coste para el propietario. La limpieza de zonas comunes en la gestión por habitaciones está incluida en el servicio.",
  },
  {
    question: "¿En qué zonas de Valencia gestionáis alquileres?",
    answer:
      "Trabajamos en Valencia capital —Ruzafa, El Carmen, Eixample, Cabanyal, Malvarrosa y Benimaclet— y en municipios del área metropolitana. Si tu vivienda está fuera de estas zonas, escríbenos y te diremos si podemos gestionarla.",
  },
  {
    question: "¿Puedo cambiar de servicio más adelante?",
    answer:
      "Sí. Hay propietarios que empiezan con media estancia y pasan a turístico cuando obtienen la licencia, o al contrario. Al no haber permanencia, el servicio se ajusta cuando cambia el uso del piso o el mercado.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen w-full">
      <JsonLd data={faqSchema} />

      <ServiceHero
        eyebrow="SERVICIOS"
        title="Servicios de gestión de alquileres en Valencia"
        description="Media estancia, alquiler turístico y de temporada, gestión por habitaciones y limpieza. Precios claros, sin permanencia y un solo equipo para todo."
        image="/vitrine1.jpg"
        alt="Vivienda gestionada por ISOLA en Valencia"
        secondaryHref="/gestion-alquiler"
        secondaryLabel="Ver media estancia y habitaciones"
      />

      {/* Servicios y tarifas */}
      <Services />

      {/* Dos líneas de servicio */}
      <SectionWrapper id="lineas">
        <SectionHeader
          eyebrow="QUÉ SERVICIO ME CONVIENE"
          title={<InViewReveal text="Elige cómo quieres alquilar tu vivienda" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "El mismo equipo, adaptado al uso que quieras darle al piso. Si no lo tienes claro, te explicamos qué encaja según la licencia y la ubicación.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {lineas.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-foreground/[0.02] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.05] hover:shadow-lg md:p-8">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <p className="mb-2 font-mono text-xs font-medium tracking-widest text-primary">
                    {item.eyebrow}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {item.linkLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        id="faq"
        className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-16"
      >
        <div className="w-full md:col-span-5 lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title={<InViewReveal text="Preguntas frecuentes sobre nuestros servicios" />}
            description={
              <ScrollRevealText
                className="text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground"
                text={[
                  "Precios, licencias y limpiezas: lo que más nos preguntan los propietarios antes de empezar.",
                ]}
              />
            }
            align="left"
            className="mb-0"
          />
        </div>
        <div className="flex w-full flex-col gap-6 md:col-span-7 lg:col-span-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border-none bg-foreground/5 transition-colors hover:bg-foreground/[0.07]"
              >
                <AccordionTrigger className="p-5 text-left text-lg font-medium tracking-tight hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 text-center shadow-xl shadow-zinc-950/5 sm:p-12 md:p-16">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-foreground/[0.02]" />
          <div className="relative z-10">
            <SectionHeader
              eyebrow="EMPIEZA HOY"
              title={<InViewReveal text="¿Qué necesita tu piso?" />}
              description={
                <ScrollRevealText
                  className="text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground"
                  text={[
                    "Cuéntanos cómo es y qué licencia tiene. Te decimos qué servicio encaja y cuánto puedes esperar cobrar. El estudio es gratuito.",
                  ]}
                />
              }
              align="center"
              className="mb-8"
            />
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-[#fe6b01] px-8 text-white hover:bg-[#fe6b01]/90"
            >
              <Link href="/#contacto">
                <RollingText text="Pide tu estudio gratis" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <div className="pb-12 text-center text-sm text-muted-foreground">
        ¿Quieres conocernos antes de decidir? Lee{" "}
        <Link
          href="/sobre-nosotros"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          quiénes somos
        </Link>{" "}
        o consulta las{" "}
        <Link
          href="/preguntas-frecuentes"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          preguntas frecuentes
        </Link>
        .
      </div>
    </main>
  );
}
