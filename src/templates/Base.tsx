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
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export { Base };
