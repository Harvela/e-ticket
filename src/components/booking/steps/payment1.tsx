import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import { paymentsPass, paymentsPrice, paymentsVol } from '@/utils/payments';

const Payment1Step: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const [isVolOpen, setIsVolOpen] = useState(true);
  const [isPasOpen, setIsPasOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between gap-8 lg:mb-0">
        <div className="w-[70%]">
          <h2 className="mb-6 text-[14px] uppercase text-blue">ETAPE 2</h2>
          <h2 className="mb-8 text-[16px] font-bold uppercase text-blue">
            PAIEMENT
          </h2>

          {paymentsVol.map((vol, index) => (
            <div key={index}>
              <div className="flex w-full flex-row items-center justify-between font-bold text-black">
                <h3>{vol.name}</h3>
                <button onClick={() => setIsVolOpen(!isVolOpen)}>
                  {isVolOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-black" />
              {isVolOpen && (
                <div className="">
                  {vol.details.map((d, i) => (
                    <div key={i} className="my-6 rounded-[8px] bg-blue/5 p-4">
                      <div className="flex flex-row items-center justify-between">
                        <h4 className="text-[16px] text-blue">{d.company}</h4>
                        <p className="font-bold text-red">{d.price}</p>
                      </div>

                      <div className="mt-4 flex flex-row items-center justify-between">
                        <div className="flex w-[33%] flex-row items-center justify-between rounded-[8px] bg-red/5 px-4 py-1">
                          <span className="text-[14px] text-blue">
                            {d.departure}
                          </span>
                          <span className="text-[14px] font-bold text-blue">
                            {d.depTime}
                          </span>
                        </div>
                        <div className="flex w-[33%] flex-row items-center justify-center text-blue/60">
                          <div className="mr-[-10px] h-[1px] w-24 bg-blue/60" />
                          <IoIosArrowForward />
                        </div>
                        <div className="flex w-[33%] flex-row items-center justify-between rounded-[8px] bg-red/5 px-4 py-1">
                          <span className="text-[14px] text-blue">
                            {d.arrival}
                          </span>
                          <span className="text-[14px] font-bold text-blue">
                            {d.arrTime}
                          </span>
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
              <div className="flex w-full flex-row items-center justify-between font-bold text-black">
                <h3>{pas.name}</h3>
                <button onClick={() => setIsPasOpen(!isPasOpen)}>
                  {isPasOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-black" />
              {isPasOpen && (
                <div className="">
                  {pas.passenger.map((p, i) => (
                    <div key={i} className="my-6 rounded-[8px] bg-blue/5 p-4">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-blue">Nom complet:</p>
                          <h4 className="text-[16px] font-bold text-blue">
                            {p.name}
                          </h4>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-blue">N. Siege:</p>
                          <h4 className="text-[16px] font-bold text-blue">
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

          {paymentsPrice.map((price, index) => (
            <div key={index}>
              <div className="flex w-full flex-row items-center justify-between font-bold text-black">
                <h3>{price.name}</h3>
                <button onClick={() => setIsPriceOpen(!isPriceOpen)}>
                  {isPriceOpen ? <SlArrowUp /> : <SlArrowDown />}
                </button>
              </div>
              <div className="mt-2 h-[1px] w-full bg-black" />
              {isPriceOpen && (
                <div className="">
                  {price.price.map((p, i) => (
                    <div key={i} className="my-6 rounded-[8px] bg-blue/5 p-4">
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-blue">Nom complet:</p>
                          <h4 className="text-[16px] font-bold text-blue">
                            {p.name}
                          </h4>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                          <p className="text-blue">N. Siege:</p>
                          <h4 className="text-[16px] font-bold text-blue">
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
        <div className="flex h-[40%] w-[25%] flex-col gap-2 rounded-[8px] bg-blue p-8 text-white lg:gap-6">
          <p className="text-[12px] font-bold lg:text-[14px]">TOTAL</p>
          <p className="mb-2 text-2xl font-semibold">200 USD</p>
          <button
            className="w-[50%] rounded-[8px] bg-white px-4 py-2 text-sm font-bold text-blue lg:px-8"
            onClick={onNextStep}
          >
            PAYER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment1Step;
