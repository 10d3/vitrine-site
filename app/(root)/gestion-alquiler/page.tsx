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

const beneficios = [
  "Ingreso mensual fijo garantizado, alquilada o no la propiedad",
  "Selección y verificación rigurosa de inquilinos",
  "Gestión de contratos, cobros y facturación",
  "Mantenimiento preventivo y gestión de incidencias",
  "Informes periódicos sobre el estado de tu propiedad",
];

const pasos = [
  {
    title: "Valoración y propuesta",
    description:
      "Visitamos la vivienda, revisamos su documentación y estado, y te proponemos una renta realista y un plan de gestión cerrado.",
  },
  {
    title: "Selección del inquilino",
    description:
      "Comprobamos solvencia, nóminas y referencias, y preparamos el contrato y las fianzas legales antes de entregar las llaves.",
  },
  {
    title: "Contrato y cobros",
    description:
      "Altas de suministros, seguro, cobro mensual y liquidación. Tú recibes tu ingreso sin perseguir recibos ni llamadas.",
  },
  {
    title: "Mantenimiento e informes",
    description:
      "Gestionamos incidencias y revisiones, coordinamos profesionales y te enviamos informes periódicos del estado de tu propiedad.",
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

export default function GestionAlquilerPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={faqSchema} />
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Gestión de alquiler de larga duración en Valencia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Alquila tu vivienda sin preocupaciones: ISOLA garantiza tu ingreso
            mensual fijo y se encarga de todo el proceso, desde la selección de
            inquilinos hasta el mantenimiento de tu propiedad.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {beneficios.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Cómo trabajamos tu alquiler de larga duración
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
              Qué revisamos antes de alquilar tu vivienda
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Un contrato mal preparado se paga durante años. Antes de publicar
              el anuncio comprobamos:
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {revision.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Gestionamos viviendas en Valencia capital —Ruzafa, El Carmen,
            Eixample, Cabanyal, Malvarrosa, Benimaclet— y en municipios del
            área metropolitana.
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
            Preguntas frecuentes sobre la gestión de alquiler
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
            ¿Tienes una vivienda turística? Descubre también nuestra{" "}
            <Link href="/gestion-turistica" className="underline font-medium">
              gestión de viviendas turísticas (VUT)
            </Link>{" "}
            en Valencia.
          </p>
        </div>
      </section>
    </div>
  );
}
