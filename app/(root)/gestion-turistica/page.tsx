import { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/lib/seo/JsonLd";

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

const servicios = [
  {
    title: "Registro de Turismo de la Comunitat Valenciana",
    description:
      "Tramitamos el NRU (Número de Registro) de tu vivienda de uso turístico ante la Generalitat Valenciana.",
  },
  {
    title: "Gestión SES Hospedajes",
    description:
      "Registro y gestión en el Sistema de Entrada de Seguridad para hospedajes. Cumplimiento de la normativa de seguridad.",
  },
  {
    title: "Gestión integral en plataformas",
    description:
      "Publicación y gestión de reservas en Airbnb, Booking y otras plataformas, con atención al huésped incluida.",
  },
  {
    title: "Asesoría legal y normativa",
    description:
      "Consultoría especializada en normativa turística de la Comunitat Valenciana para mantener tu alojamiento siempre legal.",
  },
];

const pasos = [
  {
    title: "Estudiamos la vivienda",
    description:
      "Revisamos ubicación, características y normativa municipal aplicable antes de que inviertas un euro. Si la vivienda no es viable como turística, te lo decimos y buscamos la mejor alternativa.",
  },
  {
    title: "Legalizamos y registramos",
    description:
      "Tramitamos el NRU ante la Generalitat Valenciana, el alta en el registro estatal de arrendamientos de corta duración y la puesta en marcha de SES Hospedajes.",
  },
  {
    title: "Preparamos y publicamos",
    description:
      "Equipamiento, fotografía, textos y precios competitivos. Publicamos tu vivienda en Airbnb, Booking y otros canales, cuidando la ficha para que convierta.",
  },
  {
    title: "Operamos cada día",
    description:
      "Reservas, entradas y salidas, limpieza, incidencias, atención al huésped y obligaciones legales. Tú solo ves los ingresos y los informes.",
  },
];

const requisitos = [
  {
    title: "Registro autonómico (NRU)",
    description:
      "La vivienda debe estar inscrita en el Registro de Turismo de la Comunitat Valenciana antes de anunciarse como alojamiento turístico.",
  },
  {
    title: "Registro estatal de arrendamientos de corta duración",
    description:
      "Desde 2025 los alquileres turísticos y de temporada necesitan su número de registro para poder anunciarse en las plataformas.",
  },
  {
    title: "SES Hospedajes",
    description:
      "Comunicación de los datos de los viajeros al Ministerio del Interior, obligatoria para los alojamientos turísticos.",
  },
  {
    title: "Normativa municipal y de comunidad",
    description:
      "Compatibilidad urbanística, ordenanzas municipales y estatutos de la comunidad de propietarios: lo comprobamos antes de empezar.",
  },
  {
    title: "Seguro y habitabilidad",
    description:
      "Póliza adecuada al uso turístico y cédula de habitabilidad cuando proceda, para operar con cobertura y sin sorpresas.",
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

export default function GestionTuristicaPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqSchema} />
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Gestión de viviendas turísticas (VUT) en Valencia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Legaliza y rentabiliza tu vivienda turística en Valencia: registro
            de turismo de la Comunitat Valenciana (NRU), SES Hospedajes y
            gestión completa en Airbnb, Booking y otras plataformas.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 bg-card p-6"
              >
                <h2 className="text-lg font-semibold mb-2 flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                  {s.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Cómo funciona: de tu vivienda a alquiler turístico
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {pasos.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fe6b01] text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Qué necesitas para alquilar como VUT en Valencia
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Es fácil perderse entre registros y obligaciones. Estos son los
              puntos que revisamos siempre antes de publicar una vivienda:
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {requisitos.map((r, i) => (
                <div key={i} className="rounded-xl border border-border/50 p-5">
                  <h3 className="font-semibold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-xl border border-border/50 bg-card p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              ¿VUT o alquiler de larga duración?
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Alquiler turístico (VUT)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Más ingreso por noche, pero también más gestión: registro
                  turístico, limpieza entre huéspedes, entradas y salidas y
                  atención continua. Encaja si tu vivienda está en una zona con
                  demanda de viajeros.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Larga duración</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renta mensual estable, contrato de arrendamiento y mucha menos
                  rotación. Con nuestro plan de alquiler garantizado cobras todos
                  los meses aunque la vivienda esté vacía.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ¿No lo tienes claro? Compara con nuestra{" "}
              <Link href="/gestion-alquiler" className="underline font-medium">
                gestión de alquiler de larga duración
              </Link>{" "}
              o pide una consulta y te decimos qué encaja mejor.
            </p>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Trabajamos en Valencia capital —Ruzafa, El Carmen, Eixample,
            Cabanyal, Malvarrosa, Benimaclet— y en municipios del área
            metropolitana.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contacto"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#fe6b01] px-8 text-sm font-medium text-white hover:bg-[#fe6b01]/90"
            >
              Solicita tu consulta gratuita
            </Link>
            <Link
              href="/servicios"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium hover:bg-muted"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800 mb-12">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-center">
            Preguntas frecuentes sobre viviendas turísticas
          </h2>
          <div className="mx-auto max-w-3xl space-y-4 py-10">
            {faqs.map((faq, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            ¿Prefieres el alquiler tradicional? Conoce nuestra{" "}
            <Link href="/gestion-alquiler" className="underline font-medium">
              gestión de alquiler de larga duración
            </Link>{" "}
            con ingreso garantizado.
          </p>
        </div>
      </section>
    </div>
  );
}
