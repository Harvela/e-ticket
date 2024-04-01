import React, { useRef } from 'react';
import { LuCheckCircle } from 'react-icons/lu';
import { useReactToPrint } from 'react-to-print';

import { TicketPage } from '@/templates/Ticket';

const BookingSuccess: React.FC = () => {
  const componentRef = useRef<any>();
  const [isPrinting, setIsPrinting] = React.useState(false);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => setIsPrinting(true),
    onAfterPrint: () => setIsPrinting(false),
  });

  // opacity-0 absolute top-[-20000px]

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-10">
      <div
        className={`absolute ${
          isPrinting ? 'top-0  z-[20000] min-h-[100vh]' : 'top-[-3000px]'
        }`}
      >
        <div ref={componentRef}>
          <TicketPage />
        </div>
      </div>
      <h2 className="flex flex-row items-center gap-4 text-xl font-bold text-blue">
        <LuCheckCircle />
        PAIEMENT RECU
      </h2>

      <p className="text-md text-center text-black lg:w-2/5">
        Merci beaucoup pour votre achat, Telecharger ou imprimer votre billet.
        Vous allez aussi le recevoir par email. Veuillez vous presenter avec
        lors de votre voyage.
      </p>

      <div className="flex flex-row items-center gap-4 lg:gap-8">
        <button
          className="rounded-[5px] bg-blue px-2 py-1 text-sm text-white md:rounded-[10px] md:px-8 md:py-2"
          onClick={() => {
            handlePrint();
            localStorage.removeItem('flightData');
          }}
        >
          Imprimer le biller
        </button>

        <a
          href="/login"
          target="_blank"
          className="rounded-[5px] border border-blue px-2 py-1 text-sm text-blue md:rounded-[10px] md:px-8 md:py-2"
        >
          Se connecter ou creer un compte
        </a>
      </div>
    </div>
  );
};

export default BookingSuccess;
