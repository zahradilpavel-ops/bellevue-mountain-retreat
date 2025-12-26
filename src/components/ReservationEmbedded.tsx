"use client";

import Script from "next/script";

const ReservationEmbedded = () => {
  return (
    <section id="reservation" style={{ marginTop: "3rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Rezervace
      </h2>

      {/* Previo script – stejně jako v HTML */}
      <Script
        src="https://booking.previo.cz/iframe/"
        strategy="beforeInteractive"
      />

      {/* Hlavní iframe */}
      <iframe
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        width="100%"
        height="820"
        scrolling="no"
        allowTransparency
        title="Previo Booking"
        style={{
          border: "none",
          display: "block",
          margin: "0 auto",
          maxWidth: "100%",
        }}
      />

      {/* Kupony – až PO potvrzení, že funguje hlavní iframe */}
      {/* 
      <iframe
        src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
        width="100%"
        height="1050"
        scrolling="no"
        allowTransparency
        title="Previo Coupon"
      />
      */}
    </section>
  );
};

export default ReservationEmbedded;
