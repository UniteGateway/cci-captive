import SlideHeader from "../SlideHeader";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const savingsData = [
  { name: "Grid Tariff", value: 7.5, color: "hsl(var(--destructive))" },
  { name: "Solar Tariff", value: 3.9, color: "hsl(var(--highlight))" },
  { name: "Savings", value: 3.6, color: "hsl(var(--primary))" },
];

const Slide4 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={4} 
        title="Captive BOOT: Generation & Cost" 
      />
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-delay-1">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-primary">Generation</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Monthly</p>
                <p className="text-xl font-bold">~14.4 lakh units</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Annual</p>
                <p className="text-xl font-bold">~172.8 lakh units</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-5 shadow-sm border border-border animate-fade-in-delay-2">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-primary">Cost to CCI</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">EMI</p>
                <p className="text-xl font-bold">₹55 lakh/mo</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Effective tariff</p>
                <p className="text-xl font-bold text-highlight">₹3.8–4.0/unit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-highlight/10 border-2 border-highlight rounded-xl p-5 animate-fade-in-delay-3">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="h-5 w-5 text-highlight" />
            <h3 className="font-semibold text-highlight text-lg">Total Savings</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Monthly</p>
              <p className="text-2xl font-bold text-highlight">₹52–55 lakh</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Annual</p>
              <p className="text-2xl font-bold text-highlight">₹6.3 crore</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-sm border border-border animate-fade-in-delay-3">
        <h3 className="text-lg font-semibold text-primary mb-4">Tariff Comparison (₹/unit)</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={savingsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 8]} tickFormatter={(v) => `₹${v}`} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip formatter={(value) => `₹${value}/unit`} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {savingsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
