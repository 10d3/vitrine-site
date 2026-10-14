"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import RollingText from "@/components/shared/landing/rolling-text";

const IsolaScrollDrawWordmark: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.25 });

  return (
    <div
      ref={containerRef}
      className="group relative w-full overflow-hidden select-none my-6 md:my-0 cursor-default"
    >
      <h2 className="sr-only">ISOLA</h2>
      <svg
        viewBox="0 0 750 175"
        className="w-full h-auto block select-none pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="stroke-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Watermark text */}
        <motion.text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="text-accent-foreground/10 font-sans tracking-tight group-hover:text-accent-foreground/25 transition-colors duration-500"
          style={{
            fontSize: "192px",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          ISOLA
        </motion.text>

        {/* Glowing stroke light - ONLY glows when hovered */}
        <text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          filter="url(#stroke-glow)"
          className="opacity-0 group-hover:opacity-100 font-sans tracking-tight transition-opacity duration-500"
          style={{
            fontSize: "192px",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          ISOLA
        </text>
      </svg>
    </div>
  );
};

function AnimatedBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`transform-gpu ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { name: "Gestión de Alquiler", href: "/gestion-alquiler" },
    { name: "Gestión Turística (VUT)", href: "/gestion-turistica" },
    { name: "Todos los Servicios", href: "/servicios" },
  ];

  const company = [
    { name: "Quiénes Somos", href: "/sobre-nosotros" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contacto" },
  ];

  const legal = [
    { name: "Política de Privacidad", href: "/politica-de-privacidad" },
    { name: "Términos de Uso", href: "/terminos-de-uso" },
    { name: "Política de Cookies", href: "/politica-de-cookies" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.3"],
  });

  return (
    <footer className="rounded-sm px-4 pb-4 md:pb-6 md:px-4 border-none w-full">
      <div className="md:mx-4 px-4 py-12 md:p-24 md:pb-12 border-none">
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row justify-between gap-10"
        >
          {/* Left Section */}
          <AnimatedBlock delay={0} className="max-w-sm">
            <div className="mb-6 md:mb-0 max-w-sm">
              <div className="mb-4">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo.png"
                    alt="ISOLA Logo"
                    width={180}
                    height={48}
                    className="h-9 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="select-none text-base sm:text-lg text-pretty leading-relaxed text-muted-foreground">
                Gestión integral de propiedades en Valencia. Gestionamos tu propiedad, garantizamos tu ingreso.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-5 mt-6 text-2xl">
                <Link
                  href="https://wa.me/34642815465"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-muted-foreground hover:text-green-600 transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-muted-foreground hover:text-pink-600 transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-muted-foreground hover:text-red-600 transition-colors cursor-pointer" />
                </Link>
              </div>
            </div>
          </AnimatedBlock>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 select-none">
            <AnimatedBlock delay={0.1}>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
                  Servicios
                </h4>
                <ul className="space-y-1 text-sm">
                  {services.map((item) => (
                    <li
                      className="text-muted-foreground hover:text-foreground text-pretty leading-relaxed"
                      key={item.name}
                    >
                      <Link href={item.href} className="inline-block py-0.5">
                        <RollingText text={item.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.2}>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
                  Empresa
                </h4>
                <ul className="space-y-1 text-sm">
                  {company.map((item) => (
                    <li
                      className="text-muted-foreground hover:text-foreground text-pretty leading-relaxed"
                      key={item.name}
                    >
                      <Link href={item.href} className="inline-block py-0.5">
                        <RollingText text={item.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.3}>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
                  Legal
                </h4>
                <ul className="space-y-1 text-sm">
                  {legal.map((item) => (
                    <li
                      key={item.name}
                      className="text-muted-foreground hover:text-foreground text-pretty leading-relaxed"
                    >
                      <Link href={item.href} className="inline-block py-0.5">
                        <RollingText text={item.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          </div>
        </div>

        {/* Responsive Full-Width Brand Wordmark with Scroll-Driven Stroke Draw & Fill */}
        {/* <IsolaScrollDrawWordmark /> */}

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm select-none gap-2 pt-4 border-t border-border/40">
          <span className="text-sm leading-relaxed text-muted-foreground">
            &copy; {year} ISOLA — Gestión Integral de Propiedades en Valencia. Todos los derechos reservados.
          </span>
          <span className="text-xs text-muted-foreground">
            Valencia, España · <a href="tel:+34642815465" className="hover:underline">+34 642 81 54 65</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
