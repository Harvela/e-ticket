import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

import { Ticket } from '@/components/ticket';

const TicketPage: React.FC = () => {
  return (
    <div id="ticket" className="p-16 text-black">
      <div>
        <h2 className="flex flex-row items-center gap-2 font-bold uppercase">
          <span>09 dec.2023</span>
          <IoMdArrowDropright className="h-4 w-4 text-black" />
          <span>09 dec.2023</span>
          <span>Voyage a destination de addis ababa, ethiopia</span>
        </h2>
      </div>
      <hr className="h-[2px] w-full bg-black" />

      <div className="my-2 flex flex-row gap-4">
        <div className="flex w-[50%] flex-col justify-between gap-4 uppercase">
          <p className="flex flex-col gap-1">
            Prepare pour
            <span className="text-md font-bold">Mr Murhula Metre Faustin</span>
          </p>
          <p>
            code de reservation <span>lbsqef</span>
          </p>
        </div>

        <div className="h-full w-[50%] border-[1px] border-blue/10 p-2">
          <img
            src="./assets/images/home/kenya.jpg"
            alt="logo"
            className="h-[100px] w-[50%]"
          />
        </div>
      </div>

      <div className="w-full">
        <Ticket />
      </div>
    </div>
  );
};

export { TicketPage };
