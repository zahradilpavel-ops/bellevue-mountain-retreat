import React from "react";

const ReservationEmbedded = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl border border-border shadow-2xl overflow-hidden">
        {/* Horní lišta boxu */}
        <div className="p-6 border-b border-border bg-slate-50 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Rezervace pobytu</h3>
          <p className="text-muted-foreground mt-2">
            Vyberte si termín přímo v našem kalendáři
          </p>
        </div>
        
        {/* Kontejner pro Iframe Previa */}
        <div className="relative w-full h-[700px] md:h-[800px] bg-white">
          <iframe 
            src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Rezervační formulář Previo"
            className="w-full h-full"
            loading="lazy"
            allow="payment"
          ></iframe>
        </div>

        {/* Spodní lišta s dárkovými poukazy */}
        <div className="p-6 bg-slate-50 border-t border-border text-center">
          <p className="text-sm text-slate-600 mb-2">Chcete někoho potěšit dárkovým poukazem?</p>
          <a 
            href="https://booking.previo.cz/?hotId=757641&showTabs=coupon&couponType=cash&lang=cs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Koupit dárkový poukaz online →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReservationEmbedded;
