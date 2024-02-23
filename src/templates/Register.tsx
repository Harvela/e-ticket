import { useRouter } from 'next/router';
import React from 'react';

import Input from '@/components/forms/input';

const RegisterPage: React.FC = () => {
  const navigation = useRouter();
  return (
    <div className=" m-auto mt-12 flex w-[40%] flex-col items-center justify-between gap-6 rounded-lg bg-white p-8">
      <img
        src="/assets/images/home/logo.png"
        className="mb-4 h-8 rounded-lg bg-white"
        alt="Logo"
      />
      <Input
        name="name"
        label="Nom complet"
        placeholder="Nom complet"
        style="mb-4 md:mb-0 w-full"
        onChange={() => {
          console.log('any');
        }}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        style="mb-4 md:mb-0 w-full"
        onChange={() => {
          console.log('any');
        }}
      />
      <Input
        name="password"
        label="Mot de passe"
        placeholder="Example@2024"
        style="mb-4 md:mb-0 w-full"
        onChange={() => {
          console.log('any');
        }}
      />
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        onClick={() => {
          navigation.push('/reservation');
        }}
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
    </div>
  );
};

export { RegisterPage };
