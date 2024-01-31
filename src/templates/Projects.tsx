import Link from 'next/link';

import { projects } from '@/utils/projects';

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-20 bg-secondary-200 px-4 py-8 lg:px-[100px]"
    >
      <h1 className="mb-2 mt-5 text-lg font-bold text-blue lg:text-2xl">
        Nos projets recents
      </h1>
      <hr className="mb-8 h-[4px] w-[100px] bg-blue" />
      <div className="mt-12 flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl  bg-black  p-8 text-white lg:h-[250px]"
          >
            <div className="flex flex-row items-center gap-4">
              <h2 className="font-semibold">{project.name}</h2>
              <hr className="h-[20px] w-[2px] bg-white" />
              <h4 className="text-secondary-900">{project.type}</h4>
            </div>
            <p className="my-8 text-sm">{project.description}</p>
            <Link
              href={project.link}
              className="border-1 rounded-lg border border-dashed border-secondary-900 px-6 py-2 text-secondary-900"
            >
              Visiter le projet
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Projects };
