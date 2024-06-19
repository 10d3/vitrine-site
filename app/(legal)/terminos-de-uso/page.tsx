import React from 'react'

export default function page() {
    return (
        <section className="flex w-full items-center justify-center">
            <div className='flex flex-col md:w-[60%] w-full gap-4 md:gap-2 mt-4 min-h-screen mx-4 md:mx-0'>
                <h1 className=' self-center md:self-start text-4xl font-bold'>Términos de Uso</h1>
                <div className="flex flex-col gap-2 md:gap-1">
                    <div>
                        <h3 className="text-2xl font-medium">Introducción</h3>
                        <p className="text-justify">
                            4SRENT proporciona estos Términos de Uso para regular el acceso y uso de su sitio web y servicios.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Aceptación de los Términos</h3>
                        <p className="text-justify">
                            Al usar nuestro sitio web, el usuario acepta estos Términos de Uso. Si no está de acuerdo, debe abstenerse de utilizar nuestros servicios.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Uso Permitido</h3>
                        <p className="text-justify">
                            El usuario se compromete a utilizar el sitio web solo con fines legales y de manera que no infrinja los derechos de la Empresa o terceros.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Modificaciones</h3>
                        <p className="text-justify">
                            La Empresa se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas tras su publicación en el sitio web.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Propiedad Intelectual</h3>
                        <p className="text-justify">
                            Todo el contenido del sitio web es propiedad de la Empresa o está licenciado para su uso. El uso no autorizado del contenido está prohibido.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Limitación de Responsabilidad</h3>
                        <p className="text-justify">
                            La Empresa no será responsable de los daños derivados del uso del sitio web o la imposibilidad de acceder a él.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1">
                        <h3 className="text-2xl font-medium">Jurisdicción y Ley Aplicable</h3>
                        <p className="text-justify">
                            Estos términos se rigen por las leyes españolas y cualquier disputa se resolverá en los tribunales de España.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
