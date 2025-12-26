"use client";

import { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://booking.previo.cz/iframe/iframe.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://booking.previo.cz/iframe/iframe.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="reservation">
      <iframe
        title="Previo Booking System"
        src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
        id="previo-booking-iframe"
        name="previo-booking-iframe"
        width="100%"
        height="820"
        frameBorder="0"
        scrolling="no"
      />
    </section>
  );
};

export default ReservationEmbedded;
