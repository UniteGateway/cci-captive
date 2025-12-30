import SlideHeader from "../SlideHeader";
import { Building2, Zap } from "lucide-react";

const Slide3 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={3} 
        title="Option 1: Captive Solar (BOOT Model)" 
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in-delay-1">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Configuration
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-semibold">10 MW</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Location</span>
              <span className="font-semibold">Inside CCI premises</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Connection</span>
              <span className="font-semibold">Behind-the-Meter (HT bus – 6.6 kV)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Usage</span>
              <span className="font-semibold">100% captive</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Model</span>
              <span className="font-semibold">BOOT – 10 years</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-fade-in-delay-2">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Commercials
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Cost</span>
              <span className="font-semibold">₹4 Cr/MW</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Total Project Cost</span>
              <span className="font-bold text-lg text-primary">₹40 Cr (Including O&M)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
