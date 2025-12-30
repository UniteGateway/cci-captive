import { Link } from "react-router-dom";
import { Home, ChevronDown, ChevronRight, FileText, BarChart3, Scale, CheckCircle } from "lucide-react";
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
    <aside className="w-64 bg-card border-r border-border h-full overflow-y-auto">
      {/* Home Link */}
      <div className="p-4 border-b border-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Slide Menu */}
      <nav className="p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Presentation Slides
        </p>
        
        {groups.map((group) => {
          const isExpanded = expandedGroups.includes(group);
          const groupSlides = slideMenuItems.filter((item) => item.group === group);
          const hasActiveSlide = groupSlides.some((item) => item.number === currentSlide);

          return (
            <div key={group} className="mb-2">
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
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {isExpanded && (
                <div className="ml-4 mt-1 space-y-1">
                  {groupSlides.map((item) => (
                    <button
                      key={item.number}
                      onClick={() => onSlideSelect(item.number)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left",
                        currentSlide === item.number
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
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
      </nav>
    </aside>
  );
};

export default SlideSidebar;
