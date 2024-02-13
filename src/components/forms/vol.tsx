import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import Input from './input';

type VolProps = {
  setData: (data: any) => void;
  data: any;
};

export const FlyForm: React.FC<VolProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(2);

  return (
    <div className="w-full">
      <div
        className={`flex justify-start rounded-t-[15px] bg-[#EAF0F0] p-4${
          selectedTab === 2 ? 'w-[32%]' : 'w-[38%]'
        }`}
      >
        <div className="flex flex-row items-center gap-4">
          <button
            className={`flex flex-row items-center gap-2 rounded-lg px-4 py-1 text-sm ${
              selectedTab === 1 ? 'bg-blue text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedTab(1)}
          >
            <FaArrowRight />
            Aller simple
          </button>
          <button
            className={`flex flex-row items-center gap-2 rounded-lg px-4 py-1 text-sm ${
              selectedTab === 2 ? 'bg-blue text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedTab(2)}
          >
            <div className="flex flex-row items-center">
              <FaArrowRight />
              <FaArrowLeft />
            </div>
            Aller et retour
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center justify-between gap-4 rounded-r-[15px] rounded-bl-[15px] bg-[#EAF0F0] p-4 md:flex md:flex-row md:pt-4 lg:flex lg:flex-row lg:pt-4">
        <Input
          name="text"
          label="Vous venez d'ou?"
          icon={<SlArrowDown />}
          placeholder="Kinshasa"
          onChange={(e: any) => {
            props.setData({
              ...props.data,
              name: e.target.value,
            });
          }}
        />
        <Input
          name="text"
          label="Vous allez où?"
          icon={<SlArrowDown />}
          placeholder="Goma"
          onChange={(e: any) => {
            props.setData({
              ...props.data,
              name: e.target.value,
            });
          }}
        />
        <Input
          name="date"
          type="date"
          label="Date de départ"
          placeholder="Goma"
          style="border border-l-2 border-blue/10 border-r-0 border-t-0 border-b-0 pl-4"
          onChange={(e: any) => {
            props.setData({
              ...props.data,
              name: e.target.value,
            });
          }}
        />
        {selectedTab === 2 && (
          <Input
            name="date"
            type="date"
            label="Date d'arrivée"
            placeholder="Goma"
            style="border border-l-2 border-blue/10 border-r-0 border-t-0 border-b-0 pl-4"
            onChange={(e: any) => {
              props.setData({
                ...props.data,
                name: e.target.value,
              });
            }}
          />
        )}
        <Input
          name="date"
          type="number"
          label="Nombre de passagers"
          icon={<SlArrowDown />}
          placeholder="Goma"
          style="border border-l-2 border-blue/10 border-r-0 border-t-0 border-b-0 pl-4"
          onChange={(e: any) => {
            props.setData({
              ...props.data,
              name: e.target.value,
            });
          }}
        />
        <button
          className="rounded-[5px] bg-blue px-4 py-[5px] text-sm text-white"
          onClick={() => {
            console.log('form');
          }}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
};
