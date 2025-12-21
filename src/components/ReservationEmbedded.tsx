import React, { useEffect, useState } from "react";

const ReservationEmbedded = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://booking.previo.cz/iframe/"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://booking.previo.cz/iframe/";
      script.async = true;

      script.onload = () => setScriptLoaded(true);
      script.onerror = () => setScriptError(true);

      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  // Fallback, pokud script selže
  if (scriptError) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        Rezervační systém se nepodařilo načíst. Prosím zkuste to později nebo kontaktujte správce webu.
      </div>
    );
  }

  // Loader během načítání scriptu
  if (!scriptLoaded) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        Načítám rezervační formulář…
      </div>
    );
  }

  return (
    <section id="reservation" style={{ marginTop: "3rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      {/* Hlavní rezervační iframe */}
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
