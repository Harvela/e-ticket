import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

import SearchInput from '@/components/forms/filter';
import type { TabProps } from '@/components/forms/tab';
import { Tab } from '@/components/forms/tab';
import { Navbar } from '@/navigation/Navbar';
import { flights } from '@/utils/flights';

import { Background } from '../background/Background';

const daysOfWeek = [
  'LUNDI',
  'MARDI',
  'MERCREDI',
  'JEUDI',
  'VENDREDI',
  'SAMEDI',
  'DIMANCHE',
];

const tabs: TabProps['tabs'] = daysOfWeek.map((day) => ({
  label: day,
  view: <div></div>,
}));

const FlightSchedule: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="flex h-[100vh] flex-col items-center gap-8 p-4 lg:justify-between lg:px-16"
      >
        <Navbar />
        <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
          <h3 className="mb-4 text-lg font-semibold text-white lg:mb-0">
            Notre horaire de vol
          </h3>
          <div className="flex flex-row items-center justify-between gap-2 rounded-[10px] bg-white px-2 py-4 lg:gap-4 lg:px-4 lg:py-2">
            <h4 className="text-[14px] font-semibold text-blue lg:text-lg">
              Filtrer par :{' '}
            </h4>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="text-sm">Ville de depart</span>
              <SearchInput
                placeholder={'Where are you going?'}
                callback={undefined}
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="text-sm">Ville d arriver</span>
              <SearchInput
                placeholder={'Where are you going?'}
                callback={undefined}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Tab tabs={tabs} />
        </div>

        <div className="flex w-full flex-col overflow-y-scroll rounded-[15px] py-2 md:hidden">
          {flights.map((f, index) => (
            <div
              className="mb-5 min-w-[100%] rounded-[15px] bg-primary-200 p-5 shadow-md shadow-primary-300"
              key={index}
            >
              <div className="grid grid-cols-2 gap-4">
                <p className="mt-1 text-[14px] font-bold text-blue">
                  AVION:
                  <span className="ml-4 text-primary-900">{f.name}</span>
                </p>
                <p className="mt-1 text-[14px] font-bold text-blue">
                  N. VOL:
                  <span className="ml-4 text-primary-900">{f.number}</span>
                </p>
                <p className="text-[14px] font-bold text-blue">
                  HEURE DEP. :
                  <span className="ml-[10px] mt-[1px] text-primary-900">
                    {dayjs(f.depTime).format('DD/MM/YYYY HH:mm')}
                  </span>
                </p>
                <p className="text-[14px] font-bold text-blue">
                  DEPARTURE:
                  <span className="ml-4 text-primary-900">{f.departure}</span>
                </p>
                <p className="text-[14px] font-bold text-blue">
                  HEURE AR. :
                  <span className="ml-[10px] mt-[1px] text-primary-900">
                    {dayjs(f.arrTime).format('DD/MM/YYYY HH:mm')}
                  </span>
                </p>

                <p className="text-[14px] font-bold text-blue">
                  ARRIVAL:
                  <span className="ml-4 text-primary-900">{f.arrival}</span>
                </p>
              </div>
              <div className="my-4 h-[1px] w-full bg-[#000] bg-opacity-20" />
              <Link
                href={`/flight-details/${f.id}`}
                className="rounded-lg bg-blue/10 px-4 py-1 text-[14px] font-semibold text-blue"
              >
                Reserver
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden w-full rounded-[10px] md:block">
          <table className="w-full">
            <thead className="bg-[#F2F3F4] text-blue">
              <tr className="">
                <th className=" py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  AVION
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  N. VOL
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  DEPART
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  ARRIVEE
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  HEURE DEP.
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue">
                  HEURE ARR.
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue"></th>
              </tr>
            </thead>
            <tbody>
              {flights.map((f, index) => (
                <tr key={index} className="bg-white">
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.name}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.number}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.departure}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.arrival}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.depTime}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    {f.arrTime}
                  </td>
                  <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                    <Link
                      href={`/flight-details/${f.id}`}
                      className="rounded-lg bg-blue/20 px-4 py-1 text-[12px] text-blue"
                    >
                      Reserver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Background>
  );
};

export { FlightSchedule };
