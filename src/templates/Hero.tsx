import { useTranslation } from 'next-i18next';
import React from 'react';

import { FlyForm } from '@/components/forms/vol';
import { Navbar } from '@/navigation/Navbar';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Background color="">
      <div
        id="home"
        className="flex h-screen flex-col items-center justify-between overflow-y-scroll p-4 pb-[50px] md:px-16"
      >
        <Navbar active="acceuil" />
        <div className=" flex flex-col items-center justify-between">
          <h1 className="mt-[15vh] text-center text-[30px] font-bold tracking-widest text-white md:mt-4 lg:text-4xl">
            {t('hero.title')} <br /> {t('hero.title2')}
          </h1>
          <h2 className="mb-[60px] mt-[40px] text-center text-[15px] text-white/80 md:mb-0 md:mt-[15px]  md:text-[15px]">
            {t('hero.subtitle')}
            <br /> {t('hero.subtitle2')}
          </h2>
        </div>
        <div className="w-full pb-0 md:pb-[60px]">
          <FlyForm
            // setData={() => {
            //   console.log('form');
            // }}
            data={undefined}
          />
        </div>
      </div>
    </Background>
  );
};

export { Hero };
