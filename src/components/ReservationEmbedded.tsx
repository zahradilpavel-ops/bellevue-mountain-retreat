import React, { useEffect } from "react";

const ReservationEmbedded = () => {
  useEffect(() => {
    // Dynamické načtení Previo scriptu
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://booking.previo.cz/iframe/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reservation" style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Rezervace</h2>

      {/* Hlavní rezervační iframe */}
      <div style={{ width: "100%", overflow: "hidden", marginBottom: "2rem" }}>
        <iframe
          title="Previo Booking System"
          src="https://booking.previo.cz/?hotId=757641&showRoomType=926531"
          scrolling="no"
          frameBorder="0"
          width="100%"
          height="820"
          name="previo-booking-iframe"
          id="
