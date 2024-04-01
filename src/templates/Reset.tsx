import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { resetPassword } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';
import { FullWidthLoading } from '@/components/loading/full-width';

const passwordValidation = {
  required: 'Le mot de passe est requis',
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
    message:
      'Le mot de passe doit contenir 8 caractères, dont au moins 1 lettre majuscule, 1 lettre minuscule, 1 caractère spécial, 1 chiffre.',
  },
};

const confirmPasswordValidation = {
  required: 'La confirmation du mot de passe est requise',
  validate: {
    matchPassword: (value: string | undefined) => {
      const passwordInput = document.querySelector<HTMLInputElement>(
        'input[name="password"]',
      );
      const password = passwordInput?.value;
      return value === password || 'Les mots de passe ne correspondent pas';
    },
  },
};

const ResetPassword: React.FC = () => {
  const [error, setError] = useState('');
  const navigation = useRouter();
  const mutation = useMutation(resetPassword, {
    onSuccess: () => {
      navigation.push('/login');
    },
    onError: () => {
      setError(
        'Une erreur est survenu lors de la mise A jour de votre mot de passe',
      );
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setError('');
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" m-auto mt-14 flex w-[90%] flex-col items-center justify-between gap-6 rounded-lg bg-white p-8 md:w-2/5"
    >
      {mutation.isLoading && (
        <FullWidthLoading text="Mise A jour de votre mot de passe ... " />
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
      <Input
        name="password"
        label="Nouveau mot de passe"
        placeholder="Example@2024"
        style="mb-4 md:mb-0 w-full"
        register={register}
        validator={passwordValidation}
      />
      {errors.password && (
        <span className="text-[12px] text-red">
          {(errors.password as any)?.message}
        </span>
      )}
      <Input
        name="confirmPassword"
        label="Confirmer le mot de passe"
        placeholder="Example@2024"
        style="mb-4 md:mb-0 w-full"
        register={register}
        validator={confirmPasswordValidation}
      />
      {errors.confirmPassword && (
        <span className="text-[12px] text-red">
          {(errors.confirmPassword as any)?.message}
        </span>
      )}
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        type="submit"
      >
        Reset
      </button>
    </form>
  );
};

export { ResetPassword };
