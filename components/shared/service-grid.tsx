"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import {
  FileText,
  ClipboardList,
  Building2,
  Home,
  Scale,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";

const services = [
  {
    number: "01",
    title: "Registro de Turismo (Comunitat Valenciana)",
    description:
      "Tramitamos el NRU (Número de Registro) de tu vivienda de uso turístico ante la Generalitat Valenciana. Te guiamos paso a paso para cumplir la normativa vigente sin sanciones.",
    icon: FileText,
    featured: true,
  },
  {
    number: "02",
    title: "Presentación Modelo N2",
    description:
      "Preparación y presentación del modelo N2 ante las autoridades competentes, garantizando el cumplimiento normativo riguroso.",
    icon: ClipboardList,
    featured: false,
  },
  {
    number: "03",
    title: "Gestión SES Hospedajes",
    description:
      "Registro y sincronización automática en el Sistema de Entrada de Seguridad para hospedajes. Máxima seguridad y cumplimiento de la ley nacional.",
    icon: Building2,
    featured: false,
  },
  {
    number: "04",
    title: "Gestión Integral de Apartamentos",
    description:
      "Administración integral de tu propiedad: reservas multicanal, check-in presencial o digital, limpieza profesional, lavandería y atención 24/7.",
    icon: Home,
    featured: true,
  },
  {
    number: "05",
    title: "Asesoría Legal y Fiscal",
    description:
      "Consultoría especializada en normativa turística, contratos de arrendamiento, licencias y optimización fiscal de tu patrimonio inmobiliario.",
    icon: Scale,
    featured: false,
  },
];

export function ServicesGrid() {
  return (
    <SectionWrapper id="legalizacion">
      <SectionHeader
        eyebrow="SERVICIOS LEGALES & TURÍSTICOS"
        title={<InViewReveal text="Todo para Legalizar y Maximizar Tu Propiedad" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Ofrecemos una gama completa de servicios técnicos, legales y operativos para propietarios de alojamientos turísticos y residenciales en Valencia.",
            ]}
          />
        }
        align="center"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={cn(service.featured && "md:col-span-2 lg:col-span-1")}
            >
              <Card className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.02] p-8 transition-all duration-300 hover:bg-foreground/[0.05] hover:border-primary/30 hover:shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <span className="text-2xl font-light text-muted-foreground/30 font-mono">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
