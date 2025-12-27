import SlideHeader from "../SlideHeader";
import { Check, Award } from "lucide-react";

const reasons = [
  "Lowest landed power cost",
  "CMD reduction benefit",
  "No OA / CSS / AS exposure",
  "Predictable cash flow",
  "Long-term asset ownership",
  "Strong ESG & sustainability compliance",
];

const approvals = [
  "Approve project implementation",
  "Authorize agreement execution",
  "Permit CMD reduction application",
];

const Slide10 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={10} 
        title="Board Recommendation" 
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6 animate-fade-in-delay-1">
          <div className="bg-highlight text-primary-foreground rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Approved Option
            </h3>
            <p className="text-2xl font-bold">
              ✅ 10 MW Captive Solar under BOOT Model
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4">Key Reasons</h3>
            <ul className="space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-highlight flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-6 animate-fade-in-delay-2">
          <h3 className="text-xl font-bold mb-6">Board Approval Sought</h3>
          <ul className="space-y-4">
            {approvals.map((approval, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <span className="text-lg">{approval}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-primary-foreground/20">
            <p className="text-sm opacity-80">
              Presented for Board consideration and approval
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10;
