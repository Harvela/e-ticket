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
        className="flex h-[100vh] flex-col items-center justify-between px-16 py-4"
      >
        <Navbar />
        <div className="flex w-full flex-row items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            Notre horaire de vol
          </h3>
          <div className="flex flex-row items-center gap-4 rounded-[10px] bg-white px-4 py-2">
            <h4 className="font-semibold text-blue">Filtrer par : </h4>
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm">Ville de depart</span>
              <SearchInput
                placeholder={'Where are you going?'}
                callback={undefined}
              />
            </div>
            <div className="flex flex-row items-center gap-2">
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
        <div className="w-full overflow-hidden rounded-[10px]">
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
