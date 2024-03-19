import BookingPage from '@/templates/Booking';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Reservation = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-screen">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/40 ">
          <BookingPage />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
