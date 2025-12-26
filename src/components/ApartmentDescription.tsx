import { Bed, Trees, ChefHat, Thermometer, Wifi, Car } from "lucide-react";

const ApartmentDescription = () => {
  return (
    <section id="apartman" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={bellevue1}
                alt="Interiér apartmánu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Užijte si hory bez kompromisů
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nový, moderně vybavený, dvoupokojový apartmán ve druhém patře novostavby 
                s vlastním parkováním byl navržen s důrazem na jednoduchý moderní styl, 
                funkčnost a maximální pohodlí. Nabízí klidné prostředí pro odpočinek po 
                dni stráveném na horách, dostatek prostoru pro rodinu i příjemné posezení 
                na soukromé terase.
              </p>
              <p>
                Apartmán je plně vybaven pro pohodlný pobyt v každém ročním období. 
                Moderní kuchyně disponuje troubou, indukční varnou deskou, mikrovlnnou 
                troubou, lednicí s mrazákem, myčkou nádobí, kávovarem Nespresso, mixérem 
                a toustovačem. Součástí bytu je koupelna se sprchovým koutem a toaletou.
              </p>
              <p>
                Samozřejmostí je Wi-Fi připojení, kabelová televize a parkování přímo u objektu. 
                Pro aktivní hosty je k dispozici vlastní sklep pro uložení dvou kol. 
                Komfort pobytu zajišťuje také podlahové topení v celém apartmánu.
              </p>
            </div>

          {/* Features list */}
<div className="mt-8 grid grid-cols-2 gap-3">
  {[
    { text: "1 ložnice", icon: <Bed className="w-4 h-4" /> },
    { text: "Soukromá terasa", icon: <Trees className="w-4 h-4" /> },
    { text: "Plně vybavená kuchyně", icon: <ChefHat className="w-4 h-4" /> },
    { text: "Podlahové topení", icon: <Thermometer className="w-4 h-4" /> },
    { text: "Wi-Fi & TV", icon: <Wifi className="w-4 h-4" /> },
    { text: "Parkování", icon: <Car className="w-4 h-4" /> },
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

export default ApartmentDescription;
