import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Nosotros | HarmonieDerm — Dermatología y Medicina Estética en Trujillo",
  description:
    "Conoce al equipo de HarmonieDerm. Especialistas en dermatología y medicina estética con años de experiencia en Trujillo, Perú.",
};

const values = [
  {
    title: "Excelencia Médica",
    description:
      "Cada tratamiento es realizado con los más altos estándares de calidad y seguridad.",
  },
  {
    title: "Resultados Naturales",
    description:
      "Buscamos realzar tu belleza natural, respetando la armonía única de tus rasgos.",
  },
  {
    title: "Tecnología Avanzada",
    description:
      "Utilizamos equipos de última generación y productos certificados internacionalmente.",
  },
  {
    title: "Atención Personalizada",
    description:
      "Cada paciente recibe un plan de tratamiento diseñado exclusivamente para sus necesidades.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 30% 50%, #F6C6CF33 0%, transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-5">
                <span className="font-heading text-base text-primary italic">
                  Sobre Nosotros
                </span>
                <h1 className="font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
                  Dedicados a Resaltar tu{" "}
                  <span className="font-semibold italic">Belleza Natural</span>
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  En HarmonieDerm creemos que la verdadera belleza nace de la
                  armonía. Nuestro equipo de especialistas combina años de
                  experiencia médica con un enfoque artístico para ofrecer
                  resultados que hablan por sí solos.
                </p>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Ubicados en el corazón de Trujillo, brindamos un espacio
                  cálido y profesional donde cada paciente se siente valorada
                  y segura desde la primera consulta.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-hero.png"
                  alt="Equipo de especialistas HarmonieDerm"
                  width={600}
                  height={700}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          className="border-y border-border/30 bg-muted/20 py-16 sm:py-20"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-light text-foreground sm:text-3xl lg:text-4xl">
              &ldquo;Nuestra misión es transformar vidas a través de la
              medicina estética, ofreciendo tratamientos seguros, efectivos y
              personalizados que reflejen la belleza única de cada
              persona.&rdquo;
            </h2>
          </div>
        </section>

        {/* Values */}
        <section
          className="py-16 sm:py-20 lg:py-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="font-heading text-3xl font-light text-foreground sm:text-4xl">
              Nuestros <span className="font-semibold">Valores</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-border/40 p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="font-heading text-3xl font-light text-primary/40">
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-xl font-medium text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
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
              ¿Quieres conocernos?
            </h2>
            <p className="text-sm text-muted-foreground">
              Agenda una consulta y descubre cómo podemos ayudarte.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-all hover:shadow-xl"
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
