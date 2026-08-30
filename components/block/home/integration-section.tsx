import { IntegrationsSvg } from '@/components/common/svg'

export function IntegrationsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
      <div className="w-full h-full">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
            <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
              Connect Tools
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Seamless Integration with your favorite tools
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            We support a wide range of integrations to help you connect your favorite tools with our
            platform
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full relative mt-12">
          <IntegrationsSvg />
        </div>
      </div>
    </div>
  )
}
