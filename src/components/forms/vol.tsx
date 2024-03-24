'use client';

import dayjs from 'dayjs';
import { Button, Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import { PlaceInput } from '../flight-input/place';
import Input from './input';

type VolProps = {
  data: any;
};

export const FlyForm: React.FC<VolProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const navigation = useRouter();
  const [errors, setErrors] = useState<any>({});

  const { register, handleSubmit, setValue, watch } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    if (!data.origin || !data.destination || !data.departureDate) {
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
      JSON.stringify({ params: { ...data }, flights: [], passengers: [] }),
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

  console.log(watch('departureDate'));

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 items-center justify-between gap-4 rounded-b-[15px] bg-[#EAF0F0] p-4 md:flex md:flex-row md:justify-evenly md:pt-4 lg:flex lg:flex-row lg:rounded-r-[15px] lg:px-4 lg:pt-4"
      >
        <PlaceInput
          name="origin"
          label="Vous venez d'ou?"
          icon={<SlArrowDown />}
          placeholder="Kinshasa"
          onChange={(e: any) => {
            setValue('origin', e);
          }}
          excludedOptions={[watch('destination')]}
        />
        <PlaceInput
          name="destination"
          label="Vous allez où?"
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
          label="Date de départ"
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
            label="Date de retour"
            onChange={(e: any) => {
              setValue('arrivalDate', e);
            }}
            placeholder="Goma"
            style="lg:pl-4"
            register={register}
            min={dayjs(watch('departureDate')).format('YYYY-MM-DD')}
          />
        )}
        <Input
          name="passengerNumber"
          type="number"
          label="Nombre de passagers"
          placeholder="Nombre passagers"
          style="lg:pl-4"
          register={register}
        />
        <button
          className="mt-6 h-[35px] rounded-[5px] bg-blue px-4 py-[5px] text-sm text-white"
          // onClick={() => {
          //   navigation.push('/reservation');
          // }}
          type="submit"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
};
