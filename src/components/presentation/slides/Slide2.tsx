import SlideHeader from "../SlideHeader";
import { AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const costBreakdownData = [
  { name: "Power Cost", value: 45, color: "hsl(var(--primary))" },
  { name: "Other Operations", value: 55, color: "hsl(var(--muted))" },
];

const Slide2 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={2} 
        title="Current Power Profile" 
        subtitle="CCI Power Consumption Analysis"
      />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-in-delay-1">
          <h3 className="text-xl font-semibold text-primary mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Contract Demand (CMD)</span>
              <span className="font-semibold text-lg">19.5 MW</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Monthly Consumption</span>
              <span className="font-semibold text-lg">~50 lakh units</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Operation</span>
              <span className="font-semibold text-lg">24×7</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Avg DISCOM Tariff</span>
              <span className="font-semibold text-lg">₹7.50/unit</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Annual Power Cost</span>
              <span className="font-bold text-xl text-destructive">₹45+ crore</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-in-delay-2">
            <h3 className="text-lg font-semibold text-primary mb-2">Annual Cost Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {costBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-muted-foreground">Power cost is 45% of operational expenses</p>
          </div>

          <div className="bg-warning/10 border border-warning/30 rounded-xl p-5 animate-fade-in-delay-3">
            <h3 className="text-lg font-semibold text-warning mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              High Exposure To
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <span className="text-foreground">Tariff escalation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <span className="text-foreground">Cross-subsidy & OA charges</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <span className="text-foreground">Regulatory uncertainty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
