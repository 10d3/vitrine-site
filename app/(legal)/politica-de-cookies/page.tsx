import React from 'react'

export default function page() {
    return (
        <section className='flex w-full items-center justify-center'>
            <div className='flex flex-col md:w-[60%] w-full gap-2 min-h-screen mt-4 mx-4 md:mx-0'>
                <h1 className='self-center md:self-start text-4xl font-bold'>Política de Cookies</h1>
                <div className="flex flex-col gap-1">
                    <h3 className='text-2xl font-medium'>Introducción</h3>
                    <p className=" text-justify">
                        ISOLA utiliza cookies para mejorar la experiencia del usuario en nuestro sitio web. Esta política explica cómo usamos las cookies y cómo puede gestionarlas.

                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Qué son las Cookies</h3>
                    <p className="text-justify">
                        Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario para mejorar la experiencia en el sitio web.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Tipos de Cookies Utilizadas</h3>
                    <p className="text-justify">
                        Utilizamos cookies de sesión y cookies persistentes para recordar las preferencias del usuario y analizar el tráfico del sitio.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Propósito de las Cookies</h3>
                    <p className="text-justify">
                        Las cookies se usan para mejorar la funcionalidad del sitio web y proporcionar una experiencia personalizada a los usuarios.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Gestión de Cookies</h3>
                    <p className="text-justify">
                        Los usuarios pueden gestionar o desactivar las cookies a través de la configuración de su navegador. Sin embargo, esto puede afectar la funcionalidad del sitio web.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Consentimiento</h3>
                    <p className="text-justify">
                        Al utilizar nuestro sitio web, el usuario consiente el uso de cookies según esta política.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-medium">Cambios en la Política</h3>
                    <p className="text-justify">
                        Nos reservamos el derecho de modificar esta política en cualquier momento. Las modificaciones se publicarán en esta página.
                    </p>
                </div>
            </div>
        </section>
    )
}
