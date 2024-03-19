import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { login } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';

const ForgetPassword: React.FC = () => {
  const navigation = useRouter();
  const mutation = useMutation(login, {
    onSuccess: () => {
      navigation.push('/reset');
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
      className=" m-auto mt-14 flex w-2/5 flex-col items-center justify-between gap-6 rounded-lg bg-white p-8"
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
      <button
        className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white"
        onClick={() => {
          navigation.push('/reset');
        }}
      >
        Reset
      </button>
    </form>
  );
};

export { ForgetPassword };
