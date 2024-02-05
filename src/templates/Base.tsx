import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Services } from './Services';
import { Team } from './Team';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-[90vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 mt-14 h-full w-full bg-[#002240]/90">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Projects />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export { Base };
