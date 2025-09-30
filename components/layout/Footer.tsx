import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
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
  return (
    <footer className="bg-gray-100 py-12 w-full dark:bg-gray-800">
      <div className=" max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 md:items-center w-full">
          <h3 className="font-semibold">Contact</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p>Valencia, España</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="tel:+34642815465">+34 642 81 5465</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a href="mailto:info@isolatucasa.com">info@isolatucasa.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:items-center">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <Facebook className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
            </Link>
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <Twitter className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <Linkedin className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:items-center">
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
      <div className="container max-w-7xl mt-8 px-4 md:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2024 ISOLA. All rights reserved.
      </div>
    </footer>
  );
}
