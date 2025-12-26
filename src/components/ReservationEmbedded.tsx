import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Dynamické načtení skriptu Previa
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/v2/previo-booking.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Úklid při odstranění komponenty
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full space-y-8">
      {/* Hlavní rezervační iframe */}
      <div className="previo-iframe-container">
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/iframe/v2/?hotId=766731"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="820"
          name="previo-booking-iframe"
          id="previo-booking-iframe"
          allowTransparency={true}
          style={{ border: "none" }}
        />
      </div>

      {/* Iframe pro kupóny/akce */}
      <div className="previo-coupon-container">
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/iframe/v2/?hotId=766731&hash=flash"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="1050"
          name="previo-booking-iframe-coupon"
          id="previo-booking-iframe-coupon"
          allowTransparency={true}
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default ReservationEmbedded;
