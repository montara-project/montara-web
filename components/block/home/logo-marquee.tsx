import { CompanyLogos } from '@/components/common/svg'

export function LogoMarquee() {
  return (
    <div className="w-full h-full py-8 lg:py-20">
      <div className="flex w-full py-20">
        <div className="flex flex-col items-center justify-center text-center w-full py-2">
          <h2 className="text-xl heading">Companies that trust us</h2>
          <div className="mt-16 w-full relative overflow-hidden">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <div className="flex gap-8 md:gap-12">{CompanyLogos}</div>
              </div>
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                <div className="flex gap-8 md:gap-12">{CompanyLogos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
