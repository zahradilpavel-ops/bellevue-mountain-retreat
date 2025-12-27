import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const IndexEN = () => {
  return (
    <>
      <Helmet>
        <title>Apartment Bellevue Abertamy | Accommodation in Ore Mountains</title>
      </Helmet>

      <main>
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">English Version Under Construction</h1>
          <p className="mt-4 text-gray-600">This page will soon be available in English.</p>
          <a href="/" className="mt-10 inline-block text-blue-600 underline">Back to Czech version</a>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default IndexEN;
