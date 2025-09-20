import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented Farms",
      description: "DeFi yields are scattered across dozens of protocols, making it impossible to track optimal opportunities."
    },
    {
      icon: Clock,
      title: "Manual Rebalancing",
      description: "Constantly monitoring and switching between pools wastes time and often results in suboptimal timing."
    },
    {
      icon: TrendingDown,
      title: "Missed Yields",
      description: "By the time you discover high-yield opportunities, market conditions have already shifted."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-slide-in-left">
            The DeFi Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left animation-delay-200">
            Traditional DeFi farming is broken. Users face complexity, inefficiency, and missed opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="card-feature animate-scale-in text-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-feature-title mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Visual separator */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;