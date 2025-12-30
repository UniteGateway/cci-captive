import { Link } from "react-router-dom";
import { Home, ChevronDown, ChevronRight, FileText, BarChart3, Scale, CheckCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SlideMenuItem {
  number: number;
  title: string;
  group: string;
}

const slideMenuItems: SlideMenuItem[] = [
  { number: 1, title: "Executive Summary", group: "Overview" },
  { number: 2, title: "Current Power Profile", group: "Overview" },
  { number: 3, title: "Option 1: Captive Solar", group: "Options" },
  { number: 4, title: "Generation & Cost Analysis", group: "Options" },
  { number: 6, title: "Option 2: Inter-State PPA", group: "Alternatives" },
  { number: 7, title: "Hidden Costs Analysis", group: "Alternatives" },
  { number: 8, title: "Comparison Sheet", group: "Analysis" },
  { number: 9, title: "10-Year Impact", group: "Analysis" },
  { number: 10, title: "Board Recommendation", group: "Conclusion" },
];

const groupIcons: Record<string, React.ReactNode> = {
  Overview: <FileText className="h-4 w-4" />,
  Options: <BarChart3 className="h-4 w-4" />,
  Alternatives: <Scale className="h-4 w-4" />,
  Analysis: <BarChart3 className="h-4 w-4" />,
  Conclusion: <CheckCircle className="h-4 w-4" />,
};

const groupColors: Record<string, string> = {
  Overview: "from-blue-500/20 to-blue-600/10",
  Options: "from-emerald-500/20 to-emerald-600/10",
  Alternatives: "from-amber-500/20 to-amber-600/10",
  Analysis: "from-purple-500/20 to-purple-600/10",
  Conclusion: "from-rose-500/20 to-rose-600/10",
};

const groupAccentColors: Record<string, string> = {
  Overview: "bg-blue-500",
  Options: "bg-emerald-500",
  Alternatives: "bg-amber-500",
  Analysis: "bg-purple-500",
  Conclusion: "bg-rose-500",
};

interface SlideSidebarProps {
  currentSlide: number;
  onSlideSelect: (slideNumber: number) => void;
}

const SlideSidebar = ({ currentSlide, onSlideSelect }: SlideSidebarProps) => {
  const groups = Array.from(new Set(slideMenuItems.map((item) => item.group)));
  const [expandedGroups, setExpandedGroups] = useState<string[]>(groups);

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  return (
    <aside className="w-72 bg-gradient-to-b from-card via-card to-secondary/30 border-r border-border h-full overflow-y-auto">
      {/* Header with Logo */}
      <div className="p-5 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-foreground">Solar Proposal</h2>
            <p className="text-xs text-muted-foreground">CCI Limited</p>
          </div>
        </div>
        
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200 group"
        >
          <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Slide Menu */}
      <nav className="p-4">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 px-2">
          Presentation Slides
        </p>
        
        <div className="space-y-2">
          {groups.map((group) => {
            const isExpanded = expandedGroups.includes(group);
            const groupSlides = slideMenuItems.filter((item) => item.group === group);
            const hasActiveSlide = groupSlides.some((item) => item.number === currentSlide);

            return (
              <div key={group} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleGroup(group)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200",
                    hasActiveSlide
                      ? `bg-gradient-to-r ${groupColors[group]} text-primary border-l-2 border-primary`
                      : "text-foreground hover:bg-secondary/80"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <div className={cn(
                      "h-7 w-7 rounded-lg flex items-center justify-center transition-colors",
                      hasActiveSlide ? groupAccentColors[group] + " text-white" : "bg-secondary text-muted-foreground"
                    )}>
                      {groupIcons[group]}
                    </div>
                    {group}
                  </span>
                  <div className={cn(
                    "h-5 w-5 rounded-full flex items-center justify-center transition-all duration-200",
                    isExpanded ? "bg-secondary" : ""
                  )}>
                    {isExpanded ? (
                      <ChevronDown className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="py-1 space-y-0.5 bg-secondary/30">
                    {groupSlides.map((item) => (
                      <button
                        key={item.number}
                        onClick={() => onSlideSelect(item.number)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 text-left group",
                          currentSlide === item.number
                            ? "bg-primary text-primary-foreground font-medium shadow-md"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground hover:pl-5"
                        )}
                      >
                        <span className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                          currentSlide === item.number
                            ? "bg-primary-foreground/20 text-primary-foreground"
                            : "bg-muted group-hover:bg-primary/10 group-hover:text-primary"
                        )}>
                          {item.number}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50 bg-gradient-to-t from-card to-transparent">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Total Slides: {slideMenuItems.length}</span>
          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {currentSlide} / {Math.max(...slideMenuItems.map(s => s.number))}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default SlideSidebar;
