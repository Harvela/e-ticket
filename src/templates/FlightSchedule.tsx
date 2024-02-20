import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

import { Filters } from '@/components/filter';
import { Navbar } from '@/navigation/Navbar';
import { flights } from '@/utils/flights';

import { Background } from '../background/Background';

const FlightSchedule: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="flex h-[100vh] flex-col items-center p-4 lg:px-16"
      >
        <div className="fixed w-[100vw] p-4 md:w-full md:px-16">
          <Navbar active="schedule" />
        </div>
        <div className="mt-[80px] flex w-full flex-col gap-0 md:flex-row md:items-center md:justify-between">
          <h3 className="mb-[10px] mt-[16px] text-[16px] font-semibold uppercase text-blue md:w-[250px] lg:mt-0">
            Nos horaires de vol
          </h3>
          <Filters />
        </div>

        <div className="flex w-full flex-col overflow-y-scroll rounded-[15px] py-2 md:hidden">
          {flights.map((f, index) => (
            <div
              className="mb-5 min-w-[100%] rounded-[15px] bg-blue p-5"
              key={index}
            >
              <div className="flex flex-row items-center justify-between">
                <p className="mt-1 text-[14px] text-white">{f.company}</p>
                <p className="mt-1 text-[14px] text-white">
                  <span className="mr-2">Vol</span>
                  {f.number}
                </p>
              </div>

              <div className="my-4 flex flex-row items-center justify-between rounded-lg bg-white p-4 text-blue">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-4">
                    <p>Depart</p>
                    <p>Arrivee</p>
                  </div>
                  <div className="mx-6 h-16 w-[2px] bg-blue" />

                  <div className="flex flex-col gap-4">
                    <p>{f.departure}</p>
                    <p>{f.arrival}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p>{dayjs(f.depTime).format('DD/MM/YYYY HH:mm')}</p>
                  <p>{dayjs(f.arrTime).format('DD/MM/YYYY HH:mm')}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between text-white">
                <p className="mt-1 text-[14px]">
                  AVION:
                  <span className="ml-2">{f.name}</span>
                </p>

                <Link
                  href={`/flight-details/${f.id}`}
                  className="rounded-lg bg-[#B85043] px-4 py-1 text-[14px] text-white"
                >
                  Reserver
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full rounded-[10px] md:block">
          <table className="w-full rounded-[10px]">
            <thead className="rounded-[10px]  text-blue">
              <tr className="rounded-[10px] bg-[#F2F3F4]">
                <th className=" py-4 pl-5 text-left text-[14px] font-semibold text-blue ">
                  COMPAGNIE
                </th>
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
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.company}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.name}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.number}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.departure}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.arrival}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.depTime}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.arrTime}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
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
