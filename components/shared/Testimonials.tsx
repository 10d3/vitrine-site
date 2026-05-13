import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      description:
        "Con ISOLA, puedo dormir tranquila sabiendo que mi propiedad está en buenas manos y que recibo mi pago mensual a tiempo.",
      image: "/placeholder.svg",
    },
    {
      name: "Juan L.",
      description:
        "La gestión integral de ISOLA ha sido un salvavidas. No tengo que preocuparme por nada, y mi propiedad está siempre bien mantenida.",
      image: "/placeholder.svg",
    },
    {
      name: "Ramírez C.",
      description:
        "El equipo de ISOLA ha superado todas mis expectativas. Su enfoque personalizado y su dedicación para mantener mi propiedad en perfectas condiciones me han proporcionado una gran paz mental. No podría estar más satisfecho.",
      image: "/placeholder.svg",
    },
    {
      name: "Javier M.",
      description:
        "Gracias a ISOLA, ya no tengo que preocuparme por la gestión de mi propiedad. Su equipo profesional y atento se encarga de todo. Recomiendo encarecidamente sus servicios a cualquier propietario que busque una gestión sin preocupaciones.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header - matching Nosotros style */}
        <div className="mx-auto max-w-2xl text-center">
          {/* <span className="text-sm font-medium tracking-widest text-primary uppercase"> */}
          {/*   Testimonios */}
          {/* </span> */}
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Escucha a nuestros propietarios satisfechos
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-px bg-primary" />
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={testimonial.image}
                  width={80}
                  height={80}
                  alt={testimonial.name}
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  {testimonial.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.description}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
