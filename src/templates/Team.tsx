import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="relative z-20 bg-[#002240] px-4 py-10 lg:px-16">
      <div className="rounded-md p-8">
        <h1 className="mb-2 text-lg font-bold text-[#E0F0FF] lg:text-xl">
          NOTRE EQUIPE
        </h1>
        <div className="mt-12 grid grid-cols-3 gap-20 text-[#002240]">
          {team.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-[24px] bg-white p-8"
            >
              <img
                src={t.icon}
                alt={`${t.name}`}
                className="h-20 w-20 rounded-full"
              />
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-semibold">{t.name}</h2>
                <span className="rounded-[8px] bg-[#0C5ABF]/10 px-4 py-1 text-[8px] text-[#0C5ABF]">
                  {t.role}
                </span>
              </div>
              <p className="my-8 text-center text-[10px]">{t.description}</p>
              <div className="flex flex-row items-center gap-4">
                <Link href={t.linkedin}>
                  <FaLinkedin />
                </Link>
                <Link href={t.twitter}>
                  <FaSquareXTwitter />
                </Link>
                <Link href={t.gmail}>
                  <MdEmail />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Team };
