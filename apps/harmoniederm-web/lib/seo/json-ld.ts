import type { MedicalBusiness, WithContext } from "schema-dts";
import { getAbsoluteUrl, getOgImageUrl, siteConfig } from "./config";

export const clinicJsonLd: WithContext<MedicalBusiness> = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.defaultDescription,
  url: getAbsoluteUrl(),
  image: getOgImageUrl(),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Trujillo",
    addressRegion: "La Libertad",
    addressCountry: "PE",
  },
};
