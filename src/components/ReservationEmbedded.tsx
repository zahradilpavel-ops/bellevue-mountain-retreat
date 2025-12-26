import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Načtení skriptu Previa s lomítkem na konci
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Úklid při odstranění komponenty
      const existingScript = document.querySelector('script[src="https://booking.previo.cz/iframe/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full space-y-8 bg-white p-4 rounded-xl">
      {/* Hlavní rezervační iframe s parametry hotId a showRoomType */}
      <iframe
        src="https://booking.previo.cz/?hotId=766731&showRoomType=926531&lang=cs"
        width="100%"
        height="820"
        scrolling="no"
        allowTransparency={true}
        title="Previo Booking"
        className="w-full border-none"
      />

      {/* Iframe pro kupony - ID zůstává stejné */}
      <iframe
        src="https://booking.previo.cz/?hotId=766731&showTabs=coupon&couponType=cash&lang=cs"
        width="100%"
        height="1050"
        scrolling="no"
        allowTransparency={true}
        title="Previo Coupon"
        className="w-full border-none"
      />
    </div>
  );
};

export default ReservationEmbedded;
