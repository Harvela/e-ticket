import React from 'react';

export type TabProps = {
  tabs: Array<{
    label: string;
    view?: React.ReactNode;
  }>;
};

export const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="h-full">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full flex-col items-center gap-4 rounded-[10px] bg-blue p-2 text-[14px] lg:text-[14px]">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleTabClick(index)}
              className={`flex-1 cursor-pointer rounded-lg px-4 font-semibold  ${
                currentTab === index
                  ? 'bg-white  text-blue '
                  : 'text-white hover:bg-white  hover:text-blue'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`mt-2 ${currentTab === index ? '' : 'hidden'}`}
          >
            {tab.view}
          </div>
        ))}
      </div>
    </div>
  );
};
