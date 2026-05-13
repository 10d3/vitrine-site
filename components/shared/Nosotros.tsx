import Image from "next/image"
import { BlurFade } from "../ui/blur-fade"

// Define your preferred base delay (in seconds)
const BLUR_FADE_DELAY = 0.05

interface NosotrosItem {
  title: string
  description: string
  image: string
}

interface NosotrosProps {
  item: NosotrosItem
  index: number
}

export function Nosotros({ item, index }: NosotrosProps) {
  const isReversed = index % 2 !== 0

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`flex flex-col gap-12 md:gap-20 lg:gap-28 ${isReversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-center`}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              0{index + 1}
            </span>
            <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {item.title}
            </h2>
            <div className="w-16 h-px bg-primary" />
            <p className="text-muted-foreground text-base leading-relaxed lg:text-lg lg:leading-8 max-w-xl">
              {item.description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={item.image}
                fill
                alt={item.title}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface NosotrosSectionProps {
  items: NosotrosItem[]
}

export function NosotrosSection({ items }: NosotrosSectionProps) {
  return (
    <div className="w-full bg-background">
      {/* Section Header */}
      <div className="container flex flex-col text-center w-full mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32">
        <div className="max-w-full">
          {/* <span className="text-sm font-medium tracking-widest text-primary uppercase"> */}
          {/*   Sobre Nosotros */}
          {/* </span> */}
          <h1 className="mt-4 text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Quiénes Somos
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Conoce nuestra historia, valores y el equipo detrás de nuestros servicios profesionales de gestión turística.
          </p>
        </div>
      </div>

      {/* Content Sections with BlurFade transitions */}
      {items.map((item, index) => (
        <BlurFade
          key={index}
          delay={BLUR_FADE_DELAY * (index + 1) * 5} // increases delay for each item – adjust multiplier as desired
          inView
        >
          <Nosotros item={item} index={index} />
        </BlurFade>
      ))}
    </div>
  )
}
