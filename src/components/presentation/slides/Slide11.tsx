import SlideHeader from "../SlideHeader";
import { AlertCircle } from "lucide-react";

interface StateChargeRow {
  state: string;
  ists: string;
  stateTransmission: string;
  wheeling: string;
  css: string;
  additionalSurcharge: string;
  sldcOthers: string;
  totalOA: string;
  level: "low" | "medium" | "high";
}

const getLevelStyles = (level: "low" | "medium" | "high") => {
  switch (level) {
    case "low":
      return "bg-highlight/20 text-highlight font-bold";
    case "high":
      return "bg-destructive/20 text-destructive font-bold";
    default:
      return "bg-warning/10 text-warning font-bold";
  }
};

const stateChargesData: StateChargeRow[] = [
  { state: "Telangana", ists: "Nil*", stateTransmission: "0.45 – 0.55", wheeling: "0.20 – 0.30", css: "1.50 – 2.20", additionalSurcharge: "0.60 – 1.20", sldcOthers: "0.05 – 0.10", totalOA: "2.8 – 4.3", level: "medium" },
  { state: "Andhra Pradesh", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.15 – 0.25", css: "1.40 – 2.10", additionalSurcharge: "0.50 – 1.10", sldcOthers: "0.05 – 0.10", totalOA: "2.6 – 4.1", level: "medium" },
  { state: "Karnataka", ists: "Nil*", stateTransmission: "0.35 – 0.45", wheeling: "0.20 – 0.30", css: "1.20 – 1.90", additionalSurcharge: "0.40 – 0.90", sldcOthers: "0.05 – 0.10", totalOA: "2.2 – 3.6", level: "medium" },
  { state: "Tamil Nadu", ists: "Nil*", stateTransmission: "0.55 – 0.70", wheeling: "0.25 – 0.35", css: "1.60 – 2.40", additionalSurcharge: "0.80 – 1.50", sldcOthers: "0.05 – 0.10", totalOA: "3.3 – 5.0", level: "high" },
  { state: "Maharashtra", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.20 – 0.35", css: "1.80 – 2.80", additionalSurcharge: "1.20 – 1.80", sldcOthers: "0.05 – 0.10", totalOA: "3.7 – 5.6", level: "high" },
  { state: "Gujarat", ists: "Nil*", stateTransmission: "0.30 – 0.40", wheeling: "0.15 – 0.25", css: "0.80 – 1.30", additionalSurcharge: "0.00 – 0.40", sldcOthers: "0.05 – 0.10", totalOA: "1.4 – 2.4", level: "low" },
  { state: "Rajasthan", ists: "Nil*", stateTransmission: "0.35 – 0.50", wheeling: "0.15 – 0.25", css: "1.00 – 1.60", additionalSurcharge: "0.00 – 0.50", sldcOthers: "0.05 – 0.10", totalOA: "1.6 – 2.9", level: "low" },
  { state: "Madhya Pradesh", ists: "Nil*", stateTransmission: "0.30 – 0.45", wheeling: "0.15 – 0.25", css: "1.20 – 1.80", additionalSurcharge: "0.40 – 0.80", sldcOthers: "0.05 – 0.10", totalOA: "2.1 – 3.4", level: "low" },
  { state: "Uttar Pradesh", ists: "Nil*", stateTransmission: "0.45 – 0.60", wheeling: "0.25 – 0.35", css: "1.80 – 2.70", additionalSurcharge: "1.00 – 1.80", sldcOthers: "0.05 – 0.10", totalOA: "3.6 – 5.5", level: "high" },
  { state: "Haryana", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.20 – 0.30", css: "1.50 – 2.40", additionalSurcharge: "0.80 – 1.40", sldcOthers: "0.05 – 0.10", totalOA: "3.0 – 4.8", level: "high" },
];

const notes = [
  "ISTS charges are waived for Solar & Wind projects commissioned within MNRE-notified periods (subject to conditions).",
  "CSS & Additional Surcharge vary by HT/EHT consumer category, Contract demand, and DISCOM cost structure.",
  "Banking rules & charges are state-specific and not included above.",
  "Final charges are payable as per latest SERC orders & SLDC approvals.",
];

const Slide11 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={11} 
        title="Inter-State Open Access Charges" 
        subtitle="State-Wise Summary (₹/kWh) | Solar / Wind | Consumer ≥1 MW"
      />
      
      <div className="overflow-x-auto animate-fade-in-delay-1">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-table-header text-primary-foreground">
              <th className="text-left py-2 px-3 font-semibold rounded-tl-lg">State</th>
              <th className="text-center py-2 px-2 font-semibold">ISTS</th>
              <th className="text-center py-2 px-2 font-semibold">State Trans.</th>
              <th className="text-center py-2 px-2 font-semibold">Wheeling</th>
              <th className="text-center py-2 px-2 font-semibold">CSS</th>
              <th className="text-center py-2 px-2 font-semibold">Addl. Surcharge</th>
              <th className="text-center py-2 px-2 font-semibold">SLDC & Others</th>
              <th className="text-center py-2 px-3 font-semibold rounded-tr-lg bg-warning/80">Total OA</th>
            </tr>
          </thead>
          <tbody>
            {stateChargesData.map((row, index) => (
              <tr
                key={row.state}
                className={`border-b border-border ${
                  index % 2 === 0 ? "bg-card" : "bg-table-alt"
                } hover:bg-secondary/50 transition-colors`}
              >
                <td className="py-2 px-3 font-medium text-foreground">{row.state}</td>
                <td className="py-2 px-2 text-center text-highlight font-medium">{row.ists}</td>
                <td className="py-2 px-2 text-center">{row.stateTransmission}</td>
                <td className="py-2 px-2 text-center">{row.wheeling}</td>
                <td className="py-2 px-2 text-center">{row.css}</td>
                <td className="py-2 px-2 text-center">{row.additionalSurcharge}</td>
                <td className="py-2 px-2 text-center">{row.sldcOthers}</td>
                <td className={`py-2 px-3 text-center ${getLevelStyles(row.level)}`}>{row.totalOA}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4 animate-fade-in-delay-2">
        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
          Important Notes
        </h4>
        <ul className="space-y-1">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide11;
