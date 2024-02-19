import React from 'react';

import PassengerForm from '@/components/booking/passengerForm';
import { Navbar } from '@/navigation/Navbar';

const BookingPage: React.FC = () => {
  return (
    <div
      id="home"
      className="flex h-[100vh] flex-col items-center p-4 lg:px-16"
    >
      <Navbar />
      <div className=" m-auto flex w-full flex-col gap-4">
        <PassengerForm />
      </div>
    </div>
  );
};

export default BookingPage;
