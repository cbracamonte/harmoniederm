import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  servicios: [
    { label: "Armonización Facial", href: "/treatments/facial-harmonization-trujillo" },
    { label: "Rinomodelación", href: "/treatments/rhinomodeling-trujillo" },
    { label: "Dermapen", href: "/treatments/dermapen" },
    { label: "Rejuvenecimiento Facial", href: "/treatments/skin-rejuvenation" },
  ],
  empresa: [
    { label: "Nosotros", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Resultados", href: "/results" },
    { label: "Contacto", href: "/contact" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "/privacy" },
    { label: "Términos de Servicio", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-foreground text-background">
      <div
        className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20"
        style={{ paddingInline: "var(--container-padding)" }}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/logo.svg"
                alt="HarmonieDerm"
                width={32}
                height={32}
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="font-heading text-xl font-semibold">
                HarmonieDerm
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-background/60">
              Especialistas en dermatología y medicina estética en Trujillo.
              Resaltamos tu belleza natural con tecnología avanzada.
            </p>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-background/40">
              Servicios
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.servicios.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-background/40">
              Empresa
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.empresa.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-background/40">
              Contacto
            </h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <p>Trujillo, La Libertad, Perú</p>
              <Link
                href="tel:+51999999999"
                className="transition-colors hover:text-background"
              >
                +51 999 999 999
              </Link>
              <Link
                href="mailto:contacto@harmoniederm.com"
                className="transition-colors hover:text-background"
              >
                contacto@harmoniederm.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} HarmonieDerm. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-background/40 transition-colors hover:text-background/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
