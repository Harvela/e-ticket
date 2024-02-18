import React from 'react';

import SearchInput from '@/components/forms/filter';

const Filters: React.FC = () => {
  return (
    <div className="mb-4 flex h-[100px] flex-row items-center gap-2 overflow-x-scroll lg:h-[150px] lg:gap-8 lg:overflow-hidden">
      <div className="flex h-[37px]  flex-row items-center gap-4 rounded-[8px] bg-blue  pl-4">
        <span className="text-[14px] text-white">Date</span>
        <div className="h-full w-[1px] bg-white"></div>
        <SearchInput
          placeholder={'Lundi'}
          callback={undefined}
          style="rounded-[8px] w-[100px] md:w-full text-[14px] text-white font-bold"
          defaultValue={'Lundi , 14/03/2024'}
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Compagnie</span>
        <SearchInput
          placeholder={'Quelle compagnie?'}
          callback={undefined}
          style="w-[150px] md:w-full rounded-0"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Depart</span>
        <SearchInput
          placeholder={'Where are you going?'}
          callback={undefined}
          style="w-[150px] md:w-full"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 font-bold text-blue"
          defaultValue="KINSHASA"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Arriver</span>
        <SearchInput
          placeholder={'Where are you going?'}
          callback={undefined}
          style="w-[150px] md:w-full"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 font-bold text-blue"
          defaultValue="GOMA"
        />
      </div>
    </div>
  );
};

export { Filters };
