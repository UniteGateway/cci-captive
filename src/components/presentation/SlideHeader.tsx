import { Sparkles } from "lucide-react";

interface SlideHeaderProps {
  slideNumber: number;
  title: string;
  subtitle?: string;
}

const SlideHeader = ({ slideNumber, title, subtitle }: SlideHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in relative">
      {/* Decorative background element */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-highlight/10 rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            SLIDE {slideNumber}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary via-primary to-highlight bg-clip-text text-transparent mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground font-medium">{subtitle}</p>
        )}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-highlight rounded-full" />
          <div className="h-1.5 w-8 bg-highlight/40 rounded-full" />
          <div className="h-1.5 w-4 bg-highlight/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SlideHeader;
