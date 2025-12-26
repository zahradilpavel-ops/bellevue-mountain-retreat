import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Definujeme konfiguraci pro Previo skript
    window.previo_hotId = 766731;
    window.previo_lang = 'cs';
    window.previo_width = '100%';

    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/v2/previo-booking.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Při odchodu ze stránky skript uklidíme
      const oldScript = document.querySelector('script[src*="previo-booking.js"]');
      if (oldScript) oldScript.remove();
    };
  }, []);

  return (
    <div className="w-full min-h-[850px] bg-white rounded-lg overflow-hidden">
      {/* Tento div s ID "previo-booking-iframe" je to, co skript hledá.
          Skript do něj sám vloží správné okno.
      */}
      <div id="previo-booking-iframe"></div>
    </div>
  );
};

// Toto je nutné, aby TypeScript nehlásil chybu u window.previo_...
declare global {
  interface Window {
    previo_hotId: number;
    previo_lang: string;
    previo_width: string;
  }
}

export default ReservationEmbedded;
