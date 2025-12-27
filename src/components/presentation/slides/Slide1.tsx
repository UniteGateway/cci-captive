import SlideHeader from "../SlideHeader";
import { CheckCircle, ArrowRight, Sun, Zap, Shield } from "lucide-react";
import solarHero from "@/assets/solar-hero.jpg";

const Slide1 = () => {
  return (
    <div>
      <SlideHeader slideNumber={1} title="Executive Summary" />
      
      {/* Hero Banner with rounded corners */}
      <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl animate-fade-in">
        <img 
          src={solarHero} 
          alt="Solar power plant at sunset" 
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent flex items-center">
          <div className="px-8 py-6 text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">10 MW Solar Power for CCI</h2>
            <p className="text-lg opacity-90">Build-Own-Operate-Transfer Model</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-delay-1 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sun className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-primary">Cost Reduction</h3>
          </div>
          <p className="text-muted-foreground text-sm">Reduce power cost from ₹7.50 to ₹3.8-4.0/unit</p>
        </div>
        
        <div className="bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-delay-2 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-highlight/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-highlight" />
            </div>
            <h3 className="font-semibold text-highlight">Tariff Hedge</h3>
          </div>
          <p className="text-muted-foreground text-sm">Protect against future tariff escalations</p>
        </div>
        
        <div className="bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-delay-3 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-primary">Regulatory Safety</h3>
          </div>
          <p className="text-muted-foreground text-sm">Zero OA/CSS/AS exposure with captive model</p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-in-delay-3">
        <h3 className="text-lg font-semibold text-foreground mb-4">Options Evaluated</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">10 MW Captive Solar – BOOT Model</p>
              <p className="text-sm text-muted-foreground">Inside Premises</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
            <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">10 MW Inter-State Solar PPA</p>
              <p className="text-sm text-muted-foreground">Open Access</p>
            </div>
          </div>
        </div>

        <div className="bg-highlight/10 border-2 border-highlight rounded-xl p-5">
          <p className="flex items-center gap-3 text-highlight font-semibold text-lg">
            <ArrowRight className="h-6 w-6" />
            <span>Recommendation: Captive BOOT model is financially superior, regulator-safe, and operationally reliable</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
