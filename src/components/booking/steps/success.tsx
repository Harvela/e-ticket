import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

const BookingSuccess: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-10">
      <h2 className="flex flex-row items-center gap-4 text-xl font-bold text-blue">
        <LuCheckCircle />
        PAIEMENT RECU
      </h2>

      <p className="text-md text-center text-black lg:w-[40%]">
        Merci beaucoup pour votre achat, le code de votre billet est EDEDFER.
        Veuillez vous presenter avec lors de votre voyage.
      </p>

      <div className="flex flex-row items-center gap-4 lg:gap-8">
        <button className="rounded-[5px] bg-blue px-2 py-1 text-sm text-white md:rounded-[10px] md:px-8 md:py-2">
          Imprimer le biller
        </button>

        <button className="rounded-[5px] border border-blue px-2 py-1 text-sm text-blue md:rounded-[10px] md:px-8 md:py-2">
          Creer un compte
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
