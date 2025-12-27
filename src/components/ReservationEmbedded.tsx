import React from "react";

const ReservationEmbedded = () => {
  return (
    <section id="rezervace" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">Rezervujte si pobyt</h2>
        <div
          className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: `
              <script type="text/javascript" src="https://booking.previo.cz/iframe/"></script>
              <iframe
                title="Previo Booking System"
                src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
                width="100%"
                height="900"
                frameborder="0"
                scrolling="no"
                id="previo-booking-iframe"
              ></iframe>
              `,
          }}
        />
      </div>
    </section>
  );
};

export default ReservationEmbedded;
