import { Brain, RefreshCw, Shield, Vote, BarChart3, Layers } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Strategy Prediction",
      description: "Machine learning models analyze historical data, market trends, and protocol performance to predict optimal yield strategies.",
      gradient: "from-accent to-blue-400"
    },
    {
      icon: RefreshCw,
      title: "Automated Vault Rebalancing",
      description: "Smart contracts automatically rebalance your portfolio across Aave, QuickSwap, and Balancer based on real-time conditions.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Vote,
      title: "On-chain Governance",
      description: "Community-driven decision making ensures transparency and alignment with user interests through decentralized governance.",
      gradient: "from-success to-green-400"
    },
    {
      icon: Shield,
      title: "Secure Execution & Risk Management",
      description: "Multi-layered security protocols and risk assessment algorithms protect your funds while maximizing returns.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard showing performance metrics, APY tracking, and detailed portfolio insights.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Layers,
      title: "Multi-Protocol Integration",
      description: "Seamlessly interact with multiple DeFi protocols through a single interface, reducing complexity and gas costs.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-slide-in-left">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-in-left animation-delay-200">
            Advanced AI technology meets battle-tested DeFi protocols for unparalleled yield optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-feature animate-scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Feature Title */}
              <h3 className="text-feature-title mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
        
        {/* Technical Specs */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-glow text-center animate-float-up animation-delay-1000">
            <h3 className="text-feature-title mb-6">Built for Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Transaction Speed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient-accent mb-2">$0.01</div>
                <div className="text-sm text-muted-foreground">Avg Gas Cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;