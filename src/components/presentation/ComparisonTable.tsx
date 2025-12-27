import { Check, X } from "lucide-react";

interface TableRow {
  parameter: string;
  captive: string;
  interstate: string;
  captiveIcon?: "check" | "cross" | "none";
  interstateIcon?: "check" | "cross" | "none";
}

const comparisonData: TableRow[] = [
  { parameter: "Location", captive: "Inside plant", interstate: "Outside state", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "Regulatory risk", captive: "Very Low", interstate: "High", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "OA / CSS / AS", captive: "Not applicable", interstate: "Applicable", captiveIcon: "cross", interstateIcon: "check" },
  { parameter: "Effective tariff", captive: "₹3.8–4.0", interstate: "₹5.5–6.2", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "Monthly saving", captive: "₹52–55 lakh", interstate: "₹18–25 lakh", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "CMD reduction", captive: "Yes", interstate: "No", captiveIcon: "check", interstateIcon: "cross" },
  { parameter: "Grid dependency", captive: "Low", interstate: "High", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "Payment certainty", captive: "Fixed EMI", interstate: "Variable bills", captiveIcon: "none", interstateIcon: "none" },
  { parameter: "Long-term benefit", captive: "Ownership after 10 yrs", interstate: "No ownership", captiveIcon: "check", interstateIcon: "cross" },
];

const renderIcon = (type?: "check" | "cross" | "none") => {
  if (type === "check") return <Check className="h-4 w-4 text-highlight inline mr-1" />;
  if (type === "cross") return <X className="h-4 w-4 text-destructive inline mr-1" />;
  return null;
};

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto animate-fade-in-delay-1">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-table-header text-primary-foreground">
            <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Parameter</th>
            <th className="text-left py-3 px-4 font-semibold">Captive BOOT (10 MW)</th>
            <th className="text-left py-3 px-4 font-semibold rounded-tr-lg">Inter-State PPA (10 MW)</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr
              key={row.parameter}
              className={`border-b border-border ${
                index % 2 === 0 ? "bg-card" : "bg-table-alt"
              } hover:bg-secondary/50 transition-colors`}
            >
              <td className="py-3 px-4 font-medium text-foreground">{row.parameter}</td>
              <td className="py-3 px-4">
                {renderIcon(row.captiveIcon)}
                <span className={row.captiveIcon === "check" ? "text-highlight font-medium" : ""}>
                  {row.captive}
                </span>
              </td>
              <td className="py-3 px-4">
                {renderIcon(row.interstateIcon)}
                <span className={row.interstateIcon === "cross" ? "text-destructive" : ""}>
                  {row.interstate}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
