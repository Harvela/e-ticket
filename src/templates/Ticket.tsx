import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { useQuery } from 'react-query';

import type { Transaction } from '@/components/forms/hooks/data';
import { findTransactions } from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { Ticket } from '@/components/ticket';

const TicketPage: React.FC<any> = ({ ref }: any) => {
  const [transaction, setTransaction] = useState<Transaction>();
  const router = useRouter();

  useEffect(() => {
    const reference = router.query.ref;
    if (reference)
      setTransaction({
        id: Number.parseInt(reference as string, 10),
      } as Transaction);
    else {
      const transactionJson = JSON.parse(
        localStorage.getItem('transactions') || '[]',
      );
      if (transactionJson.length > 0) {
        setTransaction(transactionJson[transactionJson.length - 1]);
      }
    }
  }, [router.query.ref]);

  const { data, isLoading } = useQuery(
    ['transaction', { id: transaction?.id || '' }],
    () => findTransactions(transaction?.id?.toString()),
  );

  console.log(data, transaction, 'w');

  if (!data) return null;

  return (
    <div id="ticket" className="p-16 text-black" ref={ref}>
      {isLoading && (
        <FullWidthLoading text="Chargement du recu de votre reservation ..." />
      )}
      <div>
        <h2 className="flex flex-row items-center gap-2 font-bold uppercase">
          <span>Date de reservation</span>
          <IoMdArrowDropright className="size-4 text-black" />
          <span>
            {dayjs(data?.data?.[0]?.attributes?.createdAt).format('DD-MM-YYYY')}
          </span>
          <span></span>
        </h2>
      </div>
      <hr className="h-[2px] w-full bg-black" />

      <div className="my-2 flex flex-row gap-4">
        <div className="flex w-[50%] flex-col justify-between gap-4 uppercase">
          <p className="flex flex-col gap-1">
            <span className="text-md font-bold">FEZA Airline Company</span>
          </p>
          <p>
            Code de reservation <span>FEZ{transaction?.id}</span>
          </p>
        </div>

        <div className="h-full w-[50%] border-DEFAULT border-blue/10 p-2">
          <img
            src="./assets/images/home/kenya.jpg"
            alt="logo"
            className="ml-auto h-[50px]"
          />
        </div>
      </div>

      <div className="w-full">
        {data?.data?.map?.((ticket, index) => (
          <Ticket key={`ticket-${index}`} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export { TicketPage };
