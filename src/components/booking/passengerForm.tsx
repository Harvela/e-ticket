'use client';

import React, { useState } from 'react';

import Flights from './steps/flights';
import PassengerInfo from './steps/passengerInfo';
import Payment1Step from './steps/payment1';
import Payment2Step from './steps/payment2';
import BookingSuccess from './steps/success';

const PassengerForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="mt-8 w-full rounded-[15px] bg-[#EAF0F0] p-6">
      {step === 1 && <Flights onNextStep={handleNextStep} />}
      {step === 2 && (
        <PassengerInfo
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
        />
      )}
      {step === 3 && (
        <Payment1Step onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
      )}
      {step === 4 && <Payment2Step onNextStep={handleNextStep} />}
      {step === 5 && <BookingSuccess />}
    </div>
  );
};

export default PassengerForm;
