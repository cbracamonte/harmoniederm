"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FeaturedTreatmentSection() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const circleRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="animate-on-scroll py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-2">
          <span className="font-heading text-base text-primary italic">
            Tratamiento Destacado
          </span>
          <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
            Novedades{" "}
            <span className="font-semibold">Disponibles!</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: circular image with decorative ring */}
          <div className="flex justify-center">
            <div
              ref={circleRef}
              className="animate-scale-in relative"
            >
              {/* Decorative outer ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-primary/30" />
              <div className="absolute -inset-8 rounded-full border border-dashed border-primary/15" />

              {/* Main circular image */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/images/doctor-hero.png"
                  alt="Armonización Facial — tratamiento estrella de HarmonieDerm"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-2 top-8 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg sm:-right-4 sm:top-12">
                Nuevo
              </div>
            </div>
          </div>

          {/* Right: treatment info */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Destacado
              </span>
              <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/60">
                No Invasivo
              </span>
              <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/60">
                Sin Cirugía
              </span>
            </div>

            <h3 className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
              Armonización Facial con Ácido Hialurónico
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Nuestro tratamiento estrella combina ácido hialurónico de alta
              calidad con técnicas avanzadas de armonización facial para lograr
              resultados naturales y armoniosos. Procedimiento ambulatorio con
              resultados inmediatos.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-heading text-3xl font-semibold text-foreground">
                Consulta Gratis
              </span>
            </div>

            <Link
              href="/treatments/facial-harmonization-trujillo"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Ver Tratamiento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
