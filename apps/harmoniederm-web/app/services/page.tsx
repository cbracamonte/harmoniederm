import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Servicios | HarmonieDerm — Tratamientos Estéticos en Trujillo",
  description:
    "Descubre nuestros tratamientos: armonización facial, rinomodelación, Dermapen, rejuvenecimiento facial y más. Medicina estética en Trujillo.",
};

const allServices = [
  {
    title: "Armonización Facial",
    description:
      "Realza tu belleza natural con técnicas no quirúrgicas de última generación. Utilizamos ácido hialurónico y otros bioestimuladores para lograr un rostro más equilibrado y armonioso.",
    href: "/treatments/facial-harmonization-trujillo",
    image: "/images/doctor-hero.png",
    tags: ["No Invasivo", "Resultados Inmediatos"],
  },
  {
    title: "Rinomodelación",
    description:
      "Perfila tu nariz sin cirugía con ácido hialurónico premium. Corregimos imperfecciones y mejoramos el perfil nasal de manera segura y ambulatoria.",
    href: "/treatments/rhinomodeling-trujillo",
    image: "/images/doctor-hero.png",
    tags: ["Sin Cirugía", "Ácido Hialurónico"],
  },
  {
    title: "Dermapen",
    description:
      "Estimula la regeneración natural de tu piel con microneedling avanzado. Mejora la textura, reduce cicatrices y devuelve la luminosidad a tu rostro.",
    href: "/treatments/dermapen",
    image: "/images/doctor-hero.png",
    tags: ["Regenerativo", "Anti-Age"],
  },
  {
    title: "Rejuvenecimiento Facial",
    description:
      "Recupera la vitalidad y frescura de tu piel con tratamientos combinados. Reducimos líneas de expresión y restauramos el volumen perdido.",
    href: "/treatments/skin-rejuvenation",
    image: "/images/doctor-hero.png",
    tags: ["Anti-Envejecimiento", "Volumen"],
  },
  {
    title: "Tratamiento de Ojeras",
    description:
      "Elimina las ojeras y la apariencia de cansancio con técnicas especializadas. Devuelve la luz y frescura a tu mirada.",
    href: "/treatments/dark-circles",
    image: "/images/doctor-hero.png",
    tags: ["Zona Periocular", "Revitalización"],
  },
  {
    title: "Ácido Hialurónico",
    description:
      "Tratamientos con ácido hialurónico de la más alta calidad para hidratar, rellenar y rejuvenecer la piel. Resultados naturales y duraderos.",
    href: "/treatments/hyaluronic-acid",
    image: "/images/doctor-hero.png",
    tags: ["Hidratación", "Relleno"],
  },
];

export default function ServicesPage() {
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
              Servicios
            </span>
            <h1 className="mt-2 font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
              Nuestros{" "}
              <span className="font-semibold italic">Tratamientos</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cada tratamiento es diseñado para realzar tu belleza de manera
              natural, con la tecnología más avanzada y el cuidado que mereces.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section
          className="pb-16 sm:pb-20 lg:pb-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {allServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/50 px-3 py-1 text-[10px] font-medium text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-heading text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h2>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      Ver Detalle
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
