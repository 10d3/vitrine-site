import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import Nosotros from "@/components/shared/Nosotros";
import Preguntas from "@/components/shared/Preguntas";
import Proceso from "@/components/shared/Proceso";
import Services from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  const aboutHelp = [
    {
      title: "¿Quiénes Somos?",
      image: "/vitrine5.jpg",
      description:
        "En 4SRENT, somos expertos en la gestión de propiedades, dedicados a ofrecer a los propietarios una solución completa y sin preocupaciones. Nuestro compromiso es gestionar tu propiedad de manera profesional, asegurándote un ingreso mensual fijo y manteniendo tu inmueble en óptimas condiciones. Con años de experiencia en el sector y un enfoque personalizado, nos aseguramos de maximizar la rentabilidad de tu propiedad mientras tú disfrutas de la tranquilidad que mereces.",
    },
    {
      title: "¿Cómo podemos ayudarte?",
      image: "/image9.jpg",
      description:
        "En 4SRENT, te ofrecemos una gestión integral para alquilar tu propiedad sin preocupaciones. Evaluamos tu inmueble, lo preparamos para destacar en el mercado, y diseñamos estrategias de marketing efectivas. Seleccionamos cuidadosamente a los inquilinos adecuados y gestionamos toda la parte administrativa y contractual. Además, nos encargamos del mantenimiento y las reparaciones necesarias para mantener tu propiedad en las mejores condiciones. Con nosotros, tu inversión está en buenas manos, garantizando tranquilidad y rentabilidad.",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Proceso />
      <Services />
      {aboutHelp.map((ah: any, i: any) => (
        <Nosotros key={i} ah={ah} index={i + 1} />
      ))}
      <Testimonials />
      <Preguntas />
      <CallToAction />
    </main>
  );
}
