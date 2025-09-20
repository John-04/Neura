import { ChevronRight, Wallet, Settings, TrendingUp, LogOut } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Deposit",
      description: "Connect your wallet and deposit MATIC, USDC, or ETH into Neura's smart vaults.",
      details: "One-click deposits with automatic slippage protection"
    },
    {
      icon: Settings,
      title: "AI Analysis", 
      description: "Our AI analyzes market conditions and identifies optimal yield opportunities.",
      details: "Real-time assessment of 12+ DeFi protocols"
    },
    {
      icon: TrendingUp,
      title: "Auto-Rebalance",
      description: "Smart contracts automatically rebalance your portfolio for maximum returns.",
      details: "Continuous optimization without manual intervention"
    },
    {
      icon: LogOut,
      title: "Withdraw Anytime",
      description: "Access your funds plus earned yields whenever you need them.",
      details: "No lock-up periods or withdrawal penalties"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-slide-in-left">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-left animation-delay-200">
            From deposit to yield optimization, Neura handles everything automatically.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className="relative animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className="card-glow text-center group hover:border-primary/50 transition-all duration-500">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-feature-title mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="text-xs text-muted-foreground/80 bg-muted/20 rounded-lg p-3 border border-border/50">
                      {step.details}
                    </div>
                  </div>
                  
                  {/* Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-16 -right-4 w-8 h-8 items-center justify-center bg-background rounded-full border-2 border-primary z-10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="card-glow animate-float-up animation-delay-800">
            <h3 className="text-feature-title mb-4">Why Choose Neura?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-primary mb-1">Lightning Fast</div>
                <div className="text-muted-foreground">Sub-second execution on Polygon</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-semibold text-primary mb-1">Battle Tested</div>
                <div className="text-muted-foreground">Audited smart contracts</div>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <div className="font-semibold text-primary mb-1">Low Fees</div>
                <div className="text-muted-foreground">0.5% management fee only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;