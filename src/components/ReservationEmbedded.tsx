import { useEffect } from "react";

const ReservationSection = () => {
  useEffect(() => {
    // 1. Změna: Skript musí končit lomítkem, aby ho Previo správně inicializovalo
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://booking.previo.cz/iframe/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ... tvůj textový obsah ... */}

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-xl">
            <iframe
              title="Previo Booking System"
              /* 2. Změna: URL musí směřovat na základní adresu s hotId */
              src="https://booking.previo.cz/?hotId=766731&lang=cs"
              scrolling="no"
              frameBorder="0"
              width="100%"
              height="820"
              name="previo-booking-iframe"
              id="previo-booking-iframe"
              allowTransparency={true}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
