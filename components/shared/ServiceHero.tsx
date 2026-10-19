import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RollingText from "./landing/rolling-text";
import BlurFadeText from "../magicui/blur-fade-text";

/** Photo hero matching the landing header, without duplicating the contact form. */
export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative md:-mx-24 md:w-[calc(100%+12rem)]">
      <div className="relative flex min-h-dvh items-center overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="relative z-10 w-full px-6 py-20 md:px-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
          <BlurFadeText
            as="h1"
            delay={0.1}
            text={title}
            className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          />
          <BlurFadeText
            as="p"
            delay={0.2}
            text={description}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-[#fe6b01] px-8 text-white hover:bg-[#fe6b01]/90"
            >
              <Link href="/#contacto">
                <RollingText text="Solicita tu consulta gratuita" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/30 bg-white/10 px-8 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/servicios">
                <RollingText text="Ver todos los servicios" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
