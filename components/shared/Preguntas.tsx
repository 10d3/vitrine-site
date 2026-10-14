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
      "ISOLA es una empresa de gestión de propiedades que se encarga de alquilar y mantener tu vivienda. Garantizamos un ingreso mensual fijo, independientemente de si la propiedad está alquilada o no. Nos ocupamos de todo, desde la selección de inquilinos hasta el mantenimiento regular y la gestión de emergencias.",
  },
  {
    question: "¿Qué tipos de propiedades gestionan?",
    answer:
      "Gestionamos una amplia variedad de propiedades residenciales en Valencia, incluyendo apartamentos, casas y unidades multifamiliares tanto para larga estancia como uso turístico.",
  },
  {
    question: "¿Cómo garantizan el pago mensual si la propiedad no está alquilada?",
    answer:
      "En ISOLA, ofrecemos un ingreso mensual fijo garantizado a los propietarios. Este modelo nos permite asegurarte un pago constante mientras nosotros nos encargamos de alquilar la propiedad y maximizar su rentabilidad.",
  },
  {
    question: "¿Qué servicios están incluidos en cada plan?",
    answer:
      'Ofrecemos tres planes de gestión: "Gestión Básico", "Gestión Plus" y "Gestión Premium". Cada plan incluye servicios específicos adaptados a diferentes necesidades de propietarios y tipos de alquiler.',
  },
  {
    question: "¿Qué sucede en caso de una emergencia en la propiedad?",
    answer:
      "Dependiendo del plan que elijas, ofrecemos gestión de emergencias durante el horario laboral o 24/7. Nos encargamos de resolver cualquier problema de manera rápida y eficiente para asegurar la tranquilidad de los inquilinos y mantener la propiedad en óptimas condiciones.",
  },
  {
    question: "¿Cómo me mantendrán informado sobre mi propiedad?",
    answer:
      "Proporcionamos informes periódicos sobre el estado de tu propiedad y las gestiones realizadas. Los propietarios del Plan Premium reciben informes detallados mensuales y reuniones trimestrales para discutir mejoras y estrategias.",
  },
  {
    question: "¿Cuál es el costo de sus servicios?",
    answer:
      "Nuestros costos varían según el plan que elijas. Te invitamos a contactarnos para una consulta gratuita donde podemos discutir tus necesidades y ofrecerte una cotización personalizada y transparente.",
  },
  {
    question: "¿Qué tipo de mantenimiento realizan?",
    answer:
      "Nos encargamos de todo el mantenimiento regular y preventivo de la propiedad, incluyendo reparaciones básicas, renovaciones menores y mejoras estéticas según el plan seleccionado.",
  },
  {
    question: "¿Cómo puedo comenzar con ISOLA?",
    answer:
      "¡Es muy sencillo! Ponte en contacto con nosotros a través de nuestro formulario de contacto, correo electrónico o WhatsApp. Programaremos una consulta gratuita para evaluar tu propiedad y discutir tus necesidades.",
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
                "Aquí encontrarás las respuestas a las dudas más habituales sobre la gestión integral de alquileres, ingresos garantizados y viviendas turísticas en Valencia.",
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
