import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { registerUser } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';

const fullNameValidation = {
  required: 'Le nom complet est requis',
};

const emailValidation = {
  required: "L'email est requis",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "L'address email est invalide",
  },
};

const passwordValidation = {
  required: 'Le mot de passe est requis',
  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
    message:
      'Le mot de passe doit contenir 8 caractères, dont au moins 1 lettre majuscule, 1 lettre minuscule, 1 caractère spécial, 1 chiffre.',
  },
};

const RegisterPage: React.FC = () => {
  const navigation = useRouter();
  const mutation = useMutation(registerUser, {
    onError: (error) => {
      console.log(error);
      // show error message
    },
    onSuccess: (data) => {
      window.localStorage.setItem('token', data.jwt);
      window.localStorage.setItem('user', JSON.stringify(data.user));
      navigation.push('/dashboard');
    },
  });
  // const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate({ ...data, username: data.email });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" m-auto mt-12 flex w-2/5 flex-col items-center justify-between gap-6 rounded-lg bg-white p-8"
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
        style="mb-1 md:mb-0 w-full"
        register={register}
        validator={fullNameValidation}
      />
      {errors.fullname && (
        <span className="text-start text-[12px] text-red">
          {(errors.fullname as any)?.message}
        </span>
      )}
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        style="mb-1 md:mb-0 w-full"
        register={register}
        validator={emailValidation}
      />
      {errors.email && (
        <span className="text-[12px] text-red">
          {(errors.email as any)?.message}
        </span>
      )}
      <Input
        name="password"
        label="Mot de passe"
        placeholder="Example@2024"
        style="mb-1 md:mb-0 w-full"
        register={register}
        type="password"
        validator={passwordValidation}
      />
      {errors.password && (
        <span className="text-[12px] text-red">
          {(errors.password as any)?.message}
        </span>
      )}
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
