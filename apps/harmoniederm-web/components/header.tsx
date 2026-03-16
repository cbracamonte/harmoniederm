"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Resultados", href: "/results" },
  { label: "Testimonios", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30"
      style={{
        paddingInline: "var(--header-px)",
      }}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ height: "var(--header-height)" }}
      >
        {/* ── Nav pills — left (desktop) ── */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/60 transition-all hover:bg-accent/50 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Logo — center ── */}
        <Link href="/" className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Image
            src="/icons/logo.svg"
            alt="HarmonieDerm"
            width={52}
            height={52}
            className="h-8 w-8 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            priority
          />
          <span className="font-heading text-lg font-semibold tracking-wide text-primary sm:text-xl lg:text-2xl">
            HarmonieDerm
          </span>
        </Link>

        {/* ── Right side — desktop ── */}
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.slice(4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/60 transition-all hover:bg-accent/50 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="tel:+51999999999"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            aria-label="Llamar"
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Agendar Cita
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-foreground transition-colors hover:bg-primary/20 lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-l-border/30">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/icons/logo.svg"
                  alt="HarmonieDerm"
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />
                <span className="font-heading text-xl font-semibold text-primary">
                  HarmonieDerm
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1 px-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent/40 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3 px-4">
                <Link
                  href="tel:+51999999999"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +51 999 999 999
                </Link>
                <Button
                  size="sm"
                  className="w-full rounded-full"
                  onClick={() => setOpen(false)}
                >
                  Agendar Cita
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
