import {
  Link,
  Meta,
  OpenGraph,
  Robots,
  Schema,
  Title,
  TwitterCard,
} from "react-meta-seo";
import type { MedicalBusiness } from "schema-dts";
import { getAbsoluteUrl, getOgImageUrl, siteConfig } from "./config";
import { clinicJsonLd } from "./json-ld";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  index?: boolean;
  follow?: boolean;
}

export function SeoHead({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  keywords = siteConfig.defaultKeywords,
  canonical = getAbsoluteUrl(),
  ogImage = getOgImageUrl(),
  ogType = "website",
  index = true,
  follow = true,
}: SeoHeadProps = {}) {
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
      <Meta name="author" content={siteConfig.author} />
      <Link rel="canonical" href={canonical} />

      <OpenGraph
        title={title}
        type={ogType}
        url={canonical}
        image={ogImage}
        description={description}
        siteName={siteConfig.name}
        locale={siteConfig.locale}
      />

      <TwitterCard
        card="summary_large_image"
        title={title}
        description={description}
        image={ogImage}
      />

      <Robots index={index} follow={follow} />

      <Schema<MedicalBusiness> data={clinicJsonLd} />
    </>
  );
}
