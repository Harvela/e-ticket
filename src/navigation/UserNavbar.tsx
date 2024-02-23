import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
};

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 md:p-0 text-white',
      active: {
        on: 'text-white dark:text-white md:bg-transparent md:text-white',
        off: 'border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-white hover:cursor-not-allowed dark:text-white',
        off: '',
      },
    },
  },
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useRouter();

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="rounded-xl p-3 md:hidden"
        style={{
          width: '100%',
          zIndex: 40,
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <Navbar.Toggle
            className="text-blue"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Navbar.Brand href="#">
            <img
              src="/assets/images/home/logo.png"
              className="h-6 rounded-[4px] bg-white"
              alt="Logo"
            />
          </Navbar.Brand>
        </div>
        <Navbar.Collapse className={isOpen ? 'block' : 'hidden'}>
          <div className="absolute top-[110px] flex w-full flex-col items-start gap-4  rounded-md bg-white p-4">
            <button
              onClick={() => {
                navigation.push('/dashboard');
              }}
            >
              Mes reservations
            </button>
            <button
              onClick={() => {
                navigation.push('/profile');
              }}
            >
              Mon profile
            </button>
          </div>
        </Navbar.Collapse>
        <Link
          activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
          to="pricing"
          smooth
          spy
          offset={-100}
          className="rounded-lg border border-blue px-2 py-1 text-[12px] text-blue"
        >
          Faire une reservation
        </Link>
      </Navbar>

      <Navbar
        className="hidden rounded-xl px-2 md:block"
        style={{
          width: '100%',
          zIndex: 40,
        }}
      >
        <Navbar.Brand href="#">
          <img
            src="/assets/images/home/logo.png"
            className="h-4 rounded-lg bg-white lg:h-8"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="flex flex-row items-center">
          <Link
            activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="rounded-lg border border-blue px-4 py-1 text-blue"
          >
            Faire une reservation
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as UserNavbar };
