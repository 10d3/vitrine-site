import { Button } from "@/components/ui/button"
import ContactForm from "./ContactForm"

export default function Hero() {
    return (
        <section className="w-[100dvw] min-h-screen py-12 relative bg-[url('/vitrine1.jpg')] bg-cover bg-center flex flex-col md:flex-row items-center justify-around">
            {/* <div className="absolute inset-0 opacity-20 dark:opacity-30" /> */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 px-4 md:px-24 relative z-10">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2 text-white">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Gestionamos tu propiedad, garantizamos tu ingreso
                        </h1>
                        <p className="max-w-[600px] md:text-xl">
                            En 4SRENT, nos encargamos de todo para que disfrutes de ingresos seguros y tranquilidad. Alquilada o no, tu propiedad siempre está en buenas manos.
                        </p>
                    </div>
                    {/* <div className="flex flex-row items-start sm:items-center gap-4">
                        <Button>Acheter</Button>
                        <Button variant="secondary">Louer</Button>
                    </div> */}
                </div>
                <div className="max-w-md bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 lg:p-10 space-y-4">
                    <h2 className="text-2xl font-bold">Encuentre su próxima propiedad</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}