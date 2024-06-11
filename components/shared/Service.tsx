import React from 'react';
import { Card } from '../ui/card';
import { Check } from 'lucide-react';

const PricingCard = ({ plan, price, features, primary }: any) => {
    return (
        <Card className={`w-full bg-white rounded-lg p-8 ${primary ? 'border-4 border-indigo-600 shadow-2xl' : ''}`}>
            <div className="text-center">
                <h2 className="text-2xl font-bold text-indigo-600">{plan}</h2>
                <p className="mt-2 text-justify text-gray-900">{price}</p>
            </div>
            <ul className="mt-6 space-y-4">
                {features.map((feature: any, index: any) => (
                    <li key={index} className="flex flex-row gap-2">
                        <Check className="text-indigo-600" size={20} />
                        <span className=" text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Click here to get started!</button>
            </div>
        </Card>
    );
};

const Services = () => {
    const plans = [
        {
            plan: 'Plan Básico: "Alquiler Seguro"',
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
            plan: 'Plan Intermedio: "Gestión Plus"',
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
            plan: 'Plan Premium: "Gestión Integral Premium"',
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
        <div className="flex justify-center p-8 flex-col md:flex-row w-full gap-4 md:gap-0">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </div>
    );
};

export default Services;
