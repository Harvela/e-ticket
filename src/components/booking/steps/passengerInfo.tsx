import React from 'react';

import Input from '@/components/forms/input';

const PassengerInfoStep: React.FC<{ onNextStep: () => void }> = ({
  onNextStep,
}) => {
  return (
    <div>
      <h2 className="mb-6 text-[14px] uppercase text-blue">ETAPE 2</h2>

      <h2 className="mb-6 text-[16px] font-bold uppercase text-blue">
        INFORMATIONS DU PASSAGER
      </h2>
      <div className="flex w-full flex-col lg:flex-row lg:gap-16">
        <div className="w-full">
          <Input
            name="firstName"
            label="Nom"
            placeholder="Votre nom"
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="sex"
            label="Sexe"
            placeholder="sexe"
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
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="telephone"
            label="N. de telephone"
            placeholder="votre numero"
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
            onChange={() => {
              console.log('any');
            }}
          />
          <Input
            name="email"
            type="mail"
            label="Address email"
            placeholder="example@gmail.com"
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
