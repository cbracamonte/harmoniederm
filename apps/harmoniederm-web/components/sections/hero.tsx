"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const servicePills = [
  { label: "Cuidado Facial", icon: "✦" },
  { label: "Estética", icon: "◆" },
  { label: "Rejuvenecimiento", icon: "✧" },
  { label: "Dermapen", icon: "○" },
];

export function HeroSection() {
  const headingRef = useScrollAnimation<HTMLDivElement>();
  const imageRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 40%, #F6C6CF 0%, #fce4ec 30%, #FFF5F5 60%, #FFFFFF 100%)",
        }}
      />

      <div
        className="mx-auto max-w-7xl pb-0 pt-8 sm:pt-12 lg:pt-16"
        style={{ paddingInline: "var(--container-padding)" }}
      >
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-0">
          {/* Left: text content */}
          <div
            ref={headingRef}
            className="animate-on-scroll flex flex-col gap-6 pb-12 lg:gap-8 lg:pb-24"
          >
            <h1 className="font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Transforma Tu Look con{" "}
              <span className="font-semibold">Servicios Expertos</span> en
              Nuestra Clínica
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Especialistas en armonización facial, rinomodelación y
              tratamientos estéticos no quirúrgicos en Trujillo. Resultados
              naturales con tecnología avanzada.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                Agendar Cita
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Ver Video
              </button>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {servicePills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-xs font-medium text-foreground/70 backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
                >
                  <span className="text-primary">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div
            ref={imageRef}
            className="animate-scale-in relative flex justify-center lg:justify-end"
          >
            {/* Decorative circle behind */}
            <div className="absolute bottom-0 right-0 h-[90%] w-[90%] rounded-full bg-primary/10 lg:right-8" />

            <div className="relative z-10 w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/doctor-hero.png"
                alt="Dra. HarmonieDerm — Medicina Estética y Dermatología en Trujillo"
                width={600}
                height={750}
                className="relative z-10 h-auto w-full object-contain object-bottom"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>

            {/* Floating card — Facial Care */}
            <div className="animate-float absolute right-4 top-1/4 z-20 hidden rounded-2xl bg-background/90 p-3 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <span className="text-lg">✦</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Cuidado Facial</p>
                  <p className="text-[10px] text-muted-foreground">
                    Tratamientos personalizados
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card — satisfaction */}
            <div className="animate-float absolute bottom-16 left-0 z-20 hidden rounded-2xl bg-background/90 p-3 shadow-xl backdrop-blur-md sm:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-foreground">
                  <span className="text-lg font-bold">98%</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Satisfacción</p>
                  <p className="text-[10px] text-muted-foreground">
                    Pacientes felices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
