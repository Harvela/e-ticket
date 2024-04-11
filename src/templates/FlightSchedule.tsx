import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Filters } from '@/components/filter';
import { fetchSchedules } from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { Navbar } from '@/navigation/Navbar';

import { Background } from '../background/Background';
import { Accordion } from 'flowbite-react';

const stringToColour = (str: string) => {
  let hash = 0;
  str.split('').forEach(char => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash)
  })
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, '0')
  }
  return colour
}

const FlightSchedule: React.FC = () => {
  const [filterData, setFilterData] = useState<any>({});
  const { data, isLoading } = useQuery(['flights', { ...filterData }], () =>
    fetchSchedules(filterData),
  );

  const groupBy = () => {
    let i = 0, val, index,
        values = [], result = [] as any[];
        const collection = data?.data || [];
    for (; i < collection.length; i++) {
        val = collection[i]?.attributes.day;
        index = values.indexOf(val);
        if (index > -1)
            result[index].push(collection[i]);
        else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
}

"".substring("".lastIndexOf(":"))

const groupedData = groupBy();
console.log(groupedData)

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
        <div className="mt-[80px] flex w-full flex-col gap-0 overflow-y-visible md:flex-row md:items-center">
          <Filters
            data={filterData}
            date={filterData.originDate}
            setData={setFilterData}
            showDay
          />
        </div>

        <div className="flex w-full flex-col overflow-y-scroll rounded-[15px] py-2 md:hidden">
          {groupedData.map((group, inde) => (
            <Accordion collapseAll key={inde} theme={{
              title: {
                "flush": {
                  "off": "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                  "on": "bg-blue dark:bg-transparent"
                },
                "base": "flex w-full items-center justify-between p-5 text-left font-medium text-white first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
                "open": {
                  "off": "",
                  "on": "bg-white text-blue dark:bg-gray-800 dark:text-white"
                }
              }
            }}>
            <Accordion.Panel>
              <Accordion.Title color='#000' className='bg-white rounded-md'><span className='text-blue'>{group[0].attributes.day}</span></Accordion.Title>
              <Accordion.Content>
                {group.map((f: any, index: number) => (
                <div className="mb-5 min-w-full rounded-[15px] bg-blue p-5"
                  key={index}
                >
                  <div className="flex flex-row items-center justify-between">
                    <p className="mt-1 text-[14px] text-white flex flex-row items-center gap-4">
                      <img src={'https://e-ticket.harvely.com' + f.attributes.plane.data.attributes.company.data.attributes.logo.data.attributes.url} className="h-8 w-8 rounded-lg bg-white" alt="logo" />
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
                      <p>{f.attributes.time_depart.toString().substring(0, f.attributes.time_depart.toString().lastIndexOf(":"))}</p>
                      <p>{f.attributes.time_arrival.toString().substring(0, f.attributes.time_arrival.toString().lastIndexOf(":"))}</p>
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
            </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
          ))}
        </div>

        <div className="hidden w-full rounded-[10px] md:block max-h-[100vh] overflow-y-scroll">
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
              {groupedData.map((group, ind) => (
                <>
                <tr key={ind} className={`bg-blue`}>
                  <td colSpan={7} className="py-4 pl-5 text-[14px] text-center self-center font-semibold text-white">
                    {group[0]?.attributes.day}
                  </td>
                </tr>
                {group.map((f: any, index: number) => (
                  <tr key={index} className="bg-white">
                    <td className="font-regular py-4 pl-5 text-left text-sm text-blue flex flex-row gap-4 items-center">
                    <img src={'https://e-ticket.harvely.com' + f.attributes.plane.data.attributes.company.data.attributes.logo.data.attributes.url} className="h-8 w-8 rounded-lg bg-white" alt="logo" />
                      {
                        f.attributes.plane.data.attributes.company.data.attributes
                          .name
                      }
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
                    {f.attributes.time_depart.toString().substring(0, f.attributes.time_depart.toString().lastIndexOf(":"))}
                    </td>
                    <td className="font-regular py-4 pl-5 text-left text-sm text-blue">
                    {f.attributes.time_arrival.toString().substring(0, f.attributes.time_arrival.toString().lastIndexOf(":"))}
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
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Background>
  );
};

export { FlightSchedule };
