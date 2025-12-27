import { Button } from "@/components/ui/button";
import heroImage from "@/assets/abertamy-winter.jpg";

const HeroSectionEN = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 opacity-0 animate-fade-up">
            Apartment Bellevue Abertamy
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            A brand-new, modern two-room apartment with a view of Plešivec, 
            offering comfortable accommodation for both summer and winter getaways. 
            Its prime location makes it the perfect base for exploring the Ore Mountains all year round.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" asChild>
              <a href="#contact">Book Now</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#apartment">View Apartment</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEN;
