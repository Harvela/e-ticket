import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-scroll';

export type NavbarProps = {
  // Prop types go here
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
  // useEffect(() => {
  //   scroller.scrollTo('home', {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // }, []);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="rounded-xl px-2"
        style={{
          width: '100%',
          zIndex: 40,
          background:
            'linear-gradient(90deg, rgba(234, 240, 240, 0.5), rgba(234, 240, 240, 0.3))',
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
            activeClass="font-bold border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="mt-1 font-semibold text-blue"
          >
            Traquer mon billet
          </Link>
          <Link
            activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="rounded-lg bg-blue px-4 py-1 font-semibold text-white"
          >
            Deconnexion
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as UserNavbar };
