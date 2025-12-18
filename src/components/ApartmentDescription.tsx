import interiorLiving from "@/assets/interior-living.jpg";
const ApartmentDescription = () => {
  return <section id="apartman" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img alt="Interiér apartmánu" className="w-full h-full object-cover" src="/lovable-uploads/1c99deac-6567-41b3-9bc4-80b036cc2ad2.jpg" />
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
              <p>Nový, moderně vybavený, dvoupokojový apartmán ve druhém patře novostavby s vlastním parkováním byl navržen s důrazem na jednoduchý moderní styl, funkčnost a maximální pohodlí. Nabízí klidné prostředí pro odpočinek po dni stráveném na horách, dostatek prostoru pro rodinu i příjemné posezení na soukromé terase.</p>
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
              {["1 ložnice", "Soukromá terasa", "Plně vybavená kuchyně", "Podlahové topení", "Wi-Fi & TV", "Parkování"].map((feature, index) => <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ApartmentDescription;