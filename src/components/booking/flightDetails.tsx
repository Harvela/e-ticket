import React from 'react';

const FlightDetailsPage: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[15px] bg-white p-6 lg:w-[65%] lg:flex-row lg:items-center">
      <div className="flex flex-col gap-4 lg:w-[50%]">
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">AVION : </h3>
          <p className="text-[12px]">FY-IOP14</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">DATE DE DEPART : </h3>
          <p className="text-[12px]">Mardi, 24 juillet 2024</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">VILLE DE DEPART : </h3>
          <p className="text-[12px]">KINSHASA</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-[50%]">
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">N. VOL : </h3>
          <p className="text-[12px]">901</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">
            DATE D&apos;ARRIVEE :{' '}
          </h3>
          <p className="text-[12px]">Mardi, 24 juillet 2024</p>
        </div>
        <div className="flex flex-row gap-4 text-sm text-blue lg:items-center">
          <h3 className="text-[12px] font-bold lg:w-2/5">
            VILLE D&apos;ARRIVEE :{' '}
          </h3>
          <p className="text-[12px]">GOMA</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
