"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      description:
        "Con ISOLA puedo dormir tranquila sabiendo que mi propiedad está en buenas manos y que recibo mi pago mensual a tiempo cada mes sin retrasos.",
      image: "/placeholder.svg",
    },
    {
      name: "Juan L.",
      description:
        "La gestión integral de ISOLA ha sido un auténtico salvavidas. No tengo que preocuparme por inquilinos ni llamadas imprevistas; todo se gestiona de forma impecable.",
      image: "/placeholder.svg",
    },
    {
      name: "Ramírez C.",
      description:
        "El equipo de ISOLA ha superado todas mis expectativas. Su enfoque personalizado y su dedicación para mantener mi propiedad en perfectas condiciones me dan una paz mental total.",
      image: "/placeholder.svg",
    },
    {
      name: "Javier M.",
      description:
        "Gracias a ISOLA ya no tengo que preocuparme por el alquiler de mi vivienda en Valencia. Su equipo es muy profesional y transparente. Los recomiendo con los ojos cerrados.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <SectionWrapper id="testimonios">
      <SectionHeader
        eyebrow="TESTIMONIOS"
        title={<InViewReveal text="Propietarios Satisfechos con ISOLA" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Historias reales de propietarios en Valencia que han delegado la gestión de sus viviendas y disfrutan de ingresos fijos garantizados.",
            ]}
          />
        }
        align="center"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between rounded-2xl border border-border/50 bg-foreground/[0.02] p-6 text-center transition-all duration-300 hover:bg-foreground/[0.05] hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-16 ring-2 ring-primary/20">
                <AvatarImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                  {testimonial.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.description}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
