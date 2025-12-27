import SlideHeader from "../SlideHeader";
import { AlertTriangle, ArrowRight } from "lucide-react";

const charges = [
  "Inter-State Transmission (ISTS)",
  "State Transmission Charges",
  "Wheeling Charges",
  "Cross Subsidy Surcharge (CSS)",
  "Additional Surcharge (AS)",
  "SLDC charges",
  "Banking losses & settlement risks",
];

const Slide7 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={7} 
        title="Inter-State PPA: Hidden Costs" 
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-6 animate-fade-in-delay-1">
          <h3 className="text-xl font-semibold text-warning mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Additional Statutory Charges
          </h3>
          <ul className="space-y-3">
            {charges.map((charge, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                <span className="text-foreground">{charge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 animate-fade-in-delay-2">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-destructive mb-4 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Effective Landed Cost
            </h3>
            <p className="text-4xl font-bold text-destructive">₹5.5 – ₹6.2/unit</p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-primary mb-3">Net Saving vs DISCOM</h3>
            <p className="text-muted-foreground mb-2">Only</p>
            <p className="text-3xl font-bold text-warning">₹1.2–2.0/unit</p>
            <p className="text-sm text-muted-foreground mt-3">
              Significantly lower than Captive BOOT savings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7;
