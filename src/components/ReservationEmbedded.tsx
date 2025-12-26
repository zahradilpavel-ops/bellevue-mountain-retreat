import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Načtení Previo iframe skriptu – nutné pro funkčnost
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.type = "text/javascript";
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
    <section
      id="reservation"
      style={{ marginTop: "3rem", textAlign: "center" }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Rezervace
      </h2>

      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        scrolling="no"
        frameBorder="0"
        width="100%"
        height="820"
        id="previo-booking-iframe"
        name="previo-booking-iframe"
        allowTransparency
        style={{
          maxWidth: "100%",
          display: "block",
          margin: "0 auto",
        }}
      />
    </section>
  );
};

export default ReservationEmbedded;
