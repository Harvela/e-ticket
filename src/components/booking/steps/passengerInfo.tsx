import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useForm } from 'react-hook-form';

import Input from '@/components/forms/input';
import Select from '@/components/forms/select';

const PassengerInfoStep: React.FC<{
  onNextStep: () => void;
  onPrevStep: () => void;
}> = ({ onNextStep, onPrevStep }) => {
  const { register, handleSubmit, setValue, reset } = useForm<any>();

  const [steps, setSteps] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservation') || '{}');
    setSteps(Number.parseInt(data.params.passengerNumber || '1', 10));
  }, []);
  const [errors, setErrors] = useState<any>({});

  const onSubmit = (data: any) => {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phoneNumber ||
      !data.sex
    ) {
      setErrors({ message: 'Veuillez remplir tous les champs correctement' });
      return;
    }
    const dataStored = JSON.parse(localStorage.getItem('reservation') || '{}');
    dataStored.passengers.push(data);
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
        <Modal.Header>Erreur</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {errors.message}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border-[1px] border-blue text-blue"
            onClick={() => setErrors({})}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="flex flex-row justify-between">
        <h2 className="mb-6 text-[14px] uppercase text-blue">
          ETAPE 2/5 <span className="mx-4">|</span> PASSAGERS
        </h2>
        <button
          onClick={() => onPrevStep()}
          className="ml-auto flex h-[30px] flex-row gap-[5px] rounded-[5px] border-[1px] border-blue px-3"
        >
          <ArrowLeft /> Retourner en arriere
        </button>
      </div>
      <h2 className="mb-6 text-[16px] font-bold uppercase text-blue">
        INFORMATIONS DU PASSAGER N {currentStep + 1}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col lg:flex-row lg:gap-16">
          <div className="w-full">
            <Input
              name="firstName"
              label="Nom"
              placeholder="Votre nom"
              style="mb-4 md:mb-0"
              register={register}
              validator={{ validator: true }}
            />
            <Select
              name="sex"
              label="Sexe"
              placeholder="sexe"
              style="mb-4 md:mb-0"
              onChange={(e: string) => {
                setValue('sex', e);
              }}
              options={[
                { label: 'M', value: 'M' },
                { label: 'F', value: 'F' },
              ]}
              defaultValue="M"
              register={register}
            />
          </div>

          <div className="w-full">
            <Input
              name="familyName"
              label="Post-nom"
              placeholder="Votre post-nom"
              style="mb-4 md:mb-0"
              register={register}
              validator={{ validator: true }}
            />
            <Input
              name="phoneNumber"
              label="N. de telephone"
              placeholder="votre numero"
              style="mb-4 md:mb-0"
              type="number"
              register={register}
              validator={{ validator: true }}
            />
          </div>

          <div className="w-full">
            <Input
              name="lastName"
              label="Prenom"
              placeholder="Votre prenom"
              style="mb-4 md:mb-0"
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
        </div>
        <button
          className="mt-2 w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white lg:w-[17%]"
          type="submit"
        >
          Continuer
        </button>
      </form>
    </div>
  );
};

export default PassengerInfoStep;
