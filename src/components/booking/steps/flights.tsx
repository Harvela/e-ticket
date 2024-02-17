import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Filters } from '@/components/filter';
import { flights } from '@/utils/flights';

const Flights: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  return (
    <div className="flex h-[70vh] flex-col justify-between gap-4">
      <h2 className="mb-4 text-[14px] uppercase text-blue">ETAPE 1</h2>

      <Filters />

      <div className="overflow-y-scroll">
        {flights.map((vol, index) => (
          <div key={index}>
            <div className="my-6 flex w-full flex-col items-center justify-between gap-16 rounded-[8px]  bg-blue/5 p-4 md:flex-row lg:p-8">
              <img
                src={vol.logo}
                alt="logo"
                className="hidden rounded-lg md:block"
              />

              <div className="w-full lg:w-[75%]">
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[16px] text-blue">{vol.company}</h4>
                  <p className="font-bold text-red">{vol.price}</p>
                </div>

                <div className="my-6 flex flex-row items-center justify-between">
                  <div className="flex w-[45%] flex-row items-center justify-between rounded-[8px] bg-red/5 px-4 py-1 lg:w-[33%]">
                    <span className="text-[14px] text-blue">
                      {vol.departure}
                    </span>
                    <span className="text-[14px] font-bold text-blue">
                      {vol.depTime}
                    </span>
                  </div>
                  <div className="flex w-[10%] flex-row items-center justify-center text-blue/60 lg:w-[33%]">
                    <div className="mr-[-10px] h-[1px] w-8 bg-blue/60 lg:w-24" />
                    <IoIosArrowForward />
                  </div>
                  <div className="flex w-[40%] flex-row items-center justify-between rounded-[8px] bg-red/5 px-4 py-1 lg:w-[33%]">
                    <span className="text-[14px] text-blue">{vol.arrival}</span>
                    <span className="text-[14px] font-bold text-blue">
                      {vol.arrTime}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[16px] font-bold text-blue">
                    Temps de vol:
                    <span className="ml-4 text-red">2h30</span>
                  </h4>
                  <button
                    className="rounded-[8px] bg-blue px-6 py-2 text-sm text-white lg:px-16"
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
