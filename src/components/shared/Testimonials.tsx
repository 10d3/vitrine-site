import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      description: "Con ISOLA, puedo dormir tranquila sabiendo que mi propiedad está en buenas manos y que recibo mi pago mensual a tiempo.",
      image: "/placeholder.svg",
    }, {
      name: "Juan L.",
      description: "La gestión integral de ISOLA ha sido un salvavidas. No tengo que preocuparme por nada, y mi propiedad está siempre bien mantenida.",
      image: "/placeholder.svg",
    },
    {
      name:'Ramírez C.',
      description:"El equipo de ISOLA ha superado todas mis expectativas. Su enfoque personalizado y su dedicación para mantener mi propiedad en perfectas condiciones me han proporcionado una gran paz mental. No podría estar más satisfecho.",
      image: '/placeholder.svg',
    },
    {
      name:'Javier M.',
      description:"Gracias a ISOLA, ya no tengo que preocuparme por la gestión de mi propiedad. Su equipo profesional y atento se encarga de todo. Recomiendo encarecidamente sus servicios a cualquier propietario que busque una gestión sin preocupaciones." ,
      image: '/placeholder.svg',
    }
  ]

  return (
    <section className="w-full relative my-12 py-16 md:py-24 lg:py-32 rounded-sm">
      <div className="absolute w-full h-full bg-cover bg-center -z-50">
        <Image priority src='/vitrine3.jpg' alt="bg of testimonials" height={1000} width={1000} className="w-full h-[95%] md:h-[80%]"/>
      </div>
      <div className="container grid items-center justify-center gap-4 px-12 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl mt-11 font-bold tracking-tighter md:text-4xl/tight">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Escucha a nuestros propietarios satisfechos:
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <Avatar>
                <AvatarImage
                  src={`https://placehold.co/`}
                  width={80}
                  height={80}
                  alt="Avatar"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-lg font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;{testimonial.description}&quot;
                </p>
              </div>
            </div>))}
        </div>
      </div>
    </section>
  )
}