import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutPreviewSection } from "@/components/sections/about-preview";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { FeaturedTreatmentSection } from "@/components/sections/featured-treatment";
import { TransformationSection } from "@/components/sections/transformation";
import { TreatmentsCatalogueSection } from "@/components/sections/treatments-catalogue";
import { ReviewsSection } from "@/components/sections/reviews";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutPreviewSection />
        <ServicesPreviewSection />
        <FeaturedTreatmentSection />
        <TransformationSection />
        <TreatmentsCatalogueSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
