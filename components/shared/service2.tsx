/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Service() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Servicios de Gestión Integral
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Ofrecemos una variedad de planes para satisfacer las necesidades de nuestros clientes.
                        </p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                            <div className="space-y-4">
                                <div>
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Plan Básico
                                    </div>
                                    <h3 className="text-2xl font-bold">Alquiler Seguro</h3>
                                </div>
                                <div className="prose">
                                    <p>
                                        Nuestro plan básico de alquiler seguro te brinda tranquilidad y seguridad en el proceso de alquiler
                                        de tu propiedad.
                                    </p>
                                </div>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Publicación y promoción de tu propiedad
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Selección y verificación de inquilinos
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Gestión de contratos y cobro de alquileres
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Atención de incidencias y reparaciones
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                            <div className="space-y-4">
                                <div>
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Plan Intermedio
                                    </div>
                                    <h3 className="text-2xl font-bold">Gestión Plus</h3>
                                </div>
                                <div className="prose">
                                    <p>
                                        Nuestro plan intermedio de gestión plus te ofrece un servicio más completo para el manejo de tu
                                        propiedad.
                                    </p>
                                </div>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Todo lo incluido en el plan básico
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Asesoramiento legal y fiscal
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Supervisión de obras y reformas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Informes mensuales de gestión
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                            <div className="space-y-4">
                                <div>
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Plan Premium
                                    </div>
                                    <h3 className="text-2xl font-bold">Gestión Integral Premium</h3>
                                </div>
                                <div className="prose">
                                    <p>
                                        Nuestro plan premium de gestión integral te ofrece un servicio completo y personalizado para el
                                        manejo de tu propiedad.
                                    </p>
                                </div>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Todo lo incluido en el plan intermedio
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Asesoramiento estratégico en inversiones
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Gestión de inquilinos VIP
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon className="h-4 w-4 text-primary" />
                                        Servicio de concierge 24/7
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props:any) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}