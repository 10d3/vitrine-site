"use client";

import Image from "next/image";
import { SectionWrapper, SectionHeader } from "./landing/section-wrapper";
import InViewReveal from "./landing/in-view-reveal";
import ScrollRevealText from "./landing/scroll-reveal-text";
import { StackedCardsContainer, StackedCard } from "./landing/stacked-cards";
import { ShieldCheck, Sparkles, Building, CheckCircle2 } from "lucide-react";

export interface NosotrosItem {
  title: string;
  description: string;
  image: string;
  alt?: string;
}

const cardHighlights = [
  {
    badge: "01 · Compromiso & Confianza",
    tag: "Gestión Profesional",
    icon: ShieldCheck,
    points: [
      "6 años gestionando viviendas en Valencia",
      "Selección exhaustiva de inquilinos",
      "Contratos de temporada y sin permanencia",
    ],
  },
  {
    badge: "02 · Solución 360° Integral",
    tag: "Tranquilidad Total",
    icon: Sparkles,
    points: [
      "Preparación y marketing del inmueble",
      "Gestión de averías y limpiezas con equipo propio",
      "Oficina abierta junto al Mercado Central",
    ],
  },
];

interface NosotrosProps {
  item: NosotrosItem;
  index: number;
  total: number;
}

export function Nosotros({ item, index, total }: NosotrosProps) {
  const highlight = cardHighlights[index] ?? cardHighlights[0];
  const Icon = highlight.icon;

  return (
    <StackedCard
      index={index}
      total={total}
      minScale={0.92}
      maxDim={0.25}
      cardClassName="rounded-3xl border border-border/70 bg-card overflow-hidden"
    >
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.25fr)] items-stretch min-h-120 sm:min-h-135 lg:min-h-145">
        {/* Left: Content Details */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 space-y-6">
          <div className="space-y-5">
            {/* <div className="flex items-center justify-between gap-4"> */}
            {/*   <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary"> */}
            {/*     <Icon className="size-3.5" /> */}
            {/*     <span>{highlight.badge}</span> */}
            {/*   </div> */}
            {/*   <span className="font-mono text-xs font-semibold text-muted-foreground/60"> */}
            {/*     0{index + 1} / 0{total} */}
            {/*   </span> */}
            {/* </div> */}

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground text-balance">
              {item.title}
            </h3>

            <div className="w-12 h-1 bg-primary rounded-full" />

            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Feature bullets matching Nexora feature card narrative */}
          {/* <div className="pt-2 border-t border-border/40"> */}
          {/*   <ul className="grid sm:grid-cols-2 gap-2.5"> */}
          {/*     {highlight.points.map((point, pIdx) => ( */}
          {/*       <li key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground"> */}
          {/*         <CheckCircle2 className="size-4 text-primary shrink-0" /> */}
          {/*         <span>{point}</span> */}
          {/*       </li> */}
          {/*     ))} */}
          {/*   </ul> */}
          {/* </div> */}
        </div>

        {/* Right: Full-height showcase image */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-full lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-border/50 bg-muted/30">
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="size-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      </div>
    </StackedCard>
  );
}

interface NosotrosSectionProps {
  items: NosotrosItem[];
}

export function NosotrosSection({ items }: NosotrosSectionProps) {
  return (
    <SectionWrapper id="sobre-nosotros">
      <SectionHeader
        eyebrow="SOBRE ISOLA"
        title={<InViewReveal text="Un equipo local, con oficina en el centro" />}
        description={
          <ScrollRevealText
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-muted-foreground"
            text={[
              "Conoce nuestra historia, valores y el equipo detrás de nuestros servicios profesionales de gestión residencial y turística en Valencia.",
            ]}
          />
        }
        align="center"
      />

      <StackedCardsContainer className="mt-8">
        {items.map((item, index) => (
          <Nosotros
            key={index}
            item={item}
            index={index}
            total={items.length}
          />
        ))}
      </StackedCardsContainer>
    </SectionWrapper>
  );
}
