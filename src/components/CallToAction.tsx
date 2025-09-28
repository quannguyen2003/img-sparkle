import { Button } from "@/components/ui/button";
import { Book, Github } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-8 text-muted-foreground">
          Ready to get started?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center gap-2 bg-surface hover:bg-surface-hover"
          >
            <Book className="h-4 w-4" />
            Documentation
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center gap-2 bg-surface hover:bg-surface-hover"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;