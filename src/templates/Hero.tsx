import { Button } from 'flowbite-react';
import React from 'react';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div className="flex flex-row">
        <div
          className="mt-[20px] h-[100vh] items-center px-4 md:mt-[60px] lg:mt-[150px] lg:h-[70vh] lg:px-[100px] lg:py-6"
          id="home"
        >
          <div className="md:pr-10">
            <h1 className="mt-4 text-[16px] font-semibold text-blue lg:text-[20px]">
              Donnez vie à vos projets en collaborant avec des experts de la
              technologie.
            </h1>
            <h2 className="my-[30px] text-[10px] text-[#666]/60 md:text-[15px]">
              Nous concevons des applications web et mobile et offrons des
              conseils stratégiques, incluant des études de faisabilité
              approfondies, pour garantir la réussite de vos projets
              technologiques.
            </h2>
            <div className="mt-[20px] flex flex-col gap-5 md:flex-row">
              <Button
                color="white"
                className="animate-infinite h-[45px] animate-wiggle bg-secondary-900 text-black md:self-end"
              >
                Demande une analyse gratuite
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden items-end justify-end md:block lg:block">
          <div className="flex flex-col items-end justify-end">
            <div className="h-60 bg-secondary-900/10 md:w-[70px] lg:w-[100px]" />
            <div className="mt-[-60px] h-48 bg-secondary-900/10 md:w-[100px] lg:w-[250px]" />
            <div className="mt-[-60px] h-40 bg-secondary-900/10 md:w-[100px] lg:w-[350px]" />
            <div className="mr-[220px] mt-[-130px] h-32 bg-secondary-900/10 md:w-[100px] lg:w-[250px]" />
            <div className="mt-[-40px] h-28 bg-secondary-900/10 md:w-[100px] lg:w-[600px]" />
          </div>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
