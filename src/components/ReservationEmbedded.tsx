import React, { useEffect, useState } from "react";

const ReservationEmbedded = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://booking.previo.cz/iframe/"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://booking.previo.cz/iframe/";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  if (!scriptLoaded) {
    return <div>Načítám rezervační formulář…</div>;
  }

  return (
    <section id="reservation" style={{ marginTop: "3rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531"
        width="100%"
        height="820"
        frameBorder="0"
        scrolling="no"
        allowTransparency
      />

      <iframe
        title="Previo Booking Coupon"
        src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash"
        width="100%"
        height="1050"
        frameBorder="0"
        scrolling="no"
        allowTransparency
      />
    </section>
  );
};

export default ReservationEmbedded;
