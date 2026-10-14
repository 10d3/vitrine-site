"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, MotionValue, useScroll, useTransform, type Variants } from "motion/react";
import { JsonLd } from "@/lib/seo/JsonLd";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";

export const faqs = [
  {
    question: "¿Qué es ISOLA y cómo funciona?",
    answer:
      "ISOLA es una empresa de gestión y puesta a punto de viviendas en Valencia, con 6 años en el sector. Nos ocupamos de todo lo que pasa entre que el piso queda libre y el dinero llega a tu cuenta: anuncios, inquilinos, contratos, cobros, limpiezas, llaves e incidencias. Tú recibes tu parte cada mes con un resumen claro.",
  },
  {
    question: "¿Qué tipos de alquiler gestionáis?",
    answer:
      "Media estancia y temporada (de 1 a 11 meses, en Airbnb y Booking), alquiler por habitaciones con contrato de temporada, y alquiler turístico para pisos con licencia en vigor. También hacemos limpieza y operativa para inmobiliarias y propietarios que ya tienen quien alquile.",
  },
  {
    question: "¿Cuánto cuesta la gestión?",
    answer:
      "Media estancia y habitaciones: desde el 15 % + IVA sobre lo cobrado. Alquiler turístico: entre el 15 % y el 20 % + IVA, según rotación y estado del piso. El precio final lo cerramos después de ver el piso. Como extra opcional, el Pack Tranquilidad (control y pago de suministros, siniestros e informe de gastos) cuesta 29 € + IVA al mes.",
  },
  {
    question: "¿Tengo que pagar las limpiezas?",
    answer:
      "No. En media estancia y turístico la limpieza la paga el huésped en el precio de la reserva. En habitaciones, la cuota de entrada que paga el inquilino (200 € + IVA) incluye la limpieza de zonas comunes cada 15 días y la de su habitación al irse.",
  },
  {
    question: "¿Hay permanencia?",
    answer:
      "No. Nuestro contrato no te ata: seguimos juntos porque las cosas funcionan, no por una cláusula.",
  },
  {
    question: "¿Qué pasa si hay una avería en el piso?",
    answer:
      "Nos avisan a nosotros, no a ti. Buscamos y coordinamos la solución: si es algo pequeño lo resolvemos nosotros y, si hace falta un profesional, quedamos con él y comprobamos el trabajo. El coste de reparaciones y materiales corre a cargo del propietario.",
  },
  {
    question: "¿Cómo me mantendréis informado?",
    answer:
      "Tienes una persona de referencia que conoce tu piso y te contesta directamente. Cada mes recibes un resumen de lo que ha ingresado tu piso y de los gastos.",
  },
  {
    question: "¿Cómo puedo empezar con ISOLA?",
    answer:
      "Escríbenos por el formulario, por WhatsApp o por correo. Vemos tu piso y te preparamos un estudio gratuito y sin compromiso de cuánto podría darte.",
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function AnimatedAccordionItem({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [40, 0]);

  return (
    <motion.div style={{ opacity, y }} className="w-full transform-gpu will-change-transform">
      {children}
    </motion.div>
  );
}

export default function Preguntas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.3"],
  });

  return (
    <SectionWrapper
      id="faq"
      className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
    >
      <JsonLd data={faqSchema} />

      {/* Left Column: Heading & Description */}
      <div className="w-full md:col-span-5 lg:col-span-4">
        <SectionHeader
          eyebrow="FAQ"
          title={<InViewReveal text="Preguntas Frecuentes" />}
          description={
            <ScrollRevealText
              className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
              text={[
                "Aquí encontrarás las respuestas a las dudas más habituales sobre la gestión de alquileres, tarifas, limpiezas y viviendas turísticas en Valencia.",
              ]}
            />
          }
          align="left"
          className="max-w-2xl mb-0"
        />
      </div>

      {/* Right Column: Animated Accordions & Contact link */}
      <div className="w-full md:col-span-7 lg:col-span-8 flex flex-col gap-6">
        <div ref={containerRef} className="w-full min-w-0 rounded-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, index) => {
              const step = 0.6 / faqs.length;
              const start = index * step;
              const end = Math.min(start + 0.35, 1);

              return (
                <AnimatedAccordionItem
                  key={index}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="w-full border-none bg-foreground/5 rounded-2xl transition-colors hover:bg-foreground/[0.07] overflow-hidden"
                  >
                    <AccordionTrigger className="w-full text-left text-lg font-medium tracking-tight text-foreground p-5 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="w-full leading-relaxed text-sm sm:text-base text-muted-foreground px-5 pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedAccordionItem>
              );
            })}
          </Accordion>
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center md:text-left text-sm sm:text-base leading-relaxed text-muted-foreground pt-2"
        >
          ¿Tienes alguna otra duda?{" "}
          <a
            href="https://wa.me/34642815465"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Escríbenos por WhatsApp
          </a>{" "}
          o{" "}
          <a
            href="tel:+34642815465"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            llámanos directamente
          </a>
          .
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
