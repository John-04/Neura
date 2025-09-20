import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 network-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-8 animate-glow-pulse">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
          
          {/* Main CTA Headline */}
          <h2 className="text-responsive-xl mb-6 animate-scale-in">
            Be the First to Experience{" "}
            <span className="text-gradient-primary">AI-Powered DeFi</span>{" "}
            on Polygon
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-scale-in animation-delay-200">
            Join our exclusive waitlist and get early access to the future of decentralized finance.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="card-glow animate-float-up animation-delay-400">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-primary mb-1">Early Access</div>
              <div className="text-sm text-muted-foreground">Be among the first 100 users</div>
            </div>
            <div className="card-glow animate-float-up animation-delay-600">
              <div className="text-2xl mb-2">💎</div>
              <div className="font-semibold text-primary mb-1">Exclusive Rewards</div>
              <div className="text-sm text-muted-foreground">Bonus APY for early adopters</div>
            </div>
            <div className="card-glow animate-float-up animation-delay-800">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-primary mb-1">Priority Support</div>
              <div className="text-sm text-muted-foreground">Direct line to our team</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="animate-scale-in animation-delay-1000">
            <Button className="btn-hero text-xl px-12 py-6 group">
              Sign Up for Early Access
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground animate-float-up animation-delay-1200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No Lock-up Periods</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Community Governed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;