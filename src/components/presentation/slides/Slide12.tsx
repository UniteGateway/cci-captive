import SlideHeader from "../SlideHeader";
import { CheckCircle, FileSignature, ArrowRightLeft, Building2 } from "lucide-react";
import bootTransferImage from "@/assets/boot-transfer.jpg";

const Slide12 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={12} 
        title="BOOT Transfer After 10 Years" 
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-delay-1">
          <div className="bg-highlight/10 border-2 border-highlight rounded-xl p-6">
            <h3 className="text-xl font-bold text-highlight mb-4 flex items-center gap-2">
              <ArrowRightLeft className="h-6 w-6" />
              Asset Transfer to CCI
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Complete Ownership Transfer</span>
                  <p className="text-sm text-muted-foreground">Full 10 MW solar plant becomes CCI's asset after 10 years</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">₹0 Transfer Cost</span>
                  <p className="text-sm text-muted-foreground">No additional payment required for ownership transfer</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold">15+ Years Residual Life</span>
                  <p className="text-sm text-muted-foreground">Solar panels with 25-year warranty continue generating power</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <FileSignature className="h-5 w-5" />
              Transfer Documentation
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Asset handover certificate
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Equipment warranty transfer
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                O&M contract continuation option
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Performance guarantee documentation
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6 animate-fade-in-delay-2">
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            <img 
              src={bootTransferImage} 
              alt="BOOT Transfer Agreement" 
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="bg-gradient-to-br from-highlight/20 to-highlight/5 rounded-xl p-6 border border-highlight/30">
            <h3 className="text-lg font-bold text-highlight mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Post-Transfer Benefits
            </h3>
            
            <div className="space-y-4">
              <div className="bg-background/80 rounded-lg p-4">
                <div className="text-2xl font-bold text-highlight">₹0.45–0.50/unit</div>
                <div className="text-sm text-muted-foreground">Power cost (AMC only)</div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4">
                <div className="text-2xl font-bold text-highlight">₹11–12 Cr/year</div>
                <div className="text-sm text-muted-foreground">Annual savings post-transfer</div>
              </div>
              
              <div className="bg-background/80 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">₹150+ Cr</div>
                <div className="text-sm text-muted-foreground">Total lifetime value of asset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide12;
