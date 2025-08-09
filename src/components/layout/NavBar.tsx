import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Image from "next/image"

export default function NavBar() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-900 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center" prefetch={false}>
        <Image className="w-auto h-8" src='/logo.svg' width={1000} height={1000} alt='logo 4srent' />
      </Link>
      <nav className="hidden space-x-4 sm:flex">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          prefetch={false}
        >
          Inicio
        </Link>
        <Link
          href="/servicios"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          prefetch={false}
        >
          Servicios
        </Link>
        <Link
          href="/testimonios"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          prefetch={false}
        >
          Testimonios
        </Link>
        {/* <Link
          href="/contacto"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          prefetch={false}
        >
          Contacto
        </Link> */}
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          prefetch={false}
        >
          Blog
        </Link>
      </nav>
      <Button size="sm" className="hidden sm:inline-flex bg-[#fe6b01] text-white hover:bg-[#fe6b01]/90">
        Registrarse
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white dark:bg-gray-900">
          <div className="flex h-full flex-col justify-between py-4">
            <nav className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <HomeIcon className="h-5 w-5" />
                Inicio
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <BriefcaseIcon className="h-5 w-5" />
                Servicios
              </Link>
              <Link
                href="/testimonios"
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <WebcamIcon className="h-5 w-5" />
                Testimonios
              </Link>
              {/* <Link
                href="/contact"
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <PhoneIcon className="h-5 w-5" />
                Contacto
              </Link> */}
              <Link
                href="/blog"
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <PhoneIcon className="h-5 w-5" />
                Blog
              </Link>
            </nav>
            <Button size="sm" className="mx-4 bg-custom-primary hover:bg-custom-button-secondary">
              Registrarse
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
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


function HomeIcon(props:any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function WebcamIcon(props:any) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}