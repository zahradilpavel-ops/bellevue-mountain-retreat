import { useState } from "react";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorKitchen from "@/assets/interior-kitchen.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import landscapeSummer from "@/assets/landscape-summer.jpg";
import landscapeWinter from "@/assets/landscape-winter.jpg";
import heroWinter from "@/assets/hero-winter.jpg";

const images = [
  { src: interiorLiving, alt: "Obývací pokoj", category: "Interiér" },
  { src: interiorKitchen, alt: "Kuchyně", category: "Interiér" },
  { src: interiorBedroom, alt: "Ložnice", category: "Interiér" },
  { src: heroWinter, alt: "Exteriér budovy v zimě", category: "Exteriér" },
  { src: landscapeSummer, alt: "Krušné hory v létě", category: "Okolí" },
  { src: landscapeWinter, alt: "Běžkařská trasa", category: "Okolí" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Galerie
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prohlédněte si náš apartmán a jeho okolí
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                  {image.category}
                </span>
                <p className="text-primary-foreground font-medium mt-1">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zvětšený obrázek"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-elevated"
          />
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 transition-colors flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
