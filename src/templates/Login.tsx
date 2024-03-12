import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { login } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';

const LoginPage: React.FC = () => {
  const navigation = useRouter();
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      // redirect if flights found
      window.localStorage.setItem('token', data.jwt);
      window.localStorage.setItem('user', JSON.stringify(data.user));
      navigation.push('/dashboard');
    },
    onError: (error) => {
      console.log(error);
      // show error message
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
      className=" m-auto mt-14 flex w-[40%] flex-col items-center justify-between gap-6 rounded-lg bg-white p-8"
    >
      <img
        src="/assets/images/home/logo.png"
        className="mb-4 h-8 rounded-lg bg-white"
        alt="Logo"
      />
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
      />
      <Link href="" className="w-full text-end text-sm font-semibold text-blue">
        Mot de passe oublie?
      </Link>
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