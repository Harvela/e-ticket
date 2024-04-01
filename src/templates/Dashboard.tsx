import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

import { findAllTransactions } from '@/components/forms/hooks/data';
import Input from '@/components/forms/input';
import { AsideNav } from '@/navigation/AsideNav';
import { UserNavbar } from '@/navigation/UserNavbar';

import { TicketItem } from './TransactionItem';

export type DataFilterProp = {
  date: string;
  rawDate: string;
};

type Props = {
  data: DataFilterProp;
  setData: (data: DataFilterProp) => void;
  date: string;
};

const DashboardPage: React.FC<Props> = (props) => {
  const { data } = useQuery(['transactions'], () => findAllTransactions());
  const navigation = useRouter();

  return (
    <div className="flex h-screen flex-row gap-16 p-4 md:p-0">
      <div className="hidden w-1/5 md:block">
        <AsideNav />
      </div>
      <div className="flex w-full flex-col gap-0 md:w-[70%]">
        <div className="py-6 md:hidden">
          <UserNavbar />
        </div>
        <div className="hidden flex-row items-center justify-between py-6 md:flex">
          <h1 className="py-8 text-lg font-semibold text-blue">
            Mes reservation
          </h1>
          <button
            className="rounded-lg border border-blue px-4 py-1 text-blue"
            onClick={() => {
              navigation.push('/');
            }}
          >
            Reserver
          </button>
        </div>

        <div className="my-8 flex h-[40px] w-full flex-row items-center gap-4 rounded-[8px] border border-blue pl-4  md:w-3/5 lg:w-2/5">
          <span className="w-[150px] text-[14px] text-blue">
            Date De Reservation
          </span>
          <Input
            type="date"
            defaultValue={props.date}
            onChange={(e: any) => {
              props.setData({ ...props.data, date: e });
            }}
            name="date"
            placeholder="Date"
            style="w-[150px] text-[14px] text-blue bg-blue/10"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.data.map((t) => (
            <TicketItem
              key={t.id}
              totalPrice={t.attributes.totalAmount}
              transactionId={t.id}
              paid={t.attributes.paid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
