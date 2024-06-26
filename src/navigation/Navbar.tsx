/* eslint-disable import/no-named-as-default */

'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';

import LanguageSwitcher from '@/components/languageSwitcher';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
  active?: string;
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

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const NavbarGlobal: React.FC<NavbarProps> = (props) => {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const navigation = useRouter();

  useEffect(() => {
    const ti = window.localStorage.getItem('token') as string;
    setToken(ti);
  }, []);

  return (
    <div className="w-full">
      <header className="mb-4 w-full">
        <LanguageSwitcher />
      </header>
      <Flowbite theme={{ theme: customTheme }}>
        <Navbar
          className="rounded-xl p-3 md:hidden"
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
              className="h-8 rounded-lg bg-white"
              alt="Logo"
            />
            <span className="pl-5 font-bold text-blue">TAWAJI</span>
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-blue bg-white font-semibold text-blue"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Navbar.Collapse className={isOpen ? 'block' : 'hidden'}>
            <div className="absolute top-[110px] ml-[5vw] flex w-[80vw] flex-col gap-4  rounded-md bg-white p-5">
              <Link href="/" className="font-semibold text-blue/60">
                {t('nav.nav1')}
              </Link>
              <Link href="/schedule" className="font-semibold text-blue/60">
                {t('nav.nav2')}
              </Link>
              <Link href="/about" className="font-semibold text-blue/60">
                {t('nav.nav3')}
              </Link>
              <Link href="/contact" className="font-semibold text-blue/60">
                {t('nav.nav4')}
              </Link>
              {/* <Link
              activeClass="font-bold border-secondary-900"
              to="pricing"
              smooth
              spy
              offset={-100}
              className="font-semibold text-white"
            >
              Traquer mon billet
            </Link> */}
              <button
                onClick={() => {
                  if (!token) navigation.push('/login');
                  else navigation.push('/dashboard');
                }}
                className="rounded-lg bg-blue px-2 py-1 text-[8px] font-semibold text-white lg:px-4 lg:text-sm"
              >
                {token ? t('nav.reservation') : t('auth.login')}
              </button>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Navbar
          className="hidden rounded-xl px-4 md:block"
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
            <span className="pl-5 font-bold text-blue">TAWAJI</span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Link
              href="/"
              className={
                props.active === 'acceuil' ? 'font-bold text-blue' : ''
              }
            >
              {t('nav.nav1')}
            </Link>
            <Link
              href="/schedule"
              className={
                props.active === 'schedule' ? 'font-bold text-blue' : ''
              }
            >
              {t('nav.nav2')}
            </Link>
            <Link href="/about">{t('nav.nav3')}</Link>
            <Link href="/contact">{t('nav.nav4')}</Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="flex flex-row items-center">
            {/* <Link
            activeClass="font-bold border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="mt-1 text-[8px] font-semibold text-blue lg:text-sm"
          >
            Traquer mon billet
          </Link> */}
            <button
              onClick={() => {
                if (!token) navigation.push('/login');
                else navigation.push('/dashboard');
              }}
              className="rounded-lg bg-blue px-2 py-1 text-[8px] font-semibold text-white lg:px-4 lg:text-sm"
            >
              {token ? t('nav.reservation') : t('auth.login')}
            </button>
          </Navbar.Collapse>
        </Navbar>
      </Flowbite>
    </div>
  );
};

export { NavbarGlobal as Navbar };
