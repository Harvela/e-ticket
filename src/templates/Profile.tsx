import React, { useEffect } from 'react';

import Input from '@/components/forms/input';
import { AsideNav } from '@/navigation/AsideNav';
import { UserNavbar } from '@/navigation/UserNavbar';

const ProfilePage: React.FC = () => {
  const [user, setUser] = React.useState<any>();
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  }, []);

  return (
    <div className="flex flex-row gap-16 p-4 md:p-0">
      <div className="hidden w-1/5 md:block">
        <AsideNav />
      </div>

      <div className="mt-8 w-full md:mt-0 md:w-[70%]">
        <div className=" md:hidden">
          <UserNavbar />
        </div>
        <h1 className="hidden py-8 text-lg font-semibold text-blue md:block">
          Mes informations
        </h1>
        <div className="mt-8 p-4 md:p-0">
          <div>
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="text-[16px] font-medium text-black">PROFILE</h3>
              {/* <button
                onClick={() => console.log('profile')}
                className="rounded-[8px] bg-blue px-4 py-1 text-[14px] text-white"
              >
                Enregistrer
              </button> */}
            </div>
            <div className="mt-2 h-px w-full bg-black" />
          </div>

          <div className="mt-8 flex w-full flex-col md:flex-row md:gap-20">
            <div className="w-full">
              <Input
                name="name"
                label="Nom complet"
                placeholder="Votre nom"
                style="mb-6"
                onChange={() => {
                  console.log('any');
                }}
                defaultValue={user?.fullname}
              />
              <Input
                name="email"
                type="mail"
                label="Address email"
                placeholder="example@gmail.com"
                style="mb-6"
                onChange={() => {
                  console.log('any');
                }}
                defaultValue={user?.email}
              />
            </div>
          </div>
        </div>
        {/* 
        <div className="mt-12 p-4 md:p-0">
          <div>
            <div className="flex w-full flex-row items-center justify-between">
              <h3 className="text-[16px] font-medium text-black">
                CHANGER MOT DE PASSE
              </h3>
              <button
                onClick={() => console.log('password')}
                className="rounded-[8px] bg-blue px-4 py-1 text-[14px] text-white"
              >
                Enregistrer
              </button>
            </div>
            <div className="mt-2 h-px w-full bg-black" />
          </div>

          <div className="mt-8 flex w-full flex-col md:flex-row md:gap-20">
            <Input
              name="password"
              label="Mot de passe actuel"
              placeholder=""
              style="mb-6"
              onChange={() => {
                console.log('any');
              }}
            />
            <Input
              name="newPassword"
              label="Nouveau mot de passe"
              placeholder=""
              style="mb-6"
              onChange={() => {
                console.log('any');
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfilePage;
