import { team } from '@/utils/team';

const Team = () => {
  return (
    <div id="team" className="relative z-20 px-4 py-8 lg:px-[100px]">
      <div className="rounded-md p-8 shadow-md shadow-blue/30">
        <h1 className="mb-2 mt-5 text-center text-lg font-bold text-blue lg:text-2xl">
          Notre equipe
        </h1>
        <hr className="m-auto mb-8 h-[4px] w-[100px] bg-blue" />
        <div className="mt-12 grid grid-cols-4 gap-16">
          {team.map((t, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 text-white shadow-md shadow-blue/30 lg:h-[200px]"
            >
              <div className="flex flex-row items-center gap-4">
                <h2 className="font-semibold">{t.name}</h2>
                <h4 className="text-secondary-900">{t.type}</h4>
              </div>
              <p className="my-8 text-sm">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Team };
