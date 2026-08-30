import {
  ChartSpline,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Waypoints,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import { perks } from '@/data/mock'

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  'chart-spline': ChartSpline,
  'life-buoy': LifeBuoy,
  palette: Palette,
  'shield-check': ShieldCheck,
  waypoints: Waypoints,
}

const borderClasses = [
  'lg:border-r lg:border-l lg:border-b',
  'lg:border-r lg:border-b',
  'lg:border-r lg:border-b',
  'lg:border-r lg:border-l',
  'lg:border-r',
  'lg:border-r',
]

export function PerksSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Perks
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Discover the benefits
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          Explore the powerful features and advantages that Luro offer to help you grow your social
          media presence
        </p>
      </div>
      <div className="mt-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
          {perks.map((perk, i) => {
            const Icon = iconMap[perk.icon]
            const gradient =
              i < 3
                ? 'bg-gradient-to-t from-violet-950/25 to-transparent'
                : 'bg-gradient-to-b from-violet-950/25 to-transparent'
            return (
              <div
                key={perk.title}
                className={`flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800 ${borderClasses[i]}`}
              >
                <div
                  className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full ${gradient} pointer-events-none`}
                />
                <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
                  <div className="mb-4 relative z-10 px-10">
                    <Icon
                      className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground"
                      strokeWidth={1.3}
                    />
                  </div>
                  <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
                    <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center" />
                    <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
                      {perk.title}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
                    {perk.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
