import { Spinner } from 'flowbite-react';
import React from 'react';
import { useQuery } from 'react-query';

import { findTransactions } from '@/components/forms/hooks/data';

const TicketItem: React.FC<any> = ({
  ref,
  transactionId,
  totalPrice,
  paid,
}: any) => {
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
      t.attributes.schedule.data?.attributes.place_arrival.data.attributes.name
    ) {
      cities.push(
        t.attributes.schedule.data?.attributes.place_arrival.data.attributes
          .name,
      );
    }
  });

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  };

  return (
    <div id="ticket" ref={ref}>
      {isLoading && <Spinner color="success" />}
      {data?.data && (
        <div>
          <div className="mb-8 w-full flex-row items-center justify-between gap-4 rounded-[8px] bg-blue/5 p-5">
            <div className="lg-grow w-full">
              <h4 className="text-[14px] font-bold text-blue">
                {
                  firstReservation?.schedule.data?.attributes.place_depart.data
                    ?.attributes.name
                }{' '}
                &gt; {cities.join(' > ')} &gt;{' '}
                {
                  firstReservation?.schedule.data?.attributes.place_depart.data
                    ?.attributes.name
                }
              </h4>

              <div className="mt-5 flex flex-row items-center justify-between">
                <p className="text-[14px] font-semibold text-red">
                  {totalPrice} $
                </p>

                <div className="flex flex-row items-center">
                  <div className="mr-8 h-6 w-px bg-black" />
                  <h4 className="text-[14px] font-semibold text-black">
                    <span className="mr-4">
                      {
                        data.data.filter(
                          (d) =>
                            d.attributes.schedule.data?.id ===
                            firstReservation?.schedule.data?.id,
                        ).length
                      }
                    </span>
                    Passagers
                  </h4>
                </div>
              </div>

              <div className="mt-5 flex flex-row items-center justify-between">
                <h4 className="text-[14px] text-blue">
                  {formatDate(firstReservation?.date_depart)}
                </h4>
                <a
                  href={`/reservation?step=${
                    paid ? '5' : '4'
                  }&ref=${transactionId}`}
                  target="_blank"
                  className="rounded-[8px] bg-blue px-4 py-2 text-sm text-white"
                >
                  {paid ? 'Imprimer' : 'Payer'}
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
