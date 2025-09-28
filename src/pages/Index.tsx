import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import DemoSection from "@/components/DemoSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      
      <main className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <HeroSection />
            <FeatureCards />
            <CallToAction />
          </div>
          
          {/* Demo Sidebar */}
          <div className="lg:col-span-1 px-6 py-16">
            <div className="sticky top-8">
              <DemoSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
