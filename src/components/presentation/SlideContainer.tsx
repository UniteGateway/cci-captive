import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: ReactNode;
  slideKey: number;
}

const SlideContainer = ({ children, slideKey }: SlideContainerProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [slideKey]);

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-120px)] w-full max-w-5xl mx-auto px-8 py-6",
        isAnimating && "animate-slide-in"
      )}
    >
      {children}
    </div>
  );
};

export default SlideContainer;
