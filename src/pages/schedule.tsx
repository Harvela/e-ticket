import { Meta } from '@/layout/Meta';
import { FlightSchedule } from '@/templates/FlightSchedule';
import { AppConfig } from '@/utils/AppConfig';

const Schedule = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div
        style={{
          background:
            'linear-gradient(to bottom, rgb(255, 255, 255, 0), rgb(34, 58, 96, 0.2))',
        }}
        className="absolute left-0 top-0 size-full h-screen"
      >
        <FlightSchedule />
      </div>
    </div>
  );
};

export default Schedule;
