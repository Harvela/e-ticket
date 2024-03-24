import React from 'react';
import { useQuery } from 'react-query';

import { findAllTransactions } from '@/components/forms/hooks/data';
import { AsideNav } from '@/navigation/AsideNav';

import { TicketItem } from './TransactionItem';

const tabs = [
  { label: 'Non completes' },
  { label: 'A venir' },
  { label: 'Deja passees' },
];

const DashboardPage: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const { data } = useQuery(['transactions'], () => findAllTransactions());

  console.log(data?.data);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };
  return (
    <div className="flex h-screen flex-row gap-16 p-4 md:p-10">
      <div className="hidden w-1/5 md:block">
        <AsideNav />
      </div>
      <div className="flex w-full flex-col gap-0 md:w-[70%]">
        <div className="hidden flex-row items-center justify-between md:flex">
          <div className="flex w-[30%] flex-col gap-2 rounded-[8px] bg-blue px-8 py-4 font-semibold text-white">
            <p className="text-[24px]">{data?.data.length}</p>
            <p className="text-[14px]">Reservations</p>
          </div>

          <div className="flex w-[30%] flex-col gap-2 rounded-[8px] bg-blue px-8 py-4 font-semibold text-white">
            <p className="text-[24px]">120</p>
            <p className="text-[14px]">Vols effectues</p>
          </div>

          <div className="flex w-[30%] flex-col gap-2 rounded-[8px] bg-blue px-8 py-4 font-semibold text-white">
            <p className="text-[24px]">21</p>
            <p className="text-[14px]">Vols a venir</p>
          </div>
        </div>

        <div className="my-10 flex flex-row items-center gap-8 text-[12px] md:text-sm">
          {tabs.map((tab, index) => (
            <div key={index}>
              <a
                href="#"
                onClick={() => handleTabClick(index)}
                className={`flex-1 cursor-pointer  ${
                  currentTab === index ? 'font-semibold text-blue' : 'text-blue'
                }`}
              >
                {tab.label}
              </a>
              <div
                className={`${
                  currentTab === index ? 'mt-1 h-[2px] w-3/5 bg-blue' : ''
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col">
          {data?.data.map((t) => (
            <TicketItem
              key={t.id}
              totalPrice={t.attributes.totalAmount}
              transactionId={t.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
