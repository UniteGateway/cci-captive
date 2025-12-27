import SlideHeader from "../SlideHeader";
import { Check, X } from "lucide-react";

const Slide9 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={9} 
        title="10-Year & Post-10-Year Impact" 
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Captive BOOT */}
        <div className="bg-highlight/5 border-2 border-highlight rounded-lg p-6 animate-fade-in-delay-1">
          <h3 className="text-xl font-bold text-highlight mb-4 flex items-center gap-2">
            <Check className="h-5 w-5" />
            Captive BOOT Model
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">10-Year Period</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>Total savings: <span className="font-bold">₹60–65 crore</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>Asset ownership transfers to CCI</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-highlight/30">
              <h4 className="font-semibold text-primary mb-3">Post 10 Years</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>Only AMC payable: <span className="font-semibold">₹8 lakh/MW/year</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>5% escalation every 2 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>Power cost: <span className="font-bold text-highlight">₹0.45–0.50/unit</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-highlight mt-2" />
                  <span>Annual saving: <span className="font-bold text-highlight">₹11–12 crore</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inter-State PPA */}
        <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-6 animate-fade-in-delay-2">
          <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
            <X className="h-5 w-5" />
            Inter-State PPA
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
              <span>No ownership</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
              <span>OA charges uncertain</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
              <span>Regulatory revision risk every 3–5 years</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-destructive/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Long-term financial exposure remains high with no asset acquisition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
