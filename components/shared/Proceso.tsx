"use client";

import { motion } from "motion/react";
import { Clock, FileText, Phone, ScanSearch } from "lucide-react";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";

export default function Proceso() {
  const Procesos = [
    {
      id: 1,
      icon: <ScanSearch className="size-6 text-primary" />,
      title: "Evaluación Inicial",
      description:
        "Realizamos una evaluación exhaustiva de tu propiedad para determinar el mejor enfoque de gestión y optimizar su rentabilidad.",
    },
    {
      id: 2,
      icon: <FileText className="size-6 text-primary" />,
      title: "Configuración de Alquiler",
      description:
        "Nos encargamos de todos los aspectos legales, contratos y logísticos para preparar tu propiedad para el alquiler seguro.",
    },
    {
      id: 3,
      icon: <Phone className="size-6 text-primary" />,
      title: "Gestión Continua",
      description:
        "Nos ocupamos de todo, desde la selección rigurosa de inquilinos hasta la resolución ágil de incidencias y mantenimiento.",
    },
    {
      id: 4,
      icon: <Clock className="size-6 text-primary" />,
      title: "Pago Garantizado",
      description:
        "Recibe tus pagos de alquiler puntualmente cada mes, pase lo que pase, con nuestra garantía de tranquilidad absoluta.",
    },
  ];

  return (
    <SectionWrapper id="proceso">
      <SectionHeader
        eyebrow="CÓMO TRABAJAMOS"
        title={<InViewReveal text="Nuestro Proceso Simple y Transparente" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Descubre cómo trabajamos para brindar una experiencia sin preocupaciones a los propietarios de bienes raíces en Valencia.",
            ]}
          />
        }
        align="center"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Procesos.map((proceso, index) => (
          <motion.div
            key={proceso.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative flex flex-col justify-between rounded-2xl border border-border/50 bg-foreground/[0.02] p-6 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-primary/30 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  {proceso.icon}
                </div>
                <span className="text-2xl font-light text-muted-foreground/30 font-mono">
                  0{proceso.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {proceso.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {proceso.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
