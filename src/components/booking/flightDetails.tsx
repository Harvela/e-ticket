import React from 'react';

const FlightDetailsPage: React.FC = () => {
  return (
    <div className="flex w-[65%] flex-row items-center gap-4 rounded-[15px] bg-white p-6">
      <div className="flex w-[50%] flex-col gap-4">
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">AVION : </h3>
          <p className="text-[12px]">FY-IOP14</p>
        </div>
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">DATE DE DEPART : </h3>
          <p className="text-[12px]">Mardi, 24 juillet 2024</p>
        </div>
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">VILLE DE DEPART : </h3>
          <p className="text-[12px]">KINSHASA</p>
        </div>
      </div>

      <div className="flex w-[50%] flex-col gap-4">
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">N. VOL : </h3>
          <p className="text-[12px]">901</p>
        </div>
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">
            DATE D&apos;ARRIVEE :{' '}
          </h3>
          <p className="text-[12px]">Mardi, 24 juillet 2024</p>
        </div>
        <div className="flex flex-row items-center text-sm text-blue">
          <h3 className="w-[40%] text-[12px] font-bold">
            VILLE D&apos;ARRIVEE :{' '}
          </h3>
          <p className="text-[12px]">GOMA</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
