import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowRight, FiLinkedin, FiSearch, FiTwitter, FiMail } from 'react-icons/fi';

export default function Work() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform Redesign",
            description: "Complete redesign of legacy e-commerce platform with modern UX patterns and improved conversion flow.",
            tags: ["UI/UX Design", "React", "Node.js"],
            image: "/project-ecommerce.jpg",
            link: "#",
            github: "#",
            year: "2023"
        },
        {
            id: 2,
            title: "Health & Wellness Mobile App",
            description: "End-to-end design and development of a health tracking application with personalized recommendations.",
            tags: ["Mobile Design", "Flutter", "Firebase"],
            image: "/project-health.jpg",
            link: "#",
            github: "#",
            year: "2022"
        },
        {
            id: 3,
            title: "Corporate Design System",
            description: "Created a comprehensive design system for enterprise use across multiple products and platforms.",
            tags: ["Design System", "Figma", "Storybook"],
            image: "/project-design-system.jpg",
            link: "#",
            github: "#",
            year: "2022"
        },
        {
            id: 4,
            title: "Travel Booking Portal",
            description: "Redesigned user flows and visual interface for a leading travel booking platform.",
            tags: ["UX Research", "Prototyping", "Next.js"],
            image: "/project-travel.jpg",
            link: "#",
            github: "#",
            year: "2021"
        }
    ];

    const filters = ["All", "UI/UX Design", "Development", "Case Study", "Mobile", "Web"];

    return (
        <>
            <Head>
                <title>My Projects | Professional Portfolio</title>
                <meta name="description" content="Showcase of my professional projects and case studies" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
                {/* Navigation - Consistent with other pages */}
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

                {/* Work Header */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Selected Projects</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore my professional work and case studies. Each project represents a unique challenge and creative solution.
                        </p>
                    </div>

                    {/* Filter and Search */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2 w-full md:w-auto">
                            <FiSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="outline-none bg-transparent w-full placeholder-gray-400"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 w-full md:w-auto">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group">
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="flex space-x-3">
                                            {project.link && (
                                                <a href={project.link} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                                                    <FiExternalLink />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
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
                                        {project.tags.map((tag, index) => (
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
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-16">
                        <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition flex items-center mx-auto">
                            Load More Projects
                        </button>
                    </div>
                </section>

                {/* Footer - Consistent with other pages */}
                <footer className="bg-gray-900 text-white pt-24 pb-12">
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
                                        <FiLinkedin />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
                                        <FiGithub />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
                                        <FiTwitter />
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
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Privacy Policy</Link>
                                <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Terms</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

type NavLinkProps = {
    href: string;
    text?: string;
    active?: boolean;
    icon?: React.ReactNode;
};

const SocialIcon = ({ href, icon }: NavLinkProps) => (
    <Link href={href} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition">
        {icon}
    </Link>
);

const FooterLink = ({ href, text }: NavLinkProps) => (
    <li>
        <Link href={href} className="text-gray-400 hover:text-white transition">
            {text}
        </Link>
    </li>
);