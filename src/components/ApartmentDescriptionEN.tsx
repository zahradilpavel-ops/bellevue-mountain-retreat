import { Bed, Trees, ChefHat, Thermometer, Wifi, Car, Square, Users } from "lucide-react";
import bellevue1 from "@/assets/bellevue-1.jpg";

const ApartmentDescriptionEN = () => {
  return (
    <section id="apartment" className="py-20 lg:py-28 bg-card scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={bellevue1}
                alt="Apartment Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Mountain living without compromise
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This brand-new, modern 50 m², one-bedroom apartment on the second floor of a newly 
                constructed building with private parking has been designed with an emphasis 
                on simple modern style, functionality, and maximum comfort. It offers a 
                peaceful environment to relax for up to **4 guests**, with plenty of space 
                for the family and a pleasant seating area on a private terrace.
              </p>
              <p>
                The apartment is fully equipped for a comfortable stay in any season. 
                The modern kitchen features an oven, induction hob, microwave, 
                fridge-freezer, dishwasher, washing machine, Nespresso coffee machine, blender, and toaster. 
                The apartment includes a bathroom with a walk-in shower and toilet.
              </p>
              <p>
                Standard amenities include Wi-Fi, cable TV, and parking directly at the building. 
                For active guests, a private cellar is available for storing bikes or skis. 
                Your comfort is further enhanced by underfloor heating throughout the entire apartment.
              </p>
            </div>

            {/* Features list */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { text: "50 m²", icon: <Square className="w-4 h-4" /> },
                { text: "4 Persons", icon: <Users className="w-4 h-4" /> },
                { text: "1 Bedroom", icon: <Bed className="w-4 h-4" /> },
                { text: "Private Terrace", icon: <Trees className="w-4 h-4" /> },
                { text: "Equipped Kitchen", icon: <ChefHat className="w-4 h-4" /> },
                { text: "Underfloor Heating", icon: <Thermometer className="w-4 h-4" /> },
                { text: "Wi-Fi & TV", icon: <Wifi className="w-4 h-4" /> },
                { text: "On-site Parking", icon: <Car className="w-4 h-4" /> },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground tracking-tight">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDescriptionEN;
