'use client';

import dayjs from 'dayjs';
import { Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaArrowRight, FaWindowClose } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import { PlaceInput } from '../flight-input/place';
import Input from './input';
import { Passenger } from './passenger';

type VolProps = {
  data: any;
};

export const FlyForm: React.FC<VolProps> = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const navigation = useRouter();
  const [errors, setErrors] = useState<any>({});
  const [openDrop, setOpenDrop] = useState<boolean>(false);
  const { register, handleSubmit, setValue, watch } = useForm<any>();
  const [passengerInfo, setPassengerInfo] = useState<any>({});
  const onSubmit: SubmitHandler<any> = (data) => {
    if (
      !data.origin ||
      !data.destination ||
      !data.departureDate ||
      !(passengerInfo.adult || passengerInfo.children)
    ) {
      setErrors({ message: 'Veuillez completer tous les champs' });
      return;
    }
    const flightData = [
      {
        place_depart: data.origin,
        place_arrival: data.destination,
        date: data.departureDate,
      },
    ];
    if (data.arrivalDate && selectedTab === 2)
      flightData.push({
        place_depart: data.destination,
        place_arrival: data.origin,
        date: data.arrivalDate,
      });
    localStorage.setItem(
      'reservation',
      JSON.stringify({
        params: {
          ...data,
          passengerNumber:
            (passengerInfo.adult || 0) + (passengerInfo.children || 0),
        },
        flights: [],
        passengers: [],
        passengerInfo,
      }),
    );
    localStorage.setItem('flightData', JSON.stringify(flightData));
    navigation.push(
      `/reservation?${Object.keys(data)
        .map((item) => `${item}=${data[item]}`)
        .join('&')}`,
    );
  };

  // const mutation = useMutation(fetchFlights, {
  //   onSuccess: (data) => {
  //     // redirect if flights found
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     // show error message
  //   },
  // });

  // const onSubmit = (data: any) => {
  //   mutation.mutate(data);
  // };
  return (
    <div className="w-full">
      <Modal show={!!errors.message} onClose={() => setErrors({})}>
        <Modal.Header>Erreur</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {errors.message}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border-DEFAULT border-blue text-blue"
            onClick={() => setErrors({})}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={`flex w-full justify-start rounded-t-[15px] bg-[#EAF0F0] p-4 md:w-fit`}
      >
        <div className="flex flex-row items-center gap-4">
          <button
            className={`flex flex-row items-center gap-2 rounded-lg px-4 py-1 text-sm ${
              selectedTab === 1 ? 'bg-blue text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedTab(1)}
          >
            <FaArrowRight />
            {t('flights.oneWay')}
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
            {t('flights.roundTrip')}
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 items-center justify-between gap-4 rounded-b-[15px] bg-[#EAF0F0] p-4 md:flex md:flex-row md:justify-evenly md:pt-4 lg:flex lg:flex-row lg:rounded-r-[15px] lg:px-4 lg:pt-4"
      >
        <PlaceInput
          name="origin"
          label={t('flights.from')}
          icon={<SlArrowDown />}
          placeholder="Kinshasa"
          onChange={(e: any) => {
            setValue('origin', e);
          }}
          excludedOptions={[watch('destination')]}
        />
        <PlaceInput
          name="destination"
          label={t('flights.to')}
          icon={<SlArrowDown />}
          placeholder="Goma"
          onChange={(e: any) => {
            setValue('destination', e);
          }}
          excludedOptions={[watch('origin')]}
        />
        <Input
          name="departureDate"
          type="date"
          label={t('flights.departure')}
          placeholder="Goma"
          style=" lg:pl-4"
          register={register}
          min={dayjs().format('YYYY-MM-DD')}
          onChange={(e: any) => {
            setValue('departureDate', e);
          }}
        />
        {selectedTab === 2 && (
          <Input
            name="arrivalDate"
            type="date"
            label={t('flights.return')}
            onChange={(e: any) => {
              setValue('arrivalDate', e);
            }}
            placeholder="Goma"
            style="lg:pl-4"
            register={register}
            min={dayjs(watch('departureDate')).format('YYYY-MM-DD')}
          />
        )}

        <div className="relative">
          <span className="mb-2 flex flex-row items-center gap-1 text-[12px] font-semibold text-blue">
            {t('passengers.passengers')}
          </span>
          <button
            onClick={() => setOpenDrop(!openDrop)}
            type="button"
            className="flex w-full flex-row items-center rounded-[5px] border-blue/10 bg-blue/5 px-4 py-2 text-[16px] focus:outline-0 md:text-[14px]"
          >
            {t('booking.passenger')}
            <svg
              className="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {openDrop && (
            <div className="absolute bottom-full left-0 flex flex-row rounded-[5px] border border-gray-200 bg-white p-8 shadow-lg">
              <Passenger
                onPassengerChange={(adult, children, classe) => {
                  setPassengerInfo({ adult, children, classe });
                }}
              />
              <FaWindowClose
                onClick={() => setOpenDrop(false)}
                className="h-6 w-6 text-blue"
              />
            </div>
          )}
        </div>

        <button
          className="mt-6 h-[35px] rounded-[5px] bg-blue px-4 py-[5px] text-sm text-white"
          // onClick={() => {
          //   navigation.push('/reservation');
          // }}
          type="submit"
        >
          {t('flights.search')}
        </button>
      </form>
    </div>
  );
};
