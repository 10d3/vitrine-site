import React from "react";
import { Card } from "../ui/card";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

const PricingCard = ({ plan, price, features, primary }: any) => {
  return (
    <Card
      className={`w-full bg-white rounded-lg p-8 ${
        primary ? "border-4 border-custom-button-secondary shadow-2xl" : ""
      }`}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-custom-button-secondary">
          {plan}
        </h2>
        {/* <p className="mt-2 text-justify text-gray-900">{price}</p> */}
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex flex-row gap-2 items-center">
            <div className="w-5 h-5 flex justify-center items-center">
              <Check className="text-custom-button-secondary" size={20} />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      {/* <div className="mt-6">
                <Button className="w-full py-2 px-4  text-white rounded-md bg-custom-primary hover:bg-custom-button-secondary">Click here to get started!</Button>
            </div> */}
    </Card>
  );
};

const Services = () => {
  const plans = [
    {
      plan: "Gestión Básico",
      price:
        'El Plan Básico "Gestión Básico" está diseñado para propietarios que buscan una gestión eficaz y confiable de sus propiedades',
      features: [
        "Check-in y Check-out: Coordinación y supervisión de la entrada y salida de los inquilinos.",
        "Limpieza: Servicio de limpieza regular y profunda entre inquilinos.",
        "Mantenimiento: Inspección y reparación de pequeños desperfectos.",
      ],
      primary: false,
    },
    {
      plan: "Gestión Plus",
      price:
        'El Plan "Gestión Plus" está diseñado para propietarios que buscan un equilibrio entre una gestión segura y servicios adicionales para optimizar la rentabilidad y el mantenimiento de su propiedad',
      features: [
        "Todos los servicios del Plan Gestión Básico",
        "Atención al Cliente: Soporte y asistencia a los inquilinos durante su estancia.",
        "Gestión de Inquilinos: Selección, evaluación y gestión de contratos de alquiler.",
        "Gestión de Cobros y Pagos: Administración de los pagos de alquiler y otros cobros.",
        "Control de Facturas de Suministros: Supervisión y pago de facturas de agua, luz, gas, etc.",
        "Control y Gestión de Gastos: Monitoreo y optimización de los gastos operativos.",
        "Atención a Siniestros: Gestión de incidencias y siniestros, incluyendo seguros.",
      ],
      primary: true,
    },
    {
      plan: "Gestión Premium",
      price:
        'El Plan Premium "Gestión Premium" ofrece una gestión completa y proactiva de tu propiedad, asegurando no solo un ingreso mensual garantizado, sino también la optimización continua de su rentabilidad',
      features: [
        "Todos los servicios del Plan Gestión Básico y del Plan Gestión Plus",
        "Alquiler de Propiedad: Nos encargamos de alquilar tu propiedad, incluyendo marketing y promoción.",
        "Mantenimiento Integral: Gestión completa del mantenimiento, reparaciones y remodelaciones.",
        "Servicio VIP y Atención Personalizada: Atención exclusiva y personalizada para propietarios e inquilinos.",
      ],
      primary: false,
    },
  ];

  return (
    <section className="w-full py-12 md:mb-12 bg-gray-100 rounded-sm">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-button-secondary">
          Servicios de Gestión Integral
        </h2>
        <p className="mx-auto max-w-[700px] text-custom-button-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Ofrecemos una variedad de planes para satisfacer las necesidades de
          nuestros clientes.
        </p>
      </div>
      <div className="flex justify-center p-8 flex-col md:flex-row w-full gap-4 md:gap-0">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Services;
