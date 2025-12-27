import { useEffect } from "react";

const ContactSectionEN = () => {
  useEffect(() => {
    const script = document.createElement('script');
    // Předpokládám, že zde v originálu máte funkční link na Previo iframe JS
    script.src = 'https://booking.previo.cz/iframe/'; 
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Book Your Stay
            </h2>
            <p className="text-lg text-muted-foreground">
              Select your dates and book your stay directly online.
            </p>
          </div>

          <iframe
            title="Previo Booking System"
            // Ujistěte se, že v src je lang=en
            src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=en"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="900"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEN;
