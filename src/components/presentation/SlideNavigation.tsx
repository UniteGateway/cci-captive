import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentSlide === 1}
          className="flex items-center gap-2 px-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Slide <span className="font-semibold text-foreground">{currentSlide}</span> of{" "}
            <span className="font-semibold text-foreground">{totalSlides}</span>
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }, (_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i + 1 === currentSlide ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="flex items-center gap-2 px-6 bg-primary hover:bg-primary/90"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation;
