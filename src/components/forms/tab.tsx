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
        <div className="flex w-full flex-row items-center justify-between rounded-[10px] bg-blue px-4 py-2 text-[12px] lg:text-sm">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleTabClick(index)}
              className={`rounded-lg font-semibold ${
                currentTab === index
                  ? 'bg-white px-2 py-1 text-blue lg:px-4'
                  : 'text-white hover:bg-white hover:px-4 hover:py-1 hover:text-blue'
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
