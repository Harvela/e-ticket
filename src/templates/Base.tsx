import { AsideNav } from '@/navigation/AsideNav';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { MyReservations } from './MyReservations';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-[100vh]">
        <div className="absolute left-0 top-0 flex size-full flex-row bg-white">
          <aside className="m-5 h-fit w-[18%] rounded-[15px] bg-blue/5 px-8 py-24 shadow-md shadow-primary-200">
            <AsideNav />
          </aside>
          <div className="w-[80%]">
            <MyReservations />
          </div>
        </div>
      </div>

      {/* <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/40 ">
          <FlightSchedule />
        </div>
      </div> */}
      {/* <BookingPage />
      <Hero />
      <FlightSchedule /> */}
    </div>
  );
};

export { Base };
