import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { FlightSchedule } from './FlightSchedule';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="h-full w-full"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-blue/20 flex flex-row">
        <aside className="bg-blue h-full w-[20%] rounded-tr-[15px] rounded-br-[15px] py-24 px-8">
           <AsideNav />
        </aside>
         <div className="w-[80%]">
           <MyReservations />
         </div>
        </div>
      </div> */}

      <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="h-full w-full"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-blue/20 ">
          <FlightSchedule />
        </div>
      </div>
      {/* <BookingPage />
      <Hero />
      <FlightSchedule /> */}
    </div>
  );
};

export { Base };
