import { ArrowRight, Zap, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      number: "01",
      title: "Deposit Funds",
      description: "Connect your wallet and deposit into Neura's smart vaults with a single transaction.",
      icon: "💳"
    },
    {
      number: "02", 
      title: "Neura's AI Optimizes",
      description: "Our AI analyzes market conditions, yield opportunities, and risk factors to optimize your strategy.",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Earn Passive Returns",
      description: "Sit back while Neura automatically rebalances your portfolio for maximum sustainable yields.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-slide-in-left">
            The Neura Solution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-in-left animation-delay-200">
            <span className="text-gradient-accent font-semibold">AI-driven strategy</span>{" "}
            + <span className="text-gradient-primary font-semibold">on-chain transparency</span>{" "}
            = effortless DeFi growth.
          </p>
        </div>
        
        {/* Three Step Process */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="timeline-step animate-scale-in" style={{ animationDelay: `${index * 300}ms` }}>
                  <div className="text-center">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-4 mx-auto">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4">{step.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-feature-title mb-4">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Arrow between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-glow animate-slide-in-left animation-delay-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-feature-title">Automated Optimization</h3>
              </div>
              <p className="text-muted-foreground">
                Never manually rebalance again. Neura's AI continuously monitors and adjusts your portfolio.
              </p>
            </div>
            
            <div className="card-glow animate-slide-in-left animation-delay-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-feature-title">Maximum Returns</h3>
              </div>
              <p className="text-muted-foreground">
                Capture yield opportunities across multiple protocols while minimizing risks and gas costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;