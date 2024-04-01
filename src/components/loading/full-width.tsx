import { Spinner } from 'flowbite-react';
import type { FC } from 'react';

export const FullWidthLoading: FC<{ text?: string }> = ({ text }) => {
  return (
    <div className="fixed left-0 top-0 z-[9000] h-screen w-screen bg-primary-200/90">
      <div className="flex size-full flex-col items-center justify-center gap-5">
        <p className="text-[14px] md:text-[20px]">{text || 'Loading'}</p>
        <Spinner color="gray" size="xl" />
      </div>
    </div>
  );
};
