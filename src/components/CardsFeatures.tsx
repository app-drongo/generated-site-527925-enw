// Enhanced by AI on 2025-08-12T11:51:29.350Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Efficient Processes",
      description: "Our streamlined workflows and automation ensure maximum productivity.",
      badge: "Efficiency"
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Robust security measures protect your data and ensure compliance.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Our website and applications adapt seamlessly to all devices.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our international network and cloud infrastructure enable worldwide access.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description: "Advanced data analytics provide valuable business intelligence.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Branded Solutions",
      description: "Customized branding to align with your company's identity.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer-Friendly",
      description: "Intuitive APIs, documentation, and tools for seamless integration.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our experts are available 24/7 to assist you whenever needed.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy-Focused",
      description: "Your data is secure and never shared or sold.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Your Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with Innovative Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how our comprehensive suite of services can transform your business
            and drive sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </Link>
            <Link href="/services" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}