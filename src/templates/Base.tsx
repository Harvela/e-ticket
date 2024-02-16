import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { FlightSchedule } from './FlightSchedule';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <div className="relative h-[100vh]">
        <div className="absolute left-0 top-0 flex size-full flex-row bg-white">
          <aside className="m-5 h-fit w-[18%] rounded-[15px] bg-blue/5 px-8 py-24 shadow-md shadow-primary-200">
            <AsideNav />
          </aside>
          <div className="w-[80%]">
            <MyReservations />
          </div>
        </div>
      </div> */}

      <div
        style={{
          background:
            'linear-gradient(to bottom, rgb(175, 208, 241, 0), rgb(34, 58, 96, 0.4))',
        }}
        className="absolute left-0 top-0 size-full h-[100vh]"
      >
        <FlightSchedule />
      </div>

      {/* <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/40 ">
          <BookingPage />
        </div>
      </div> */}
      {/* <BookingPage />
      <Hero />
      <FlightSchedule /> */}
    </div>
  );
};

export { Base };
