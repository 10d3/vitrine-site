import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-950 text-white py-6 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Bienvenue sur notre blog immobilier
          </h1>
          <p className="mt-4 max-w-3xl text-gray-400 sm:text-lg md:text-xl">
            Découvrez nos derniers articles sur l&apos;actualité du marché immobilier, les conseils d&apos;experts et les
            tendances du secteur.
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
          <div className="col-span-2 grid gap-8">
            <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <Link href="#" className="col-span-1 md:col-span-1 group" prefetch={false}>
                <Image
                  src="https://placehold.co/400x300/png"
                  width={400}
                  height={300}
                  alt="Blog post image"
                  className="aspect-video object-cover rounded-lg transition-all group-hover:scale-105"
                />
              </Link>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h2 className="text-xl font-bold tracking-tight hover:underline">
                    Les 5 tendances immobilières à suivre en 2023
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  Découvrez les principales tendances qui vont façonner le marché immobilier cette année, des nouvelles
                  technologies aux préférences des acheteurs.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div>12 avril 2023</div>
                  <Separator orientation="vertical" className="h-4" />
                  <div>5 min de lecture</div>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <Link href="#" className="col-span-1 md:col-span-1 group" prefetch={false}>
                <Image
                  src="https://placehold.co/400x300/png"
                  width={400}
                  height={300}
                  alt="Blog post image"
                  className="aspect-video object-cover rounded-lg transition-all group-hover:scale-105"
                />
              </Link>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h2 className="text-xl font-bold tracking-tight hover:underline">
                    Comment bien choisir son agent immobilier
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  Nos conseils pour trouver l&apos;agent immobilier idéal qui saura vous accompagner dans votre projet
                  d&apos;achat ou de vente.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div>8 avril 2023</div>
                  <Separator orientation="vertical" className="h-4" />
                  <div>7 min de lecture</div>
                </div>
              </div>
            </article>
            <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <Link href="#" className="col-span-1 md:col-span-1 group" prefetch={false}>
                <Image
                  src="https://placehold.co/400x300/png"
                  width={400}
                  height={300}
                  alt="Blog post image"
                  className="aspect-video object-cover rounded-lg transition-all group-hover:scale-105"
                />
              </Link>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <h2 className="text-xl font-bold tracking-tight hover:underline">
                    Investir dans l&apos;immobilier : les clés du succès
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  Découvrez nos meilleurs conseils pour réussir vos investissements immobiliers, de la sélection du bien
                  à la gestion locative.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <div>2 avril 2023</div>
                  <Separator orientation="vertical" className="h-4" />
                  <div>9 min de lecture</div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Catégories</h2>
              <nav className="space-y-2">
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <FolderIcon className="w-4 h-4 text-gray-500" />
                  <span>Achat</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <FolderIcon className="w-4 h-4 text-gray-500" />
                  <span>Vente</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <FolderIcon className="w-4 h-4 text-gray-500" />
                  <span>Investissement</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <FolderIcon className="w-4 h-4 text-gray-500" />
                  <span>Conseils</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                  <FolderIcon className="w-4 h-4 text-gray-500" />
                  <span>Tendances</span>
                </Link>
              </nav>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Articles récents</h2>
              <div className="space-y-4">
                <article className="grid grid-cols-[48px_1fr] gap-4">
                  <Link href="#" className="group" prefetch={false}>
                    <Image
                      src="https://placehold.co/48x48/png"
                      width={48}
                      height={48}
                      alt="Blog post image"
                      className="aspect-square object-cover rounded-lg transition-all group-hover:scale-105"
                    />
                  </Link>
                  <div>
                    <Link href="#" className="block" prefetch={false}>
                      <h3 className="text-base font-semibold hover:underline">
                        Comment bien choisir son agent immobilier
                      </h3>
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">8 avril 2023</div>
                  </div>
                </article>
                <article className="grid grid-cols-[48px_1fr] gap-4">
                  <Link href="#" className="group" prefetch={false}>
                    <Image
                      src="https://placehold.co/48x48/png"
                      width={48}
                      height={48}
                      alt="Blog post image"
                      className="aspect-square object-cover rounded-lg transition-all group-hover:scale-105"
                    />
                  </Link>
                  <div>
                    <Link href="#" className="block" prefetch={false}>
                      <h3 className="text-base font-semibold hover:underline">
                        Investir dans l&apos;immobilier : les clés du succès
                      </h3>
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2 avril 2023</div>
                  </div>
                </article>
                <article className="grid grid-cols-[48px_1fr] gap-4">
                  <Link href="#" className="group" prefetch={false}>
                    <Image
                      src="https://placehold.co/48x48/png"
                      width={48}
                      height={48}
                      alt="Blog post image"
                      className="aspect-square object-cover rounded-lg transition-all group-hover:scale-105"
                    />
                  </Link>
                  <div>
                    <Link href="#" className="block" prefetch={false}>
                      <h3 className="text-base font-semibold hover:underline">
                        Les 5 tendances immobilières à suivre en 2023
                      </h3>
                    </Link>
                    <div className="text-sm text-gray-500 dark:text-gray-400">12 avril 2023</div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FolderIcon(props:any) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}