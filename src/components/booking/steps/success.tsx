import React from 'react';
import { LuCheckCircle } from 'react-icons/lu';

const BookingSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="flex flex-row items-center gap-4 text-lg font-bold text-blue">
        <LuCheckCircle />
        PAIEMENT RECU
      </h2>

      <p className="text-md text-center text-black lg:w-[50%]">
        Merci beaucoup pour votre achat, le code de votre billet est EDEDFER.
        Veuillez vous presenter avec lors de votre voyage.
      </p>

      <div className="flex flex-row items-center gap-4 lg:gap-8">
        <button className="rounded-[10px] bg-blue px-4 py-2 text-sm text-white lg:px-8">
          Imprimer le biller
        </button>

        <button className="rounded-[10px] border border-blue px-4 py-2 text-sm text-blue lg:px-8">
          Creer un compte
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
