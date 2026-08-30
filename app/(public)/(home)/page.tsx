import { CtaSection } from '@/components/block/home/cta-section'
import { HeroSection } from '@/components/block/home/hero-section'
import { ProcessSection } from '@/components/block/home/process-section'
import { ProjectsSection } from '@/components/block/home/projects-section'
import { ServicesSection } from '@/components/block/home/services-section'
import { TechStackSection } from '@/components/block/home/tech-stack-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <ProcessSection />
      <CtaSection />
    </>
  )
}
