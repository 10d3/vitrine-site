import CallToAction from "@/components/shared/CallToAction";
import Hero from "@/components/shared/Hero";
import Nosotros from "@/components/shared/Nosotros";
import Preguntas from "@/components/shared/Preguntas";
import Proceso from "@/components/shared/Proceso";
import Services from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10 md:p-24">
      <Hero />
      <Proceso />
      <Services />
      <Testimonials />
      <Nosotros />
      <CallToAction />
      <Preguntas />
    </main>
  );
}
