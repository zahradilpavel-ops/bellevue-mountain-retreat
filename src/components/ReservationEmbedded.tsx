import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Načtení skriptu Previa přesně podle funkčního HTML vzoru
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
      {/* Hlavní rezervační iframe - ID a Pokoj podle funkčního testu */}
      <iframe
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        width="100%"
        height="820"
        scrolling="no"
        allowTransparency={true}
        title="Previo Booking"
        className="w-full border-none"
      />

      {/* Iframe pro kupony - ID podle funkčního testu */}
      <iframe
        src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
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
