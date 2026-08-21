/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const legals = [
    {
      title: "Política de Privacidad",
      link: "/politica-de-privacidad",
    },
    {
      title: "Términos de Uso",
      link: "/terminos-de-uso",
    },
    {
      title: "Política de Cookies",
      link: "/politica-de-cookies",
    },
  ];
  const services = [
    {
      title: "Gestión de Alquiler",
      link: "/gestion-alquiler",
    },
    {
      title: "Gestión Turística (VUT)",
      link: "/gestion-turistica",
    },
    {
      title: "Todos los Servicios",
      link: "/servicios",
    },
  ];
  return (
    <footer className="bg-gray-100 py-12 w-full dark:bg-gray-800">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 items-center w-full">
          <h3 className="font-semibold">Contacto</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p>Valencia, España</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              {/* TODO: confirmar número real con el cliente */}
              <a href="tel:+34642815465">+34 642 81 54 65</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="mailto:info@isolatucasa.com">info@isolatucasa.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="font-semibold">Servicios</h3>
          <div className="grid gap-2 text-sm">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="hover:underline"
                prefetch={false}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="font-semibold">Legal</h3>
          <div className="grid gap-2 text-sm">
            {legals.map((legal, i) => (
              <Link
                key={i}
                href={legal.link}
                className="hover:underline"
                prefetch={false}
              >
                {legal.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-8 px-4 md:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ISOLA — Gestión Integral de
        Propiedades en Valencia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
