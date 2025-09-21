import { Github, Twitter, MessageCircle, FileText, Users, Shield } from "lucide-react";
import { useState } from "react";
import DocumentationModal from "@/components/DocumentationModal";

const Footer = () => {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  const footerLinks = {
    product: [
      { name: "About", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Features", href: "#" },
      { name: "Roadmap", href: "#" }
    ],
    developers: [
      { name: "Documentation", href: "#", icon: FileText, onClick: () => setIsDocsModalOpen(true) },
      { name: "API Reference", href: "#", onClick: () => setIsDocsModalOpen(true) },
      { name: "Smart Contracts", href: "#" },
      { name: "GitHub", href: "#", icon: Github }
    ],
    community: [
      { name: "Discord", href: "https://discord.gg/q2297BsW", icon: MessageCircle },
      { name: "Twitter", href: "https://x.com/0xPolygon", icon: Twitter },
      { name: "Governance", href: "https://governance.polygon.technology/", icon: Users },
      { name: "Blog", href: "https://polygon.technology/blog" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#", icon: Shield },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
      { name: "Audits", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "https://x.com/0xPolygon", icon: Twitter },
    { name: "Discord", href: "https://discord.gg/q2297BsW", icon: MessageCircle }
  ];

  return (
    <>
      <DocumentationModal 
        isOpen={isDocsModalOpen} 
        onClose={() => setIsDocsModalOpen(false)} 
      />
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-gradient-primary">Neura</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                AI-enhanced DeFi aggregator built on Polygon. Automate your yield farming 
                strategy with advanced machine learning and transparent on-chain execution.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Developers</h3>
              <ul className="space-y-3">
                {footerLinks.developers.map((link) => (
                  <li key={link.name}>
                    {link.onClick ? (
                      <button 
                        onClick={link.onClick}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 text-left"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 Neura. All rights reserved.</span>
              <div className="flex items-center gap-4">
                {footerLinks.legal.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Built on Polygon badge */}
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-sm" />
              </div>
              <span className="text-sm font-medium text-primary">Built on Polygon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;