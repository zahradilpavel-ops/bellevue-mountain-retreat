import React, { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Dynamické načtení Previo scriptu
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://booking.previo.cz/…pt"; // přesně podle kódu od partnera
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reservation" style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      {/* Hlavní rezervační iframe */}
      <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/…31" // přesně podle kódu od partnera
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

      {/* Doplnkový iframe (coupon / promo) */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/…sh" // přesně podle kódu od partnera
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
    </section>
  );
};

export default ReservationEmbedded;
