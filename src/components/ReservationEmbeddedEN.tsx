const ReservationEmbeddedEN = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Box for main booking */}
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-border shadow-xl text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Book the Apartment</h3>
          <p className="text-muted-foreground">
            To view available dates and current prices, please proceed to our secure booking system.
          </p>
        </div>
        
        <a 
          href="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          Open Booking Form
        </a>
      </div>

      {/* Box for gift vouchers */}
      <div className="flex flex-col items-center justify-center p-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
        <h4 className="text-xl font-semibold mb-4 text-slate-800">Gift Vouchers</h4>
        <a 
          href="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline underline-offset-4"
        >
          Purchase a gift voucher online →
        </a>
      </div>
    </div>
  );
};

export default ReservationEmbeddedEN;
