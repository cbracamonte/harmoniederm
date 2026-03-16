import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contacto | HarmonieDerm — Agenda tu Cita en Trujillo",
  description:
    "Contacta con HarmonieDerm para agendar tu consulta. Encuéntranos en Trujillo, Perú. Atención por WhatsApp, teléfono y correo electrónico.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    lines: ["Av. Principal 123", "Trujillo, La Libertad, Perú"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+51 999 999 999"],
    href: "tel:+51999999999",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contacto@harmoniederm.com"],
    href: "mailto:contacto@harmoniederm.com",
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Lun - Vie: 9:00 - 19:00", "Sáb: 9:00 - 14:00"],
  },
];

export default function ContactPage() {
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
              Contacto
            </span>
            <h1 className="mt-2 font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
              Agenda tu{" "}
              <span className="font-semibold italic">Consulta</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estamos aquí para ayudarte. Contáctanos para agendar tu consulta
              gratuita o resolver cualquier duda sobre nuestros tratamientos.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section
          className="pb-16 sm:pb-20 lg:pb-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Left: contact info + WhatsApp CTA */}
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    const cardContent = (
                      <>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">
                            {info.title}
                          </h3>
                          {info.lines.map((line) => (
                            <p
                              key={line}
                              className="text-xs text-muted-foreground"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </>
                    );

                    return info.href ? (
                      <Link
                        key={info.title}
                        href={info.href}
                        className="flex gap-4 rounded-2xl border border-border/40 p-5 transition-shadow hover:shadow-md"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div
                        key={info.title}
                        className="flex gap-4 rounded-2xl border border-border/40 p-5 transition-shadow hover:shadow-md"
                      >
                        {cardContent}
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp CTA */}
                <Link
                  href="https://wa.me/51999999999?text=Hola%2C%20quiero%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-[#25D366]/10 p-6 transition-all hover:bg-[#25D366]/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Escríbenos por WhatsApp
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Respuesta rápida · Agenda tu cita en minutos
                    </p>
                  </div>
                </Link>
              </div>

              {/* Right: Map placeholder */}
              <div className="overflow-hidden rounded-2xl border border-border/40 bg-muted/30">
                <div className="flex h-full min-h-[300px] items-center justify-center lg:min-h-[420px]">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <MapPin className="h-8 w-8 text-primary/40" />
                    <p className="text-sm font-medium text-foreground">
                      Trujillo, La Libertad
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Mapa interactivo próximamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
