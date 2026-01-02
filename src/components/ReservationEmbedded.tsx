const ReservationEmbedded = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Box pro hlavní rezervaci - nyní s přímým vnořením */}
      <div className="flex flex-col bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
        <div className="p-8 text-center border-b border-slate-50">
          <h3 className="text-2xl font-bold text-foreground mb-2">Rezervace apartmánu</h3>
          <p className="text-muted-foreground">
            Vyberte si termín a rezervujte si pobyt přímo v našem systému.
          </p>
        </div>
        
        {/* Vložené okno rezervačního systému */}
        <div className="w-full bg-white" style={{ minHeight: "700px" }}>
          <iframe
            src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
            width="100%"
            height="700px"
            frameBorder="0"
            title="Rezervační formulář"
            className="w-full"
          ></iframe>
        </div>
      </div>

      {/* Box pro dárkové poukazy - zůstává jako odkaz */}
      <div className="flex flex-col items-center justify-center p-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
        <h4 className="text-xl font-semibold mb-4 text-slate-800">Dárkové poukazy</h4>
        <a 
          href="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline underline-offset-4"
        >
          Zakoupit dárkový poukaz online →
        </a>
      </div>
    </div>
  );
};

export default ReservationEmbedded;
