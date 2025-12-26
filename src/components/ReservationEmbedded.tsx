import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://booking.previo.cz/iframe/"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="reservation" style={{ marginTop: "3rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Rezervace
      </h2>

      {/* Hlavní iframe */}
      <iframe
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        width="100%"
        height="820"
        scrolling="no"
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
        title="Previo Coupon"
      />
      */}
    </section>
  );
};

export default ReservationEmbedded;
