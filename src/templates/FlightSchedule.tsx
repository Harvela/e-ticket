import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Filters } from '@/components/filter';
import { fetchSchedules } from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { Navbar } from '@/navigation/Navbar';

import { Background } from '../background/Background';

const FlightSchedule: React.FC = () => {
  const [filterData, setFilterData] = useState<any>({});
  const { data, isLoading } = useQuery(['flights', { ...filterData }], () =>
    fetchSchedules(filterData),
  );

  return (
    <Background color="">
      {isLoading && <FullWidthLoading text={'Nous chargeons nos horaires'} />}
      <div
        id="home"
        className="flex h-screen flex-col items-center p-4 lg:px-16"
      >
        <div className="fixed w-screen p-4 md:w-full md:px-16">
          <Navbar active="schedule" />
        </div>
        <div className="mt-[80px] flex w-full flex-col gap-0 md:flex-row md:items-center">
          <Filters
            data={filterData}
            date={filterData.originDate}
            setData={setFilterData}
            showDay
          />
        </div>

        <div className="flex w-full flex-col overflow-y-scroll rounded-[15px] py-2 md:hidden">
          {data?.data.map((f, index) => (
            <div
              className="mb-5 min-w-full rounded-[15px] bg-blue p-5"
              key={index}
            >
              <div className="flex flex-row items-center justify-between">
                <p className="mt-1 text-[14px] text-white">
                  {
                    f.attributes.plane.data.attributes.company.data.attributes
                      .name
                  }
                </p>
                <p className="mt-1 text-[14px] text-white">
                  <span className="mr-2">Vol</span>
                  {f.attributes.plane.data.attributes.model}
                </p>
              </div>

              <div className="my-4 flex flex-row items-center justify-between rounded-lg bg-white p-4 text-[12px] text-blue md:text-[16px]">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-4">
                    <p>Depart</p>
                    <p>Arrivee</p>
                  </div>
                  <div className="mx-6 h-16 w-[2px] bg-blue" />

                  <div className="flex flex-col gap-4">
                    <p>{f.attributes.place_depart.data.attributes.name}</p>
                    <p>{f.attributes.place_arrival.data.attributes.name}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p>{f.attributes.time_depart.toString()}</p>
                  <p>{f.attributes.time_arrival.toString()}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between text-white">
                <p className="mt-1 text-[14px]">
                  AVION:
                  <span className="ml-2">
                    {f.attributes.plane.data.attributes.code}
                  </span>
                </p>
                {/* 
                <Link
                  href={`/flight-details/${f.attributes.plane.data.attributes.company.data.attributes
                    .name}`}
                  className="rounded-lg bg-[#B85043] px-4 py-1 text-[14px] text-white"
                >
                  Reserver
                </Link> */}
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
                {/* <th className="py-4 pl-5 text-left text-[14px] font-semibold text-blue"></th> */}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((f, index) => (
                <tr key={index} className="bg-white">
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {
                      f.attributes.plane.data.attributes.company.data.attributes
                        .name
                    }
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.plane.data.attributes.model}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.plane.data.attributes.code}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.place_depart.data.attributes.name}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.place_arrival.data.attributes.name}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.time_depart.toString()}
                  </td>
                  <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.time_arrival.toString()}
                  </td>
                  {/* <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    <Link
                      href={`/flight-details/${f.id}`}
                      className="rounded-lg bg-blue/20 px-4 py-1 text-[12px] text-blue"
                    >
                      Reserver
                    </Link>
                  </td> */}
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
