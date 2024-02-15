import React from 'react';
import { Link } from 'react-scroll';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
};

const AsideNav: React.FC = () => {
  return (
    <nav className="flex flex-col gap-8 text-white">
      <Link
        activeClass="text-blue bg-white py-1 px-4 font-bold cursor"
        to="/"
        smooth
        spy
        offset={-200}
      >
        Mes Reservations
      </Link>
      <Link
        activeClass="text-blue bg-white py-1 px-4 font-bold"
        to="/flyhours"
        smooth
        spy
        offset={-100}
      >
        Mon profile
      </Link>
      <Link
        activeClass="text-blue bg-white py-1 px-4 font-bold"
        to="services"
        smooth
        spy
      >
        Mon profile
      </Link>
    </nav>
  );
};

export { AsideNav };
