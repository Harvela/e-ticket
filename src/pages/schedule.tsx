import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layout/Meta';
import { FlightSchedule } from '@/templates/FlightSchedule';
import { AppConfig } from '@/utils/AppConfig';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Schedule = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-screen">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/70 pb-[50px] ">
          <FlightSchedule />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
