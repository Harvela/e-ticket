import { Button, Modal } from 'flowbite-react';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@/components/forms/input';
import Select from '@/components/forms/select';

const PassengerInfoStep: React.FC<{
  onNextStep: () => void;
  onPrevStep: () => void;
}> = ({ onNextStep, onPrevStep }) => {
  const { t } = useTranslation('common');
  const { register, handleSubmit, setValue, reset } = useForm<any>();

  const [steps, setSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservation') || '{}');
    setSteps(Number.parseInt(data.params.passengerNumber || '1', 10));
  }, []);
  const [errors, setErrors] = useState<any>({});

  const onSubmit = (data: any) => {
    if (!data.firstName || !data.lastName || !data.email || !data.phoneNumber) {
      setErrors({ message: 'Veuillez remplir tous les champs correctement' });
      return;
    }
    const dataStored = JSON.parse(localStorage.getItem('reservation') || '{}');
    dataStored.passengers.push({ ...data, sex: data.sex || 'M' });
    localStorage.setItem('reservation', JSON.stringify(dataStored));
    if (currentStep + 1 === steps) {
      onNextStep();
    } else {
      setCurrentStep(currentStep + 1);
      reset();
    }
  };

  return (
    <div className="h-[70vh] p-0 md:p-10">
      <Modal show={!!errors.message} onClose={() => setErrors({})}>
        <Modal.Header>{t('booking.error')}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {errors.message}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border-DEFAULT border-blue text-blue"
            onClick={() => setErrors({})}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="flex flex-row justify-between">
        <h2 className="mb-6 text-[14px] uppercase text-blue">
          {t('booking.step')} 2/5 <span className="mx-4">|</span>{' '}
          {t('booking.passenger')}
        </h2>
        <button
          onClick={() => {
            if (currentStep === 0) {
              onPrevStep();
            } else {
              setCurrentStep(currentStep - 1);
            }
          }}
          className="ml-auto flex h-[30px] flex-row gap-[5px] rounded-[5px] border-DEFAULT border-blue px-3"
        >
          {t('booking.return')}
        </button>
      </div>
      <h2 className="mb-6 text-[16px] font-bold uppercase text-blue">
        {t('booking.info')} {currentStep + 1}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" h-4/5 overflow-y-scroll"
      >
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <Input
            name="firstName"
            label={t('flights.firstName')}
            placeholder="Votre nom"
            style="mb-4 md:mb-0"
            register={register}
            validator={{ validator: true }}
          />
          <Input
            name="familyName"
            label={t('flights.middleName')}
            placeholder="Votre post-nom"
            style="mb-4 md:mb-0"
            register={register}
            validator={{ validator: true }}
          />
          <Input
            name="lastName"
            label={t('flights.lastName')}
            placeholder="Votre prenom"
            style="mb-4 md:mb-0"
            register={register}
            validator={{ validator: true }}
          />
          <Select
            name="sexe"
            label="Sexe"
            placeholder="sexe"
            style="mb-4 md:mb-0"
            onChange={(e: string) => {
              setValue('sexe', e);
            }}
            options={[
              { label: 'M', value: 'M' },
              { label: 'F', value: 'F' },
            ]}
            defaultValue="M"
            register={register}
          />

          <Input
            name="phoneNumber"
            label={t('booking.phoneNumber')}
            placeholder="votre numero"
            style="mb-4 md:mb-0"
            type="number"
            register={register}
            validator={{ validator: true }}
          />

          <Input
            name="email"
            type="email"
            label="Address email"
            placeholder="example@gmail.com"
            style="mb-4 md:mb-0"
            register={register}
            validator={{ validator: true }}
          />
        </div>
        <button
          className="mt-10 w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white lg:w-[17%]"
          type="submit"
        >
          {t('booking.continue')}
        </button>
      </form>
    </div>
  );
};

export default PassengerInfoStep;
