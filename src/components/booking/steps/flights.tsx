import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Filters } from '@/components/filter';
import { flights } from '@/utils/flights';

const Flights: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex h-[70vh] flex-col justify-between gap-0 p-0 md:p-10">
      <h2 className="mb-4 text-[14px] uppercase text-blue">
        ETAPE 1/5 <span className="mx-4">|</span> Selection de vol
      </h2>

      <Filters />

      <div className="overflow-y-scroll">
        <p className="text[16px] pb-8 font-semibold text-blue">
          8 Vols trouvees{' '}
        </p>
        {flights.map((vol, index) => (
          <div key={index}>
            <div className="mb-4 flex w-full flex-col gap-2 rounded-[8px] bg-blue/10 p-4 md:hidden">
              <div className="flex flex-row items-center justify-between font-bold text-blue">
                <div className="flex flex-row items-center">
                  <img
                    src={vol.logo}
                    alt="logo"
                    className="mr-2 size-[30px] rounded-[10px] md:block"
                  />
                  <p className="text-[16px]">{vol.company}</p>
                </div>
                <p className="text-[16px]">
                  <span className="mr-2">Vol</span>
                  {vol.number}
                </p>
              </div>

              <div className="my-4 flex flex-row justify-between rounded-lg bg-blue p-4 text-white">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-2 text-[14px]">
                    <p>Depart</p>
                    <p>Arrivee</p>
                    <p>Avion</p>
                  </div>
                  <div className="mx-4 h-20 w-[2px] bg-white" />

                  <div className="flex flex-col gap-2 text-[14px]">
                    <p>{vol.departure}</p>
                    <p>{vol.arrival}</p>
                    <p>{vol.name}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-[14px]">
                  <p>{vol.depTime}</p>
                  <p>{vol.arrTime}</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                <p className="text-[16px] font-semibold text-red">
                  Prix : {vol.price}
                </p>
                <button
                  className="rounded-lg bg-[#B85043] px-4 py-1 text-[14px] text-white"
                  onClick={onNextStep}
                >
                  Selectionner
                </button>
              </div>
            </div>

            <div className="mb-8 hidden w-full flex-row items-center justify-between gap-4 rounded-[8px] bg-blue/5 p-5 md:flex">
              <img
                src={vol.logo}
                alt="logo"
                className="mr-6 size-[100px] rounded-[100px]"
              />

              <div className="lg-grow w-full">
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[14px] font-bold text-blue">
                    {vol.company}
                  </h4>
                  <p className="text-[14px] font-semibold text-red">
                    Prix - {vol.price}
                  </p>
                </div>

                <div className="my-3 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-between gap-5 rounded-[8px] bg-red/20 px-4 py-1">
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.departure}
                    </span>
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.depTime}
                    </span>
                  </div>
                  <div className="mx-2 flex flex-row items-center justify-center text-blue/60 md:mx-5">
                    <div className="mr-[-10px] h-[1px] w-[50px] bg-blue/60" />
                    <IoIosArrowForward />
                  </div>
                  <div className="flex flex-row items-center justify-between gap-5 rounded-[8px] bg-blue/20 px-4 py-1">
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.arrival}
                    </span>
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.arrTime}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[14px] font-bold text-blue">
                    Temps de vol
                    <span className="ml-4 text-red">2h30</span>
                  </h4>
                  <button
                    className="rounded-[8px] bg-blue px-2 py-1 text-sm text-white lg:px-4"
                    onClick={onNextStep}
                  >
                    Selectionner
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
