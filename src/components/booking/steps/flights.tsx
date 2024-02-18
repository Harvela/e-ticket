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
            <div className="mb-8  flex w-full flex-col items-center justify-between gap-16 rounded-[8px] bg-blue/5 p-4  md:w-full md:flex-row md:gap-4 lg:p-5">
              <img
                src={vol.logo}
                alt="logo"
                className="mr-6 hidden size-[100px] rounded-[100px] md:block"
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

                <div className="my-3 flex flex-row items-center ">
                  <div className="flex flex-row items-center justify-between gap-5 rounded-[8px] bg-red/20 px-4 py-1">
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.departure}
                    </span>
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.depTime}
                    </span>
                  </div>
                  <div className="mx-5 flex flex-row items-center justify-center text-blue/60">
                    <div className="mr-[-10px] h-[1px] w-8 bg-blue/60 lg:w-[30px]" />
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
