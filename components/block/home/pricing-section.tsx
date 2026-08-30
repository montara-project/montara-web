'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

import { pricingPlans } from '@/data/mock'

export function PricingSection() {
  const [yearly, setYearly] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Choose your plan
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Simple and transparent pricing
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          Choose the plan that suits your needs. No hidden fees, no surprises.
        </p>
      </div>
      <div className="mt-8 w-full relative flex flex-col items-center justify-center">
        <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10" />
        <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10" />
        <div className="w-full flex flex-col items-center justify-center">
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="inline-flex h-10 items-center justify-center rounded-md bg-muted/60 p-1 text-muted-foreground"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!yearly}
              data-state={yearly ? 'inactive' : 'active'}
              onClick={() => setYearly(false)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={yearly}
              data-state={yearly ? 'active' : 'inactive'}
              onClick={() => setYearly(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
            >
              Yearly
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
            {pricingPlans.map((plan) => {
              const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
              return (
                <div
                  key={plan.name}
                  className="w-full relative flex flex-col saturate-150 rounded-2xl"
                >
                  <div
                    className={`flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)] ${
                      plan.popular ? 'border-primary/80' : 'border-border/60'
                    }`}
                  >
                    {plan.popular && (
                      <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                        <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col p-3 w-full">
                      <h2 className="text-xl font-medium">{plan.name}</h2>
                      <p className="text-sm mt-2 text-muted-foreground break-words">
                        {plan.description}
                      </p>
                    </div>
                    <hr className="shrink-0 border-none w-full h-px bg-border" />
                    <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
                      <div className="flex items-end gap-2">
                        <div className="flex items-end gap-1 w-40">
                          <span className="text-3xl md:text-4xl font-bold">${price}</span>
                          <span className="text-lg text-muted-foreground font-medium font-headin">
                            per month
                          </span>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <p className="text-sm md:text-base text-muted-foreground">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 mt- h-auto flex w-full items-center">
                      <a
                        href=""
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition transform-gpu ease-in-out duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 group select-none h-9 px-4 py-2 w-full hover:scale-100 hover:translate-y-0 shadow-none ${
                          plan.popular
                            ? 'bg-primary text-primary-foreground hover:opacity-70 bt-primary'
                            : 'text-foreground bg-[#232323] hover:brightness-125'
                        }`}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
