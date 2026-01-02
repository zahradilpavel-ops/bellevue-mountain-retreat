import { Snowflake, Sun, MapPin, Utensils, Coffee, ShoppingBag, Map as MapIcon } from "lucide-react";
import abertamyWinter from "@/assets/abertamy-winter.jpg";
import okoli2 from "@/assets/okoli-2.jpg";

const LocationSectionEN = () => {
  const nearbyPlaces = [
    { 
      name: "nejencafé.", 
      dist: "4 min walk", 
      desc: "Premium coffee, homemade desserts, and a modern bistro atmosphere.", 
      icon: <Coffee className="w-4 h-4" /> 
    },
    { 
      name: "Abertamy Mountain Farm", 
      dist: "5 min walk", 
      desc: "Famous local cheese shop and organic beef from the Ore Mountains.", 
      icon: <ShoppingBag className="w-4 h-4" /> 
    },
    { 
      name: "Butcher's Bistro", 
      dist: "5 min walk", 
      desc: "Quality meat products and hot meals from their own local breeding.", 
      icon: <Utensils className="w-4 h-4" /> 
    },
    { 
      name: "Bistro Andrea", 
      dist: "8 min walk", 
      desc: "Traditional Czech cuisine and a pleasant seating area.", 
      icon: <Utensils className="w-4 h-4" /> 
    }
  ];

  // URL pro Google Mapu s adresou Pražská 515, Abertamy
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.4446487196016!2d12.818826777123957!3d50.37053599298811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0bdaf2bfbc383%3A0x72f5860ba3e4b41b!2zUHJhowZza8OhIDUxNSwgMzYyIDM1IEFiZXJ0YW15!5e0!3m2!1scs!2scz!4v1710000000000!5m2!1scs!2scz";

  return (
    <section id="location" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Location & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Abertamy is located in a peaceful part of the Ore Mountains and offers the 
            ideal combination of nature, sports, and relaxation.
          </p>
        </div>

        {/* Season cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Winter */}
          <div className="group relative rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[16/10]">
              <img
                src={abertamyWinter}
                alt="Winter activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Snowflake className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Winter Season</span>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Plešivec and Klínovec ski resorts within easy reach. Cross-country 
                skiing arterial track right by the apartment. A winter wonderland for the whole family.
              </p>
            </div>
          </div>

          {/* Summer */}
          <div className="group relative rounded-2xl overflow-hidden shadow-medium">
            <div className="aspect-[16/10]">
              <img
                src={okoli2}
                alt="Summer activities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">Summer Season</span>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Extensive network of hiking and cycling trails. The beautiful 
                nature of the Ore Mountains for hiking and mountain biking trips.
              </p>
            </div>
          </div>
        </div>

        {/* Distance info */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-serif text-xl font-medium text-foreground">Distances</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { place: "Plešivec Ski Resort", distance: "2 min" },
              { place: "Klínovec", distance: "15 min" },
              { place: "Jáchymov Spa", distance: "15 min" },
              { place: "Karlsbad", distance: "30 min" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="font-serif text-2xl font-semibold text-primary mb-1">
                  {item.distance}
                </div>
                <div className="text-sm text-muted-foreground">{item.place}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map & Nearby Tips */}
        <div className="max-w-6xl mx-auto pt-10 border-t border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-2xl font-medium">Where to find us</h3>
              </div>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map - Apartment Bellevue Abertamy"
                ></iframe>
              </div>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Pražská 515, 362 35 Abertamy, Czech Republic
              </p>
            </div>

            {/* Tips Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-2xl font-medium">Nearby Tips</h3>
              </div>
              <div className="grid gap-4">
                {nearbyPlaces.map((place, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {place.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-foreground">{place.name}</h4>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-muted px-2 py-0.5 rounded">
                          {place.dist}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {place.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSectionEN;
