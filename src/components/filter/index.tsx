import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common');
  const textColor = props.showDay ? 'text-white' : 'text-blue';
  const borderColor = props.showDay ? 'border-white' : 'border-blue';
  return (
    <div className="mt-[70px] flex  flex-col">
      {props.showDay && (
        <h1 className={`${textColor} mb-6 text-[23px] font-semibold`}>
          {t('filter.title')}
        </h1>
      )}
      <div className="mb-4 flex  flex-row items-center justify-between gap-2 overflow-x-scroll  md:gap-8">
        <div
          className={`flex  flex-row items-center gap-4 rounded-[8px] ${borderColor} overflow-y-visible  border-[1px] pl-4`}
        >
          <span className={`w-[150px] text-[14px] ${textColor} md:w-[140px]`}>
            {props.showDay ? t('filter.day') : 'Date'}
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
              style="rounded-[8px] w-[150px] md:w-[150px] text-[14px] text-white bg-blue"
            />
          ) : (
            <Select
              name="date"
              placeholder={''}
              options={[
                { label: t('filter.monday'), value: 'LUNDI' },
                { label: t('filter.tuesday'), value: 'MARDI' },
                { label: t('filter.wednesday'), value: 'MERCREDI' },
                { label: t('filter.thursday'), value: 'JEUDI' },
                { label: t('filter.friday'), value: 'VENDREDI' },
                { label: t('filter.saturday'), value: 'SAMEDI' },
                { label: t('filter.sunday'), value: 'DIMANCHE' },
              ]}
              onChange={(e: string) => {
                props.setData({ ...props.data, date: '', rawDate: e });
              }}
              style="rounded-[8px] w-[150px] text-[14px] text-blue bg-[#FFF6DE]"
            />
          )}
        </div>
        <div
          className={`border-1 flex flex-row items-center gap-4 rounded-[8px] border ${borderColor} pl-4`}
        >
          <span className={`text-sm ${textColor}`}>{t('filter.company')}</span>
          <CompanyInput
            name="company"
            placeholder=" "
            onChange={(e: string) => {
              props.setData({ ...props.data, company: e });
            }}
            style="w-[150px]"
            bgColor={`"rounded-[0px] rounded-r-[8px] bg-blue/10 ${textColor}`}
          />
        </div>
        <div
          className={`border-1 flex flex-row items-center gap-4 rounded-[8px] border ${borderColor} pl-4`}
        >
          <span className={`text-sm ${textColor}`}>{t('filter.depCity')}</span>
          <PlaceInput
            placeholder={'Kin'}
            style="w-[150px]"
            bgColor={`"rounded-[0px] rounded-r-[8px] bg-blue/10 ${textColor}`}
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
        <div
          className={`border-1 flex flex-row items-center gap-4 rounded-[8px] border ${borderColor} pl-4`}
        >
          <span className={`text-sm ${textColor}`}>{t('filter.arrCity')}</span>
          <PlaceInput
            placeholder={'Kan'}
            style="w-[150px] sm:mb-0"
            bgColor={`rounded-[0px] rounded-r-[8px] bg-blue/10 ${textColor} sm:mb-0`}
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
    </div>
  );
};

export { Filters };
