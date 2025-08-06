import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  year: string;
  tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="relative h-60 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex space-x-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
                aria-label="View live project"
              >
                <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition"
                aria-label="View GitHub repository"
              >
                <FiGithub />
              </a>
            )}
          </div>
        </div>
        <span className="absolute top-4 right-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <Link
          href={`/work/${project.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition group"
        >
          View case study
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}