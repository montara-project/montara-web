import { CtaSection } from '@/components/block/home/cta-section'
import { FeaturesSection } from '@/components/block/home/features-section'
import { HeroSection } from '@/components/block/home/hero-section'
import { IntegrationsSection } from '@/components/block/home/integration-section'
import { LogoMarquee } from '@/components/block/home/logo-marquee'
import { PerksSection } from '@/components/block/home/perk-section'
import { PricingSection } from '@/components/block/home/pricing-section'
import { SiteFooter } from '@/components/block/home/site-footer'
import { SiteHeader } from '@/components/block/home/site-header'
import { TestimonialsSection } from '@/components/block/home/testimonial-section'

export default function HomePage() {
  return (
    <>
      <div
        id="home"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px]"
      />
      <div className="relative w-full h-full">
        <SiteHeader />
        <main className="mx-auto w-full z-40 relative max-w-7xl">
          <HeroSection />
          <LogoMarquee />
          <IntegrationsSection />
          <FeaturesSection />
          <PerksSection />
          <PricingSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
