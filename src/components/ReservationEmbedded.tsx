import { useEffect } from "react";

const PrevioBooking = () => {
  useEffect(() => {
    // Toto dynamicky načte skript od Previa při startu stránky
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/v2/previo-booking.js"; // doplň přesnou URL od partnera
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Úklid při opuštění stránky
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      {/* První iframe - Hlavní rezervace */}
      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/..." // sem vlož celou tu dlouhou URL od partnera
        scrolling="no"
        frameBorder="0"
        width="100%"
        height="820"
        name="previo-booking-iframe"
        id="previo-booking-iframe"
        allowTransparency={true}
      />
      
      {/* Druhý iframe - Kupóny (pokud je chceš) */}
      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/...sh" // sem vlož tu druhou URL od partnera
        scrolling="no"
        frameBorder="0"
        width="100%"
        height="1050"
        name="previo-booking-iframe-coupon"
        id="previo-booking-iframe-coupon"
        allowTransparency={true}
      />
    </div>
  );
};

export default PrevioBooking;
