import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog | HarmonieDerm — Consejos de Dermatología y Estética",
  description:
    "Artículos sobre cuidado de la piel, tratamientos estéticos, dermatología y consejos de belleza por los especialistas de HarmonieDerm en Trujillo.",
};

const posts = [
  {
    title: "¿Qué es la Armonización Facial y cuáles son sus beneficios?",
    excerpt:
      "Descubre en qué consiste este tratamiento no quirúrgico que equilibra y realza los rasgos faciales de manera natural.",
    category: "Tratamientos",
    date: "15 Mar 2026",
    readTime: "5 min",
    slug: "que-es-armonizacion-facial",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Rinomodelación sin cirugía: todo lo que debes saber",
    excerpt:
      "La rinomodelación con ácido hialurónico es una alternativa segura y efectiva a la rinoplastia. Te contamos los detalles.",
    category: "Tratamientos",
    date: "10 Mar 2026",
    readTime: "4 min",
    slug: "rinomodelacion-sin-cirugia",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Dermapen: regenera tu piel de forma natural",
    excerpt:
      "El microneedling con Dermapen estimula la producción de colágeno para una piel más firme, luminosa y juvenil.",
    category: "Cuidado de Piel",
    date: "5 Mar 2026",
    readTime: "6 min",
    slug: "dermapen-regeneracion-piel",
    image: "/images/doctor-hero.png",
  },
  {
    title: "5 hábitos diarios para una piel radiante",
    excerpt:
      "Pequeños cambios en tu rutina diaria pueden transformar la salud y apariencia de tu piel. Te compartimos los más importantes.",
    category: "Consejos",
    date: "28 Feb 2026",
    readTime: "3 min",
    slug: "habitos-piel-radiante",
    image: "/images/doctor-hero.png",
  },
  {
    title: "Ácido hialurónico: usos y beneficios en estética",
    excerpt:
      "El ácido hialurónico es uno de los activos más versátiles en medicina estética. Conoce sus aplicaciones y cómo funciona.",
    category: "Tratamientos",
    date: "20 Feb 2026",
    readTime: "5 min",
    slug: "acido-hialuronico-usos-beneficios",
    image: "/images/doctor-hero.png",
  },
  {
    title: "¿Cómo elegir el mejor tratamiento estético para ti?",
    excerpt:
      "Cada persona es única. Te guiamos para entender qué tratamiento se adapta mejor a tus necesidades y expectativas.",
    category: "Guías",
    date: "15 Feb 2026",
    readTime: "4 min",
    slug: "elegir-mejor-tratamiento-estetico",
    image: "/images/doctor-hero.png",
  },
];

export default function BlogPage() {
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
              Blog
            </span>
            <h1 className="mt-2 font-heading text-4xl leading-[1.08] font-light text-foreground sm:text-5xl lg:text-6xl">
              Consejos y{" "}
              <span className="font-semibold italic">Novedades</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Artículos sobre dermatología, medicina estética y cuidado de la
              piel por nuestros especialistas.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section
          className="pb-12"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border/40 bg-background transition-shadow hover:shadow-xl lg:grid-cols-2"
            >
              <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {posts[0].date} · {posts[0].readTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-medium text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {posts[0].title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {posts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  Leer Artículo
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Posts grid */}
        <section
          className="pb-16 sm:pb-20 lg:pb-28"
          style={{ paddingInline: "var(--container-padding)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      Leer Más
                      <ArrowRight className="h-3 w-3" />
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
