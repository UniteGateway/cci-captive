import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SlideContainer from "./SlideContainer";
import SlideNavigation from "./SlideNavigation";
import SlideSidebar from "./SlideSidebar";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import uniteLogo from "@/assets/unite-logo.png";
import cciLogo from "@/assets/cci-logo.png";

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
];

const Presentation = () => {
  const [searchParams] = useSearchParams();
  const initialSlide = parseInt(searchParams.get("slide") || "1", 10);
  const [currentSlide, setCurrentSlide] = useState(
    initialSlide >= 1 && initialSlide <= slides.length ? initialSlide : 1
  );

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= slides.length) {
      setCurrentSlide(slideNumber);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide - 1];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <SlideSidebar currentSlide={currentSlide} onSlideSelect={goToSlide} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={cciLogo} alt="CCI Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <h1 className="text-lg font-semibold font-display">CCI Solar Power Proposal</h1>
                <p className="text-sm opacity-80">Board Presentation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm opacity-80">10 MW Solar BOOT</p>
                <p className="text-xs opacity-60">Powered by</p>
              </div>
              <img src={uniteLogo} alt="Unite Solar Logo" className="h-10 w-auto bg-white rounded-lg px-2 py-1" />
            </div>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 pt-8 pb-24 overflow-y-auto">
          <SlideContainer slideKey={currentSlide}>
            <CurrentSlideComponent />
          </SlideContainer>
        </main>

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
    </div>
  );
};

export default Presentation;
