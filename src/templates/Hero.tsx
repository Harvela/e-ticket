import { Button } from 'flowbite-react';
import React from 'react';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div id="home" className="flex h-[90vh] flex-col">
        <div className=" flex flex-row items-center justify-between p-16">
          <div className="w-[50%]">
            <h1 className="mt-4 text-[16px] font-semibold text-white lg:text-[20px]">
              Donnez vie à vos projets en collaborant avec des experts de la
              technologie.
            </h1>
            <h2 className="my-[30px] text-[10px] text-white/80 md:text-[15px]">
              Nous concevons des applications web et mobile et offrons des
              conseils stratégiques, incluant des études de faisabilité
              approfondies, pour garantir la réussite de vos projets
              technologiques.
            </h2>
            <div className="mt-[20px] flex flex-col gap-5 md:flex-row">
              <Button
                color="white"
                className="animate-infinite h-[45px] animate-wiggle bg-[#FFE7C9] text-black md:self-end"
              >
                Demande une analyse gratuite
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/images/home/docta1.jpg"
                alt="Hero"
                className="h-[140px] w-[180px] rounded-lg"
              />
              <img
                src="/assets/images/home/docta3.jpg"
                alt="Hero"
                className="h-[140px] w-[180px] rounded-lg"
              />
            </div>
            <img
              src="/assets/images/home/docta2.jpg"
              alt="Hero"
              className="h-[140px] w-[180px] rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-[#002240] px-16 py-4">
          <img
            src="/assets/images/home/doctabyte.png"
            alt="Hero"
            className="h-10 w-20"
          />
          <img
            src="/assets/images/home/doctabyte.png"
            alt="Hero"
            className="h-10 w-20"
          />
          <img
            src="/assets/images/home/doctabyte.png"
            alt="Hero"
            className="h-10 w-20"
          />
          <img
            src="/assets/images/home/doctabyte.png"
            alt="Hero"
            className="h-10 w-20"
          />
          <img
            src="/assets/images/home/doctabyte.png"
            alt="Hero"
            className="h-10 w-20"
          />
        </div>
      </div>
    </Background>
  );
};

export { Hero };
