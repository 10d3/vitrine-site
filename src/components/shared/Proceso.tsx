import { Briefcase, BriefcaseBusiness, Calendar, Clipboard, Currency } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"
import Link from "next/link"

export default function Proceso() {
    const Procesos = [
        {
            id: 1,
            icon: <Clipboard size={20} className=" text-gray-500 dark:text-gray-400" />,
            image: '/process1.jpg',
            title: "Evaluación Inicial",
            description: "Realizamos una evaluación exhaustiva de tu propiedad para determinar el mejor enfoque de gestión."
        },
        {
            id: 2,
            icon: <Briefcase size={20} className=" text-gray-500 dark:text-gray-400" />,
            image: '/process2.jpg',
            title: "Configuración de Alquiler",
            description: "Nos encargamos de todos los aspectos legales y logísticos para preparar tu propiedad para el alquiler."
        },
        {
            id: 3,
            icon: <Calendar size={20} className=" text-gray-500 dark:text-gray-400" />,
            image: '/process3.jpg',
            title: "Gestión Continua",
            description: "Nos ocupamos de todo, desde la selección de inquilinos hasta la resolución de problemas, para que tú teenfoques en otras cosas."
        },
        {
            id: 4,
            icon: <Currency size={20} className=" text-gray-500 dark:text-gray-400" />,
            image: '/process4.jpg',
            title: "Pago Garantizado",
            description: "Recibe tus pagos de alquiler a tiempo, incluso si el inquilino se retrasa, con nuestra garantía de pago."
        }
    ]
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Proceso</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                        Descubre cómo trabajamos para brindar una experiencia sin preocupaciones a los propietarios de bienes
                        raíces.
                    </p>
                </div>
                <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                   {Procesos.map((proceso)=>( <div key={proceso.id} className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                            {proceso.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{proceso.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {proceso.description}
                        </p>
                    </div>))}
                </div>
            </div>
        </section>
    )
}
