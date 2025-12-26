import { useEffect, useRef } from "react";

const ReservationEmbedded = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    // Zabraníme dvojitému načítání v React StrictMode
    if (isLoaded.current) return;
    
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.type = "text/javascript";
    script.async = true;
    
    // Skript vložíme až po krátké pauze, aby měl iframe čas se "usadit"
    const timeout = setTimeout(() => {
      document.body.appendChild(script);
      isLoaded.current = true;
    }, 500);

    return () => {
      clearTimeout(timeout);
      const existingScript = document.querySelector('script[src="https://booking.previo.cz/iframe/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full space-y-8 bg-white p-4 rounded-xl shadow-inner">
      {/* Hlavní rezervace */}
      <div className="min-h-[820px]">
        <iframe
          src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
          width="100%"
          height="820"
          scrolling="no"
          frameBorder="0"
          allowTransparency={true}
          title="Previo Booking"
          name="previo-booking-iframe"
          id="previo-booking-iframe"
          className="w-full"
        />
      </div>

      {/* Kupóny */}
      <div className="min-h-[1050px]">
        <iframe
          src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
          width="100%"
          height="1050"
          scrolling="no"
          frameBorder="0"
          allowTransparency={true}
          title="Previo Coupon"
          name="previo-booking-iframe-coupon"
          id="previo-booking-iframe-coupon"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ReservationEmbedded;
