'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string[];
  link?: string;
  github?: string;
  year: string;
  tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle empty images array
  const hasImages = project.image && project.image.length > 0;
  const currentImage = hasImages ? project.image[currentImageIndex] : null;

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="relative h-60 overflow-hidden">
        {currentImage ? (
          <>
            <Image
              src={currentImage}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            
            {/* Navigation arrows for multiple images */}
            {project.image.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition"
                  aria-label="Previous image"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition"
                  aria-label="Next image"
                >
                  &rarr;
                </button>
              </>
            )}
          </>
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
        
        {/* Image counter */}
        {hasImages && project.image.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {currentImageIndex + 1} / {project.image.length}
          </div>
        )}
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