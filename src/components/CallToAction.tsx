import { Button } from "@/components/ui/button";
import { Book, Github } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-2xl">
        <h2 className="text-lg text-muted-foreground mb-6">
          Ready to get started?
        </h2>

        <div className="flex gap-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-0 h-auto"
          >
            <Book className="h-4 w-4" />
            Documentation
          </Button>
          
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-0 h-auto"
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