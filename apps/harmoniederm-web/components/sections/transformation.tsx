"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const transformations = [
  {
    title: "Enfoque Holístico",
    description:
      "Evaluamos cada caso de forma integral para ofrecer el tratamiento más adecuado a tus necesidades.",
    tag: "Cuidado Facial",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Tecnología Avanzada",
    description:
      "Utilizamos equipos de última generación para garantizar resultados seguros y efectivos.",
    tag: "Innovación",
    image: "/images/doctor-hero.png",
  },
];

export function TransformationSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>();
  const cardsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section
      className="border-t border-border/30 py-16 sm:py-20 lg:py-28"
      style={{ paddingInline: "var(--container-padding)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headingRef}
          className="animate-on-scroll flex items-start justify-between gap-4"
        >
          <h2 className="max-w-lg font-heading text-3xl leading-tight font-light text-foreground sm:text-4xl lg:text-5xl">
            Una <span className="font-semibold italic">Transformación</span>{" "}
            Exclusiva Te Espera
          </h2>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary sm:inline-flex"
          >
            Más Servicios
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="animate-on-scroll mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6"
        >
          {transformations.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-medium text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-sm text-xs leading-relaxed text-white/70 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
