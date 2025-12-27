import SlideHeader from "../SlideHeader";
import ComparisonTable from "../ComparisonTable";

const Slide8 = () => {
  return (
    <div>
      <SlideHeader 
        slideNumber={8} 
        title="Comparison Sheet" 
        subtitle="Core Comparison – Captive BOOT vs Inter-State PPA"
      />
      
      <ComparisonTable />

      <div className="mt-6 bg-highlight/10 border border-highlight/30 rounded-lg p-4 text-center animate-fade-in-delay-2">
        <p className="text-highlight font-semibold">
          ✓ Captive BOOT offers significantly better savings and long-term ownership benefits
        </p>
      </div>
    </div>
  );
};

export default Slide8;
