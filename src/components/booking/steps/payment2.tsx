import React from 'react';

import Input from '@/components/forms/input';

const Payment2Step: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div>
      <h2 className="mb-6 text-[14px] font-bold text-blue">PAIEMENT</h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-row items-center gap-4 lg:gap-16">
          <Input
            name="method"
            label="Moyen de paiement"
            placeholder="Carte"
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="number"
            label="Numero de la carte"
            placeholder="0987654678"
            onChange={() => {
              console.log('any');
            }}
          />
        </div>
        <button
          className="rounded-[10px] bg-blue px-8 py-2 text-sm text-white"
          onClick={onNextStep}
        >
          CONFIRMER
        </button>
      </div>
    </div>
  );
};

export default Payment2Step;
