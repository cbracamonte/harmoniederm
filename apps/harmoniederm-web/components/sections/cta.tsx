"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CtaSection() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="animate-on-scroll relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, #F6C6CF 0%, #fce4ec 40%, #FFF5F5 70%, #FFFFFF 100%)",
        }}
      />

      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="font-heading text-base text-primary italic">
          Tu Transformación
        </span>
        <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
          ¿Lista para tu{" "}
          <span className="font-semibold italic">Transformación</span>?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Agenda tu consulta gratuita y descubre el tratamiento ideal para ti.
          Atención personalizada en nuestra clínica de Trujillo.
        </p>
        <Link
          href="/contact"
          className="group mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold tracking-wide text-background transition-all hover:shadow-xl hover:shadow-foreground/20"
        >
          Agendar Cita
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
