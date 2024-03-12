import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { PiAirplaneTiltFill } from 'react-icons/pi';

const Ticket: React.FC = () => {
  return (
    <div className="text-black">
      <hr className="h-[2px] w-full bg-black" />
      <div className="flex flex-row items-center gap-2">
        <PiAirplaneTiltFill className="h-16 w-16 text-black" />
        <p className="text-md">
          DEPART:{' '}
          <span className="font-semibold uppercase">DIMANCHE 03 DEC.</span>{' '}
          <span className="text-sm text-black/60">
            Veuillez verifier l&apos;heure de votre vol avant le depart
          </span>
        </p>
      </div>

      <div className="mt-2 flex flex-row gap-2">
        <div className="flex w-[30%] flex-col gap-4 bg-blue/10 p-4">
          <div>
            <h2 className="font-medium uppercase">Ethiopian airlines</h2>
            <h2 className="font-semibold uppercase">Et 0830</h2>
          </div>
          <p className="text-sm">Duree: 2heure(s) 40min(s)</p>
          <p className="text-sm">Cabine: Economique/L</p>
          <p className="text-sm">Statut: Confirme</p>
        </div>

        <div className="flex w-[70%] flex-row border-[2px] border-blue/10">
          <div className="h-full w-[70%]">
            <div className="flex flex-row items-center justify-between p-4">
              <div>
                <h2 className="font-semibold uppercase">GOM</h2>
                <p className="text-sm uppercase">Goma, Congo Dem Rep</p>
              </div>
              <IoMdArrowDropright className="h-8 w-8 text-black" />
              <div>
                <h2 className="font-semibold uppercase">ADD</h2>
                <p className="text-sm uppercase">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <hr className="h-[1px] w-full bg-blue/10" />

            <div className="flex flex-row">
              <div className="flex w-[50%] flex-col gap-4 p-4">
                <p className="text-sm">
                  Depart a: <span className="text-md">4:00pm</span>
                </p>
                <p className="text-sm">Terminal: Non disponible</p>
              </div>

              <div className="flex w-[50%] flex-col gap-4 border border-y-0 border-l-[1px] border-r-0 p-4">
                <p className="text-sm">
                  Arrivee a: <span className="text-md">7:40pm</span>
                </p>
                <p className="text-sm">Terminal: TERMINAL 2</p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-[30%] flex-col gap-4 border border-y-0 border-l-[1px] border-r-0 p-4">
            <p className="text-sm">
              Avion: <span className="uppercase">Boeing 737-700 jet</span>
            </p>
            <p className="text-sm">Milage: 985</p>
            <p className="text-sm">Repas: Repas</p>
          </div>
        </div>
      </div>

      <div>
        <table className="mt-4 w-full">
          <thead className="">
            <tr className="bg-blue/10">
              <th className="p-1 text-left text-[14px] font-medium">
                Nom du passager
              </th>
              <th className="border border-y-0 border-l-[1px] border-r-0 border-blue/20 p-1 text-left text-[14px] font-medium">
                Sieges
              </th>
              <th className="border border-y-0 border-l-[1px] border-r-0 border-blue/20 p-1 text-left text-[14px] font-medium">
                Recu(s) de billet electronique
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="font-regular flex flex-row items-center gap-2 p-1 text-left text-[14px]">
                <MdKeyboardDoubleArrowRight />
                Mr Metre Faustin Murhula
              </td>
              <td className="font-regular border border-y-0 border-l-[1px] border-r-0 border-blue/20 p-1 text-left text-[14px]">
                17A
              </td>
              <td className="font-regular border border-y-0 border-l-[1px] border-r-0 border-blue/20 p-1 text-left text-[14px]">
                0712141814246
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Ticket };
