import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiDownload } from 'react-icons/fi';


export default function Profile() {
  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'Frontend Development', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Figma', level: 95 }
  ];

  const experiences = [
    {
      role: 'Senior UX Designer',
      company: 'Tech Innovations Inc.',
      period: '2020 - Present',
      description: 'Leading design team to create user-centered digital products for enterprise clients.'
    },
    {
      role: 'Product Designer',
      company: 'Digital Solutions Co.',
      period: '2017 - 2020',
      description: 'Designed and prototyped interactive interfaces for web and mobile applications.'
    }
  ];

  const education = [
    {
      degree: 'Undergraduate of Software Engineer',
      institution: 'Telkom University',
      year: '2024 - present'
    },
    {
      degree: 'Vocational High School',
      institution: 'SMK IDN Boarding Schoold',
      year: '2021-2024'
    }
  ];

  return (
    <>
      <Head>
        <title>Genta Halilintar | Professional Profile</title>
        <meta name="description" content="Detailed professional profile and experience" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
        {/* Navigation - Sama dengan halaman utama */}
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
              <Link href="/profile" className="text-blue-600 font-medium relative">
                Profile
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              </Link>
              <Link href="/work" className="text-gray-600 hover:text-blue-600 transition">Work</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Profil Header */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Foto Profil & Info Kontak */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl mb-6">
                <Image
                  src="/images/profile1.jpeg"
                  alt="Genta Halilintar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <ul className="space-y-3">
                  <ContactItem icon={<FiMail />} text="gentahalilintar36@gmail.com" />
                  <ContactItem icon={<FiPhone />} text="+62 813 1560 3835" />
                  <ContactItem icon={<FiMapPin />} text="Bandung, Indonesia" />
                </ul>

                <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-100">
                  <SocialIcon href="https://www.linkedin.com/in/genta-halilintar/" icon={<FiLinkedin />} />
                  <SocialIcon href="https://github.com/Gentahal" icon={<FiGithub />} />
                  <SocialIcon href="#" icon={<FiTwitter />} />
                </div>

                <a
                  href="/resume/resume-genta.pdf"
                  download
                  className="mt-6 w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-md transition"
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </a>

              </div>
            </div>

            {/* Detail Profil */}
            <div className="md:w-2/3 lg:w-3/4 space-y-12">
              {/* Tentang Saya */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Genta Halilintar</h2>
                <p className="text-lg text-blue-600 font-medium mb-6">Senior UX Designer & Frontend Developer</p>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Passionate designer-developer hybrid with 8+ years of experience creating digital products that users love.
                    Specialized in bridging the gap between design and development to deliver seamless user experiences.
                  </p>
                  <p className="mt-4">
                    My approach combines aesthetic sensibility with technical expertise, ensuring that beautiful designs are
                    implemented with precision and perform flawlessly across all devices.
                  </p>
                </div>
              </div>

              {/* Keahlian */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengalaman Kerja */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-100 last:pb-0 last:border-l-0 group">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1 group-hover:scale-125 transition-transform"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
                          <p className="text-blue-600">{exp.company}</p>
                        </div>
                        <span className="mt-1 sm:mt-0 px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">{exp.period}</span>
                      </div>
                      <p className="mt-3 text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pendidikan */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                          <span className="text-blue-600 font-bold">{edu.year.split('')[2]}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Sama dengan halaman utama */}
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

// Komponen Tambahan
const ContactItem = ({ icon, text }: NavLinkProps) => (
  <li className="flex items-center space-x-3">
    <span className="text-gray-500">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </li>
);

const SocialIcon = ({ href, icon }: NavLinkProps) => (
  <Link href={href} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition">
    {icon}
  </Link>
);

const NavLink = ({ href, text, active = false }: NavLinkProps) => (
  <Link href={href} className={`relative px-1 py-2 text-sm font-medium transition ${active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}>
    {text}
    {active && (
      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
    )}
  </Link>
);

const FooterLink = ({ href, text }: NavLinkProps) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition">
      {text}
    </Link>
  </li>
);