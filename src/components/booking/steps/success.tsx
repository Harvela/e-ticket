import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

const BookingSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="flex flex-row items-center gap-4 text-lg font-bold text-blue">
        <LuCheckCircle />
        PAIEMENT RECU
      </h2>

      <p className="text-md w-[50%] text-center text-black">
        Merci beaucoup pour votre achat, le code de votre billet est EDEDFER.
        Veuillez vous presenter avec lors de votre voyage.
      </p>

      <div className="flex flex-row items-center gap-8">
        <button className="rounded-[10px] bg-blue px-8 py-2 text-sm text-white">
          Imprimer le biller
        </button>

        <button className="rounded-[10px] border border-blue px-8 py-2 text-sm text-blue">
          Creer un compte
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
