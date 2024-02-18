import React from 'react';

import { FlyForm } from '@/components/forms/vol';
import { Navbar } from '@/navigation/Navbar';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="flex h-[100vh] flex-col items-center justify-between overflow-y-scroll p-4 pb-[50px] md:px-16"
      >
        <Navbar active="acceuil" />
        <div className=" flex flex-col items-center justify-between">
          <h1 className="mt-[15vh] text-center text-[30px] font-bold tracking-widest text-white md:mt-4 lg:text-4xl">
            Explorez Des Nouvelles Horisons <br /> Chassez Vos Reves.
          </h1>
          <h2 className="mb-[60px] mt-[40px] text-center text-[15px] text-white/80 md:mb-[0px] md:mt-[15px]  md:text-[15px]">
            Avec notre plateforme reservez vos billets d’avions dans le confort
            de votre maison et peu importe où vous vous trouvez.
            <br /> Accedez A nos calendriers de vol, avions et autres
            informations.
          </h2>
        </div>
        <div className="w-full">
          <FlyForm
            setData={() => {
              console.log('form');
            }}
            data={undefined}
          />
        </div>
      </div>
    </Background>
  );
};

export { Hero };
