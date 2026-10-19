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
  title: "Gestión de Alquiler de Larga Duración en Valencia",
  description:
    "Alquila tu vivienda en Valencia sin preocupaciones: alquiler garantizado, selección de inquilinos, contratos y mantenimiento. ISOLA se encarga de todo.",
  keywords: [
    "gestión de alquiler larga duración Valencia",
    "alquiler garantizado Valencia",
    "alquilar mi piso sin preocupaciones Valencia",
    "empresa gestión alquiler pisos Valencia",
    "qué pasa si mi inquilino no paga",
  ],
  alternates: {
    canonical: "/gestion-alquiler",
  },
  openGraph: {
    title: "Gestión de Alquiler de Larga Duración en Valencia | ISOLA",
    description:
      "Alquiler garantizado y gestión completa de tu vivienda en Valencia: inquilinos, contratos, cobros y mantenimiento.",
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
    title: "Ingreso mensual garantizado",
    description:
      "Cobras tu renta cada mes, esté alquilada la vivienda o no. El riesgo de impago lo asumimos nosotros.",
    icon: HandCoins,
  },
  {
    title: "Selección rigurosa de inquilinos",
    description:
      "Verificamos solvencia, nóminas y referencias antes de firmar. Un buen inquilino vale más que una renta alta.",
    icon: UserCheck,
  },
  {
    title: "Contratos, cobros y facturación",
    description:
      "Contrato conforme a la LAU, fianzas depositadas y cobro mensual sin que tengas que perseguir recibos.",
    icon: FileSignature,
  },
  {
    title: "Mantenimiento e incidencias",
    description:
      "Revisiones preventivas, reparaciones y coordinación de profesionales para mantener la vivienda en condiciones.",
    icon: Wrench,
  },
  {
    title: "Informes periódicos",
    description:
      "Sabes en todo momento cómo está tu propiedad y qué gestiones se han realizado, sin tener que preguntar.",
    icon: BarChart3,
  },
];

const pasos: Item[] = [
  {
    title: "Valoración y propuesta",
    description:
      "Visitamos la vivienda, revisamos su documentación y estado, y te proponemos una renta realista y un plan de gestión cerrado.",
    icon: ScanSearch,
  },
  {
    title: "Selección del inquilino",
    description:
      "Comprobamos solvencia, nóminas y referencias, y preparamos el contrato y las fianzas legales antes de entregar las llaves.",
    icon: UserCheck,
  },
  {
    title: "Contrato y cobros",
    description:
      "Altas de suministros, seguro, cobro mensual y liquidación. Tú recibes tu ingreso sin perseguir recibos ni llamadas.",
    icon: FileSignature,
  },
  {
    title: "Mantenimiento e informes",
    description:
      "Gestionamos incidencias y revisiones, coordinamos profesionales y te enviamos informes periódicos del estado de tu propiedad.",
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
    question: "¿Cuánto dura un contrato de alquiler de vivienda?",
    answer:
      "Con la Ley de Arrendamientos Urbanos, el contrato se prorroga hasta cinco años si el propietario es una persona física y hasta siete si es una sociedad, salvo que el inquilino decida no continuar. Nosotros redactamos y gestionamos el contrato para que todo quede claro desde el primer día.",
  },
  {
    question: "¿Cómo se actualiza la renta cada año?",
    answer:
      "La actualización anual se aplica conforme al índice legal vigente para arrendamientos de vivienda. Nos encargamos de calcularla y comunicarla en plazo, sin que tengas que revisar normativa.",
  },
  {
    question: "¿Puedo vender la vivienda si está alquilada?",
    answer:
      "Sí. El comprador asume el contrato en los términos legales, así que la venta no obliga a echar al inquilino. Te acompañamos en la coordinación con la otra parte y con la notaría.",
  },
  {
    question: "¿Qué pasa con la fianza del inquilino?",
    answer:
      "La fianza legal equivale a una mensualidad y debe depositarse en el organismo autonómico correspondiente. La gestionamos íntegramente, incluida su devolución al finalizar el contrato.",
  },
  {
    question: "¿Qué pasa si mi inquilino no paga?",
    answer:
      "Con nuestros planes de gestión, ISOLA te garantiza un ingreso mensual fijo independientemente de si la propiedad está alquilada o de si existe algún impago. Nosotros asumimos la gestión del cobro y las gestiones necesarias.",
  },
  {
    question: "¿Cuánto cuesta contratar una gestión integral de alquileres en Valencia?",
    answer:
      "El coste depende del plan elegido y de las características de tu propiedad. Ofrecemos una primera consulta gratuita para evaluar tu inmueble y ofrecerte una propuesta personalizada.",
  },
  {
    question: "¿Qué tipos de propiedades gestionáis?",
    answer:
      "Gestionamos apartamentos, casas y unidades multifamiliares en Valencia y alrededores, tanto para alquiler de larga duración como para uso turístico.",
  },
  {
    question: "¿Tengo que ocuparme del mantenimiento de la vivienda?",
    answer:
      "No. Nos encargamos del mantenimiento regular y preventivo, las reparaciones básicas y la coordinación de profesionales cuando sea necesario, según el plan seleccionado.",
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
        eyebrow="LARGA ESTANCIA"
        title="Gestión de alquiler de larga duración en Valencia"
        description="Alquila tu vivienda sin preocupaciones: ISOLA garantiza tu ingreso mensual fijo y se encarga de todo el proceso, desde la selección de inquilinos hasta el mantenimiento de tu propiedad."
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
                "Un único interlocutor para todo lo que necesita tu propiedad. Sin llamadas del inquilino, sin recibos pendientes, sin sorpresas.",
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
                "Sabes qué va a pasar en cada momento y cuánto vas a cobrar. Sin letra pequeña.",
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
                "Un contrato mal preparado se paga durante años. Antes de publicar el anuncio comprobamos que todo esté en regla.",
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
                  "Contratos, impagos, fianzas y mantenimiento: lo que más nos preguntan los propietarios antes de confiarnos su vivienda.",
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
                    "Te damos una valoración realista, te explicamos qué incluye el plan y decides con calma. La primera consulta es gratuita.",
                  ]}
                />
              }
              align="center"
              className="mb-8"
            />
            <Button asChild size="lg" className="h-12 rounded-xl px-8">
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
