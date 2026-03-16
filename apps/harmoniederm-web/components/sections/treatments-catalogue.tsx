"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const treatments = [
  {
    title: "Armonización Facial",
    description: "Realza tu belleza natural con técnicas no quirúrgicas.",
    href: "/treatments/facial-harmonization-trujillo",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Rinomodelación",
    description: "Perfila tu nariz sin cirugía con ácido hialurónico.",
    href: "/treatments/rhinomodeling-trujillo",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Dermapen",
    description: "Regeneración natural para un rostro firme y luminoso.",
    href: "/treatments/dermapen",
    image: "/images/doctor-hero.png",
  },
];

export function TreatmentsCatalogueSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className="bg-muted/30 py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headingRef}
          className="animate-on-scroll flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
              Catálogo de{" "}
              <span className="font-semibold italic">Tratamientos</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Descubre la experiencia completa de belleza y bienestar que
              HarmonieDerm tiene para ti.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Leer Más
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Treatment cards */}
        <div
          ref={gridRef}
          className="animate-on-scroll mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {treatments.map((treatment) => (
            <Link
              key={treatment.href}
              href={treatment.href}
              className="group overflow-hidden rounded-2xl bg-background transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20">
                  <span className="translate-y-4 rounded-full bg-background px-5 py-2 text-xs font-semibold text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver Detalle
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="font-heading text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                  {treatment.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
