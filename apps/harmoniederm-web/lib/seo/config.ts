export const siteConfig = {
  name: "HarmonieDerm",
  url: "https://harmoniederm.com",
  locale: "es_PE",
  author: "HarmonieDerm",
  defaultTitle:
    "HarmonieDerm | Dermatología y Medicina Estética en Trujillo",
  defaultDescription:
    "Clínica especializada en armonización facial, rinomodelación y tratamientos estéticos no quirúrgicos en Trujillo, Perú. Resultados naturales con tecnología avanzada.",
  defaultKeywords:
    "dermatología Trujillo, medicina estética Trujillo, armonización facial Trujillo, rinomodelación Trujillo, ácido hialurónico Trujillo, dermapen Trujillo, rejuvenecimiento facial, tratamientos estéticos no quirúrgicos",
  ogImage: "/og-image.png",
} as const;

export function getAbsoluteUrl(path: string = "/"): string {
  return `${siteConfig.url}${path}`;
}

export function getOgImageUrl(path: string = siteConfig.ogImage): string {
  return getAbsoluteUrl(path);
}
