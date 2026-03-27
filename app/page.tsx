import { HeroSection } from "@/components/hero-section";
import { IntegrationShowcase } from "@/components/integration-showcase";
import { PainPointSection } from "@/components/pain-point-section";
import { ValueProposition } from "@/components/value-proposition";
import { FeatureFocus } from "@/components/feature-focus";
import { InterfaceShowcase } from "@/components/interface-showcase";
import { TestimonialSection } from "@/components/testimonial-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <IntegrationShowcase />
      <PainPointSection />
      <ValueProposition />
      <FeatureFocus />
      <InterfaceShowcase />
      <TestimonialSection />
      <UseCasesSection />
      <FinalCta />
    </div>
  );
}