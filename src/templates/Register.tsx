import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { registerUser } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';

const RegisterPage: React.FC = () => {
  const navigation = useRouter();
  const mutation = useMutation(registerUser, {
    onError: (error) => {
      console.log(error);
      // show error message
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate({ ...data, username: data.email });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" m-auto mt-12 flex w-[40%] flex-col items-center justify-between gap-6 rounded-lg bg-white p-8"
    >
      <img
        src="/assets/images/home/logo.png"
        className="mb-4 h-8 rounded-lg bg-white"
        alt="Logo"
      />
      <Input
        name="fullname"
        label="Nom complet"
        placeholder="Nom complet"
        style="mb-4 md:mb-0 w-full"
        register={register}
      />
      <Input
        name="email"
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
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        type="submit"
      >
        Se connecter
      </button>
      <p className="text-sm font-semibold text-black">
        Vous avez deja un compte ?
        <button
          onClick={() => {
            navigation.push('/login');
          }}
          className="ml-2 text-blue"
        >
          Se connecter
        </button>
      </p>
    </form>
  );
};

export { RegisterPage };
