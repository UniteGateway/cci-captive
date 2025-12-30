import { Link } from "react-router-dom";
import { Home, ChevronDown, ChevronRight, FileText, BarChart3, Scale, CheckCircle, Sun } from "lucide-react";
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
  { number: 12, title: "BOOT Transfer", group: "Analysis" },
  { number: 10, title: "Board Recommendation", group: "Conclusion" },
];

const groupIcons: Record<string, React.ReactNode> = {
  Overview: <FileText className="h-4 w-4" />,
  Options: <BarChart3 className="h-4 w-4" />,
  Alternatives: <Scale className="h-4 w-4" />,
  Analysis: <BarChart3 className="h-4 w-4" />,
  Conclusion: <CheckCircle className="h-4 w-4" />,
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
    <aside className="w-64 min-w-[256px] bg-card border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-border shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
            <Sun className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-sm text-foreground">Solar Proposal</h2>
            <p className="text-xs text-muted-foreground">CCI Limited</p>
          </div>
        </div>
        
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Slide Menu - Scrollable */}
      <nav className="flex-1 overflow-y-auto p-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
          Slides
        </p>
        
        <div className="space-y-1">
          {groups.map((group) => {
            const isExpanded = expandedGroups.includes(group);
            const groupSlides = slideMenuItems.filter((item) => item.group === group);
            const hasActiveSlide = groupSlides.some((item) => item.number === currentSlide);

            return (
              <div key={group}>
                <button
                  onClick={() => toggleGroup(group)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    hasActiveSlide
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {groupIcons[group]}
                    {group}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>

                {isExpanded && (
                  <div className="mt-1 ml-4 space-y-0.5">
                    {groupSlides.map((item) => (
                      <button
                        key={item.number}
                        onClick={() => onSlideSelect(item.number)}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-left",
                          currentSlide === item.number
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        <span className={cn(
                          "w-5 h-5 rounded text-xs font-medium flex items-center justify-center shrink-0",
                          currentSlide === item.number
                            ? "bg-primary-foreground/20"
                            : "bg-muted"
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
      <div className="p-3 border-t border-border shrink-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
          <span>{slideMenuItems.length} slides</span>
          <span className="px-2 py-1 rounded bg-secondary font-medium">
            {currentSlide} / {Math.max(...slideMenuItems.map(s => s.number))}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default SlideSidebar;
