import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Přesná kopie logiky načítání skriptu z funkčního ReservationSection.tsx
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://booking.previo.cz/iframe/"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-xl bg-white">
        <iframe
          title="Previo Booking System"
          // hotId zůstává 757641, showRoomType měníme na 926531 podle vašeho HTML testu
          src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="820"
          name="previo-booking-iframe"
          id="previo-booking-iframe"
          allowTransparency={true}
          className="rounded-xl"
        />
      </div>
      
      {/* Pokud chcete i kupóny, přidáme druhý iframe se stejným stylem */}
      <div className="mt-8 bg-card border border-border rounded-2xl p-4 md:p-6 shadow-xl bg-white">
        <iframe
          title="Previo Coupon System"
          src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="600"
          name="previo-booking-iframe-coupon"
          id="previo-booking-iframe-coupon"
          allowTransparency={true}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default ReservationEmbedded;
