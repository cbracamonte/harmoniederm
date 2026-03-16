import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Testimonios | HarmonieDerm — Opiniones de Pacientes en Trujillo",
  description:
    "Lee las opiniones reales de nuestras pacientes sobre sus experiencias con armonización facial, rinomodelación y otros tratamientos estéticos.",
};

const testimonials = [
  {
    name: "María García",
    treatment: "Armonización Facial",
    rating: 5,
    text: "Estoy encantada con los resultados de mi armonización facial. El equipo fue increíblemente profesional y atento. Desde la primera consulta me explicaron todo el proceso y los resultados superaron mis expectativas. Mi rostro se ve natural y armonioso.",
    initials: "MG",
    date: "Febrero 2026",
  },
  {
    name: "Ana Rodríguez",
    treatment: "Rinomodelación",
    rating: 5,
    text: "La rinomodelación cambió mi vida. Siempre quise corregir una pequeña imperfección en mi nariz pero tenía miedo de la cirugía. Con este tratamiento no quirúrgico logré el resultado que quería sin dolor ni tiempo de recuperación.",
    initials: "AR",
    date: "Enero 2026",
  },
  {
    name: "Lucía Fernández",
    treatment: "Dermapen",
    rating: 5,
    text: "Después de 3 sesiones de Dermapen mi piel se ve completamente renovada. Las marcas de acné se redujeron notablemente y mi rostro tiene una luminosidad que no tenía hace años. El proceso fue cómodo y los resultados progresivos.",
    initials: "LF",
    date: "Diciembre 2025",
  },
  {
    name: "Carmen López",
    treatment: "Rejuvenecimiento Facial",
    rating: 5,
    text: "Me siento 10 años más joven. El tratamiento de rejuvenecimiento fue exactamente lo que necesitaba. Las líneas de expresión se suavizaron y mi piel recuperó esa firmeza que pensé había perdido para siempre.",
    initials: "CL",
    date: "Noviembre 2025",
  },
  {
    name: "Patricia Mendoza",
    treatment: "Ácido Hialurónico",
    rating: 5,
    text: "El tratamiento con ácido hialurónico fue una experiencia maravillosa. Los resultados son muy naturales, nadie nota que me hice algo pero todos me dicen que me veo mejor. Exactamente lo que quería.",
    initials: "PM",
    date: "Enero 2026",
  },
  {
    name: "Sofia Torres",
    treatment: "Armonización Facial",
    rating: 4,
    text: "Excelente atención desde el primer momento. La doctora se tomó el tiempo de entender lo que quería y me dio recomendaciones honestas. Los resultados fueron graduales y muy naturales.",
    initials: "ST",
    date: "Febrero 2026",
  },
];

export default function TestimonialsPage() {
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
              Testimonios
            </span>
            <h1 className="mt-2 font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
              Lo que Dicen Nuestras{" "}
              <span className="font-semibold italic">Pacientes</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Experiencias reales de quienes confiaron en HarmonieDerm para
              resaltar su belleza natural.
            </p>

            {/* Overall stats */}
            <div className="mt-8 flex items-center gap-6 rounded-2xl bg-muted/30 p-6">
              <div className="flex flex-col items-center gap-1">
                <span className="font-heading text-4xl font-semibold text-foreground">
                  4.9
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  +40 pacientes satisfechas
                </p>
                <p className="text-xs text-muted-foreground">
                  98% de satisfacción en nuestros tratamientos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section
          className="pb-16 sm:pb-20 lg:pb-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="mb-6 break-inside-avoid rounded-2xl border border-border/40 bg-background p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border/30 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-bold text-foreground">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {testimonial.treatment} · {testimonial.date}
                      </p>
                    </div>
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
              Únete a nuestras pacientes satisfechas
            </h2>
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
