import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { PiAirplaneTiltFill } from 'react-icons/pi';

import { getTimeOrDate } from '@/utils/format';

import type { Reservation } from '../forms/hooks/data';

const Ticket: React.FC<{ ticket: Reservation }> = ({ ticket }) => {
  const { t } = useTranslation('common');
  return (
    <div className="mt-[30px] text-black">
      <hr className="h-[2px] w-full bg-black" />
      <div className="mt-[20px] flex flex-row items-center gap-2">
        <PiAirplaneTiltFill className="size-16 text-black" />
        <div>
          <p className="text-md">
            {t('ticket.departure')}:{' '}
            <span className="font-semibold uppercase">
              {dayjs(ticket.attributes.date_depart).format('DD - MM - YYYY')}
            </span>{' '}
          </p>
          <p className="text-sm font-bold">
            {t('ticket.plane')}:{' '}
            <span className="uppercase">
              {
                ticket.attributes.schedule.data.attributes.plane.data.attributes
                  .model
              }
            </span>
          </p>
        </div>
        <p className="ml-auto text-[16px] font-bold">#KRE{ticket.id}</p>
      </div>

      <div className="mt-2 flex flex-row gap-2">
        <div className="flex w-[30%] flex-col gap-4 bg-blue/10 p-4">
          <div>
            <h2 className="font-medium uppercase">
              {
                ticket.attributes.schedule.data.attributes.plane.data.attributes
                  .company.data.attributes.name
              }
            </h2>
            <h2 className="font-semibold uppercase">
              {
                ticket.attributes.schedule.data.attributes.plane.data.attributes
                  .code
              }
            </h2>
          </div>
          <p className="text-sm">
            {t('ticket.duration')}:{' '}
            {dayjs(
              getTimeOrDate(
                ticket.attributes.schedule.data.attributes
                  .time_arrival as unknown as string,
                new Date().toDateString(),
              ),
            ).diff(
              dayjs(
                getTimeOrDate(
                  ticket.attributes.schedule.data.attributes
                    .time_depart as unknown as string,
                  new Date().toDateString(),
                ),
              ),
              'minutes',
            )}{' '}
            minutes
          </p>
          <p className="text-sm">{t('ticket.status')}: Confirme</p>
        </div>

        <div className="flex w-[70%] flex-row border-2 border-blue/10">
          <div className="size-full">
            <div className="flex flex-row items-center justify-between p-4">
              <div>
                <h2 className="font-semibold uppercase">
                  {ticket.attributes.schedule.data.attributes.place_depart.data.attributes.name.substring(
                    0,
                    3,
                  )}
                </h2>
                <p className="text-sm uppercase">
                  {
                    ticket.attributes.schedule.data.attributes.place_depart.data
                      .attributes.name
                  }
                </p>
              </div>
              <IoMdArrowDropright className="size-8 text-black" />
              <div>
                <h2 className="font-semibold uppercase">
                  {ticket.attributes.schedule.data.attributes.place_arrival.data.attributes.name.substring(
                    0,
                    3,
                  )}
                </h2>
                <p className="text-sm uppercase">
                  {
                    ticket.attributes.schedule.data.attributes.place_arrival
                      .data.attributes.name
                  }
                </p>
              </div>
            </div>
            <hr className="h-px w-full bg-blue/10" />

            <div className="flex flex-row">
              <div className="flex w-[50%] flex-col gap-4 p-4">
                <p className="text-sm">
                  {t('ticket.departureAt')}:{' '}
                  <span className="text-md">
                    {ticket.attributes.schedule.data.attributes.time_depart}
                  </span>
                </p>
              </div>

              <div className="flex w-[50%] flex-col gap-4 border border-y-0 border-l-DEFAULT border-r-0 p-4">
                <p className="text-sm">
                  {t('ticket.arrivalAt')}:{' '}
                  <span className="text-md">
                    {ticket.attributes.schedule.data.attributes.time_arrival}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="mt-4 w-full">
          <thead className="">
            <tr className="bg-blue/10">
              <th className="p-1 text-left text-[14px] font-medium">
                {t('ticket.passengerName')}
              </th>
              <th className="border border-y-0 border-l-DEFAULT border-r-0 border-blue/20 p-1 text-left text-[14px] font-medium">
                {t('ticket.passengerNumber')}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="font-regular flex flex-row items-center gap-2 p-1 text-left text-[14px] uppercase">
                <span className="bg-[#000] px-2 font-bold text-[#fff]">
                  {ticket.attributes.passenger.data.attributes.firstName}{' '}
                  {ticket.attributes.passenger.data.attributes.familyName}{' '}
                  {ticket.attributes.passenger.data.attributes.lastName}
                </span>
              </td>
              <td className="font-regular border border-y-0 border-l-DEFAULT border-r-0 border-blue/20 p-1 text-left text-[14px]">
                {ticket.attributes.passenger.data.attributes.phoneNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Ticket };
