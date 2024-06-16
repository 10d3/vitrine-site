import { Briefcase, Calendar, Clipboard, Currency } from "lucide-react"
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
            <div className="flex flex-col container px-4 md:px-6 gap-4 items-center">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Proceso</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                        Descubre cómo trabajamos para brindar una experiencia sin preocupaciones a los propietarios de bienes
                        raíces.
                    </p>
                </div>
                {Procesos.map((Proceso, i) => (
                    <Card key={i}
                        className={
                            `hover:cursor-pointer flex flex-col w-full min-w-56 md:min-w-[40rem] max-w-3xl overflow-hidden relative rounded-lg
                             before:absolute before:content-[''] before:w-[50%] before:h-[200%] md:before:h-[50%] md:before:w-[180%] before:bg-red-600 before:rotate-45
                             after:absolute after:content-[''] after:inset-[5px] after:bg-white after:rounded-lg
                             shadow-md hover:shadow-lg transition-shadow ${i % 2 == 0 ? 'md:flex-row-reverse self-start md:before:rotate-45' : 'md:flex-row self-end md:before:-rotate-45'}`
                        }>
                        <Link href="#" className={`z-50 flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-t-lg md:rounded-t-none ${i % 2 == 0 ? 'md:rounded-r-lg' : 'md:rounded-l-lg'}`} prefetch={false}>
                            <Image
                                src={Proceso.image}
                                alt="Blog Post Image"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </Link>
                        <CardContent className="z-50 flex flex-col justify-between flex-1 p-6">
                            <CardTitle className="block mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                                <Link
                                    href="#"
                                    className=" hover:underline dark:text-gray-100"
                                    prefetch={false}
                                >
                                    {Proceso.title}
                                </Link>
                            </CardTitle>
                            <CardDescription className="text-gray-700 dark:text-gray-400 line-clamp-4">
                                {Proceso.description}
                            </CardDescription>
                            {/* <div className="flex items-center mt-4 space-x-4">
                                <div className="flex items-center">
                                    <Avatar className="mr-2">
                                        <AvatarImage src="/placeholder.svg" alt="Author Avatar" />
                                        <AvatarFallback>AD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Author</div>
                                    </div>
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section >
    )
}
