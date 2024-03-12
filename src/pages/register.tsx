import { RegisterPage } from '@/templates/Register';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Register = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-[100vh]">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/40 ">
          <RegisterPage />
        </div>
      </div>
    </div>
  );
};

export default Register;