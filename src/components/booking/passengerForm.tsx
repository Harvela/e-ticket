import React, { useState } from 'react';

import PassengerInfo from './steps/passengerInfo';
import Payment1Step from './steps/payment1';
import Payment2Step from './steps/payment2';
import BookingSuccess from './steps/success';

const PassengerForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full rounded-[15px] bg-[#EAF0F0] p-8">
      {step === 1 && <PassengerInfo onNextStep={handleNextStep} />}
      {step === 2 && <Payment1Step onNextStep={handleNextStep} />}
      {step === 3 && <Payment2Step onNextStep={handleNextStep} />}
      {step === 4 && <BookingSuccess />}
    </div>
  );
};

export default PassengerForm;
