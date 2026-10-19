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
  Building2,
  CalendarCheck,
  Camera,
  Check,
  ClipboardList,
  FileCheck,
  FileText,
  Home,
  MapPin,
  Scale,
  ScanSearch,
  ShieldCheck,
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

export const metadata: Metadata = {
  title: "Gestión de Viviendas Turísticas (VUT) en Valencia",
  description:
    "Gestión de apartamentos turísticos en Valencia: registro de turismo de la Comunitat Valenciana (NRU), SES Hospedajes, Airbnb y Booking. Legaliza y rentabiliza tu vivienda.",
  keywords: [
    "gestión Airbnb Valencia",
    "vivienda de uso turístico Valencia",
    "registro de turismo Comunitat Valenciana",
    "licencia turística Valencia requisitos",
    "gestión SES Hospedajes",
    "cómo dar de alta un piso turístico en Valencia",
    "empresa gestión Airbnb y Booking Valencia",
  ],
  alternates: {
    canonical: "/gestion-turistica",
  },
  openGraph: {
    title: "Gestión de Viviendas Turísticas (VUT) en Valencia | ISOLA",
    description:
      "Legalización (NRU, SES Hospedajes) y gestión completa de tu apartamento turístico en Valencia: Airbnb, Booking y más.",
    url: "/gestion-turistica",
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

const servicios: Item[] = [
  {
    title: "Registro de Turismo de la Comunitat Valenciana",
    description:
      "Tramitamos el NRU (Número de Registro) de tu vivienda de uso turístico ante la Generalitat Valenciana.",
    icon: FileText,
  },
  {
    title: "Gestión SES Hospedajes",
    description:
      "Registro y gestión en el Sistema de Entrada de Seguridad para hospedajes. Cumplimiento de la normativa de seguridad.",
    icon: Building2,
  },
  {
    title: "Gestión integral en plataformas",
    description:
      "Publicación y gestión de reservas en Airbnb, Booking y otras plataformas, con atención al huésped incluida.",
    icon: Home,
  },
  {
    title: "Asesoría legal y normativa",
    description:
      "Consultoría especializada en normativa turística de la Comunitat Valenciana para mantener tu alojamiento siempre legal.",
    icon: Scale,
  },
];

const pasos: Item[] = [
  {
    title: "Estudiamos la vivienda",
    description:
      "Revisamos ubicación, características y normativa municipal aplicable antes de que inviertas un euro. Si la vivienda no es viable como turística, te lo decimos y buscamos la mejor alternativa.",
    icon: ScanSearch,
  },
  {
    title: "Legalizamos y registramos",
    description:
      "Tramitamos el NRU ante la Generalitat Valenciana, el alta en el registro estatal de arrendamientos de corta duración y la puesta en marcha de SES Hospedajes.",
    icon: FileCheck,
  },
  {
    title: "Preparamos y publicamos",
    description:
      "Equipamiento, fotografía, textos y precios competitivos. Publicamos tu vivienda en Airbnb, Booking y otros canales, cuidando la ficha para que convierta.",
    icon: Camera,
  },
  {
    title: "Operamos cada día",
    description:
      "Reservas, entradas y salidas, limpieza, incidencias, atención al huésped y obligaciones legales. Tú solo ves los ingresos y los informes.",
    icon: CalendarCheck,
  },
];

const requisitos: Item[] = [
  {
    title: "Registro autonómico (NRU)",
    description:
      "La vivienda debe estar inscrita en el Registro de Turismo de la Comunitat Valenciana antes de anunciarse como alojamiento turístico.",
    icon: FileText,
  },
  {
    title: "Registro estatal de arrendamientos de corta duración",
    description:
      "Desde 2025 los alquileres turísticos y de temporada necesitan su número de registro para poder anunciarse en las plataformas.",
    icon: ClipboardList,
  },
  {
    title: "SES Hospedajes",
    description:
      "Comunicación de los datos de los viajeros al Ministerio del Interior, obligatoria para los alojamientos turísticos.",
    icon: ShieldCheck,
  },
  {
    title: "Normativa municipal y de comunidad",
    description:
      "Compatibilidad urbanística, ordenanzas municipales y estatutos de la comunidad de propietarios: lo comprobamos antes de empezar.",
    icon: MapPin,
  },
  {
    title: "Seguro y habitabilidad",
    description:
      "Póliza adecuada al uso turístico y cédula de habitabilidad cuando proceda, para operar con cobertura y sin sorpresas.",
    icon: Building2,
  },
];

const comparativa = [
  {
    tag: "Más ingreso por noche",
    title: "Alquiler turístico (VUT)",
    description:
      "Encaja si tu vivienda está en una zona con demanda de viajeros y quieres exprimir su rentabilidad.",
    points: [
      "Ingreso por noche, más alto en temporada",
      "Gestión de huéspedes, limpieza y entradas",
      "Registro turístico y SES Hospedajes incluidos",
    ],
    href: "/#contacto",
    cta: "Quiero alquilar como VUT",
    featured: false,
  },
  {
    tag: "Ingreso estable",
    title: "Alquiler de larga duración",
    description:
      "Renta mensual estable y mucha menos rotación. Con nuestro plan garantizado cobras todos los meses.",
    points: [
      "Renta mensual fija garantizada",
      "Contrato LAU, fianzas y cobros gestionados",
      "Mantenimiento e incidencias incluidos",
    ],
    href: "/gestion-alquiler",
    cta: "Ver gestión de larga duración",
    featured: true,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta la gestión de una vivienda turística en Valencia?",
    answer:
      "Depende del punto en el que esté tu vivienda y del plan que elijas: no es lo mismo solo legalizar y registrar que encargarnos también de la operación diaria. La primera consulta es gratuita y te damos una propuesta cerrada con lo que incluye cada opción.",
  },
  {
    question: "¿Puedo alquilar mi vivienda como turística solo unos meses al año?",
    answer:
      "Sí. Puedes anunciarla por temporadas siempre que la vivienda esté registrada y cumpla las obligaciones mientras esté en alquiler. Ajustamos la operativa a los meses en los que quieras rentabilizarla.",
  },
  {
    question: "¿Qué pasa si la comunidad de propietarios prohíbe el uso turístico?",
    answer:
      "Antes de empezar revisamos los estatutos de la comunidad y la normativa municipal. Si el uso turístico no es viable, te lo decimos con claridad y valoramos juntos la opción de alquiler de larga duración.",
  },
  {
    question: "¿Cómo obtengo el registro de turismo de la Comunitat Valenciana?",
    answer:
      "Para alquilar tu vivienda como turística en la Comunitat Valenciana necesitas obtener el NRU (Número de Registro) de turismo presentando la declaración responsable ante la Generalitat Valenciana. En ISOLA tramitamos todo el proceso por ti.",
  },
  {
    question: "¿Qué es el SES Hospedajes?",
    answer:
      "Es el sistema del Ministerio del Interior donde los alojamientos turísticos deben registrar a sus huéspedes (partes de viajeros). Gestionamos el alta y el cumplimiento de esta obligación por ti.",
  },
  {
    question: "¿Qué pasa si alquilo sin registro?",
    answer:
      "Alquilar una vivienda de uso turístico sin el registro correspondiente puede acarrear sanciones importantes. Te ayudamos a regularizar tu vivienda para que puedas operar con total tranquilidad.",
  },
  {
    question: "¿Gestionáis el anuncio en Airbnb y Booking?",
    answer:
      "Sí. Nos encargamos de la creación y optimización del anuncio, la gestión de reservas, la comunicación con los huéspedes y la coordinación de entradas y salidas.",
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

function FeatureCard({
  item,
  index,
}: {
  item: Item;
  index: number;
}) {
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

export default function GestionTuristicaPage() {
  return (
    <main className="min-h-screen w-full">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <SectionWrapper className="pt-16 pb-0 md:pt-28">
        <SectionHeader
          as="h1"
          eyebrow="VIVIENDAS DE USO TURÍSTICO"
          title={
            <InViewReveal text="Gestión de viviendas turísticas (VUT) en Valencia" />
          }
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Legaliza y rentabiliza tu vivienda turística en Valencia: registro de turismo de la Comunitat Valenciana (NRU), SES Hospedajes y gestión completa en Airbnb, Booking y otras plataformas.",
              ]}
            />
          }
          align="left"
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-xl px-8">
              <Link href="/#contacto">
                <RollingText text="Solicita tu consulta gratuita" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl px-8"
            >
              <Link href="/servicios">
                <RollingText text="Ver todos los servicios" />
              </Link>
            </Button>
          </div>
        </SectionHeader>
      </SectionWrapper>

      {/* Servicios incluidos */}
      <SectionWrapper id="servicios">
        <SectionHeader
          eyebrow="QUÉ HACEMOS"
          title={<InViewReveal text="Todo lo que incluye la gestión turística" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Nos ocupamos de la parte legal, de la puesta a punto y de la operación diaria para que tú solo veas los ingresos.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {servicios.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Proceso */}
      <SectionWrapper id="proceso">
        <SectionHeader
          eyebrow="CÓMO TRABAJAMOS"
          title={
            <InViewReveal text="De tu vivienda a alquiler turístico en cuatro pasos" />
          }
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Un proceso claro, sin sorpresas: te decimos qué se puede hacer, cuánto cuesta y cuándo empiezas a cobrar.",
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

      {/* Requisitos */}
      <SectionWrapper id="requisitos">
        <SectionHeader
          eyebrow="NORMATIVA"
          title={<InViewReveal text="Qué necesitas para alquilar como VUT en Valencia" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Es fácil perderse entre registros y obligaciones. Estos son los puntos que revisamos siempre antes de publicar una vivienda.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {requisitos.map((item, i) => (
            <FeatureCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Comparativa */}
      <SectionWrapper id="comparativa">
        <SectionHeader
          eyebrow="ELIGE TU MODELO"
          title={<InViewReveal text="¿VUT o alquiler de larga duración?" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Las dos opciones son válidas, pero no encajan en todas las viviendas ni en todos los perfiles de propietario. Te ayudamos a decidir con números.",
              ]}
            />
          }
          align="center"
        />
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {comparativa.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-foreground/[0.02] p-8 transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.05] hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-light text-muted-foreground/30 font-mono">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {c.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <ul className="mb-8 flex-grow space-y-3.5">
                  {c.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3.5 stroke-[2.5] text-primary" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={c.featured ? "default" : "outline"}
                  className="w-full rounded-xl py-6"
                >
                  <Link href={c.href}>
                    <RollingText text={c.cta} />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
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
            title={<InViewReveal text="Preguntas frecuentes sobre viviendas turísticas" />}
            description={
              <ScrollRevealText
                className="text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground"
                text={[
                  "Las dudas que más nos llegan de propietarios que quieren alquilar su vivienda como turística en Valencia.",
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
            ¿Prefieres el alquiler tradicional? Conoce nuestra{" "}
            <Link
              href="/gestion-alquiler"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              gestión de alquiler de larga duración
            </Link>{" "}
            con ingreso garantizado.
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
                    "Cuéntanos cómo es tu propiedad y te diremos si puede funcionar como vivienda turística, cuánto puede rendir y qué necesitas para legalizarla.",
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
        Trabajamos en Valencia capital —Ruzafa, El Carmen, Eixample, Cabanyal,
        Malvarrosa, Benimaclet— y en municipios del área metropolitana.
      </div>
    </main>
  );
}
