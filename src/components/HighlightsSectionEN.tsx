import { Wifi, Car, Coffee, Sun, Bath, Bike } from "lucide-react";

const highlights = [
  {
    icon: Coffee,
    title: "Fully Equipped Kitchen",
    description: "Oven, induction hob, dishwasher, and Nespresso coffee machine",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Cable TV included for cozy evenings",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Private parking space directly at the building",
  },
  {
    icon: Sun,
    title: "Private Terrace",
    description: "For outdoor relaxation under the open sky",
  },
  {
    icon: Bath,
    title: "Modern Bathroom",
    description: "With walk-in shower and underfloor heating",
  },
  {
    icon: Bike,
    title: "Storage Room",
    description: "Private cellar for bikes or ski equipment",
  },
];

const HighlightsSectionEN = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Everything for your comfort
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All the essentials for a perfect stay in one place
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

export default HighlightsSectionEN;
