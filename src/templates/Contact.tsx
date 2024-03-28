import React from 'react';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

import Input from '@/components/forms/input';
import { Navbar } from '@/navigation/Navbar';

const ContactPage: React.FC = () => {
  const { register } = useForm();

  return (
    <div id="contact" className="justify-cente m-8 flex flex-col items-center">
      <Navbar active="acceuil" />

      <div className=" m-auto mt-14 flex h-[75vh] w-full flex-col items-center justify-between rounded-lg bg-white md:flex-row">
        <form className="m-auto w-full p-8 md:w-2/5 md:px-16 md:py-4">
          <h2 className="mb-8 text-2xl font-semibold text-blue">
            Contactez-nous
          </h2>
          <Input
            name="name"
            label="Nom"
            placeholder="Murhula Metre Lemoisson"
            style="mb-4 md:mb-6 w-full"
            register={register}
          />
          <Input
            name="identifier"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            style="mb-4 md:mb-6 w-full"
            register={register}
          />
          <div className="mb-6">
            <span className="mb-2 flex flex-row items-center gap-1 text-[12px] font-semibold text-blue">
              Message
            </span>
            <textarea className="focus:outline-0` h-[100px] w-full rounded-[5px] border-blue/10 bg-blue/5 px-4 py-1 text-[14px]" />
          </div>
          <button
            className="w-full rounded-[8px] bg-blue px-16 py-2 text-sm text-white md:w-[50%]"
            type="submit"
          >
            Se connecter
          </button>
        </form>

        <div className="hidden h-full w-[2px] bg-blue/50 md:block" />
        <div className="h-[2px] w-full bg-blue/50 md:hidden" />

        <div className="m-auto flex size-full flex-col gap-12 p-8 md:w-2/5 md:px-16 md:py-12">
          <div className="flex flex-row items-center gap-8">
            <IoIosMail className="size-8 text-blue" />
            <p className="text-[16px] text-black">fezacompany@info.com</p>
          </div>

          <div>
            <div className="mb-4 h-px w-full bg-blue/50" />

            <div className="flex flex-row gap-8">
              <FaSquarePhone className="size-8 text-blue" />
              <div className="flex flex-col gap-4 text-[16px] text-black">
                <p>+243 997865456</p>
                <p>+243 997865456</p>
                <p>+243 997865456</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 h-px w-full bg-blue/50" />

            <div className="flex flex-row gap-8">
              <FaMapMarkerAlt className="size-8 text-blue" />
              <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-4 text-[16px] font-semibold text-black">
                  <p>Kinshasa:</p>
                  <p>Goma:</p>
                  <p>Lubumbashi:</p>
                </div>

                <div className="flex flex-col gap-4 text-[16px] text-black">
                  <p>Q.Mabanga sud, Av. Vitwaiki, n.31</p>
                  <p>Q.Mabanga sud, Av. Vitwaiki, n.31</p>
                  <p>Q.Mabanga sud, Av. Vitwaiki, n.31</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactPage };
