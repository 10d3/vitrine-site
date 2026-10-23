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

// Tarifas 2026 — mantener alineado con el PDF "Isola - Tarifas".
const plans = [
  {
    number: "01",
    plan: "Media y larga estancia, temporada",
    description:
      "Anuncios publicados en las plataformas de alquileres.",
    features: [
      "Anuncio, fotos, precios y selección de inquilinos",
      "Contratos de temporada, cobros y gestión de incidencias",
      "Limpieza de salida pagada por el huésped: sin coste para ti",
    ],
    featured: false,
    cta: "Pide tu estudio gratis",
  },
  {
    number: "02",
    plan: "Alquiler turístico y vacacional",
    price: "15–20 %",
    priceNote: "+ IVA, según rotación y estado del piso",
    description:
      "Alquiler turístico: solo para pisos con licencia turística en vigor. Alquiler vacacional: a partir de 11 noches, legal sin licencia turística.",
    features: [
      "Anuncios en Airbnb, Booking y otras plataformas, y ajuste de precios",
      "Check-in, check-out y atención a los huéspedes",
      "Limpieza entre estancias pagada por el huésped: sin coste para ti",
      "Gestión de incidencias y mantenimiento",
    ],
    featured: true,
    cta: "Pide tu estudio gratis",
  },
  {
    number: "03",
    plan: "Gestión por habitaciones",
    price: "Desde 15 %",
    priceNote: "+ IVA sobre lo cobrado",
    description:
      "Alquiler habitación por habitación con contrato de temporada para cada inquilino.",
    features: [
      "Búsqueda de inquilinos, contratos, cobros y convivencia",
      "Limpieza de zonas comunes cada 15 días y limpieza de la habitación al check-out",
      "Revisiones periódicas del piso",
      "Mantenimiento y gestión de incidencias",
    ],
    featured: false,
    cta: "Pide tu estudio gratis",
  },
  {
    number: "04",
    plan: "Limpieza y operativa",
    price: "A medida",
    priceNote: "por horas o precio fijo por piso",
    description:
      "Para inmobiliarias, propietarios y oficinas que ya tienen quien alquile.",
    features: [
      "Limpiezas puntuales o recurrentes con equipo propio",
      "Entrega y recogida de llaves, check-in y check-out",
      "Revisión de la vivienda y pequeñas incidencias",
      "Kit de amenities",
    ],
    featured: false,
    cta: "Pide presupuesto",
  },
];

export function Services() {
  return (
    <SectionWrapper id="planes">
      <SectionHeader
        eyebrow="SERVICIOS Y TARIFAS"
        title={<InViewReveal text="Lo que hacemos y lo que cuesta" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Sin permanencia. El precio final lo cerramos contigo después de ver el piso, según su ubicación, su estado, la rotación prevista y el número de viviendas.",
            ]}
          />
        }
        align="center"
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
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

                {/* Price */}
                {plan.price && (
                  <>
                    <p className="text-3xl font-semibold text-foreground">{plan.price}</p>
                    <p className="text-xs text-muted-foreground mb-4">{plan.priceNote}</p>
                  </>
                )}

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

      <div className="mt-10 rounded-2xl bg-[#122D5B] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="md:w-56 shrink-0">
          <p className="text-xs uppercase tracking-widest text-[#FD9A6C]">Extra opcional</p>
          <p className="text-xl font-semibold">Pack Tranquilidad</p>
        </div>
        <p className="text-sm text-white/80 flex-1">
          Control y pago de facturas de suministros, gestión de siniestros con el
          seguro e informe detallado de gastos.
        </p>
        <div className="md:text-right shrink-0">
          <p className="text-3xl font-semibold">29 €</p>
          <p className="text-xs text-white/80">+ IVA al mes por piso</p>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        <strong>Incluido en toda gestión:</strong> un interlocutor fijo, resumen
        mensual de ingresos y gastos, gestión de averías (buscamos y coordinamos
        la solución; reparaciones y materiales a cargo del propietario) y
        oficina abierta en el centro de Valencia.
      </p>
    </SectionWrapper>
  );
}
