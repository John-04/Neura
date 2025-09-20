import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink } from "lucide-react";

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Neura Developer Documentation</DialogTitle>
              <p className="text-sm text-muted-foreground">
                AI-powered DeFi aggregator for Polygon — developer docs, API references, smart contracts
              </p>
            </div>
          </div>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Header */}
            <div className="pb-4 border-b border-border">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-primary">
                  Version 1.0
                </Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {[
                  "1. Overview",
                  "2. Architecture", 
                  "3. Smart Contracts",
                  "4. On-Chain Workflows",
                  "5. Off-Chain Systems",
                  "6. API Reference",
                  "7. SDKs & Client Libraries",
                  "8. Integration Guides",
                  "9. Security & Audits",
                  "10. Testing & CI/CD",
                  "11. Deployment & Upgrades",
                  "12. Governance & DAO Integration",
                  "13. Metrics & Observability",
                  "14. Glossary"
                ].map((item) => (
                  <div key={item} className="text-muted-foreground hover:text-primary cursor-pointer py-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Overview</h3>
              <p className="text-muted-foreground mb-4">
                Neura is an AI-enhanced aggregator on Polygon that pools user funds into smart vaults and 
                automatically rebalances them across protocols (Aave, QuickSwap, Balancer, etc.) to optimize 
                sustainable returns while maintaining transparent on-chain governance.
              </p>
              <p className="text-muted-foreground">
                This document is intended for developers, integrators, auditors, and partners. It contains 
                architecture diagrams, smart contract interfaces, off-chain components, API endpoints, SDK 
                examples, and operational processes.
              </p>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-lg font-semibold mb-3">2. Architecture</h3>
              <p className="text-muted-foreground mb-3">High-level components:</p>
              
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">On-chain</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• VaultFactory (deploys vaults)</li>
                    <li>• Vault (per-strategy pooled fund)</li>
                    <li>• StrategyAdapters (protocol-specific adapters)</li>
                    <li>• Governance (timelock + multisig + voting token)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-1">Off-chain</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• AI Strategy Engine (model training, inference)</li>
                    <li>• Keeper / Executor (triggers rebalances)</li>
                    <li>• Indexer (The Graph or custom subgraph)</li>
                    <li>• API Server (REST + WebSocket)</li>
                    <li>• Frontend (React app connecting wallets)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Smart Contracts */}
            <div>
              <h3 className="text-lg font-semibold mb-3">3. Smart Contracts</h3>
              <p className="text-muted-foreground mb-3">
                Contracts are written in Solidity ^0.8.x using OpenZeppelin libraries for access controls, 
                SafeERC20, and upgradeability.
              </p>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">VaultFactory</h4>
                <p className="text-sm text-muted-foreground mb-2">Core functions:</p>
                <code className="text-xs bg-background p-2 rounded block">
                  function createVault(address _strategyAdapter, string calldata _name) external returns (address vault);
                </code>
              </div>
            </div>

            {/* API Reference */}
            <div>
              <h3 className="text-lg font-semibold mb-3">6. API Reference</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Base URL: <code className="bg-muted px-2 py-1 rounded">https://api.neura.xyz/v1</code></p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Public Endpoints</h4>
                  <div className="space-y-2 text-sm">
                    <div><code>GET /health</code> - Service health status</div>
                    <div><code>GET /v1/protocols</code> - List supported protocols</div>
                    <div><code>GET /v1/vaults</code> - List available vaults</div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    Uses wallet-based authentication with nonce signing for secure access.
                  </p>
                </div>
              </div>
            </div>

            {/* Integration Guide */}
            <div>
              <h3 className="text-lg font-semibold mb-3">8. Integration Guides</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Frontend Integration (React)</h4>
                <div className="text-sm space-y-2">
                  <p className="text-muted-foreground">Prerequisites: ethers, wagmi, RainbowKit</p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. User wallet authentication</li>
                    <li>2. Fetch available vaults</li>
                    <li>3. Handle deposit/withdrawal flows</li>
                    <li>4. Subscribe to real-time updates</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-lg font-semibold mb-3">9. Security & Audits</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Security Controls</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• OpenZeppelin libraries and patterns</li>
                    <li>• Multisig for operational controls</li>
                    <li>• Timelock for governance actions</li>
                    <li>• Oracle medianizing and TWAP checks</li>
                    <li>• Third-party audit verification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold mb-3">Contact & Support</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Discord Support
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub Issues
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentationModal;