import React from "react";

const ReservationEmbedded = () => {
  return (
    <section id="reservation" style={{ marginTop: "3rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      {/* Hlavní Previo iframe */}
      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        width="100%"
        height="820"
        frameBorder="0"
        scrolling="no"
        allowTransparency
        style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
      />

      {/* Doplnkový iframe pro kupony */}
      <iframe
        title="Previo Booking Coupon"
        src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
        width="100%"
        height="1050"
        frameBorder="0"
        scrolling="no"
        allowTransparency
        style={{ maxWidth: "100%", display: "block", margin: "2rem auto 0 auto" }}
      />
    </section>
  );
};

export default ReservationEmbedded;
