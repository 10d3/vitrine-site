import React from 'react';
import { Card } from '../ui/card';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const PricingCard = ({ plan, price, features, primary }: any) => {
    return (
        <Card className={`w-full bg-white rounded-lg p-8 ${primary ? 'border-4 border-custom-button-secondary shadow-2xl' : ''}`}>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-indigo-600">{plan}</h2>
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
            <div className="mt-6">
                <Button className="w-full py-2 px-4  text-white rounded-md bg-custom-primary hover:bg-custom-button-secondary">Click here to get started!</Button>
            </div>
        </Card>
    );
};

const Services = () => {
    const plans = [
        {
            plan: 'Alquiler Seguro',
            price: 'El Plan Básico "Alquiler Seguro" está diseñado para propietarios que buscan una gestión eficaz y confiable de sus propiedades, asegurando un pago mensual fijo. Nos encargamos de todo para que tú no tengas que preocuparte por nada',
            features: [
                'Ingreso mensual garantizado, alquilada o no',
                'Mantenimiento regular de la propiedad',
                'Estrategias de alquiler a medio y largo plazo',
                'Publicidad y marketing',
                'Selección rigurosa de inquilinos',
                'Gestión de contratos de alquiler',
                'Atención al cliente y resolución de problemas básicos'
            ],
            primary: false,
        },
        {
            plan: 'Gestión Plus',
            price: 'El Plan "Gestión Plus" está diseñado para propietarios que buscan un equilibrio entre una gestión segura y servicios adicionales para optimizar la rentabilidad y el mantenimiento de su propiedad',
            features: [
                "Todos los servicios del Plan Básico",
                "Mantenimiento preventivo regular",
                'Análisis de mercado para optimizar el precio de alquiler',
                'Informes trimestrales sobre el estado de la propiedad',
                'Gestión de renovaciones menores y mejoras estéticas',
                'Línea de atención para emergencias durante horario laboral'
            ],
            primary: true,
        },
        {
            plan: 'Gestión Integral Premium',
            price: 'El Plan Premium "Gestión Integral Premium" ofrece una gestión completa y proactiva de tu propiedad, asegurando no solo un ingreso mensual garantizado, sino también la optimización continua de su rentabilidad',
            features: [
                'Todos los servicios del Plan Básico y del Plan Intermedio',
                'Mantenimiento preventivo avanzado',
                'Optimización del alquiler a medio y largo plazo',
                'Gestión de emergencias 24 / 7',
                'Informes detallados mensuales y reuniones trimestrales',
                'Asesoría integral legal y fiscal',
                'Servicio VIP y atención personalizada',
            ],
            primary: false,
        },
    ];

    return (
        <section className='w-full py-12 md:mb-12 bg-gray-100 rounded-sm'>
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-custom-button-secondary">
                    Servicios de Gestión Integral
                </h2>
                <p className="mx-auto max-w-[700px] text-custom-button-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Ofrecemos una variedad de planes para satisfacer las necesidades de nuestros clientes.
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
