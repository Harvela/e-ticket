import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import { paymentsPass, paymentsPrice, paymentsVol } from '@/utils/payments';

const Payment1Step: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const [isVolOpen, setIsVolOpen] = useState(true);
  const [isPasOpen, setIsPasOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <div className="h-[70vh] overflow-y-auto p-0 md:p-10">
      <h2 className="mb-6 text-[14px] uppercase text-blue">
        ETAPE 3/5 <span className="mx-4">|</span> RESUME ET PRIX
      </h2>
      <h2 className="mb-8 text-[16px] font-bold uppercase text-blue">
        PAIEMENT
      </h2>
      <div className="mb-4 flex flex-col-reverse justify-between gap-8 overflow-y-scroll lg:mb-0 lg:h-[60vh] lg:flex-row">
        <div className="w-full lg:w-[70%]">
          {paymentsVol.map((vol, index) => (
            <div key={index}>
              <div className="flex w-full flex-row items-center justify-between text-[16px] font-medium text-black">
                <h3>{vol.name}</h3>
                <button onClick={() => setIsVolOpen(!isVolOpen)}>
                  {isVolOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-blue" />
              {isVolOpen && (
                <div className="">
                  {vol.details.map((d) => (
                    <div key={index}>
                      <div className="my-4  flex w-full flex-col items-center justify-between gap-16 rounded-[8px] bg-blue/5 p-4  md:flex-row md:gap-4 lg:p-5">
                        <div className="lg-grow w-full">
                          <div className="flex flex-row items-center justify-between">
                            <h4 className="text-[12px] font-bold text-blue md:text-[14px]">
                              {d.company}
                            </h4>
                            <p className="text-[12px] font-semibold text-red md:text-[14px]">
                              Prix - {d.price}
                            </p>
                          </div>

                          <div className="mt-4 flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center justify-between gap-2 rounded-[8px] bg-red/20 px-2 py-1 md:gap-5 md:px-4">
                              <span className="text-[12px] font-semibold text-blue">
                                {d.departure}
                              </span>
                              <span className="text-[12px] font-semibold text-blue">
                                {d.depTime}
                              </span>
                            </div>
                            <div className="mx-2 flex flex-row items-center justify-center text-blue/60 md:mx-5">
                              <div className="mr-[-10px] h-[1px] w-6 bg-blue/60 lg:w-[30px]" />
                              <IoIosArrowForward />
                            </div>
                            <div className="flex flex-row items-center justify-between gap-2 rounded-[8px] bg-blue/20 px-2 py-1 md:gap-5 md:px-4">
                              <span className="text-[12px] font-semibold text-blue">
                                {d.arrival}
                              </span>
                              <span className="text-[12px] font-semibold text-blue">
                                {d.arrTime}
                              </span>
                            </div>
                          </div>
                          <h4 className="ml-auto mt-4 text-[12px] font-bold text-blue md:text-[14px]">
                            Temps de vol
                            <span className="ml-4 text-red">2h30</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {paymentsPass.map((pas, index) => (
            <div key={index} className="my-4">
              <div className="flex w-full flex-row items-center justify-between text-[16px] font-medium text-black">
                <h3>{pas.name}</h3>
                <button onClick={() => setIsPasOpen(!isPasOpen)}>
                  {isPasOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-blue" />
              {isPasOpen && (
                <div className="">
                  {pas.passenger.map((p, i) => (
                    <div key={i} className="my-4 rounded-[8px] bg-blue/5 p-6">
                      <div className="flex flex-col justify-between md:flex-row md:items-center">
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-[12px] text-blue md:text-[14px]">
                            Nom complet :
                          </p>
                          <h4 className="text-[14px] font-bold text-blue md:text-[16px]">
                            {p.name}
                          </h4>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-[12px] text-blue md:text-[14px]">
                            Sexe :{' '}
                          </p>
                          <h4 className="text-[14px] font-bold text-blue md:text-[16px]">
                            MASCULIN
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {paymentsPrice.map((price, index) => (
            <div key={index}>
              <div className="flex w-full flex-row items-center justify-between text-[16px] font-medium text-black">
                <h3>{price.name}</h3>
                <button onClick={() => setIsPriceOpen(!isPriceOpen)}>
                  {isPriceOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-blue" />
              {isPriceOpen && (
                <div className="mt-4 overflow-y-scroll rounded-[10px] bg-blue/5">
                  {price.price.map((p, i) => (
                    <div key={i} className="my-4 rounded-[8px]  px-6 py-2">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-[14px] font-semibold text-blue">
                            {p.name}
                          </p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <h4 className="text-[16px] font-semibold text-blue">
                            {p.sit}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-2 rounded-[8px] bg-blue p-8 text-white lg:h-fit lg:w-[25%] lg:gap-6">
          <p className="text-[12px] font-bold lg:text-[14px]">TOTAL</p>
          <div className="flex flex-row justify-between">
            <p className="mb-2 text-2xl font-semibold">200 USD</p>
            <button
              className="rounded-[8px] bg-white px-4 py-1 text-sm font-bold text-blue lg:px-8"
              onClick={onNextStep}
            >
              PAYER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment1Step;
