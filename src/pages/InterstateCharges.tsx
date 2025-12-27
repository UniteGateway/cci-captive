import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingDown, TrendingUp, Minus, ExternalLink, ArrowLeft, Zap } from "lucide-react";
import uniteLogo from "@/assets/unite-logo.png";
import cciLogo from "@/assets/cci-logo.png";

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

const dataSources = [
  { name: "CERC Regulations", url: "https://cercind.gov.in" },
  { name: "State SERC Orders", url: "#" },
  { name: "POSOCO/NLDC", url: "https://posoco.in" },
  { name: "MNRE Guidelines", url: "https://mnre.gov.in" },
];

const InterstateCharges = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={cciLogo} alt="CCI Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
            <div>
              <h1 className="text-xl font-bold font-display">Inter-State Open Access Charges</h1>
              <p className="text-sm opacity-80">State-Wise Summary for Solar / Wind</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="secondary" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <img src={uniteLogo} alt="Unite Solar Logo" className="h-10 w-auto bg-white rounded-lg px-2 py-1" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-highlight flex items-center justify-center shadow-lg">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary via-primary to-highlight bg-clip-text text-transparent">
                Inter-State Open Access Charges
              </h2>
              <p className="text-lg text-muted-foreground">
                State-Wise Summary (₹/kWh) | Solar / Wind | Consumer ≥1 MW
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-highlight rounded-full" />
            <div className="h-1.5 w-8 bg-highlight/40 rounded-full" />
            <div className="h-1.5 w-4 bg-highlight/20 rounded-full" />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 animate-fade-in-delay-1">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/10 border border-highlight/30 shadow-sm">
            <TrendingDown className="h-4 w-4 text-highlight" />
            <span className="text-sm font-medium text-highlight">Low Cost (Favorable)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/30 shadow-sm">
            <Minus className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium text-warning">Medium Cost</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 shadow-sm">
            <TrendingUp className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">High Cost (Unfavorable)</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto animate-fade-in-delay-1 rounded-2xl shadow-xl border border-border mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                <th className="text-left py-4 px-5 font-semibold text-base">State</th>
                <th className="text-center py-4 px-3 font-semibold">ISTS Charges</th>
                <th className="text-center py-4 px-3 font-semibold">State Transmission</th>
                <th className="text-center py-4 px-3 font-semibold">Wheeling</th>
                <th className="text-center py-4 px-3 font-semibold">CSS</th>
                <th className="text-center py-4 px-3 font-semibold">Addl. Surcharge</th>
                <th className="text-center py-4 px-3 font-semibold">SLDC & Others</th>
                <th className="text-center py-4 px-5 font-semibold bg-white/10">Total OA (Approx.)</th>
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
                  <td className="py-4 px-5 font-semibold text-foreground text-base">{row.state}</td>
                  <td className="py-4 px-3 text-center">
                    <span className="text-highlight font-semibold bg-highlight/10 px-3 py-1 rounded-full">{row.ists}</span>
                  </td>
                  <td className="py-4 px-3 text-center text-muted-foreground">{row.stateTransmission}</td>
                  <td className="py-4 px-3 text-center text-muted-foreground">{row.wheeling}</td>
                  <td className="py-4 px-3 text-center text-muted-foreground">{row.css}</td>
                  <td className="py-4 px-3 text-center text-muted-foreground">{row.additionalSurcharge}</td>
                  <td className="py-4 px-3 text-center text-muted-foreground">{row.sldcOthers}</td>
                  <td className={`py-4 px-5 text-center text-base ${getLevelStyles(row.level)}`}>
                    {getLevelIcon(row.level)}
                    {row.totalOA}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes & Sources Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Important Notes */}
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border rounded-2xl p-6 animate-fade-in-delay-2 shadow-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Important Notes
            </h4>
            <ul className="space-y-3">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold text-lg">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Sources */}
          <div className="bg-gradient-to-br from-primary/5 to-highlight/5 border border-primary/20 rounded-2xl p-6 animate-fade-in-delay-3 shadow-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-primary" />
              Data Sources & Credits
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {dataSources.map((source, index) => (
                <a 
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-highlight transition-colors bg-white/50 dark:bg-card/50 rounded-xl px-4 py-3 border border-border/50 hover:border-primary/30 hover:shadow-md"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="font-medium">{source.name}</span>
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic bg-white/30 dark:bg-card/30 rounded-lg p-3">
              * Figures are indicative ranges commonly used for solar/wind inter-state PPAs and are suitable for commercial evaluation & comparison. Final payable charges are as per latest SERC orders & consumer category.
            </p>
          </div>
        </div>

        {/* How This Is Used */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg animate-fade-in-delay-3">
          <h4 className="text-lg font-semibold text-foreground mb-4">How This Data Is Used in Proposals</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <p className="font-medium text-primary">Inter-state PPA landed cost comparison</p>
            </div>
            <div className="bg-highlight/5 rounded-xl p-4 border border-highlight/20">
              <p className="font-medium text-highlight">Captive vs Group Captive vs DISCOM power</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <p className="font-medium text-primary">Industrial client decision matrix</p>
            </div>
            <div className="bg-highlight/5 rounded-xl p-4 border border-highlight/20">
              <p className="font-medium text-highlight">Solar / Wind PPA feasibility slides</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center animate-fade-in-delay-3">
          <Link to="/presentation?slide=11">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-highlight hover:opacity-90 text-white px-8">
              View in Presentation <Zap className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={uniteLogo} alt="Unite Solar" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              © 2024 Unite Solar. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-primary hover:text-highlight transition-colors">Home</Link>
            <Link to="/presentation" className="text-sm text-primary hover:text-highlight transition-colors">Presentation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InterstateCharges;
