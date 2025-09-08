import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaArrowLeft, FaTag } from "react-icons/fa";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  // ⚡ Await params terlebih dahulu
  const { id } = await params;

  const project = await prisma.porto.findUnique({
    where: { id: Number(id) },
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Project yang Anda cari tidak ada atau telah dihapus.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const images = Array.isArray(project.image) ? project.image : [project.image];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="px-6 py-5 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-all group-hover:rotate-12">
              <span className="text-white font-bold text-lg">GH</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Genta Halilintar
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600 transition">
              Profile
            </Link>
            <Link href="/work" className="text-blue-600 font-medium relative">
              Work
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-16 pt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-gray-700 bg-gray-100 rounded-full px-4 py-2">
              <FaCalendarAlt className="mr-2 text-blue-500" />
              <span className="font-medium">{project.year}</span>
            </div>
            {project.tags &&
              project.tags.map((tag: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center bg-blue-50 text-blue-700 rounded-full px-4 py-2"
                >
                  <FaTag className="mr-2 text-blue-500" />
                  <span className="font-medium">{tag}</span>
                </div>
              ))}
          </div>
        </div>

        {images.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Galeri Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-80 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Detail Project
          </h2>
          <div className="space-y-6">
            {(project.link || project.github) && (
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Links</h3>
                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center px-5 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            )}

            {project.tags && (
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}