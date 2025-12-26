const ReservationEmbedded = () => {
  return (
    <div className="w-full space-y-12 bg-white p-4 rounded-xl shadow-sm">
      {/* Sekce s hlavní rezervací */}
      <div className="reservation-wrapper">
        <h3 className="text-xl font-semibold mb-4 text-center">Rezervace apartmánu</h3>
        <iframe
          src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
          width="100%"
          height="850"
          scrolling="yes" 
          frameBorder="0"
          allowTransparency={true}
          title="Previo Booking"
          className="w-full rounded-lg border border-gray-100"
        />
      </div>

      {/* Sekce pro dárkové poukazy */}
      <div className="coupon-wrapper pt-8 border-t border-gray-100">
        <h3 className="text-xl font-semibold mb-4 text-center">Dárkové poukazy</h3>
        <iframe
          src="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs"
          width="100%"
          height="600"
          scrolling="yes"
          frameBorder="0"
          allowTransparency={true}
          title="Previo Coupon"
          className="w-full rounded-lg border border-gray-100"
        />
      </div>
    </div>
  );
};

export default ReservationEmbedded;
