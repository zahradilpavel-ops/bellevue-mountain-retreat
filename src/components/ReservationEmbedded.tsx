import React from "react";

const ReservationEmbedded = () => {
  return (
    <section id="reservation" style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      {/* Hlavní rezervační iframe */}
      <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/…31" // nahraď svým Previo odkazem
          width="100%"
          height="820"
          frameBorder="0"
          scrolling="no"
          style={{ border: "none" }}
          allowTransparency
        />
      </div>

      {/* Doporučený doplňkový iframe (coupon / promo) */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <iframe
          title="Previo Booking Coupon"
          src="https://booking.previo.cz/…sh" // nahraď svým Previo odkazem
          width="100%"
          height="1050"
          frameBorder="0"
          scrolling="no"
          style={{ border: "none" }}
          allowTransparency
        />
      </div>
    </section>
  );
};

export default ReservationEmbedded;
