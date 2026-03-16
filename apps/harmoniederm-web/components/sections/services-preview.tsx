"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    number: "01",
    label: "Armonización Facial",
    description: "Realza tu belleza natural con técnicas no quirúrgicas de última generación.",
    href: "/treatments/facial-harmonization-trujillo",
  },
  {
    number: "02",
    label: "Rinomodelación",
    description: "Perfila tu nariz sin cirugía con ácido hialurónico premium.",
    href: "/treatments/rhinomodeling-trujillo",
  },
  {
    number: "03",
    label: "Dermapen",
    description: "Regeneración natural para un rostro firme y luminoso.",
    href: "/treatments/dermapen",
  },
  {
    number: "04",
    label: "Rejuvenecimiento",
    description: "Recupera la vitalidad y frescura de tu piel con tratamientos avanzados.",
    href: "/treatments/skin-rejuvenation",
  },
];

export function ServicesPreviewSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>();
  const listRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });
  const imageRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      className="border-t border-border/30 bg-muted/20 py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headingRef}
          className="animate-on-scroll flex items-start justify-between gap-4"
        >
          <div>
            <span className="font-heading text-base text-primary italic">
              Tratamientos
            </span>
            <h2 className="mt-1 font-heading text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
              Servicios que Ofrecemos
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            Más Servicios
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Service list */}
          <div ref={listRef} className="animate-on-scroll lg:col-span-2">
            <div className="flex flex-col divide-y divide-border/50">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-start gap-4 py-5 transition-colors"
                >
                  <span className="mt-0.5 font-heading text-2xl font-light text-primary/50 transition-colors group-hover:text-primary">
                    {service.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold tracking-wide text-foreground transition-colors group-hover:text-primary">
                      {service.label}
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {service.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Images */}
          <div
            ref={imageRef}
            className="animate-slide-right grid grid-cols-2 gap-3 lg:col-span-3 lg:gap-4"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/doctor-hero.png"
                alt="Armonización facial en HarmonieDerm"
                width={400}
                height={500}
                className="h-full min-h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              {/* Overlay label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-xs font-medium text-white">Ver Detalle</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/doctor-hero.png"
                alt="Tratamientos estéticos en Trujillo"
                width={400}
                height={500}
                className="h-full min-h-[250px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
