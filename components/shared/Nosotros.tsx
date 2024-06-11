import Image from "next/image";

export default function Nosotros() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Quiénes Somos?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
            En 4SRENT, somos expertos en la gestión de propiedades, dedicados a ofrecer a los propietarios una solución completa y sin preocupaciones. Nuestro compromiso es gestionar tu propiedad de manera profesional, asegurándote un ingreso mensual fijo y manteniendo tu inmueble en óptimas condiciones. Con años de experiencia en el sector y un enfoque personalizado, nos aseguramos de maximizar la rentabilidad de tu propiedad mientras tú disfrutas de la tranquilidad que mereces.
            </p>
          </div>
          <div className="grid gap-4">
            <Image
              src='https://placehold.co/600x400/png'
              width={600}
              height={400}
              alt="About Us"
              className="overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>
    )
  }