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
          <li key={index} className="flex flex-row gap-2">
            <Check className="text-custom-button-secondary" size={20} />
            <span className=" text-gray-700">{feature}</span>
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
      features: ["Check in", " Check out", "Limpieza", "Mantenimiento"],
      primary: false,
    },
    {
      plan: "Gestión Plus",
      price:
        'El Plan "Gestión Plus" está diseñado para propietarios que buscan un equilibrio entre una gestión segura y servicios adicionales para optimizar la rentabilidad y el mantenimiento de su propiedad',
      features: [
        "Todos los servicios del Plan Gestión Básico",
        "Atención al cliente",
        "Gestión de los inquilinos",
        "Gestión de los cobros y pagos",
        "Control de las facturas de suministros",
        "Control y gestión de los gastos",
        "Atención a los siniestros",
      ],
      primary: true,
    },
    {
      plan: "Gestión Premium",
      price:
        'El Plan Premium "Gestión Premium" ofrece una gestión completa y proactiva de tu propiedad, asegurando no solo un ingreso mensual garantizado, sino también la optimización continua de su rentabilidad',
      features: [
        "Todos los servicios del Plan Gestión Básico y del Plan Gestión Plus",
        "Alquilamos tu propiedad y nos encargamos de todo: Mantenimiento, reparaciones, remodelaciones, etc…",
        "Servicio Vip y atención personalizada",
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
