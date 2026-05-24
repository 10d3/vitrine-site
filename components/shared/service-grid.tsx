"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  ClipboardList,
  Building2,
  Home,
  Scale,
  Key,
  Sparkles,
  Crown
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    number: "01",
    title: "Registro NRUA",
    description: "Gestión completa del registro en el Número de Registro Único de Alojamientos turísticos. Te guiamos en todo el proceso.",
    icon: FileText,
    featured: true,
  },
  {
    number: "02",
    title: "Presentación Modelo N2",
    description: "Preparación y presentación del modelo N2 ante las autoridades competentes, garantizando el cumplimiento normativo.",
    icon: ClipboardList,
    featured: false,
  },
  {
    number: "03",
    title: "Gestión SES Hospedajes",
    description: "Registro y gestión en el Sistema de Entrada de Seguridad para hospedajes. Cumplimiento de la normativa de seguridad.",
    icon: Building2,
    featured: false,
  },
  {
    number: "04",
    title: "Gestión de Apartamentos",
    description: "Administración integral de tu propiedad: reservas, mantenimiento, limpieza y atención al huésped.",
    icon: Home,
    featured: true,
  },
  {
    number: "05",
    title: "Asesoría Legal y Administrativa",
    description: "Consultoría especializada en normativa turística, contratos y cumplimiento legal para tu negocio.",
    icon: Scale,
    featured: false,
  },
  // {
  //   number: "06",
  //   title: "Gestión Básico",
  //   description: "Servicio esencial de check-in/check-out, limpieza profesional y mantenimiento básico de tu propiedad.",
  //   icon: Key,
  //   featured: false,
  // },
  // {
  //   number: "07",
  //   title: "Gestión Plus",
  //   description: "Gestión completa incluyendo atención al cliente, gestión de inquilinos, cobros, facturas de suministros y control de gastos.",
  //   icon: Sparkles,
  //   featured: true,
  // },
  // {
  //   number: "08",
  //   title: "Gestión Premium",
  //   description: "Servicio VIP completo: alquiler y comercialización, mantenimiento integral y atención personalizada exclusiva.",
  //   icon: Crown,
  //   featured: false,
  // },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-full mb-16 flex flex-col text-center">
          {/* <Badge variant="secondary" className="mb-4"> */}
          {/*   Nuestros Servicios */}
          {/* </Badge> */}
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Todo lo que necesitas para
            <br />
            <span className="font-medium">legalizar tu alojamiento</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una gama completa de servicios para propietarios de
            alojamientos turísticos en España.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.number}
              className={cn(
                "group relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border-border/50",
                service.featured && "md:col-span-2 lg:col-span-1"
              )}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-light text-muted-foreground/30">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                {/* <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"> */}
                {/*   Más información */}
                {/*   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
                {/* </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
