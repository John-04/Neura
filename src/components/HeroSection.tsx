import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroNetworkBg from "@/assets/hero-network-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center network-bg relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroNetworkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-80 animation-delay-1000" />
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-success rounded-full animate-pulse opacity-70 animation-delay-2000" />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Polygon Logo Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8 animate-float-up">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Built on Polygon</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-hero mb-6 animate-float-up animation-delay-200">
            Automate Your{" "}
            <span className="text-gradient-primary">DeFi Strategy</span>{" "}
            with AI.
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-float-up animation-delay-400">
            Neura pools your funds into smart vaults on Polygon and rebalances across{" "}
            <span className="text-primary font-semibold">Aave</span>,{" "}
            <span className="text-primary font-semibold">QuickSwap</span>, and{" "}
            <span className="text-primary font-semibold">Balancer</span>{" "}
            to maximize sustainable returns—without the complexity.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-up animation-delay-600">
            <Button className="btn-hero group">
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-hero-secondary group">
              <Play className="mr-2 h-5 w-5" />
              View the Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-float-up animation-delay-800">
            <div className="text-center">
              <div className="stat-counter">12+</div>
              <div className="text-muted-foreground text-sm">Protocols Integrated</div>
            </div>
            <div className="text-center">
              <div className="stat-counter">5</div>
              <div className="text-muted-foreground text-sm">Active Vaults</div>
            </div>
            <div className="text-center">
              <div className="stat-counter">~18%</div>
              <div className="text-muted-foreground text-sm">Estimated APY</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;