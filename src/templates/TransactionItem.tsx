import { Spinner } from 'flowbite-react';
import React from 'react';
import { useQuery } from 'react-query';

import { findTransactions } from '@/components/forms/hooks/data';

const TicketItem: React.FC<any> = ({ ref, transactionId, totalPrice }: any) => {
  const { data, isLoading } = useQuery(
    ['transaction', { id: transactionId || '' }],
    () => findTransactions(transactionId),
  );

  console.log('ticket item', data);

  const firstReservation = data?.data[0]?.attributes;
  const cities: string[] = [];
  data?.data.forEach((t) => {
    if (
      cities[cities.length - 1] !==
      t.attributes.schedule.data.attributes.place_arrival.data.attributes.name
    ) {
      cities.push(
        t.attributes.schedule.data.attributes.place_arrival.data.attributes
          .name,
      );
    }
  });

  return (
    <div id="ticket" ref={ref}>
      {isLoading && <Spinner color="success" />}
      {data?.data && (
        <div>
          <div className="mb-4 flex w-full flex-col gap-2 rounded-[8px] bg-blue/10 p-4 md:hidden">
            <div className="flex flex-row items-center justify-between font-bold text-blue">
              <div className="flex flex-row items-center">
                <p className="text-[14px]">
                  {
                    firstReservation?.schedule.data.attributes.place_depart.data
                      .attributes.name
                  }{' '}
                  &gt; {cities.join(' > ')}
                </p>
              </div>
              <span> &gt; </span>
            </div>

            <div className="my-4 flex flex-row justify-between rounded-lg bg-blue p-4 text-white">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-2 text-[14px]">
                  <p>Passagers</p>
                  <p>Vols</p>
                </div>
                <div className="mx-4 h-20 w-[2px] bg-white" />

                <div className="flex flex-col gap-2 text-[14px]">
                  <p>
                    {
                      data.data.filter(
                        (d) =>
                          d.attributes.schedule.data.id ===
                          firstReservation?.schedule.data.id,
                      ).length
                    }
                  </p>
                  <p>
                    {data.data.length /
                      data.data.filter(
                        (d) =>
                          d.attributes.schedule.data.id ===
                          firstReservation?.schedule.data.id,
                      ).length}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <p className="text-[16px] font-semibold text-red">
                Prix : {totalPrice} $
              </p>
              <button className="rounded-lg bg-[#B85043] px-4 py-1 text-[14px] text-white">
                Voir Ticket
              </button>
            </div>
          </div>

          <div className="mb-8 hidden w-full flex-row items-center justify-between gap-4 rounded-[8px] bg-blue/5 p-5 md:flex">
            <div className="lg-grow w-full">
              <div className="flex flex-row items-center justify-between">
                <h4 className="text-[14px] font-bold text-blue">
                  {
                    firstReservation?.schedule.data.attributes.place_depart.data
                      .attributes.name
                  }{' '}
                  &gt; {cities.join(' > ')}
                </h4>
                <p className="text-[14px] font-semibold text-red">
                  Prix - {totalPrice} $
                </p>
              </div>

              <div className="mt-5 flex flex-row items-center justify-between">
                <h4 className="text-[14px] font-bold text-blue">
                  Passagers
                  <span className="ml-4 text-red">
                    {
                      data.data.filter(
                        (d) =>
                          d.attributes.schedule.data.id ===
                          firstReservation?.schedule.data.id,
                      ).length
                    }
                  </span>
                </h4>
                <a
                  href={`/reservation?step=5&ref=${transactionId}`}
                  target="_blank"
                  className="rounded-[8px] bg-blue px-2 py-1 text-sm text-white lg:px-4"
                >
                  Ticker
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { TicketItem };
