"use client";

import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "María García",
    rating: 5,
    text: "Excelente servicio, los resultados de mi armonización facial fueron increíbles. El equipo es muy profesional y me sentí segura en todo momento.",
    initials: "MG",
  },
  {
    name: "Ana Rodríguez",
    rating: 5,
    text: "La rinomodelación superó mis expectativas. El resultado es muy natural y el procedimiento fue rápido y sin dolor.",
    initials: "AR",
  },
  {
    name: "Lucía Fernández",
    rating: 4,
    text: "Mi piel luce completamente renovada después del tratamiento con Dermapen. Muy recomendado para quienes buscan rejuvenecimiento.",
    initials: "LF",
  },
  {
    name: "Carmen López",
    rating: 5,
    text: "Desde la primera consulta me sentí en confianza. Los resultados hablan por sí solos. Sin duda volveré.",
    initials: "CL",
  },
];

export function ReviewsSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className="border-t border-border/30 py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headingRef} className="animate-on-scroll">
          <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
            Opiniones de Nuestras{" "}
            <span className="font-semibold italic">Pacientes</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Conoce las experiencias de quienes ya confiaron en HarmonieDerm
            para resaltar su belleza natural.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center gap-6">
          <div className="flex -space-x-2">
            {reviews.slice(0, 4).map((review) => (
              <div
                key={review.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary/15 text-xs font-semibold text-primary"
              >
                {review.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-primary text-primary"
                />
              ))}
              <span className="ml-1 text-sm font-semibold text-foreground">
                4.9
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              +40 pacientes satisfechas
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div
          ref={gridRef}
          className="animate-on-scroll mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-background p-5 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
                <span className="ml-1 text-xs font-medium text-foreground">
                  {review.rating}.0
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {review.text}
              </p>
              <div className="mt-auto flex items-center gap-3 border-t border-border/30 pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-foreground">
                  {review.initials}
                </div>
                <span className="text-xs font-medium text-foreground">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
