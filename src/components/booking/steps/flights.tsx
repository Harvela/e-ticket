import dayjs from 'dayjs';
import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { IoIosArrowForward } from 'react-icons/io';
import { useMutation, useQuery } from 'react-query';

import { Filters } from '@/components/filter';
import type { Flight } from '@/components/forms/hooks/data';
import {
  countReservation,
  fetchSchedules,
} from '@/components/forms/hooks/data';
import { FullWidthLoading } from '@/components/loading/full-width';
import { getTimeOrDate } from '@/utils/format';
import { useTranslation } from 'next-i18next';

const Flights: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
  const [filterData, setFilterData] = useState<any>({});
  const [currentFlight, setCurrentFlight] = useState<number>(0);
  const [flightData, setFlightData] = useState<any>();

  useEffect(() => {
    const flightDataJSON = JSON.parse(
      localStorage.getItem('flightData') || '[]',
    );
    setFlightData(flightDataJSON);
    setFilterData(flightDataJSON[0]);
  }, []);

  const { data, isLoading } = useQuery(['flights', { ...filterData }], () =>
    fetchSchedules(filterData),
  );

  const onSelected = (vol: Flight) => {
    const currentReservationSt = localStorage.getItem('reservation');
    const currentReservation = currentReservationSt
      ? JSON.parse(currentReservationSt)
      : {};
    if (!currentReservation.flights) currentReservation.flights = [];
    currentReservation.flights?.push({
      id: vol.id,
    });

    localStorage.setItem('reservation', JSON.stringify(currentReservation));
    console.log(
      'testing',
      flightData.length,
      currentReservation.flights?.length,
    );
    if ((currentReservation.flights?.length || 0) === flightData.length)
      onNextStep();
    else {
      setFilterData(flightData[currentFlight + 1]);
      setCurrentFlight(currentFlight + 1);
    }
  };

  const mutation = useMutation(countReservation);
  const [loadingText, setLoaingText] = useState('');

  const checkFlight = async (vol: Flight) => {
    setLoaingText('Validation des informations en cours');
    const dataChecked = await mutation.mutateAsync({ id: vol.id });
    setLoaingText('');
    if (
      typeof dataChecked.data !== 'undefined' &&
      dataChecked.data < vol.attributes.plane.data.attributes.placeCount
    ) {
      onSelected(vol);
    } else {
      // show message d erreur
    }
  };

  const navigation = useRouter();
  const {t} = useTranslation('common');

  return (
    <div className="flex h-[70vh] flex-col gap-0 p-0 md:p-10">
      {loadingText && <FullWidthLoading text={loadingText} />}
      <div className="flex flex-row justify-between text-[14px] md:text-[16px]">
        <h2 className="mb-4 uppercase text-blue">
          ETAPE 1/5 <span className="mx-4">|</span> {t('flights.vol-selection')}{' '}
          <span className="font-bold underline">
            {flightData?.[currentFlight]?.date}
          </span>
        </h2>
        <button
          onClick={() => navigation.back()}
          className="ml-auto flex h-[30px] flex-row gap-[5px] rounded-[5px] border-DEFAULT border-blue px-1 md:px-3"
        >
          <ArrowLeft /> {t('btn.cancel')}[
        </button>
      </div>

      <Filters
        data={filterData}
        date={flightData?.[currentFlight]?.date}
        setData={setFilterData}
      />

      <div className="overflow-y-scroll">
        {isLoading && (
          <div className="flex flex-row gap-5">
            <p>{t('flights.searching')}</p>
            {<Spinner color="gray" />}
          </div>
        )}
        <p className="text[16px] pb-8 font-semibold text-blue">
          {data?.meta?.pagination?.total} {t('flights.title')}{' '}
        </p>
        {data?.data?.length === 0 && (
          <div className="flex h-[50vh] flex-row items-center justify-center">
            <p>{t('flights.not-found')}</p>
            <button
              className="rounded-[8px] bg-blue px-4 py-1 text-sm text-white"
              onClick={() => navigation.push('/')}
            >
              {t('btn.back')}
            </button>
          </div>
        )}
        {data?.data?.map((vol, index) => (
          <div key={index}>
            <div className="mb-4 flex w-full flex-col gap-2 rounded-[8px] bg-blue/10 p-4 md:hidden">
              <div className="flex flex-row items-center justify-between font-bold text-blue">
                <div className="flex flex-row items-center">
                  <img
                    src={`https://e-ticket.harvely.com${vol.attributes.plane.data.attributes.company.data.attributes.logo.data.attributes.url}`}
                    alt="logo"
                    className="mr-2 size-[30px] rounded-[10px] md:block"
                  />
                  <p className="text-[16px]">
                    {
                      vol.attributes.plane.data.attributes.company.data
                        .attributes.name
                    }
                  </p>
                </div>
                <p className="text-[16px]">
                  <span className="mr-2">{t('flights.title')}</span>
                  00000
                </p>
              </div>

              <div className="my-4 flex flex-row justify-between rounded-lg bg-blue p-4 text-[12px] text-white md:text-[16px]">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>{t('flights.from')}</p>
                    <p>{t('flights.to')}</p>
                    <p>{t('flights.plane')}</p>
                  </div>
                  <div className="mx-4 h-20 w-[2px] bg-white" />

                  <div className="flex flex-col gap-2">
                    <p>{vol.attributes.place_depart.data.attributes.name}</p>
                    <p>{vol.attributes.place_arrival.data.attributes.name}</p>
                    <p>{vol.attributes.plane.data.attributes.model}</p>
                  </div>
                </div>

                <div className="mt-1 flex flex-col gap-2">
                  <p>
                    {getTimeOrDate(
                      vol.attributes.time_depart as unknown as string,
                      filterData?.date,
                    )}
                  </p>
                  <p>
                    {getTimeOrDate(
                      vol.attributes.time_arrival as unknown as string,
                      filterData?.date,
                    )}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between">
                <p className="text-[16px] font-semibold text-red">
                  Prix : {vol.attributes.totalPrice}
                </p>
                <button
                  className="rounded-lg bg-[#B85043] px-4 py-1 text-[14px] text-white"
                  onClick={() => {
                    const currentReservationSt =
                      localStorage.getItem('reservation');
                    const currentReservation = currentReservationSt
                      ? JSON.parse(currentReservationSt)
                      : {};
                    currentReservation.flights?.push({
                      id: vol.id,
                    });
                    console.log(currentReservation);
                    localStorage.setItem(
                      'reservation',
                      JSON.stringify(currentReservation),
                    );
                    onNextStep();
                  }}
                >
                  Selectionner
                </button>
              </div>
            </div>

            <div className="mb-8 hidden w-full flex-row items-center justify-between gap-4 rounded-[8px] bg-blue/5 p-5 md:flex">
              <img
                src={`https://e-ticket.harvely.com${vol.attributes.plane.data.attributes.company.data.attributes.logo.data.attributes.url}`}
                alt="logo"
                className="mr-6 size-[100px] rounded-[100px]"
              />

              <div className="lg-grow w-full">
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[14px] font-bold text-blue">
                    {
                      vol.attributes.plane.data.attributes.company.data
                        .attributes.name
                    }
                  </h4>
                  <p className="text-[14px] font-semibold text-red">
                    Prix - {vol.attributes.totalPrice} $
                  </p>
                </div>

                <div className="my-3 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-between gap-5 rounded-[8px] bg-red/20 px-4 py-1">
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.attributes.place_depart.data.attributes.name}
                    </span>
                    <span className="text-[12px] font-semibold text-blue">
                      {getTimeOrDate(
                        vol.attributes.time_depart as unknown as string,
                        filterData?.date,
                      )}
                    </span>
                  </div>
                  <div className="mx-2 flex flex-row items-center justify-center text-blue/60 md:mx-5">
                    <div className="mr-[-10px] h-px w-[50px] bg-blue/60" />
                    <IoIosArrowForward />
                  </div>
                  <div className="flex flex-row items-center justify-between gap-5 rounded-[8px] bg-blue/20 px-4 py-1">
                    <span className="text-[12px] font-semibold text-blue">
                      {vol.attributes.place_arrival.data.attributes.name}
                    </span>
                    <span className="text-[12px] font-semibold text-blue">
                      {getTimeOrDate(
                        vol.attributes.time_arrival as unknown as string,
                        filterData?.date,
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-[14px] font-bold text-blue">
                    Temps de vol
                    <span className="ml-4 text-red">
                      {dayjs(
                        getTimeOrDate(
                          vol.attributes.time_arrival as unknown as string,
                          filterData?.date,
                        ),
                      ).diff(
                        dayjs(
                          getTimeOrDate(
                            vol.attributes.time_depart as unknown as string,
                            filterData?.date,
                          ),
                        ),
                        'minutes',
                      )}{' '}
                      minutes
                    </span>
                  </h4>
                  <button
                    className="rounded-[8px] bg-blue px-2 py-1 text-sm text-white lg:px-4"
                    onClick={() => {
                      checkFlight(vol);
                    }}
                  >
                    Selectionner
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
