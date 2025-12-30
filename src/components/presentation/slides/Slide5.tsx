import SlideHeader from "../SlideHeader";
import { Gauge, IndianRupee } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const cmdData = [
  { name: "Post-Solar CMD", value: 13, color: "hsl(var(--highlight))" },
  { name: "CMD Reduction", value: 6.5, color: "hsl(var(--primary))" },
];

const Slide5 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={5} 
        title="CMD Reduction Benefit" 
        subtitle="Captive Only"
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-fade-in-delay-1">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Gauge className="h-5 w-5" />
              CMD Analysis
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Current CMD</span>
                <span className="font-bold text-xl">19.5 MW</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Post-solar safe CMD</span>
                <span className="font-bold text-xl text-highlight">13 MW</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">CMD reduction</span>
                <span className="font-bold text-xl text-primary">6.5 MW</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-primary mb-3">CMD Distribution</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cmdData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                    label={({ name, value }) => `${value} MW`}
                  >
                    {cmdData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-5 border border-border">
            <h4 className="text-lg font-semibold text-primary mb-2">Telangana HT Fixed Charges</h4>
            <p className="text-2xl font-bold">~₹375/kVA/month</p>
          </div>
        </div>

        <div className="bg-highlight/10 border-2 border-highlight rounded-xl p-8 animate-fade-in-delay-2 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-highlight mb-6 flex items-center gap-2">
            <IndianRupee className="h-5 w-5" />
            CMD Reduction Savings
          </h3>
          <div className="space-y-8">
            <div className="bg-white/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-2">Monthly Savings</p>
              <p className="text-4xl font-bold text-highlight">₹24–25 lakh</p>
            </div>
            <div className="bg-white/50 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-2">Annual Savings</p>
              <p className="text-4xl font-bold text-highlight">₹2.9–3.0 crore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
