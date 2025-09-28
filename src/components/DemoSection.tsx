import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DemoSection = () => {
  return (
    <div className="bg-surface/50 border border-card-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="text-sm text-muted-foreground mb-4">Demo</div>
        
        {/* Demo Sign In Button */}
        <div className="mb-8">
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary-hover glow-effect shadow-glow"
          >
            Sign in
          </Button>
        </div>

        {/* Demo Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Forget passwords</h3>
            <p className="text-muted-foreground">
              Porto is the fastest and most secure way to sign in.
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;