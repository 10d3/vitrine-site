import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  CheckCircle2,
  FileSignature,
  HandCoins,
  ScanSearch,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { JsonLd } from "@/lib/seo/JsonLd";
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
  title: "Gestión de Alquiler de Media Estancia y por Habitaciones en Valencia",
  description:
    "Alquila tu piso en Valencia por meses o por habitaciones sin estar encima: inquilinos, contratos, cobros, limpiezas y averías. Desde el 15 % + IVA, sin permanencia.",
  keywords: [
    "gestión alquiler media estancia Valencia",
    "gestión alquiler por habitaciones Valencia",
    "alquilar mi piso sin preocupaciones Valencia",
    "empresa gestión alquiler pisos Valencia",
    "alquiler de temporada Valencia",
  ],
  alternates: {
    canonical: "/gestion-alquiler",
  },
  openGraph: {
    title: "Gestión de Media Estancia y Habitaciones en Valencia | ISOLA",
    description:
      "Gestión completa de tu piso en Valencia por meses o por habitaciones: inquilinos, contratos, cobros, limpiezas y mantenimiento.",
    url: "/gestion-alquiler",
    siteName: "ISOLA",
    locale: "es_ES",
    type: "website",
  },
};

type Item = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const beneficios: Item[] = [
  {
    title: "Más rentable que la larga duración",
    description:
      "Alquileres de 1 a 11 meses en Airbnb y Booking, o habitación por habitación. Legal sin licencia turística y, en Valencia, suele rendir bastante más.",
    icon: HandCoins,
  },
  {
    title: "Selección de inquilinos",
    description:
      "Estudiantes, profesionales y traslados. Revisamos cada solicitud antes de aceptar la reserva o firmar el contrato.",
    icon: UserCheck,
  },
  {
    title: "Contratos de temporada y cobros",
    description:
      "Contrato de temporada para cada inquilino, fianza y cobro mensual sin que tengas que perseguir recibos.",
    icon: FileSignature,
  },
  {
    title: "Limpiezas y averías",
    description:
      "Limpiezas con equipo propio pagadas por el inquilino. Si hay una avería, buscamos y coordinamos la solución (reparaciones y materiales a cargo del propietario).",
    icon: Wrench,
  },
  {
    title: "Resumen mensual",
    description:
      "Cada mes sabes cuánto ha ingresado tu piso, qué se ha gastado y cuánto te queda. Sin permanencia.",
    icon: BarChart3,
  },
];

const pasos: Item[] = [
  {
    title: "Valoración y propuesta",
    description:
      "Visitamos la vivienda, revisamos su documentación y estado, y te preparamos un estudio gratuito de cuánto podría darte por meses o por habitaciones.",
    icon: ScanSearch,
  },
  {
    title: "Selección del inquilino",
    description:
      "Publicamos el piso en Airbnb y Booking, revisamos cada solicitud y preparamos el contrato de temporada y la fianza antes de entregar las llaves.",
    icon: UserCheck,
  },
  {
    title: "Contrato y cobros",
    description:
      "Cobro mensual, limpiezas y liquidación. Tú recibes tu parte cada mes con un resumen claro.",
    icon: FileSignature,
  },
  {
    title: "Mantenimiento e informes",
    description:
      "Gestionamos incidencias y revisiones, y si hay una avería buscamos y coordinamos la solución.",
    icon: Wrench,
  },
];

const revision = [
  "Titularidad y nota simple",
  "Certificado energético y cédula de habitabilidad",
  "Seguro de hogar y estatutos de la comunidad",
  "ITE o informe de evaluación del edificio, si procede",
  "Estado de suministros, equipamiento y mobiliario",
  "Rentas y cargas pendientes del inmueble",
];

