import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      description: "Con 4SRENT, puedo dormir tranquila sabiendo que mi propiedad está en buenas manos y que recibo mi pago mensual a tiempo.",
      image: "/placeholder.svg",
    }, {
      name: "Juan L.",
      description: "La gestión integral de 4SRENT ha sido un salvavidas. No tengo que preocuparme por nada, y mi propiedad está siempre bien mantenida.",
      image: "/placeholder.svg",
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Lo que dicen nuestros clientes</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Escucha a nuestros propietarios satisfechos:
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <Image
                src={`https://placehold.co/${80}x${80}/png`}
                width={80}
                height={80}
                alt="Avatar"
                className="h-20 w-20 rounded-full object-cover"
              />
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