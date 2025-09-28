import { Database } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center">
              <Database className="h-4 w-4 text-background" />
            </div>
            <div className="w-4 h-4 bg-foreground rounded-sm opacity-80"></div>
            <div className="w-3 h-3 bg-foreground rounded-sm opacity-60"></div>
          </div>
          <h1 className="text-2xl font-bold">Porto</h1>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Sign in with superpowers. Buy, swap, subscribe, and much more. No passwords or extensions required.
        </h2>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Porto imagines a world where passwords are a thing of the past, and where the web is built natively for payments.
        </p>

        {/* Installation Command */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <button className="px-3 py-1 text-sm rounded-md bg-primary text-primary-foreground">
              npm
            </button>
            <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground">
              pnpm
            </button>
            <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground">
              bun
            </button>
            <span className="text-muted-foreground ml-2">{'>'}</span>
            <span className="text-code-keyword font-mono">npm</span>
            <span className="text-foreground font-mono">install porto</span>
          </div>
        </div>

        {/* Code Block */}
        <div className="code-block mb-12">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">1</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">1</span>
              <span className="text-code-keyword">import</span>
              <span className="text-code-text">{'{'}</span>
              <span className="text-code-text">Porto</span>
              <span className="text-code-text">{'}'}</span>
              <span className="text-code-keyword">from</span>
              <span className="text-code-string">'porto'</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">2</span>
              <span className="text-code-text">Porto.</span>
              <span className="text-code-keyword">create</span>
              <span className="text-code-text">()</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;