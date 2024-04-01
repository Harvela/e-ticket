import { Flowbite, Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useRouter();

  return (
    <Flowbite>
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
          <div className="absolute -left-px top-[100px] flex h-2/5 w-full flex-col items-start justify-between gap-8 rounded-md  bg-white px-8 py-12">
            <div className="flex flex-col items-start gap-8">
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
              <button
                className="rounded-lg border border-blue px-8 py-2 text-blue"
                onClick={() => {
                  navigation.push('/');
                }}
              >
                Reserver
              </button>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                navigation.push('/login');
              }}
              className="rounded-lg bg-blue px-6 py-2 font-semibold text-white"
            >
              Deconnexion
            </button>
          </div>
        </Navbar.Collapse>
        <Link
          activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
          to="/"
          smooth
          spy
          offset={-100}
          className="rounded-lg border border-blue px-4 py-1 text-blue"
        >
          Reserver
        </Link>
      </Navbar>

      <Navbar
        className="hidden md:block"
        style={{
          width: '100%',
          zIndex: 40,
        }}
      >
        <h1 className="text-lg font-semibold text-blue">Mes reservations </h1>
        <Navbar.Collapse className="flex flex-row items-center">
          <Link
            activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="rounded-lg border border-blue px-4 py-1 text-blue"
          >
            Reserver
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as UserNavbar };
