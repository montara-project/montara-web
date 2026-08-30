import { CtaSection } from '@/components/block/home/cta-section'
import { FeaturesSection } from '@/components/block/home/features-section'
import { HeroSection } from '@/components/block/home/hero-section'
import { IntegrationsSection } from '@/components/block/home/integration-section'
import { LogoMarquee } from '@/components/block/home/logo-marquee'
import { PerksSection } from '@/components/block/home/perk-section'
import { PricingSection } from '@/components/block/home/pricing-section'
import { TestimonialsSection } from '@/components/block/home/testimonial-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <IntegrationsSection />
      <FeaturesSection />
      <PerksSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
