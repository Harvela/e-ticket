import { AboutPage } from '@/templates/About';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const About = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-screen">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full h-4/5 object-cover"
        />
        <div className="absolute left-0 top-0 size-full h-4/5 bg-blue/40 ">
          <AboutPage />
        </div>
      </div>
    </div>
  );
};

export default About;
