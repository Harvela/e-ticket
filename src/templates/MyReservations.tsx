import React from 'react';

import { UserNavbar } from '@/navigation/UserNavbar';

import { Background } from '../background/Background';

const MyReservations: React.FC = () => {
  return (
    <Background color="">
      <div
        id="home"
        className="flex h-[100vh] flex-col items-center gap-8 px-16 py-4"
      >
        <UserNavbar />

        <div className="w-full overflow-hidden rounded-[5px]">
          <h1 className="mb-5 text-[16px] font-bold text-blue">
            Mes reservations
          </h1>
          <table className="w-full">
            <thead className="bg-blue text-blue">
              <tr className="">
                <th className=" py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  N. Reservation
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  Depart
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  Arrivee
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  H. Depart
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  H. Arrivee
                </th>
                <th className="py-4 pl-5 text-left text-[14px] font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue"></td>
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue"></td>
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue"></td>
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue"></td>
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue"></td>
                <td className="py-4 pl-5 text-left text-sm font-semibold text-blue">
                  {/* <Link href={`/flight-details/id`} className="bg-blue/20 text-blue text-[12px] px-4 py-1 rounded-lg">
                        Reserver
                      </Link> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Background>
  );
};

export { MyReservations };
