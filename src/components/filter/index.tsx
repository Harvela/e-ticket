import React from 'react';

import SearchInput from '@/components/forms/filter';

const Filters: React.FC = () => {
  return (
    <div className="mb-4 flex h-[100px] flex-row items-center justify-between gap-2 overflow-x-scroll lg:h-[150px] lg:gap-8 lg:overflow-hidden">
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Jour</span>
        <SearchInput
          placeholder={'Lundi'}
          callback={undefined}
          style="bg-blue rounded-[8px] w-[100px] md:w-full"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Compagnie</span>
        <SearchInput
          placeholder={'Quelle compagnie?'}
          callback={undefined}
          style="w-[150px] md:w-full"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Depart</span>
        <SearchInput
          placeholder={'Where are you going?'}
          callback={undefined}
          style="w-[150px] md:w-full"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Arriver</span>
        <SearchInput
          placeholder={'Where are you going?'}
          callback={undefined}
          style="w-[150px] md:w-full"
        />
      </div>
    </div>
  );
};

export { Filters };
