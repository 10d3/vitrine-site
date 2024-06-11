import { Button } from "@/components/ui/button"
import ContactForm from "./ContactForm"

export default function Hero() {
    return (
        <section className="w-full py-12 relative">
            <div className="absolute inset-0 bg-[url('/vitrine1.jpg')] bg-cover bg-center opacity-20 dark:opacity-30" />
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6 relative z-10">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Gestionamos tu propiedad, garantizamos tu ingreso
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            En 4SRENT, nos encargamos de todo para que disfrutes de ingresos seguros y tranquilidad. Alquilada o no, tu propiedad siempre está en buenas manos.
                        </p>
                    </div>
                    {/* <div className="flex flex-row items-start sm:items-center gap-4">
                        <Button>Acheter</Button>
                        <Button variant="secondary">Louer</Button>
                    </div> */}
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 lg:p-10 space-y-4">
                    <h2 className="text-2xl font-bold">Trouvez votre prochaine propriété</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}