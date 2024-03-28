import { useRouter } from 'next/router';
import React from 'react';

const tabs = [
  { label: 'Mes reservations', link: '/dashboard' },
  { label: 'Mon profile', link: '/profile' },
  { label: 'Horaire de vol', link: '/profile' },
];

const AsideNav: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  const navigation = useRouter();

  return (
    <div className="flex h-screen flex-col items-start justify-between gap-8 bg-blue md:p-4 lg:p-8">
      <div className="flex flex-col gap-20">
        <img src="/assets/images/home/home.png" className="" alt="Logo" />
        <nav className="flex flex-col items-start gap-8 text-[14px] text-white">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                navigation.push(tab.link);
                handleTabClick(index);
              }}
              className={`${
                currentTab === index
                  ? 'rounded-[8px] bg-white/10 py-3 font-semibold text-white md:px-4 lg:px-6'
                  : 'text-white md:px-3 lg:ml-2'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <button
        onClick={() => {
          navigation.push('/login');
        }}
        className="rounded-lg bg-white px-6 py-2 font-semibold text-blue"
      >
        Deconnexion
      </button>
    </div>
  );
};

export { AsideNav };
