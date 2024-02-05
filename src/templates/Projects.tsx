import Link from 'next/link';
import type { ReactNode } from 'react';
import { FaBook, FaHeart, FaLeaf } from 'react-icons/fa';

import { projects } from '@/utils/projects';

type ProjectType = 'Health Tech' | 'Education' | 'Agrobusiness';

const projectIcons: Record<ProjectType, ReactNode> = {
  'Health Tech': <FaHeart height={2} width={2} />,
  Education: <FaBook height={2} width={2} />,
  Agrobusiness: <FaLeaf height={2} width={2} />,
};

const Projects = () => {
  return (
    <div className="mt-12 text-[#002240]" id="projects">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-row gap-16 p-16"
          style={{ backgroundColor: `${project.backgroundColor}` }}
        >
          <div
            className="flex h-[250px] w-[25%] flex-row items-center justify-center rounded-xl p-8 text-white"
            style={{ backgroundColor: `${project.logoColor}` }}
          >
            <img
              src={project.logo}
              alt={`${project.name} Logo`}
              className="h-30 w-30 m-auto rounded-full"
            />
          </div>
          <div className="w-[60%]">
            <div
              className="flex w-[16%] flex-row items-center justify-center gap-2 rounded-[5px] px-2 py-1"
              style={{ backgroundColor: `${project.badgeColor}` }}
            >
              {projectIcons[project.type as ProjectType] && (
                <div className="">
                  {projectIcons[project.type as ProjectType]}
                </div>
              )}
              <h4 className="text-[10px] font-semibold">{project.type}</h4>
            </div>
            <h2 className="my-6 font-bold">{project.name}</h2>
            <p className="mb-8 text-sm">{project.description}</p>
            <Link
              href={project.link}
              className="border-1 rounded-lg border border-dashed border-[#002240] px-6 py-2 font-semibold text-[#002240]"
            >
              Visiter le projet
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Projects };
