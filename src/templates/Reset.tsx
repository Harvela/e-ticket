import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { resetPassword } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';
import { FullWidthLoading } from '@/components/loading/full-width';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation('common');

  const passwordValidation = {
    required: t('reset.required'),
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
      message: t('reset.message'),
    },
  };

  const confirmPasswordValidation = {
    required: t('reset.confirm'),
    validate: {
      matchPassword: (value: string | undefined) => {
        const passwordInput = document.querySelector<HTMLInputElement>(
          'input[name="password"]',
        );
        const password = passwordInput?.value;
        return value === password || t('reset.validateConfirm');
      },
    },
  };
  const [error, setError] = useState('');
  const navigation = useRouter();
  const mutation = useMutation(resetPassword, {
    onSuccess: () => {
      navigation.push('/login');
    },
    onError: () => {
      setError(t('reset.error'));
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
      {mutation.isLoading && <FullWidthLoading text={t('reset.loading')} />}
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
        label={t('auth.confirm')}
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
