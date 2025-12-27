import NavigationEN from "@/components/NavigationEN";
import HeroSectionEN from "@/components/HeroSectionEN";
import IntroductionSectionEN from "@/components/IntroductionSectionEN";
import GallerySection from "@/components/GallerySection"; // Ta zůstala stejná
import HighlightsSectionEN from "@/components/HighlightsSectionEN";
import ApartmentDescriptionEN from "@/components/ApartmentDescriptionEN";
import LocationSectionEN from "@/components/LocationSectionEN";
import ContactSectionEN from "@/components/ContactSectionEN";
import FooterEN from "@/components/FooterEN";

const IndexEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationEN />
      <HeroSectionEN />
      <IntroductionSectionEN />
      <GallerySection />
      <HighlightsSectionEN />
      <ApartmentDescriptionEN />
      <LocationSectionEN />
      <ContactSectionEN />
      <FooterEN />
    </div>
  );
};

export default IndexEN;
