import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LoginPage } from '@/templates/Login';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Login = () => {
  const navigation = useRouter();

  useEffect(() => {
    const t = window.localStorage.getItem('token') as string;
    if (t) navigation.push('/dashboard');
  }, []);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-screen">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-blue/40 ">
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
