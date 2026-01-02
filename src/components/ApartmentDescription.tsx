import { Check, Square, Users, Bed, Coffee, Wifi, Tv } from "lucide-react";

const features = [
  { icon: <Square className="w-5 h-5 text-primary" />, text: "Plocha 50 m²" },
  { icon: <Users className="w-5 h-5 text-primary" />, text: "Kapacita pro 4 osoby" },
  { icon: <Bed className="w-5 h-5 text-primary" />, text: "Oddělená ložnice" },
  { icon: <Coffee className="w-5 h-5 text-primary" />, text: "Vybavená kuchyně" },
  { icon: <Wifi className="w-5 h-5 text-primary" />, text: "Wi-Fi zdarma" },
  { icon: <Tv className="w-5 h-5 text-primary" />, text: "Smart TV" },
];

const ApartmentDescription = () => {
  return (
    <section id="apartman" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Váš domov v srdci Krušných hor
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nabízíme moderně zrekonstruovaný apartmán o rozloze **50 m²**, který poskytuje veškerý komfort pro vaši dovolenou. Apartmán je ideálně řešen pro **4 osoby**, ať už plánujete rodinný výlet nebo aktivní dovolenou s přáteli.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-foreground/80">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/gallery/1.jpg" 
                alt="Interiér apartmánu" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDescription;
