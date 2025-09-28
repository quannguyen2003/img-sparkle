import { Code, DollarSign, Settings, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Developer-first",
    description: "Integrate in just seconds. Works with wagmi and viem without code changes.",
    color: "text-purple-400"
  },
  {
    icon: DollarSign,
    title: "Flexible & low cost",
    description: "Best-in-class gas costs & latency. Pay fees in any supported currency.",
    color: "text-orange-400"
  },
  {
    icon: Settings,
    title: "Simple & modular",
    description: "Use headlessly, or with UI. No extensions, API keys, passwords, or seed phrases needed.",
    color: "text-emerald-400"
  },
  {
    icon: Zap,
    title: "Programmable",
    description: "Supports subscriptions & usage-based pricing for creators, streamers, agents, and more.",
    color: "text-blue-400"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card group cursor-pointer hover:shadow-card transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg bg-surface-hover ${feature.color}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;