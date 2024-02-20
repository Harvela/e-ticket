import React from 'react';

import Input from '@/components/forms/input';

const PassengerInfoStep: React.FC<{ onNextStep: () => void }> = ({
  onNextStep,
}) => {
  return (
    <div className="h-[70vh] p-0 md:p-10">
      <h2 className="mb-6 text-[14px] uppercase text-blue">
        ETAPE 2/5 <span className="mx-4">|</span> PASSAGERS
      </h2>

      <h2 className="mb-6 text-[16px] font-bold uppercase text-blue">
        INFORMATIONS DU PASSAGER N 1
      </h2>
      <div className="flex w-full flex-col lg:flex-row lg:gap-16">
        <div className="w-full">
          <Input
            name="firstName"
            label="Nom"
            placeholder="Votre nom"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="sex"
            label="Sexe"
            placeholder="sexe"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
        </div>

        <div className="w-full">
          <Input
            name="secondName"
            label="Post-nom"
            placeholder="Votre post-nom"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="telephone"
            label="N. de telephone"
            placeholder="votre numero"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
        </div>

        <div className="w-full">
          <Input
            name="lastName"
            label="Prenom"
            placeholder="Votre prenom"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="email"
            type="mail"
            label="Address email"
            placeholder="example@gmail.com"
            style="mb-4 md:mb-0"
            onChange={() => {
              console.log('any');
            }}
          />
        </div>
      </div>
      <button
        className="mt-2 w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white lg:w-[17%]"
        onClick={onNextStep}
      >
        Continuer
      </button>
    </div>
  );
};

export default PassengerInfoStep;
