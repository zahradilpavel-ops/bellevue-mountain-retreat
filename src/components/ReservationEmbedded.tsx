import React from "react";

const ReservationEmbedded = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden min-h-[600px]">
        {/* Vložený iframe s přímým odkazem na Previo */}
        <iframe
          src="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs"
          width="100%"
          height="800"
          frameBorder="0"
          title="Rezervační systém Previo"
          style={{ border: 0, minHeight: '600px' }}
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Pojistka: Odkaz pro přímé otevření, kdyby prohlížeč iframe blokoval */}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Nezobrazuje se kalendář správně? 
          <a 
            href="https://booking.previo.cz/?hotId=757641&showRoomType=926531&lang=cs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 text-primary underline"
          >
            Otevřít rezervaci v novém okně
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReservationEmbedded;
