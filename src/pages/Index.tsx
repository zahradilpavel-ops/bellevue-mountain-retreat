import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import HighlightsSection from "@/components/HighlightsSection";
import GallerySection from "@/components/GallerySection";
import ApartmentDescription from "@/components/ApartmentDescription";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import ReservationEmbedded from "@/components/ReservationEmbedded";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Apartmán Bellevue Abertamy | Ubytování v Krušných horách</title>
        <meta
          name="description"
          content="Moderní dvoupokojový apartmán s výhledem na Plešivec. Ideální zázemí pro letní i zimní pobyty v Krušných horách. 2 km od skiareálu, běžkařská magistrála u domu."
        />
        <meta
          name="keywords"
          content="apartmán, ubytování, Krušné hory, Abertamy, Plešivec, lyžování, běžky, dovolená, pronájem"
        />
        <meta property="og:title" content="Apartmán Bellevue Abertamy | Ubytování v Krušných horách" />
        <meta
          property="og:description"
          content="Moderní dvoupokojový apartmán s výhledem na Plešivec. Ideální zázemí pro letní i zimní pobyty v Krušných horách."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bellevue-abertamy.cz" />
      </Helmet>

     <main>
        <Navigation />
        <HeroSection />
        <IntroductionSection />
        <HighlightsSection />
        <GallerySection />
        <ApartmentDescription />
        <LocationSection />
        {/* SEM VLOŽÍME REZERVACI */}
        <section id="rezervace" className="py-20 bg-slate-50">
           <ReservationEmbedded />
        </section>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
