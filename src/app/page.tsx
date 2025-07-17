import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  const skills = [
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Frontend Development', icon: '💻' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🔗' },
    { name: 'Tailwind CSS', icon: '🎀' },
    { name: 'Figma', icon: '✏️' }
  ];

  return (
    <>
      <Head>
        <title>Genta Halilintar | Professional Portfolio</title>
        <meta name="description" content="Innovative digital experiences crafted with precision" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
        {/* Premium Navigation */}
        <nav className="px-6 py-5 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transition-all group-hover:rotate-12">
                <span className="text-white font-bold text-lg">GH</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">Genta Halilintar</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-10">
              <NavLink href="/" text="Home" active />
              <NavLink href="/profile" text="Profile" />
              <NavLink href="/work" text="Work" />
              <NavLink href="/contact" text="Contact" />
            </div>
            
            <button className="md:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Elegant Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
                <p className="text-sm font-medium text-blue-600">Available for new projects</p>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digital excellence</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
                I'm Genta Halilintar, a <span className="text-gray-800">UX Designer & Frontend Developer</span>
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                Specializing in creating immersive digital experiences that blend beautiful aesthetics with flawless functionality. 
                Each project is an opportunity to innovate and elevate.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <GradientButton href="/work" text="Explore My Work" icon={<FiArrowRight />} />
                <OutlineButton href="/contact" text="Let's Collaborate" />
              </div>
              
              <div className="flex items-center space-x-6 pt-6">
                <p className="text-sm text-gray-500">Trusted by:</p>
                <div className="flex space-x-4">
                  {['Google', 'Apple', 'Microsoft', 'Amazon'].map((company) => (
                    <div key={company} className="text-gray-400 hover:text-gray-600 transition">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/profile1.jpeg"
                  alt="Genta Halilintar"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Sophisticated Skills Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Expertise</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Skills & Technologies</h2>
              <p className="text-lg text-gray-500">
                A versatile skill set that allows me to tackle projects from concept to completion with precision and creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                  <div className="p-8">
                    <div className="text-4xl mb-6">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Footer */}
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
                  Crafting digital experiences that resonate with users and drive business results through thoughtful design and cutting-edge development.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <FooterLink href="/" text="Home" />
                  <FooterLink href="/profile" text="About Me" />
                  <FooterLink href="/work" text="Case Studies" />
                  <FooterLink href="/contact" text="Get in Touch" />
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">Connect</h3>
                <div className="flex space-x-4 mb-6">
                  <SocialIcon href="#" icon={<FiLinkedin />} />
                  <SocialIcon href="#" icon={<FiGithub />} />
                  <SocialIcon href="#" icon={<FiTwitter />} />
                  <SocialIcon href="#" icon={<FiMail />} />
                </div>
                <p className="text-gray-400">gentahalilintar36@gmail.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Genta Halilintar. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Privacy Policy</Link>
                <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Terms of Service</Link>
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

const NavLink = ({ href, text, active = false }: NavLinkProps) => (
  <Link href={href} className={`relative px-1 py-2 text-sm font-medium transition ${active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}>
    {text}
    {active && (
      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
    )}
  </Link>
);

const GradientButton = ({ href, text, icon }: NavLinkProps) => (
  <Link href={href} className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
    {text}
    <span className="ml-2">{icon}</span>
  </Link>
);

const OutlineButton = ({ href, text }: NavLinkProps) => (
  <Link href={href} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition">
    {text}
  </Link>
);

const FooterLink = ({ href, text }: NavLinkProps) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }: NavLinkProps) => (
  <Link href={href} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition">
    {icon}
  </Link>
);