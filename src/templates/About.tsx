import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { Navbar } from '@/navigation/Navbar';

const AboutPage: React.FC = () => {
  const navigation = useRouter();
  const { t } = useTranslation('common');
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <div className="flex h-fit flex-col items-center p-4 pb-[50px] md:h-[100vh] md:justify-between md:px-16">
        <Navbar active="acceuil" />
        <div className=" flex flex-col items-center justify-between">
          <h1 className="mt-[15vh] text-center text-[30px] font-bold tracking-widest text-white md:mt-4 lg:text-4xl">
            {t('about.title')}
          </h1>
          <div className="mt-24 grid h-fit w-[90%] grid-cols-1 flex-col gap-8 md:h-[300px] md:grid-cols-3  md:gap-24">
            <div className="rounded-md bg-white p-8 shadow-lg">
              <div className="h-2 w-12 bg-blue" />
              <h2 className="mt-4 text-[20px] font-bold text-blue">
                {t('about.cardTitle1')}
              </h2>
              <p className="mt-8 text-[14px] text-black">
                {t('about.cardContent1')}
              </p>
            </div>

            <div className="rounded-md bg-white p-8 shadow-lg">
              <div className="h-2 w-12 bg-blue" />
              <h2 className="mt-4 text-[20px] font-bold text-blue">
                {t('about.cardTitle2')}
              </h2>
              <p className="mt-8 text-[14px] text-black">
                {t('about.cardContent2')}
              </p>
            </div>

            <div className="rounded-md bg-white p-8 shadow-lg">
              <div className="h-2 w-12 bg-blue" />
              <h2 className="mt-4 text-[20px] font-bold text-blue">
                {t('about.cardTitle3')}
              </h2>
              <p className="mt-8 text-[14px] text-black">
                {t('about.cardContent3')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 w-[90%] p-4 pb-[50px] md:mt-16 md:px-16">
        <div className="flex flex-row gap-8 rounded-lg bg-[#EAF0F0]/50">
          <img
            src="/assets/images/home/background.jpg"
            alt="Hero"
            className="hidden size-[50%] rounded-lg object-cover md:block"
          />
          <div className="p-8">
            <h2 className="mb-4 text-2xl font-semibold text-blue">
              {t('about.whyTitle')}
            </h2>
            <p className="mb-12 text-[12px] text-black/60">
              {t('about.whyParagraph')}
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-row items-center gap-4">
                <p className="text-xl text-blue">
                  <FaCheckCircle />
                </p>
                <p className="font-semibold text-black">{t('about.why1')}</p>
              </li>
              <li className="flex flex-row items-center gap-4">
                <p className="text-xl text-blue">
                  <FaCheckCircle />
                </p>
                <p className="font-semibold text-black">{t('about.why2')}</p>
              </li>
              <li className="flex flex-row items-center gap-4">
                <p className="text-xl text-blue">
                  <FaCheckCircle />
                </p>
                <p className="font-semibold text-black">{t('about.why3')}</p>
              </li>
              <li className="flex flex-row items-center gap-4">
                <p className="text-xl text-blue">
                  <FaCheckCircle />
                </p>
                <p className="font-semibold text-black">{t('about.why4')}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-4 w-[90%] p-4 md:my-16 md:px-16">
        <div className="flex flex-col justify-between rounded-lg bg-[#EAF0F0]/50 p-8 md:flex-row md:items-center md:px-16 md:py-10">
          <div className="w-full md:w-[70%]">
            <h2 className="mb-8 text-2xl font-semibold text-blue">
              {t('about.wishTitle')}
            </h2>
            <p className="text-[16px] text-black/80">
              {t('about.wishParagraph')}
            </p>
          </div>
          <button
            onClick={() => {
              navigation.push('/contact');
            }}
            className="mt-8 w-[50%] rounded-lg bg-blue px-8 py-2 text-white md:mt-0 md:w-1/5"
          >
            {t('about.wishButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export { AboutPage };
