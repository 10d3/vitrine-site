"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";
import RollingText from "./landing/rolling-text";

const plans = [
  {
    number: "01",
    plan: "Gestión Básico",
    description:
      "Diseñado para propietarios que buscan una gestión eficaz y confiable para el día a día de sus propiedades.",
    features: [
      "Check-in y Check-out: Coordinación y supervisión de la entrada y salida de huéspedes o inquilinos.",
      "Limpieza: Servicio de limpieza profesional y profunda de la vivienda.",
      "Mantenimiento: Inspección técnica y resolución rápida de pequeños desperfectos.",
    ],
    featured: false,
    cta: "Elegir Plan Básico",
  },
  {
    number: "02",
    plan: "Gestión Plus",
    description:
      "Equilibrio perfecto entre tranquilidad garantizada y un catálogo completo de servicios administrativos.",
    features: [
      "Todos los servicios del Plan Gestión Básico",
      "Atención al Cliente: Soporte y asistencia telefónica continua durante su estancia.",
      "Gestión de Inquilinos: Selección rigurosa, solvencia y contratos legales.",
      "Gestión de Cobros y Pagos: Control de facturas, ingresos y suministros.",
      "Atención a Siniestros: Gestión directa de partes y seguros.",
    ],
    featured: true,
    cta: "Elegir Plan Plus",
  },
  {
    number: "03",
    plan: "Gestión Premium",
    description:
      "Solución 360° llave en mano con máxima rentabilidad, alquiler asegurado y dedicación prioritaria.",
    features: [
      "Todos los servicios del Plan Básico y Plan Plus",
      "Comercialización Multicanal: Fotografía profesional, marketing y posicionamiento óptimo.",
      "Mantenimiento Integral: Supervisión técnica completa, reparaciones y reformas.",
      "Servicio VIP: Gestor personal dedicado y atención prioritaria 24/7.",
    ],
    featured: false,
    cta: "Elegir Plan Premium",
  },
];

export function Services() {
  return (
    <SectionWrapper id="planes">
      <SectionHeader
        eyebrow="PLANES DE GESTIÓN"
        title={<InViewReveal text="Elige el Plan Perfecto para Tu Propiedad" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Ofrecemos planes transparentes adaptados a cada tipo de propietario y vivienda en Valencia. Sin sorpresas ni costes ocultos.",
            ]}
          />
        }
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className="flex flex-col h-full"
          >
            <Card
              className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-xl border-border/60 flex flex-col h-full bg-card/80 backdrop-blur-xs",
                plan.featured && "ring-2 ring-primary shadow-lg border-primary/40 bg-card"
              )}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Header with number and badge */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-light text-muted-foreground/30 font-mono">
                    {plan.number}
                  </span>
                  {plan.featured && (
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-xs">
                      Recomendado
                    </span>
                  )}
                </div>

                {/* Plan name */}
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                  {plan.plan}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3.5 flex-grow mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="size-3.5 text-primary stroke-[2.5]" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.featured ? "default" : "outline"}
                  className="w-full rounded-xl py-6 transition-transform duration-150 active:scale-[0.98]"
                >
                  <Link href="#contacto">
                    <RollingText text={plan.cta} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
