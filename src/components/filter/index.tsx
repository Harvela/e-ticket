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
    <div className="mb-4 flex h-[100px] flex-row items-center justify-between gap-2 overflow-x-scroll md:h-[150px] md:gap-8">
      <div className="flex h-[37px]  flex-row items-center gap-4 rounded-[8px] border border-white  pl-4">
        <span className="w-[150px] text-[14px] text-white md:w-[140px]">
          {props.showDay ? 'Jour de la semaine' : 'Date'}
        </span>
        {!props.showDay ? (
          <Input
            type="date"
            defaultValue={props.date}
            onChange={(e: any) => {
              props.setData({ ...props.data, date: e });
            }}
            name="date"
            placeholder="Date"
            style="rounded-[8px] w-[150px] md:w-[150px] text-[14px] text-blue bg-[#FFF6DE]"
          />
        ) : (
          <Select
            name="date"
            placeholder={''}
            options={[
              { label: 'LUNDI', value: 'LUNDI' },
              { label: 'MARDI', value: 'MARDI' },
              { label: 'MERCREDI', value: 'MERCREDI' },
              { label: 'JEUDI', value: 'JEUDI' },
              { label: 'VENDREDI', value: 'VENDREDI' },
              { label: 'SAMEDI', value: 'SAMEDI' },
              { label: 'DIMANCHE', value: 'DIMANCHE' },
            ]}
            onChange={(e: string) => {
              props.setData({ ...props.data, date: '', rawDate: e });
            }}
            style="rounded-[8px] w-[150px] text-[14px] text-blue bg-[#FFF6DE]"
          />
        )}
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-white pl-4">
        <span className="text-sm text-white">Compagnie</span>
        <CompanyInput
          name="company"
          placeholder=" "
          onChange={(e: string) => {
            props.setData({ ...props.data, company: e });
          }}
          style="w-[150px]"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 text-white/80"
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-white pl-4">
        <span className="text-sm text-white">Ville de depart</span>
        <PlaceInput
          placeholder={'Goma'}
          style="w-[150px]"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 text-white/80"
          defaultValue={props?.data?.place_depart?.toString?.()}
          name="depart"
          onChange={(e: string) => {
            props.setData({
              ...props.data,
              place_depart: Number.parseInt(e, 10),
            });
          }}
        />
      </div>
      <div className="border-1 flex flex-row items-center gap-4 rounded-[8px] border border-white pl-4">
        <span className="text-sm text-white">Ville d&apos;arriver</span>
        <PlaceInput
          placeholder={'Kin'}
          style="w-[150px] sm:mb-0"
          bgColor="rounded-[0px] rounded-r-[8px] bg-blue/10 text-white/80 sm:mb-0"
          defaultValue={props.data?.place_arrival?.toString?.()}
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
