interface SlideHeaderProps {
  slideNumber: number;
  title: string;
  subtitle?: string;
}

const SlideHeader = ({ slideNumber, title, subtitle }: SlideHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
          SLIDE {slideNumber}
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
      <div className="h-1 w-24 bg-highlight mt-4 rounded-full" />
    </div>
  );
};

export default SlideHeader;
