import React from 'react';

import { CompanyInput } from '../flight-input/company';
import { PlaceInput } from '../flight-input/place';
import Input from '../forms/input';
import Select from '../forms/select';

export type DataFilterProp = {
  date: string;
  company: string;
  place_depart: number;
  place_arrival: number;
  rawDate: string;
};

type Props = {
  data: DataFilterProp;
  setData: (data: DataFilterProp) => void;
  date: string;
  showDay?: boolean;
};

const Filters: React.FC<Props> = (props) => {
  return (
    <div className="mb-4 flex h-[100px] flex-row items-center gap-2 overflow-x-scroll md:h-[150px] md:gap-8">
      <div className="flex h-[37px]  flex-row items-center gap-4 rounded-[8px] bg-blue  pl-4">
        <span className="text-[14px] text-white">Date</span>
        <div className="h-full w-[1px] bg-white"></div>
        {!props.showDay ? (
          <Input
            type="date"
            defaultValue={props.date}
            onChange={(e: any) => {
              props.setData({ ...props.data, date: e });
            }}
            name="date"
            placeholder="Date"
            style="rounded-[8px] w-[140px] md:w-full text-[14px] text-white font-bold "
          />
        ) : (
          <Select
            name="date"
            placeholder={''}
            options={[
              { label: 'LUNDI', value: 'LUNDI' },
              { label: 'MARDI', value: 'MARDI' },
            ]}
            onChange={(e: string) => {
              props.setData({ ...props.data, date: '', rawDate: e });
            }}
            style="rounded-[8px] w-[140px] md:w-full text-[14px] text-white font-bold "
          />
        )}
      </div>
      <div className="border-1 flex min-w-[80px] flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Compagnie</span>
        <CompanyInput
          name="company"
          placeholder=" "
          onChange={(e: string) => {
            props.setData({ ...props.data, company: e });
          }}
          style="w-[150px] md:w-full"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 font-bold text-blue"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Depart</span>
        <PlaceInput
          placeholder={'Goma'}
          style="w-[150px] md:w-full"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 font-bold text-blue"
          defaultValue={props.data.place_depart?.toString?.()}
          name="depart"
          onChange={(e: string) => {
            props.setData({
              ...props.data,
              place_depart: Number.parseInt(e, 10),
            });
          }}
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-[#B3B3B3] pl-4">
        <span className="text-sm">Arriver</span>
        <PlaceInput
          placeholder={'Kin'}
          style="w-[150px] md:w-full sm:mb-0"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 font-bold text-blue sm:mb-0"
          defaultValue={props.data.place_arrival?.toString?.()}
          name="arrival"
          onChange={(e: string) => {
            console.log(e);
            props.setData({
              ...props.data,
              place_arrival: Number.parseInt(e, 10),
            });
          }}
        />
      </div>
    </div>
  );
};

export { Filters };
