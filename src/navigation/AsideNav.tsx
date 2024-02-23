import { useRouter } from 'next/router';
import React from 'react';

const tabs = [
  { label: 'Mes reservations', link: '/dashboard' },
  { label: 'Mon profile', link: '/profile' },
];

const AsideNav: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  const navigation = useRouter();

  return (
    <nav className="flex h-[50vh] flex-col items-start gap-6 rounded-[10px] border border-[#BDD4E8] bg-[#FDFEFF] p-8 text-[14px] text-blue shadow-md shadow-black/20">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => {
            navigation.push(tab.link);
            handleTabClick(index);
          }}
          className={`${
            currentTab === index
              ? 'rounded-[8px] bg-blue/10 px-4 py-2 font-semibold text-blue'
              : 'text-blue'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export { AsideNav };
