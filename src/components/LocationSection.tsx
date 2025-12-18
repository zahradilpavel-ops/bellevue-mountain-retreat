import { Snowflake, Sun, MapPin } from "lucide-react";
import landscapeSummer from "@/assets/landscape-summer.jpg";
import landscapeWinter from "@/assets/landscape-winter.jpg";

const LocationSection = () => {
  return (
    <section id="lokalita" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Poloha a aktivity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Abertamy se nachází v klidné části Krušných hor a nabízí ideální kombinaci 
            přírody, sportu a relaxace.
          </p>
        </div>

        {/* Season cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Winter */}
          <div className="group relative rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[16/10]">
              <img
                src={landscapeWinter}
                alt="Zimní aktivity"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Snowflake className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Zimní sezóna</span>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Lyžařské areály Plešivec a Klínovec na dosah. Běžkařská magistrála 
                přímo u apartmánu. Sněžná pohádka pro celou rodinu.
              </p>
            </div>
          </div>

          {/* Summer */}
          <div className="group relative rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[16/10]">
              <img
                src={landscapeSummer}
                alt="Letní aktivity"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Letní sezóna</span>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Husté sítě turistických a cyklistických tras. Krásná příroda 
                Krušných hor pro pěší výlety i horská kola.
              </p>
            </div>
          </div>
        </div>

        {/* Distance info */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-serif text-xl font-medium text-foreground">Vzdálenosti</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { place: "Skiareál Plešivec", distance: "2 km" },
              { place: "Klínovec", distance: "15 min" },
              { place: "Lázně Jáchymov", distance: "15 min" },
              { place: "Karlovy Vary", distance: "30 min" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card border border-border/50">
                <div className="font-serif text-2xl font-semibold text-primary mb-1">
                  {item.distance}
                </div>
                <div className="text-sm text-muted-foreground">{item.place}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
