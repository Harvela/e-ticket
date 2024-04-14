'use client';

import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import { FaRegSquareMinus } from 'react-icons/fa6';

export const Passenger: React.FC<{
  onPassengerChange?: (
    adults: number,
    children: number,
    classe: string,
  ) => void;
}> = (props) => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  useEffect(() => {
    props.onPassengerChange?.(
      adults,
      children,
      selectedTab === 1 ? 'economy' : 'business',
    );
  }, [selectedTab, adults, children]);
  return (
    <div className="mt-4">
      <div className="w-full">
        <h2 className="mb-10 text-[16px] font-semibold text-blue/90">
          Cabin class
        </h2>
        <div className="flex flex-row items-center gap-4">
          <button
            className={`flex flex-row items-center gap-2 rounded-[5px] px-4 py-1 ${
              selectedTab === 1
                ? 'border-[2px] border-blue font-semibold text-blue'
                : 'text-[14px] text-black/80'
            }`}
            onClick={() => setSelectedTab(1)}
          >
            {t('passenger.economy')}
          </button>
          <button
            className={`flex flex-row items-center gap-2 rounded-[5px] px-4 py-1 ${
              selectedTab === 2
                ? 'border-[2px] border-blue font-semibold text-blue'
                : 'text-[14px] text-black/80'
            }`}
            onClick={() => setSelectedTab(2)}
          >
            {t('passenger.business')}
          </button>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-blue" />
      <div className="w-full">
        <h2 className="mb-10 text-[16px] font-semibold text-blue/90">
          {t('passenger.passengers')}
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-row items-center justify-between">
            <h3>Adults</h3>
            <div className="flex flex-row items-center justify-between gap-8">
              <FaRegSquareMinus
                onClick={() => setAdults(adults - 1)}
                className="h-5 w-5 text-blue"
              />
              <span>{adults}</span>
              <FaRegPlusSquare
                onClick={() => setAdults(adults + 1)}
                className="h-5 w-5 text-blue"
              />
            </div>
          </div>
          <div className="my-1 h-[1px] w-full bg-blue" />
          <div className="flex w-full flex-row items-center justify-between">
            <h3>{t('passenger.children')}</h3>
            <div className="flex flex-row items-center justify-between gap-8">
              <FaRegSquareMinus
                onClick={() => setChildren(children - 1)}
                className="h-5 w-5 text-blue"
              />
              <span>{children}</span>
              <FaRegPlusSquare
                onClick={() => setChildren(children + 1)}
                className="h-5 w-5 text-blue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
