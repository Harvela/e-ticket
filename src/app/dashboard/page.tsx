import React from 'react';

import { FlyForm } from '@/components/forms/vol';
import { Navbar } from '@/navigation/Navbar';

import DashboardLayout from './layout';

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <div
        id="home"
        className="flex h-[100vh] flex-col items-center justify-between px-16 py-4"
      >
        <Navbar />
        <div className=" flex flex-col items-center justify-between">
          <h1 className="mt-4 text-center text-[16px] font-semibold tracking-widest text-white lg:text-4xl">
            Explorez Des Nouvelles Horisons <br /> Chassez Vos Reves.
          </h1>
          <h2 className="text-center text-[10px] text-white/80 md:text-[15px]">
            Avec notre plateforme reservez vos billets d’avions dans le confort
            de votre maison et peu importe où vous vous trouvez.
            <br /> Accedez A nos calendriers de vol, avions et autres
            informations.
          </h2>
        </div>
        <div className="">
          <FlyForm
            setData={() => {
              console.log('form');
            }}
            data={undefined}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export { Home };
