export default function Proceso() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Proceso</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                        Descubre cómo trabajamos para brindar una experiencia sin preocupaciones a los propietarios de bienes
                        raíces.
                    </p>
                </div>
                <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                            <ClipboardIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Evaluación Inicial</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Realizamos una evaluación exhaustiva de tu propiedad para determinar el mejor enfoque de gestión.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                            <BriefcaseIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Configuración de Alquiler</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Nos encargamos de todos los aspectos legales y logísticos para preparar tu propiedad para el alquiler.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                            <CalendarIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Gestión Continua</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Nos ocupamos de todo, desde la selección de inquilinos hasta la resolución de problemas, para que tú te
                            enfoques en otras cosas.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                            <CurrencyIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Pago Garantizado</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Recibe tus pagos de alquiler a tiempo, incluso si el inquilino se retrasa, con nuestra garantía de pago.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BriefcaseIcon(props:any) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}


function CalendarIcon(props:any) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function ClipboardIcon(props:any) {
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    )
}


function CurrencyIcon(props:any) {
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
            <circle cx="12" cy="12" r="8" />
            <line x1="3" x2="6" y1="3" y2="6" />
            <line x1="21" x2="18" y1="3" y2="6" />
            <line x1="3" x2="6" y1="21" y2="18" />
            <line x1="21" x2="18" y1="21" y2="18" />
        </svg>
    )
}