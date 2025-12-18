import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://booking.previo.cz/...';
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
    <section id="kontakt" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Rezervovat pobyt
            </h2>
            <p className="text-lg text-muted-foreground">
              Vyberte si termín a rezervujte si pobyt přímo online.
            </p>
          </div>

          <iframe
            title="Previo Booking System"
            src="https://booking.previo.cz/..."
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

export default ContactSection;
