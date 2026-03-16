import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Resultados | HarmonieDerm — Antes y Después en Trujillo",
  description:
    "Mira los resultados reales de nuestros tratamientos estéticos. Antes y después de armonización facial, rinomodelación y más en Trujillo.",
};

const results = [
  {
    treatment: "Armonización Facial",
    description: "Mejora del perfil facial con ácido hialurónico en mentón y pómulos.",
    image: "/images/doctor-hero.png",
  },
  {
    treatment: "Rinomodelación",
    description: "Corrección del dorso nasal sin cirugía con resultados inmediatos.",
    image: "/images/doctor-hero.png",
  },
  {
    treatment: "Dermapen",
    description: "Mejora visible de la textura y luminosidad de la piel tras 3 sesiones.",
    image: "/images/doctor-hero.png",
  },
  {
    treatment: "Rejuvenecimiento",
    description: "Reducción de líneas de expresión y restauración del volumen facial.",
    image: "/images/doctor-hero.png",
  },
  {
    treatment: "Tratamiento de Ojeras",
    description: "Eliminación de ojeras profundas con técnica de microcánula.",
    image: "/images/doctor-hero.png",
  },
  {
    treatment: "Labios",
    description: "Aumento y definición natural del contorno labial.",
    image: "/images/doctor-hero.png",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="py-16 sm:py-20 lg:py-24"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <span className="font-heading text-base text-primary italic">
              Resultados
            </span>
            <h1 className="mt-2 font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
              Antes y{" "}
              <span className="font-semibold italic">Después</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Resultados reales de nuestras pacientes. Cada caso es único y los
              resultados pueden variar según las características individuales.
            </p>
          </div>
        </section>

        {/* Results grid */}
        <section
          className="pb-16 sm:pb-20 lg:pb-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {results.map((result, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-border/40 bg-background transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={result.image}
                      alt={`Resultado de ${result.treatment}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Before/After overlay */}
                    <div className="absolute inset-x-0 bottom-0 flex">
                      <div className="flex-1 bg-foreground/60 py-1.5 text-center text-[10px] font-semibold uppercase tracking-widest text-white">
                        Antes
                      </div>
                      <div className="flex-1 bg-primary/80 py-1.5 text-center text-[10px] font-semibold uppercase tracking-widest text-white">
                        Después
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-medium text-foreground">
                      {result.treatment}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden py-16 sm:py-20"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, #F6C6CF 0%, #fce4ec 40%, #FFFFFF 100%)",
            }}
          />
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl">
              ¿Quieres resultados así?
            </h2>
            <p className="text-sm text-muted-foreground">
              Agenda tu consulta gratuita y comienza tu transformación.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background"
            >
              Agendar Cita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
