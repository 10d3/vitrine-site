import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Preguntas() {
  return (
    <section className="w-[95%] md:w-full py-12 md:py-24 lg:py-32 mb-8 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preguntas Frecuentes</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aquí encontrarás las respuestas a las preguntas más comunes sobre nuestra empresa y nuestros servicios.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl space-y-6 py-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="question1">
              <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                ¿Cuáles son los requisitos para alquilar una propiedad con 4SRENT?
                {/* <ChevronDownIcon className="h-5 w-5 transition-all" /> */}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-500 dark:text-gray-400">
                  Para alquilar una propiedad con 4SRENT, los requisitos principales son:
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Tener un empleo estable y un ingreso mínimo mensual.</li>
                    <li>Presentar documentos de identidad y comprobantes de ingresos.</li>
                    <li>Pasar una verificación de antecedentes y de historial crediticio.</li>
                    <li>Pagar una fianza y el primer mes de alquiler por adelantado.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question2">
              <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                ¿Cómo puedo comunicarme con el equipo de 4SRENT?
                {/* <ChevronDownIcon className="h-5 w-5 transition-all" /> */}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-500 dark:text-gray-400">
                  Puedes comunicarte con nuestro equipo de atención al cliente de las siguientes maneras:
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Llamando a nuestro número de teléfono: +1 (555) 123-4567</li>
                    <li>Enviando un correo electrónico a: info@4SRENT.com</li>
                    <li>Visitando nuestra oficina en: Avenida Principal 123, Ciudad</li>
                    <li>Utilizando nuestro formulario de contacto en la página web</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question3">
              <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                ¿Cuáles son las formas de pago aceptadas por 4SRENT?
                {/* <ChevronDownIcon className="h-5 w-5 transition-all" /> */}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-500 dark:text-gray-400">
                  En 4SRENT aceptamos las siguientes formas de pago:
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Tarjeta de crédito (Visa, Mastercard, American Express)</li>
                    <li>Transferencia bancaria</li>
                    <li>Pago en efectivo en nuestra oficina</li>
                    <li>Pago a través de aplicaciones de pago digital (PayPal, Venmo)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question4">
              <AccordionTrigger className="flex items-center justify-between text-lg font-medium">
                ¿Cómo puedo hacer una reserva de una propiedad?
                {/* <ChevronDownIcon className="h-5 w-5 transition-all" /> */}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-gray-500 dark:text-gray-400">
                  Para hacer una reserva de una propiedad con 4SRENT, puedes seguir estos pasos:
                  <ol className="list-decimal pl-6 space-y-2 mt-4">
                    <li>Navega por nuestro sitio web y encuentra la propiedad que te interesa.</li>
                    <li>Haz clic en el botón &quot;Reservar&quot; y completa el formulario con tus datos.</li>
                    <li>Realiza el pago de la fianza y el primer mes de alquiler por adelantado.</li>
                    <li>Recibirás una confirmación de tu reserva y coordinaremos la entrega de las llaves.</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}