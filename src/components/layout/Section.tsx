
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => (
  <div className={`py-8 sm:py-12 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">{children}</div>
  </div>
);
