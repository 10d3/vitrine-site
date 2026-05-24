
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    number: "01",
    plan: "Gestión Básico",
    description:
      "El Plan Básico está diseñado para propietarios que buscan una gestión eficaz y confiable de sus propiedades.",
    features: [
      "Check-in y Check-out: Coordinación y supervisión de la entrada y salida de los inquilinos.",
      "Limpieza: Servicio de limpieza regular y profunda de la vivienda.",
      "Mantenimiento: Inspección y reparación de pequeños desperfectos.",
    ],
    featured: false,
  },
  {
    number: "02",
    plan: "Gestión Plus",
    description:
      "El Plan Plus está diseñado para propietarios que buscan un equilibrio entre gestión segura y servicios adicionales.",
    features: [
      "Todos los servicios del Plan Gestión Básico",
      "Atención al Cliente: Soporte y asistencia a los inquilinos durante su estancia.",
      "Gestión de Inquilinos: Selección, evaluación y gestión de contratos de alquiler.",
      "Gestión de Cobros y Pagos: Administración de los pagos de alquiler y otros cobros.",
      "Control de Facturas de Suministros: Supervisión y pago de facturas de agua, luz, gas, etc.",
      "Control y Gestión de Gastos: Monitoreo y optimización de los gastos operativos.",
      "Atención a Siniestros: Gestión de incidencias y siniestros, incluyendo seguros.",
    ],
    featured: true,
  },
  {
    number: "03",
    plan: "Gestión Premium",
    description:
      "El Plan Premium ofrece una gestión completa y proactiva de tu propiedad, asegurando la optimización continua.",
    features: [
      "Todos los servicios del Plan Gestión Básico y del Plan Gestión Plus",
      "Alquiler de Propiedad: Nos encargamos de alquilar tu propiedad, incluyendo marketing y promoción.",
      "Mantenimiento Integral: Gestión completa del mantenimiento, reparaciones y remodelaciones.",
      "Servicio VIP y Atención Personalizada: Atención exclusiva y personalizada para propietarios e inquilinos.",
    ],
    featured: false,
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-full mb-16 flex flex-col text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Servicios de
            <br />
            <span className="font-medium">Gestión Integral</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos una variedad de planes para satisfacer las necesidades de
            nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.number}
              className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 flex flex-col h-full",
                plan.featured && "ring-2 ring-primary shadow-xl"
              )}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Header with number and badge */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-light text-muted-foreground/30">
                    {plan.number}
                  </span>
                  {plan.featured && (
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Plan name */}
                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                  {plan.plan}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features list - grows to fill available space */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

