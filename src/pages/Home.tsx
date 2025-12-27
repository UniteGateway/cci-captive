import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Shield, ArrowRight, TrendingDown, Leaf } from "lucide-react";
import solarTeamBanner from "@/assets/solar-team-banner.jpg";
import uniteLogo from "@/assets/unite-logo.png";
import cciLogo from "@/assets/cci-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={cciLogo} alt="CCI Logo" className="h-14 w-auto bg-white rounded-lg p-1" />
            <div>
              <h1 className="text-xl font-bold font-display">CCI Solar Power Proposal</h1>
              <p className="text-sm opacity-80">10 MW Solar BOOT Project</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/presentation">
              <Button variant="secondary" className="gap-2">
                View Presentation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <img src={uniteLogo} alt="Unite Solar Logo" className="h-12 w-auto bg-white rounded-lg px-2 py-1" />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={solarTeamBanner} 
            alt="Solar energy team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold font-display text-white mb-4 animate-fade-in">
                  10 MW Solar Power
                </h2>
                <p className="text-2xl text-white/90 mb-2 animate-fade-in-delay-1">
                  Build-Own-Operate-Transfer Model
                </p>
                <p className="text-lg text-white/80 mb-8 animate-fade-in-delay-2">
                  A comprehensive proposal for sustainable energy transformation at CCI
                </p>
                <div className="flex gap-4 animate-fade-in-delay-3">
                  <Link to="/presentation">
                    <Button size="lg" className="gap-2 text-lg px-8 bg-highlight text-white hover:bg-highlight/80 transition-all hover:scale-105">
                      Start Presentation <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/interstate-charges">
                    <Button size="lg" className="gap-2 text-lg px-8 bg-white text-primary hover:bg-white/90 hover:text-primary/80 transition-all hover:scale-105">
                      View OA Charges
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold font-display text-center text-foreground mb-12">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 rounded-full bg-highlight/10 flex items-center justify-center mb-6">
                <TrendingDown className="h-8 w-8 text-highlight" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">50% Cost Reduction</h4>
              <p className="text-muted-foreground">
                Reduce power cost from ₹7.50 to ₹3.8-4.0 per unit with solar power
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Tariff Protection</h4>
              <p className="text-muted-foreground">
                Fixed tariff for 25 years, protecting against future escalations
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 rounded-full bg-highlight/10 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-highlight" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Zero Carbon</h4>
              <p className="text-muted-foreground">
                Clean energy generation with no carbon footprint
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-4xl font-bold text-primary mb-2">10 MW</p>
              <p className="text-muted-foreground">Installed Capacity</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-highlight/5 border border-highlight/20">
              <p className="text-4xl font-bold text-highlight mb-2">₹3.80</p>
              <p className="text-muted-foreground">Per Unit Cost</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-4xl font-bold text-primary mb-2">25 Yrs</p>
              <p className="text-muted-foreground">Project Duration</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-highlight/5 border border-highlight/20">
              <p className="text-4xl font-bold text-highlight mb-2">₹5 Cr+</p>
              <p className="text-muted-foreground">Annual Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold font-display mb-4">
            Ready to Transform Your Energy Future?
          </h3>
          <p className="text-lg opacity-90 mb-8">
            Explore our detailed proposal with financial analysis, comparisons, and recommendations
          </p>
          <Link to="/presentation">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-10">
              View Full Presentation <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={uniteLogo} alt="Unite Solar" className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground">
              © 2024 Unite Solar. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">Prepared for</p>
            <img src={cciLogo} alt="CCI" className="h-10 w-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
