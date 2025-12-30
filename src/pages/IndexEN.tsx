import { Helmet } from "react-helmet-async";
import NavigationEN from "@/components/NavigationEN";
import HeroSectionEN from "@/components/HeroSectionEN";
import IntroductionSectionEN from "@/components/IntroductionSectionEN";
import GallerySectionEN from "@/components/GallerySectionEN"; // Ověř, že se soubor jmenuje přesně takto
import HighlightsSectionEN from "@/components/HighlightsSectionEN";
import ApartmentDescriptionEN from "@/components/ApartmentDescriptionEN";
import LocationSectionEN from "@/components/LocationSectionEN";
import ContactSectionEN from "@/components/ContactSectionEN";
import FooterEN from "@/components/FooterEN";

const IndexEN = () => {
  return (
    <>
      <Helmet>
        <title>Apartment Bellevue Abertamy | Accommodation in Ore Mountains</title>
        <meta name="description" content="Modern two-room apartment with a view of Plešivec. Ideal base for summer and winter stays." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <NavigationEN />
        <HeroSectionEN />
        <IntroductionSectionEN />
        
        {/* Tato komponenta musí existovat v src/components/GallerySectionEN.tsx */}
        <GallerySectionEN /> 
        
        <HighlightsSectionEN />
        <ApartmentDescriptionEN />
        <LocationSectionEN />
        <ContactSectionEN />
        <FooterEN />
      </div>
    </>
  );
};

export default IndexEN;