const faqs = [
  {
    question: "¿Qué es la media estancia y por qué rinde más?",
    answer:
      "Son alquileres de 1 a 11 meses para estudiantes, profesionales y traslados, con contrato de temporada. No necesitan licencia turística y, en Valencia, suelen rendir bastante más que el alquiler de larga duración.",
  },
  {
    question: "¿Y el alquiler por habitaciones?",
    answer:
      "Alquilamos el piso habitación por habitación, con un contrato de temporada para cada inquilino. Nos ocupamos de buscar inquilinos, los contratos, los cobros y la convivencia.",
  },
  {
    question: "¿Cuánto cuesta la gestión?",
    answer:
      "Desde el 15 % + IVA sobre lo cobrado cada mes, sin permanencia. El precio final lo cerramos después de ver el piso, según zona, estado, rotación prevista y número de viviendas.",
  },
  {
    question: "¿Quién paga las limpiezas?",
    answer:
      "El inquilino. En media estancia va incluida en el precio de la reserva; en habitaciones, el coste de las limpiezas de las zonas comunes se reparte entre los inquilinos.",
  },
  {
    question: "¿Qué pasa con la fianza del inquilino?",
    answer:
      "Gestionamos la fianza de cada contrato de temporada, incluida su devolución al finalizar la estancia tras revisar el estado del piso.",
  },
  {
    question: "¿Tengo que ocuparme del mantenimiento de la vivienda?",
    answer:
      "No. Si hay una avería buscamos y coordinamos la solución, y comprobamos que queda bien. El coste de reparaciones y materiales corre a cargo del propietario.",
  },
  {
    question: "¿Puedo dejar de trabajar con vosotros cuando quiera?",
    answer:
      "Sí. No hay permanencia: seguimos juntos porque las cosas funcionan, no por una cláusula.",
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

function FeatureCard({ item, index }: { item: Item; index: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-foreground/[0.02] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.05] hover:shadow-lg md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Icon className="size-6 text-primary" />
          </div>
          <span className="font-mono text-2xl font-light text-muted-foreground/30">
            0{index + 1}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function GestionAlquilerPage() {
  return (
    <main className="min-h-screen w-full">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <ServiceHero
        eyebrow="MEDIA ESTANCIA Y HABITACIONES"
        title="Gestión de alquiler por meses y por habitaciones en Valencia"
        description="Alquila tu piso sin estar encima: ISOLA se encarga de todo el proceso, desde el anuncio y la selección de inquilinos hasta las limpiezas y las averías. Tú recibes tu parte cada mes."
        image="/vitrine3.jpg"
        alt="Vivienda luminosa gestionada por ISOLA en Valencia"
      />

      {/* Qué incluye */}
      <SectionWrapper id="incluye">
        <SectionHeader
          eyebrow="QUÉ INCLUYE"
          title={<InViewReveal text="Tu vivienda, gestionada de principio a fin" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Un único interlocutor para todo lo que necesita tu piso. Las llamadas del inquilino nos llegan a nosotros, no a ti.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Proceso */}
      <SectionWrapper id="proceso">
        <SectionHeader
          eyebrow="CÓMO TRABAJAMOS"
          title={
            <InViewReveal text="De la primera visita al cobro mensual" />
          }
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Sabes qué va a pasar en cada momento. Sin letra pequeña y sin permanencia.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Revisión previa */}
      <SectionWrapper id="revision">
        <SectionHeader
          eyebrow="ANTES DE EMPEZAR"
          title={
            <InViewReveal text="Qué revisamos antes de alquilar tu vivienda" />
          }
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Antes de publicar el anuncio comprobamos que todo esté en regla.",
              ]}
            />
          }
          align="center"
        />
        <Reveal>
          <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 md:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {revision.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        id="faq"
        className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-16"
      >
        <div className="w-full md:col-span-5 lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title={<InViewReveal text="Preguntas frecuentes sobre la gestión de alquiler" />}
            description={
              <ScrollRevealText
                className="text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground"
                text={[
                  "Tarifas, limpiezas, fianzas y mantenimiento: lo que más nos preguntan los propietarios antes de confiarnos su vivienda.",
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
          <p className="pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            ¿Tienes una vivienda turística? Descubre también nuestra{" "}
            <Link
              href="/gestion-turistica"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              gestión de viviendas turísticas (VUT)
            </Link>{" "}
            en Valencia.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 text-center shadow-xl shadow-zinc-950/5 sm:p-12 md:p-16">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-foreground/[0.02]" />
          <div className="relative z-10">
            <SectionHeader
              eyebrow="EMPIEZA HOY"
              title={<InViewReveal text="¿Hablamos de tu vivienda?" />}
              description={
                <ScrollRevealText
                  className="text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground"
                  text={[
                    "Te preparamos un estudio de lo que podría darte tu piso, te explicamos qué incluye la gestión y decides con calma. Es gratis y sin compromiso.",
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
                <RollingText text="Solicita tu consulta gratuita" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <div className="pb-12 text-center text-sm text-muted-foreground">
        Gestionamos viviendas en Valencia capital —Ruzafa, El Carmen, Eixample,
        Cabanyal, Malvarrosa, Benimaclet— y en municipios del área metropolitana.
      </div>
    </main>
  );
}
