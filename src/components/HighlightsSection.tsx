import { Wifi, Car, Coffee, Sun, Bath, Bike } from "lucide-react";

const highlights = [
  {
    icon: Coffee,
    title: "Plně vybavená kuchyně",
    description: "Trouba, indukční varná deska, myčka a kávovar Nespresso",
  },
  {
    icon: Wifi,
    title: "Vysokorychlostní Wi-Fi",
    description: "Kabelová televize pro pohodlné večery",
  },
  {
    icon: Car,
    title: "Parkování zdarma",
    description: "Vlastní parkovací místo přímo u objektu",
  },
  {
    icon: Sun,
    title: "Soukromá terasa",
    description: "Pro relaxaci pod širým nebem",
  },
  {
    icon: Bath,
    title: "Moderní koupelna",
    description: "Se sprchovým koutem a podlahovým topením",
  },
  {
    icon: Bike,
    title: "Úschovna kol",
    description: "Vlastní sklep pro 2 kola",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Co vás u nás čeká
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vše potřebné pro komfortní pobyt na jednom místě
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
