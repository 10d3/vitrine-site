import React from 'react'

export default function page() {
    return (
        <section className='flex w-full items-center justify-center'>
            <div className='flex flex-col md:w-[60%] w-full gap-2 min-h-screen mt-4 mx-4 md:mx-0'>
                <h1 className='self-center md:self-start text-4xl font-bold'>Política de Privacidad</h1>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Introducción</h3>
                    <p className="text-justify">
                        4SRENT se compromete a proteger la privacidad de los usuarios. Esta política explica cómo recopilamos y utilizamos la información personal.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Información Recopilada</h3>
                    <p className="text-justify">
                        Recopilamos información personal a través del formulario de contacto, incluyendo nombre, correo electrónico y número de teléfono.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Uso de la Información</h3>
                    <p className="text-justify">
                        La información se utiliza para responder a consultas, proporcionar información sobre nuestros servicios y mantener la comunicación con los propietarios.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Compartir Información</h3>
                    <p className="text-justify">
                        No compartimos información personal con terceros, excepto cuando sea necesario para la prestación del servicio o requerido por ley.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Seguridad</h3>
                    <p className="text-justify">
                        Implementamos medidas de seguridad para proteger la información personal contra accesos no autorizados y pérdidas.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Derechos del Usuario</h3>
                    <p className="text-justify">
                        Los usuarios tienen derecho a acceder, rectificar y eliminar su información personal. Pueden ejercer estos derechos contactándonos a través del correo electrónico proporcionado.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Cambios en la Política</h3>
                    <p className="text-justify">
                        La Empresa puede actualizar esta política ocasionalmente. Las actualizaciones se publicarán en esta página.
                    </p>
                </div>
            </div>
        </section>
    )
}
