import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiDownload } from 'react-icons/fi';
import { SiLaravel, SiPhp, SiMysql, SiJavascript, SiBootstrap, SiFirebase, SiKotlin, SiFigma, SiNextdotjs } from 'react-icons/si';
import { FaGitAlt, FaMobile, FaProjectDiagram } from 'react-icons/fa';

export default function Profile() {
  const technicalSkills = [
    { name: 'Laravel Framework', icon: <SiLaravel className="w-5 h-5 text-red-600" /> },
    { name: 'PHP', icon: <SiPhp className="w-5 h-5 text-purple-600" /> },
    { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="w-5 h-5 text-purple-500" /> },
    { name: 'Git/GitHub', icon: <FaGitAlt className="w-5 h-5 text-orange-600" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-5 h-5 text-yellow-500" /> },
    { name: 'REST API', icon: <FaMobile className="w-5 h-5 text-green-500" /> },
    { name: 'Jetpack Compose', icon: <FaMobile className="w-5 h-5 text-blue-400" /> },
    { name: 'Kotlin', icon: <SiKotlin className="w-5 h-5 text-purple-400" /> },
    { name: 'Agile Scrum', icon: <FaProjectDiagram className="w-5 h-5 text-pink-500" /> },
    { name: 'Next.JS', icon: <SiNextdotjs className="w-5 h-5 text-black-500" /> }
  ];

  const softSkills = [
    'Problem Solving',
    'Time Management',
    'Team Collaboration',
    'Effective Communication',
  ];

  const experiences = [
    {
      role: 'Freelance Fullstack Developer',
      company: 'Self-Employed',
      period: 'Oct 2024 - Present',
      description: 'Delivering tailored web solutions including company profiles and admin systems using Laravel.',
      highlights: [
        'Develop responsive company profile websites',
        'Build robust admin systems with Laravel',
        'Translate client needs into functional systems',
        'Implement secure and scalable backends'
      ]
    },
    {
      role: 'Fullstack Developer',
      company: 'PT Anugrah Inti Artha Mandiri',
      period: 'May 2024 - Sep 2024',
      description: 'Developed healthcare integration system aligned with national standards.',
      highlights: [
        'Built patient registration and EMR modules',
        'Implemented payment and billing systems',
        'Ensured healthcare data compliance',
        'Collaborated using GitHub for version control'
      ]
    },
    {
      role: 'Fullstack Developer',
      company: 'PT Rahadhyan Integrasi Nusantara',
      period: 'Jun 2023 - May 2024',
      description: 'Maintained and enhanced internal ERP system used by 100+ employees.',
      highlights: [
        'Resolved critical system bugs with long-lasting fixes',
        'Developed role & permission management',
        'Worked in Agile Scrum environment',
        'Built scouting participant registration system'
      ]
    }
  ];

  const education = [
    {
      degree: 'Undergraduate of Software Engineering',
      institution: 'Telkom University',
      year: '2024 - Present',
      description: 'Focus on Java programming, algorithms, web/mobile design, and Design Thinking methodology. Active in Mobile Developer Laboratory working with Jetpack Compose and Firebase.'
    },
    {
      degree: 'Vocational High School - Software Engineering',
      institution: 'SMK IDN Boarding School',
      year: '2021 - 2024',
      description: 'Learned Kotlin, Dart, and specialized in backend development with Laravel. Built foundation in both mobile and web technologies.'
    }
  ];

  return (
    <>
      <Head>
        <title>Genta Halilintar | Fullstack Developer Profile</title>
        <meta name="description" content="Professional profile of Genta Halilintar - Laravel Fullstack Developer" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
        {/* Profile Header Section */}
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
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Profile Photo & Contact Info */}
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

            {/* Profile Details */}
            <div className="md:w-2/3 lg:w-3/4 space-y-12">
              {/* About Me */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Genta Halilintar</h2>
                <p className="text-lg text-blue-600 font-medium mb-6">Fullstack Developer (Laravel Specialist)</p>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Fullstack Developer with 3+ years of experience building end-to-end web applications using Laravel framework.
                    Proficient in both frontend (Blade, Bootstrap) and backend (PHP, Laravel) development with expertise in
                    system architecture design, RESTful API integration, and database management.
                  </p>
                  <p className="mt-4">
                    Experienced in Agile Scrum environments, working collaboratively in cross-functional teams to deliver
                    solutions through sprint-based development. Committed to writing clean, maintainable code and continuously
                    improving application performance and scalability.
                  </p>
                  {/* <p className="mt-4 font-medium">
                    Portfolio: <span className="text-blue-600">gentahal.vercel.app</span>
                  </p> */}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      {skill.icon}
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <ExperienceItem 
                      key={index}
                      role={exp.role}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                      highlights={exp.highlights}
                    />
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <EducationItem
                      key={index}
                      degree={edu.degree}
                      institution={edu.institution}
                      year={edu.year}
                      description={edu.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Experience Item Component
function ExperienceItem({ role, company, period, description, highlights }: {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-blue-100 last:pb-0 last:border-l-0 group">
      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1 group-hover:scale-125 transition-transform"></div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h4 className="text-xl font-semibold text-gray-800">{role}</h4>
          <p className="text-blue-600">{company}</p>
        </div>
        <span className="mt-1 sm:mt-0 px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">{period}</span>
      </div>
      <p className="mt-3 text-gray-600">{description}</p>
      <ul className="mt-3 space-y-2 list-disc list-inside">
        {highlights.map((highlight, i) => (
          <li key={i} className="text-gray-600">{highlight}</li>
        ))}
      </ul>
    </div>
  );
}

// Education Item Component
function EducationItem({ degree, institution, year, description }: {
  degree: string;
  institution: string;
  year: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
          <span className="text-blue-600 text-xs font-bold">{year.split('-')[0]}</span>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{degree}</h4>
        <p className="text-gray-600">{institution}</p>
        <p className="text-sm text-gray-500 mt-1">{year}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Contact Item Component
function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center space-x-3">
      <span className="text-gray-500">{icon}</span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

// Social Icon Component
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}