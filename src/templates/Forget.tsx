import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { forgetPassword } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';
import { FullWidthLoading } from '@/components/loading/full-width';

const ForgetPassword: React.FC = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const mutation = useMutation(forgetPassword, {
    onSuccess: () => {
      setSuccess(
        'Les instruction ont ete envoye dans votre boite email, veuillez les consulter',
      );
    },
    onError: () => {
      setError('une erreur est survenu lors du traitement de votre requette');
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setError('');
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" m-auto mt-14 flex w-4/5 flex-col items-center justify-between gap-6 rounded-lg bg-white p-8 md:w-3/5 lg:w-2/5"
    >
      {mutation.isLoading && (
        <FullWidthLoading text="Traitement de votre requette ... " />
      )}
      <img
        src="/assets/images/home/logo.png"
        className="mb-4 h-8 rounded-lg bg-white"
        alt="Logo"
      />
      {error && (
        <div className="rounded-[5px] bg-red/20 p-3 text-center text-gray-900">
          {error}
        </div>
      )}
      {success && (
        <div className="rounded-[5px] bg-[#00FF00]/20 p-3 text-center text-gray-900">
          {success}
        </div>
      )}
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        style="mb-4 md:mb-0 w-full"
        register={register}
      />
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        type="submit"
      >
        Reset
      </button>
    </form>
  );
};

export { ForgetPassword };
