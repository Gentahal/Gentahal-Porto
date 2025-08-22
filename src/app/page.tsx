import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCalendar, FiTag, FiMail } from "react-icons/fi";
import { SiNextdotjs, SiLaravel, SiPhp, SiMysql, SiMongodb, SiAndroid } from "react-icons/si";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = await prisma.porto.findUnique({
        where: { id: Number(params.id) }, 
    });

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
                <div className="text-center p-10 bg-white rounded-2xl shadow-lg max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Tidak Ditemukan</h2>
                    <p className="text-gray-600 mb-6">Project yang Anda cari tidak ada atau telah dihapus.</p>
                    <Link 
                        href="/work"
                        className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                        <FiArrowLeft className="mr-2" />
                        Kembali ke Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    const images = Array.isArray(project.image) ? project.image : [project.image];
    
    // Map tags to icons if they match known technologies
    const getTechIcon = (techName: string) => {
        const techMap: Record<string, JSX.Element> = {
            'Next.js': <SiNextdotjs className="w-5 h-5" />,
            'Laravel': <SiLaravel className="w-5 h-5" />,
            'PHP': <SiPhp className="w-5 h-5" />,
            'MySQL': <SiMysql className="w-5 h-5" />,
            'MongoDB': <SiMongodb className="w-5 h-5" />,
            'Android': <SiAndroid className="w-5 h-5" />,
            'Jetpack Compose': <SiAndroid className="w-5 h-5" />,
        };
        
        return techMap[techName] || <FiTag className="w-4 h-4" />;
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
                {/* Navigation */}
                <nav className="px-6 py-5 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-all group-hover:rotate-12">
                                <span className="text-white font-bold text-lg">GH</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-800">Genta Halilintar</span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-10">
                            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                            <Link href="/profile" className="text-gray-600 hover:text-blue-600 transition">Profile</Link>
                            <Link href="/work" className="text-blue-600 font-medium relative">
                                Work
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                            </Link>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
                        </div>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Back Button */}
                    <Link 
                        href="/work"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
                    >
                        <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
                        Kembali ke Portfolio
                    </Link>

                    {/* Header Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="lg:w-2/3">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="flex items-center text-gray-700 bg-gray-100 rounded-full px-4 py-2">
                                        <FiCalendar className="mr-2 text-blue-500" />
                                        <span className="font-medium">{project.year}</span>
                                    </div>
                                    
                                    {project.tags && project.tags.map((tag: string, idx: number) => (
                                        <div key={idx} className="flex items-center bg-blue-50 text-blue-700 rounded-full px-4 py-2">
                                            {getTechIcon(tag)}
                                            <span className="ml-2 font-medium">{tag}</span>
                                        </div>
                                    ))}
                                </div>

                                {(project.link || project.github) && (
                                    <div className="flex flex-wrap gap-4">
                                        {project.link && (
                                            <Link 
                                                href={project.link} 
                                                target="_blank" 
                                                className="flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                                            >
                                                <FiExternalLink className="mr-2" />
                                                Live Demo
                                            </Link>
                                        )}
                                        {project.github && (
                                            <Link 
                                                href={project.github} 
                                                target="_blank" 
                                                className="flex items-center px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                                            >
                                                <FiGithub className="mr-2" />
                                                Source Code
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>

                            {images.length > 0 && (
                                <div className="lg:w-1/3">
                                    <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                                        <Image 
                                            src={images[0]} 
                                            alt={project.title} 
                                            fill 
                                            className="object-cover" 
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image Gallery */}
                    {images.length > 1 && (
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Galeri Project</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {images.slice(1).map((img, idx) => (
                                    <div key={idx} className="relative w-full h-64 rounded-xl overflow-hidden group">
                                        <Image 
                                            src={img} 
                                            alt={`${project.title} - Image ${idx + 2}`} 
                                            fill 
                                            className="object-cover transition-transform duration-500 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Project Details */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Detail Teknis</h2>
                        
                        {project.tags && (
                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-gray-700 mb-4">Teknologi yang Digunakan</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {project.tags.map((tag: string, idx: number) => (
                                        <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl">
                                            <div className="text-blue-600 mr-3">
                                                {getTechIcon(tag)}
                                            </div>
                                            <span className="font-medium text-gray-800">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 mb-4">Tentang Project</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 mb-4">Informasi</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <FiCalendar className="text-blue-500 mr-3" />
                                        <span className="text-gray-600">Tahun: <strong>{project.year}</strong></span>
                                    </div>
                                    {project.link && (
                                        <div className="flex items-center">
                                            <FiExternalLink className="text-blue-500 mr-3" />
                                            <Link href={project.link} target="_blank" className="text-blue-600 hover:underline">
                                                Lihat Live Demo
                                            </Link>
                                        </div>
                                    )}
                                    {project.github && (
                                        <div className="flex items-center">
                                            <FiGithub className="text-gray-800 mr-3" />
                                            <Link href={project.github} target="_blank" className="text-blue-600 hover:underline">
                                                Lihat Source Code
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white pt-16 pb-12 mt-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            <div className="md:col-span-2">
                                <Link href="/" className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold">GH</span>
                                    </div>
                                    <span className="text-xl font-semibold">Genta Halilintar</span>
                                </Link>
                                <p className="text-gray-400 max-w-md leading-relaxed">
                                    Fullstack developer specializing in Next.js, Laravel, and mobile development with Jetpack Compose.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/profile" className="text-gray-400 hover:text-white transition">Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/work" className="text-gray-400 hover:text-white transition">Projects</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-6">Connect</h3>
                                <div className="flex space-x-4 mb-6">
                                    <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
                                        <FiGithub />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
                                        <FiExternalLink />
                                    </Link>
                                    <Link href="mailto:gentahalilintar36@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
                                        <FiMail />
                                    </Link>
                                </div>
                                <p className="text-gray-400">gentahalilintar36@gmail.com</p>
                                <p className="text-gray-400">+62 813-1560-3835</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Genta Halilintar. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}