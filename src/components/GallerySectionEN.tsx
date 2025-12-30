import { useState } from "react";
import bellevue1 from "@/assets/bellevue-1.jpg";
import bellevue5 from "@/assets/bellevue-5.jpg";
import bellevue3 from "@/assets/bellevue-3.jpg";
import bellevueKoupelna2 from "@/assets/bellevue-koupelna-2.jpg";
import abertamyWinter from "@/assets/abertamy-winter.jpg";
import abertamySummer from "@/assets/abertamy-summer.jpg";
import okoli2 from "@/assets/okoli-2.jpg";
import okoli1 from "@/assets/okoli-1.jpg";
import okoli5 from "@/assets/okoli-5.jpg";
import okoli6 from "@/assets/okoli-6.jpg";
import abertamyParking from "@/assets/abertamy-parking.jpg";
import abertamySklep from "@/assets/abertamy-sklep.jpg";

const images = [
  { src: bellevue1, alt: "Living room", category: "Interior" },
  { src: bellevue5, alt: "Kitchen", category: "Interior" },
  { src: bellevue3, alt: "Bedroom", category: "Interior" },
  { src: bellevueKoupelna2, alt: "Bathroom", category: "Interior" },
  { src: abertamyWinter, alt: "Building in winter", category: "Exterior" },
  { src: abertamySummer, alt: "Building in summer", category: "Exterior" },
  { src: okoli2, alt: "Above the clouds", category: "Surroundings" },
  { src: okoli1, alt: "Autumn view", category: "Surroundings" },
  { src: okoli5, alt: "Forest lake", category: "Surroundings" },
  { src: okoli6, alt: "Mountain sunrise", category: "Surroundings" },
  { src: abertamyParking, alt: "Parking", category: "Facilities" },
  { src: abertamySklep, alt: "Shared bike/ski cellar", category: "Facilities" },
];

const GallerySectionEN = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our apartment and its beautiful surroundings
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
            alt="Enlarged view"
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

export default GallerySectionEN;
