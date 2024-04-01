import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { login } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';
import { FullWidthLoading } from '@/components/loading/full-width';

const LoginPage: React.FC = () => {
  const navigation = useRouter();
  const [error, setError] = useState('');
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      // redirect if flights found
      window.localStorage.setItem('token', data.jwt);
      window.localStorage.setItem('user', JSON.stringify(data.user));
      navigation.push('/dashboard');
    },
    onError: () => {
      setError('Mot de passe ou addresse email invalide');
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" m-auto mt-14 flex w-[90%] flex-col items-center justify-between gap-6 rounded-lg bg-white p-8 md:w-2/5"
    >
      {mutation.isLoading && (
        <FullWidthLoading text="Verification de vos identifiants" />
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
        name="identifier"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        style="mb-4 md:mb-0 w-full"
        register={register}
      />
      <Input
        name="password"
        label="Mot de passe"
        placeholder="Example@2024"
        style="mb-4 md:mb-0 w-full"
        register={register}
        type="password"
      />
      <button
        onClick={() => {
          navigation.push('/forget');
        }}
        className="w-full text-end text-sm font-semibold text-blue"
      >
        Mot de passe oublie?
      </button>
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        type="submit"
      >
        Se connecter
      </button>
      <p className="text-sm font-semibold text-black">
        Vous n’avez pas de compte ?
        <button
          onClick={() => {
            navigation.push('/register');
          }}
          className="ml-2 text-blue"
        >
          Creer un compte
        </button>
      </p>
    </form>
  );
};

export { LoginPage };
