
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { FiExternalLink, FiGithub, FiArrowRight, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default async function WorkPage() {
    const projects = await prisma.porto.findMany({
        orderBy: { year: 'desc' },
    }).then(projects => projects.map(project => ({
        ...project,
        image: Array.isArray(project.image) ? project.image : [project.image],
        link: project.link === null ? undefined : project.link,
        github: project.github === null ? undefined : project.github,
    })));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
            <Navigation />

            <main>
                <ProjectsHeader />

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function Navigation() {
    return (
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
    );
}

function ProjectsHeader() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Selected Projects</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore my professional work and case studies. Each project represents a unique challenge and creative solution.
                </p>
            </div>
        </section>
    );
}

function Footer() {
    return (
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
                            Fullstack developer specializing in Laravel, Next.js, and mobile development.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/" text="Home" />
                            <FooterLink href="/profile" text="Profile" />
                            <FooterLink href="/work" text="Projects" />
                            <FooterLink href="/contact" text="Contact" />
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <SocialLink href="https://www.linkedin.com/in/genta-halilintar/" icon={<FiLinkedin />} />
                            <SocialLink href="https://github.com/Gentahal" icon={<FiGithub />} />
                            <SocialLink href="#" icon={<FiTwitter />} />
                            <SocialLink href="mailto:gentahalilintar36@gmail.com" icon={<FiMail />} />
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
    );
}

// Small reusable components
const NavLink = ({ href, text, active = false }: { href: string; text: string; active?: boolean }) => (
    <Link
        href={href}
        className={`relative px-1 py-2 text-sm font-medium transition ${active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
    >
        {text}
        {active && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
        )}
    </Link>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
    <li>
        <Link href={href} className="text-gray-400 hover:text-white transition">
            {text}
        </Link>
    </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link
        href={href}
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition"
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
    </Link>
);