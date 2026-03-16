"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutPreviewSection() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="animate-on-scroll py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-3xl leading-tight font-light text-foreground sm:text-4xl lg:text-5xl">
            Tu Belleza y Bienestar{" "}
            <span className="font-semibold">Comienzan Aquí!</span>
          </h2>
          <Link
            href="/about"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            Nosotros
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Image grid — asymmetric layout */}
        <div
          ref={gridRef}
          className="animate-on-scroll mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {/* Large left image */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2">
            <Image
              src="/images/doctor-hero.png"
              alt="Equipo médico de HarmonieDerm en Trujillo"
              width={600}
              height={700}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>

          {/* Top right - text card */}
          <div className="col-span-1 flex flex-col justify-center rounded-2xl bg-accent/30 p-5 sm:p-6 lg:col-span-2">
            <h3 className="font-heading text-xl font-medium text-foreground sm:text-2xl">
              Descubre tu Potencial de Belleza
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Combinamos ciencia y arte para crear tratamientos personalizados
              que resaltan la belleza natural de cada paciente.
            </p>
          </div>

          {/* Bottom right image */}
          <div className="col-span-1 overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/doctor-hero.png"
              alt="Consulta personalizada de dermatología"
              width={600}
              height={400}
              className="h-full min-h-[180px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Leer Más
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
