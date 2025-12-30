import SlideHeader from "../SlideHeader";
import { Globe, FileText } from "lucide-react";

const Slide6 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={6} 
        title="Option 2: Inter-State Solar PPA" 
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in-delay-1">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Configuration
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-semibold">10 MW</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Source</span>
              <span className="font-semibold">Solar park (other state)</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Model</span>
              <span className="font-semibold">Long-term PPA (25 years typical)</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-semibold">Open Access</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in-delay-2">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Typical PPA Tariff
          </h3>
          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-muted-foreground mb-2">Base tariff</p>
            <p className="text-5xl font-bold text-primary">₹3.0–3.5</p>
            <p className="text-lg text-muted-foreground mt-2">per unit</p>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            *Additional charges apply – see next slide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
