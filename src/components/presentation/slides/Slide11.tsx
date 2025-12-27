import SlideHeader from "../SlideHeader";
import { AlertCircle, TrendingDown, TrendingUp, Minus, ExternalLink } from "lucide-react";

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
      return "bg-gradient-to-r from-highlight/20 to-highlight/10 text-highlight font-bold";
    case "high":
      return "bg-gradient-to-r from-destructive/20 to-destructive/10 text-destructive font-bold";
    default:
      return "bg-gradient-to-r from-warning/20 to-warning/10 text-warning font-bold";
  }
};

const getLevelIcon = (level: "low" | "medium" | "high") => {
  switch (level) {
    case "low":
      return <TrendingDown className="h-3.5 w-3.5 inline mr-1" />;
    case "high":
      return <TrendingUp className="h-3.5 w-3.5 inline mr-1" />;
    default:
      return <Minus className="h-3.5 w-3.5 inline mr-1" />;
  }
};

const stateChargesData: StateChargeRow[] = [
  { state: "Gujarat", ists: "Nil*", stateTransmission: "0.30 – 0.40", wheeling: "0.15 – 0.25", css: "0.80 – 1.30", additionalSurcharge: "0.00 – 0.40", sldcOthers: "0.05 – 0.10", totalOA: "1.4 – 2.4", level: "low" },
  { state: "Rajasthan", ists: "Nil*", stateTransmission: "0.35 – 0.50", wheeling: "0.15 – 0.25", css: "1.00 – 1.60", additionalSurcharge: "0.00 – 0.50", sldcOthers: "0.05 – 0.10", totalOA: "1.6 – 2.9", level: "low" },
  { state: "Madhya Pradesh", ists: "Nil*", stateTransmission: "0.30 – 0.45", wheeling: "0.15 – 0.25", css: "1.20 – 1.80", additionalSurcharge: "0.40 – 0.80", sldcOthers: "0.05 – 0.10", totalOA: "2.1 – 3.4", level: "low" },
  { state: "Karnataka", ists: "Nil*", stateTransmission: "0.35 – 0.45", wheeling: "0.20 – 0.30", css: "1.20 – 1.90", additionalSurcharge: "0.40 – 0.90", sldcOthers: "0.05 – 0.10", totalOA: "2.2 – 3.6", level: "medium" },
  { state: "Andhra Pradesh", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.15 – 0.25", css: "1.40 – 2.10", additionalSurcharge: "0.50 – 1.10", sldcOthers: "0.05 – 0.10", totalOA: "2.6 – 4.1", level: "medium" },
  { state: "Telangana", ists: "Nil*", stateTransmission: "0.45 – 0.55", wheeling: "0.20 – 0.30", css: "1.50 – 2.20", additionalSurcharge: "0.60 – 1.20", sldcOthers: "0.05 – 0.10", totalOA: "2.8 – 4.3", level: "medium" },
  { state: "Haryana", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.20 – 0.30", css: "1.50 – 2.40", additionalSurcharge: "0.80 – 1.40", sldcOthers: "0.05 – 0.10", totalOA: "3.0 – 4.8", level: "high" },
  { state: "Tamil Nadu", ists: "Nil*", stateTransmission: "0.55 – 0.70", wheeling: "0.25 – 0.35", css: "1.60 – 2.40", additionalSurcharge: "0.80 – 1.50", sldcOthers: "0.05 – 0.10", totalOA: "3.3 – 5.0", level: "high" },
  { state: "Uttar Pradesh", ists: "Nil*", stateTransmission: "0.45 – 0.60", wheeling: "0.25 – 0.35", css: "1.80 – 2.70", additionalSurcharge: "1.00 – 1.80", sldcOthers: "0.05 – 0.10", totalOA: "3.6 – 5.5", level: "high" },
  { state: "Maharashtra", ists: "Nil*", stateTransmission: "0.40 – 0.55", wheeling: "0.20 – 0.35", css: "1.80 – 2.80", additionalSurcharge: "1.20 – 1.80", sldcOthers: "0.05 – 0.10", totalOA: "3.7 – 5.6", level: "high" },
];

const notes = [
  "ISTS charges are waived for Solar & Wind projects commissioned within MNRE-notified periods (subject to conditions).",
  "CSS & Additional Surcharge vary by HT/EHT consumer category, Contract demand, and DISCOM cost structure.",
  "Banking rules & charges are state-specific and not included above.",
  "Final charges are payable as per latest SERC orders & SLDC approvals.",
];

const dataSources = [
  { name: "CERC Regulations", url: "https://cercind.gov.in" },
  { name: "State SERC Orders", url: "#" },
  { name: "POSOCO/NLDC", url: "https://posoco.in" },
  { name: "MNRE Guidelines", url: "https://mnre.gov.in" },
];

const Slide11 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={11} 
        title="Inter-State Open Access Charges" 
        subtitle="State-Wise Summary (₹/kWh) | Solar / Wind | Consumer ≥1 MW"
      />

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 animate-fade-in">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-highlight/10 border border-highlight/30">
          <TrendingDown className="h-4 w-4 text-highlight" />
          <span className="text-sm font-medium text-highlight">Low Cost (Favorable)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-warning/10 border border-warning/30">
          <Minus className="h-4 w-4 text-warning" />
          <span className="text-sm font-medium text-warning">Medium Cost</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/30">
          <TrendingUp className="h-4 w-4 text-destructive" />
          <span className="text-sm font-medium text-destructive">High Cost (Unfavorable)</span>
        </div>
      </div>
      
      <div className="overflow-x-auto animate-fade-in-delay-1 rounded-xl shadow-lg border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <th className="text-left py-3 px-4 font-semibold">State</th>
              <th className="text-center py-3 px-2 font-semibold">ISTS</th>
              <th className="text-center py-3 px-2 font-semibold">State Trans.</th>
              <th className="text-center py-3 px-2 font-semibold">Wheeling</th>
              <th className="text-center py-3 px-2 font-semibold">CSS</th>
              <th className="text-center py-3 px-2 font-semibold">Addl. Surcharge</th>
              <th className="text-center py-3 px-2 font-semibold">SLDC & Others</th>
              <th className="text-center py-3 px-4 font-semibold bg-white/10">Total OA</th>
            </tr>
          </thead>
          <tbody>
            {stateChargesData.map((row, index) => (
              <tr
                key={row.state}
                className={`border-b border-border/50 ${
                  index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                } hover:bg-primary/5 transition-all duration-200`}
              >
                <td className="py-3 px-4 font-semibold text-foreground">{row.state}</td>
                <td className="py-3 px-2 text-center">
                  <span className="text-highlight font-semibold bg-highlight/10 px-2 py-0.5 rounded">{row.ists}</span>
                </td>
                <td className="py-3 px-2 text-center text-muted-foreground">{row.stateTransmission}</td>
                <td className="py-3 px-2 text-center text-muted-foreground">{row.wheeling}</td>
                <td className="py-3 px-2 text-center text-muted-foreground">{row.css}</td>
                <td className="py-3 px-2 text-center text-muted-foreground">{row.additionalSurcharge}</td>
                <td className="py-3 px-2 text-center text-muted-foreground">{row.sldcOthers}</td>
                <td className={`py-3 px-4 text-center rounded-r-lg ${getLevelStyles(row.level)}`}>
                  {getLevelIcon(row.level)}
                  {row.totalOA}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {/* Important Notes */}
        <div className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border rounded-xl p-4 animate-fade-in-delay-2">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-primary" />
            Important Notes
          </h4>
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-primary mt-0.5 font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Data Sources */}
        <div className="bg-gradient-to-br from-primary/5 to-highlight/5 border border-primary/20 rounded-xl p-4 animate-fade-in-delay-3">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-primary" />
            Data Sources & Credits
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {dataSources.map((source, index) => (
              <a 
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-primary hover:text-highlight transition-colors bg-white/50 dark:bg-card/50 rounded-lg px-3 py-2 border border-border/50 hover:border-primary/30"
              >
                <span className="font-medium">{source.name}</span>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-3 italic">
            * Figures are indicative ranges for commercial evaluation. Final payable charges as per latest SERC orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
