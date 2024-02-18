import React from 'react';

import PassengerForm from '@/components/booking/passengerForm';
import { Navbar } from '@/navigation/Navbar';

const BookingPage: React.FC = () => {
  return (
    <div id="home" className="flex h-[100vh] flex-col items-center px-16 py-4">
      <Navbar />
      <div className=" m-auto flex w-full flex-col gap-4">
        <PassengerForm />
      </div>
    </div>
  );
};

export default BookingPage;
