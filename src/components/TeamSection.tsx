import { Linkedin, Github, Twitter } from "lucide-react";
import stephanieImage from "@/assets/stephanie-nwankwo.jpg";
import johnImage from "@/assets/john-fashola.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Stephanie Nwankwo",
      role: "Co-Founder",
      bio: "Blockchain developer and tech innovator with expertise in decentralized systems and smart contract development.",
      image: stephanieImage,
      social: {
        linkedin: "https://www.linkedin.com/in/nwankwo-stephanie/",
        twitter: "https://x.com/iamtechhunter",
        github: "https://github.com/GoSTEAN"
      }
    },
    {
      name: "John Fashola",
      role: "Co-Founder", 
      bio: "Data analyst and blockchain strategist focused on DeFi protocols and yield optimization strategies.",
      image: johnImage,
      social: {
        linkedin: "https://www.linkedin.com/in/john-fashola-67a149228/",
        twitter: "https://x.com/John_TheAnalyst",
        github: "https://github.com/John-04"
      }
    }
  ];

  const backers = [
    { name: "Polygon Ventures", logo: "🔷" },
    { name: "Framework Ventures", logo: "🟪" },
    { name: "Coinbase Ventures", logo: "🔵" },
    { name: "Binance Labs", logo: "🟡" }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-6 animate-slide-in-left">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-in-left animation-delay-200">
              Experienced professionals from leading tech and finance companies.
            </p>
          </div>

          {/* Core Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="card-feature animate-scale-in group text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-feature-title mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-primary font-semibold mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    >
                      <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Backing & Grants */}
          <div className="text-center">
            <h3 className="text-responsive-lg mb-8 animate-slide-in-left animation-delay-800">
              Backed By
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {backers.map((backer, index) => (
                <div 
                  key={backer.name}
                  className="card-glow animate-scale-in flex flex-col items-center gap-3"
                  style={{ animationDelay: `${(index + 5) * 150}ms` }}
                >
                  <div className="text-3xl">{backer.logo}</div>
                  <div className="font-semibold text-sm text-center">{backer.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Grant Milestone Info */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="card-glow text-center animate-float-up animation-delay-1200">
              <h3 className="text-feature-title mb-4">Development Timeline</h3>
              <p className="text-muted-foreground mb-6">
                Neura is currently in development with funding from Polygon's ecosystem grants program.
                Our 6-week roadmap includes protocol integrations, AI model training, and security audits.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary mb-1">Weeks 1-2</div>
                  <div className="text-muted-foreground">Smart contract development</div>
                </div>
                <div>
                  <div className="font-semibold text-accent mb-1">Weeks 3-4</div>
                  <div className="text-muted-foreground">AI model integration</div>
                </div>
                <div>
                  <div className="font-semibold text-success mb-1">Weeks 5-6</div>
                  <div className="text-muted-foreground">Security audits & launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;