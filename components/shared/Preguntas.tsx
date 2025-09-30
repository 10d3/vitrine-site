import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Preguntas() {

  const faqs = [
    {
      question: '¿Qué es ISOLA y cómo funciona?',
      answer: 'ISOLA es una empresa de gestión de propiedades que se encarga de alquilar y mantener tu vivienda. Garantizamos un ingreso mensual fijo, independientemente de si la propiedad está alquilada o no. Nos ocupamos de todo, desde la selección de inquilinos hasta el mantenimiento regular y la gestión de emergencias.'
    },
    {
      question: '¿Qué tipos de propiedades gestionan?',
      answer: 'Gestionamos una amplia variedad de propiedades residenciales, incluyendo apartamentos, casas y unidades multifamiliares.'
    },
    {
      question: '¿Cómo garantizan el pago mensual si la propiedad no está alquilada?',
      answer: 'En ISOLA, ofrecemos un ingreso mensual fijo garantizado a los propietarios. Este modelo nos permite asegurarte un pago constante mientras nosotros nos encargamos de alquilar la propiedad y maximizar su rentabilidad.'
    },
    {
      question: '¿Qué servicios están incluidos en cada plan?',
      answer: 'Ofrecemos tres planes de gestión: "Alquiler Seguro", "Gestión Plus" y "Gestión Integral Premium". Cada plan incluye servicios específicos adaptados a diferentes necesidades. Puedes ver una comparación detallada de los servicios incluidos en cada plan en nuestra sección de Servicios.'
    },
    // {
    //   question: '¿Cómo seleccionan a los inquilinos?',
    //   answer: 'Realizamos un riguroso proceso de selección que incluye verificación de antecedentes, referencias laborales y crediticias para asegurar que solo los inquilinos de calidad ocupen tu propiedad.'
    // },
    {
      question: '¿Qué sucede en caso de una emergencia en la propiedad?',
      answer: 'Dependiendo del plan que elijas, ofrecemos gestión de emergencias durante el horario laboral o 24/7. Nos encargamos de resolver cualquier problema de manera rápida y eficiente para asegurar la tranquilidad de los inquilinos y mantener la propiedad en óptimas condiciones.'
    },
    {
      question: '¿Cómo me mantendrán informado sobre mi propiedad?',
      answer: 'Proporcionamos informes periódicos sobre el estado de tu propiedad y las gestiones realizadas. Los propietarios del Plan Premium reciben informes detallados mensuales y reuniones trimestrales para discutir mejoras y estrategias.'
    },
    {
      question: '¿Cuál es el costo de sus servicios?',
      answer: 'Nuestros costos varían según el plan que elijas. Te invitamos a contactarnos para una consulta gratuita donde podemos discutir tus necesidades y ofrecerte una cotización personalizada.'
    },
    {
      question: '¿Qué tipo de mantenimiento realizan?',
      answer: 'Nos encargamos de todo el mantenimiento regular y preventivo de la propiedad, incluyendo reparaciones básicas, renovaciones menores y mejoras estéticas según el plan seleccionado.'
    },
    {
      question: '¿Cómo puedo comenzar con ISOLA?',
      answer: '¡Es muy sencillo! Ponte en contacto con nosotros a través de nuestro formulario de contacto, correo electrónico o teléfono. Programaremos una consulta gratuita para evaluar tu propiedad y discutir tus necesidades.'
    },
  ];

  return (
    <section className="w-[95%] md:w-full py-12 md:py-24 lg:py-32 mb-8 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preguntas Frecuentes</h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aquí encontrarás las respuestas a las preguntas más comunes sobre nuestra empresa y nuestros servicios.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl space-y-6 py-12">
        {faqs.map((faq, i) => (<Accordion key={i} type="single" collapsible>
            <AccordionItem value={`question${i + 1}`}>
              <AccordionTrigger className="flex items-center justify-between text-lg md:text-2xl font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-[1rem]">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
