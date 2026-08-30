export const asset = (path: string) => `/assets/${path}`

export interface Testimonial {
  name: string
  handle: string
  avatar: string
  quote: string
}

export const testimonialsRow1: Testimonial[] = [
  {
    name: 'Arjun Singh',
    handle: '@arjunsingh',
    avatar: asset('/images/avatars/men-1.jpg'),
    quote:
      'This platform has revolutionized the way I manage my projects. The AI tools are a game-changer!',
  },
  {
    name: 'Priya Nair',
    handle: '@priyanair',
    avatar: asset('/images/avatars/women-2.jpg'),
    quote:
      "Absolutely love the seamless integration with social media. It's made my content creation process so much easier.",
  },
  {
    name: 'Rohan Mehta',
    handle: '@rohanmehta',
    avatar: asset('/images/avatars/men-3.jpg'),
    quote:
      'The features offered here are unmatched. My productivity has soared since I started using this service.',
  },
  {
    name: 'Sneha Patel',
    handle: '@snehapatel',
    avatar: asset('/images/avatars/women-4.jpg'),
    quote: "Customer support is top-notch. They're always ready to assist with any queries I have.",
  },
  {
    name: 'Ankit Sharma',
    handle: '@ankitsharma',
    avatar: asset('/images/avatars/men-5.jpg'),
    quote:
      'The customization options available are perfect for my business needs. Highly recommended!',
  },
  {
    name: 'Meera Kapoor',
    handle: '@meerakapoor',
    avatar: asset('/images/avatars/women-6.jpg'),
    quote:
      "The intuitive design and ease of use make this platform stand out. It's a must-have for any business.",
  },
]

export const testimonialsRow2: Testimonial[] = [
  {
    name: 'Vikram Desai',
    handle: '@vikramdesai',
    avatar: asset('/images/avatars/men-7.jpg'),
    quote:
      'From analytics to AI-powered tools, this service covers everything I need to grow my business.',
  },
  {
    name: 'Anjali Menon',
    handle: '@anjalimenon',
    avatar: asset('/images/avatars/women-8.jpg'),
    quote:
      "I'm impressed with how much value I'm getting at this price point. It's worth every penny!",
  },
  {
    name: 'Karan Gupta',
    handle: '@karangupta',
    avatar: asset('/images/avatars/men-9.jpg'),
    quote: 'The AI content generation is phenomenal. It saves me hours of work every week.',
  },
  {
    name: 'Neha Verma',
    handle: '@nehaverma',
    avatar: asset('/images/avatars/women-10.jpg'),
    quote:
      'I love how everything is organized in one place. It makes managing my tasks so much easier.',
  },
  {
    name: 'Siddharth Jain',
    handle: '@siddharthjain',
    avatar: asset('/images/avatars/men-11.jpg'),
    quote:
      'Their platform is robust, and I have seen a significant improvement in my workflow since I started using it.',
  },
  {
    name: 'Divya Iyer',
    handle: '@divyaiyer',
    avatar: asset('/images/avatars/women-12.jpg'),
    quote: 'Fantastic service! The updates and new features keep getting better and better.',
  },
]

export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  cta: string
  popular?: boolean
  features: string[]
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    description: 'Get started with essential tools for social media content creation',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Get Started',
    features: [
      'Basic AI content generation',
      '4 social media integrations',
      'Community support',
      '1 project limit',
      'Standard analytics',
      'Basic image generation',
    ],
  },
  {
    name: 'Pro',
    description: 'Unlock advance features for enhanced content and strategy',
    monthlyPrice: 19,
    yearlyPrice: 15,
    cta: 'Upgrade to Pro',
    popular: true,
    features: [
      'Advanced AI content generation',
      '10 social media integrations',
      'Priority email support',
      '10 project limit',
      'Enhanced analytics & insights',
      'Pro model image generation',
      'Team collaboration tools',
      'Custom branding options',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large organizations and agencies',
    monthlyPrice: 99,
    yearlyPrice: 79,
    cta: 'Upgrade to Enterprise',
    features: [
      'Unlimited AI content generation',
      'All social media integrations',
      'Dedicated account manager',
      'Unlimited projects',
      'Custom analytics & reporting',
      'Enterprise-grade security',
      'Free updates',
    ],
  },
]

export interface Perk {
  icon: string
  title: string
  description: string
}

export const perks: Perk[] = [
  {
    icon: 'zap',
    title: 'Fast and Efficient',
    description: 'Experience quick and seamless content creation with our optimized AI tools.',
  },
  {
    icon: 'chart-spline',
    title: 'Insightful Analytics',
    description: 'Gain valuable insights and analytics to enhance your social media strategy.',
  },
  {
    icon: 'life-buoy',
    title: '24/7 Support',
    description: 'Our team is available around the clock to assist with any issues or questions.',
  },
  {
    icon: 'palette',
    title: 'Customizable Solutions',
    description: 'Tailor the tools and features to fit your unique social media needs.',
  },
  {
    icon: 'shield-check',
    title: 'Secure and Reliable',
    description: 'Trust our platform to keep your data safe and ensure consistent performance.',
  },
  {
    icon: 'waypoints',
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing social media platforms and tools.',
  },
]

export const footerColumns = [
  {
    title: 'Product',
    links: ['Home', 'Features', 'Pricing', 'Contact', 'Download'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help Center', 'Community', 'Guides'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies'],
  },
  {
    title: 'Developers',
    links: ['API Docs', 'SDKs', 'Tools', 'Open Source', 'Changelog'],
  },
]
