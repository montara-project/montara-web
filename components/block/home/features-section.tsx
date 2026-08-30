import { FeatureIllustrations } from '@/components/common/svg'

const ripples = [
  { size: 210, opacity: 0.24, delay: 0, dashed: false },
  { size: 280, opacity: 0.21, delay: 0.06, dashed: false },
  { size: 350, opacity: 0.18, delay: 0.12, dashed: false },
  { size: 420, opacity: 0.15, delay: 0.18, dashed: false },
  { size: 490, opacity: 0.12, delay: 0.24, dashed: false },
  { size: 560, opacity: 0.09, delay: 0.3, dashed: false },
  { size: 630, opacity: 0.06, delay: 0.36, dashed: false },
  { size: 700, opacity: 0.03, delay: 0.42, dashed: true },
]

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card rounded-xl lg:rounded-2xl overflow-hidden">
      <div className="content">
        <div className="absolute inset-0 w-full h-full z-10" aria-hidden="true">
          <canvas className="size-full" />
        </div>
        {children}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
          <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
            Features
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Create content faster <br /> and smarter
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          Transform your social media strategy with Luro AI&apos;s cutting-edge features, designed
          to optimize your content creation and engagement like never before.
        </p>
      </div>
      <div className="mt-16 w-full">
        <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
          {/* Row 1 */}
          <div className="w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
              <Card>
                <div className="bento-card flex items-center justify-center min-h-72">
                  <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                    {FeatureIllustrations[0]}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,foreground,transparent)]">
                    {ripples.map((r, i) => (
                      <div
                        key={i}
                        className="absolute animate-ripple rounded-full bg-foreground/15 shadow-xl border [--i:0]"
                        style={{
                          width: r.size,
                          height: r.size,
                          opacity: r.opacity,
                          animationDelay: `${r.delay}s`,
                          borderStyle: r.dashed ? 'dashed' : 'solid',
                          borderWidth: 1,
                          borderColor: '#e4e4e7',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%) scale(1)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Card>
              <Card>
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-40">{FeatureIllustrations[1]}</div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-heading font-medium heading ">
                      Get advanced analytics
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Track your performance with detailed analytics and optimize to get better
                      results.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
              <Card>
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full h-52 relative">
                    {FeatureIllustrations[2]}
                    <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading">Content ideation</h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Generate ideas for your content with our AI-powered tools to create engaging
                      posts in seconds.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid grid-rows gap-5 lg:gap-5">
                <Card>
                  <div className="bento-card w-full relative items-center justify-center">
                    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <p className="text-base text-muted-foreground text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#BAB3FF_0%,rgba(186,179,255,0)_90.69%)]">
                        We use AI to help you create content that resonates with your audience. Our
                        tools are designed to optimize your content creation and engagement like
                        never before. Transform your social media strategy with Luro AI&apos;s
                        cutting-edge features. Reach your audience with the right message at the
                        right time. Create content faster and smarter with Luro AI. Transform your
                        social media strategy with Luro AI&apos;s cutting-edge features. Create
                        content faster and smarter with Luro AI. Transform your social media
                        strategy with Luro AI&apos;s cutting-edge features. Create content faster
                        and smarter with Luro AI.
                      </p>
                    </div>
                    <div className="w-full h-16 relative">
                      {FeatureIllustrations[3]}
                      <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="bento-card w-full gap-6 relative">
                    <div className="w-full h-48 relative">
                      {FeatureIllustrations[4]}
                      {FeatureIllustrations[5]}
                      {FeatureIllustrations[6]}
                      {FeatureIllustrations[7]}
                    </div>
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </Card>
              </div>

              <Card>
                <div className="bento-card w-full flex-row gap-6">
                  <div className="flex flex-col mb-auto">
                    <h4 className="text-xl font-heading font-medium heading ">
                      Seamless integrations
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Connect your favorite tools and platforms to streamline your workflow and save
                      time.
                    </p>
                  </div>
                  <div className="w-full h-28 relative">
                    {FeatureIllustrations[8]}
                    <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full" />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 3 */}
          <div className="w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
              <Card>
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">{FeatureIllustrations[9]}</div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading ">
                      Image generation with AI
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Create stunning images with AI-powered tools in seconds.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="bento-card w-full flex-row gap-6">
                  <div className="w-full">{FeatureIllustrations[10]}</div>
                  <div className="flex flex-col mt-auto">
                    <h4 className="text-xl font-heading font-medium heading ">
                      Hashtags suggestions
                    </h4>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                      Get hashtag suggestions based on your content and audience to increase your
                      reach and engagement.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
