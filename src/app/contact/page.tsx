'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  platform: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Me | Genta Halilintar - Fullstack Developer</title>
        <meta name="description" content="Get in touch with Genta Halilintar for collaborations and opportunities" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans antialiased">
        <Navigation />
        
        <main>
          <ContactHeader />
          
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfoSection />
              <ContactFormSection 
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
              />
            </div>
          </div>
          
          <MapSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

// Component: Navigation
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
          <NavLink href="/" text="Home" />
          <NavLink href="/profile" text="Profile" />
          <NavLink href="/work" text="Projects" />
          <NavLink href="/contact" text="Contact" active />
        </div>
      </div>
    </nav>
  );
}

// Component: Contact Header
function ContactHeader() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </div>
    </section>
  );
}

// Component: Contact Info Section
function ContactInfoSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 h-fit sticky top-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <ContactInfoItem
          icon={<FiMail className="text-blue-600" />}
          title="Email"
          content="gentahalilintar36@gmail.com"
          link="mailto:gentahalilintar36@gmail.com"
        />
        
        <ContactInfoItem
          icon={<FiPhone className="text-blue-600" />}
          title="Phone"
          content="+62 813 1560 3835"
          link="tel:+6281315603835"
        />
        
        <ContactInfoItem
          icon={<FiMapPin className="text-blue-600" />}
          title="Location"
          content="Bandung, Indonesia"
        />
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
        <div className="flex space-x-4">
          <SocialLink 
            href="https://www.linkedin.com/in/genta-halilintar/" 
            icon={<FiLinkedin />} 
            platform="LinkedIn" 
          />
          <SocialLink 
            href="https://github.com/Gentahal" 
            icon={<FiGithub />} 
            platform="GitHub" 
          />
          <SocialLink 
            href="#" 
            icon={<FiTwitter />} 
            platform="Twitter" 
          />
        </div>
      </div>
      
      <div className="mt-10 pt-10 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Availability</h3>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Available for new projects</span>
        </div>
      </div>
    </div>
  );
}

// Component: Contact Form Section
function ContactFormSection({
  formData,
  onChange,
  onSubmit,
  isSubmitting,
  submitStatus
}: {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
          Oops! Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <FormField
          label="Full Name"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          placeholder="Your name"
          required
        />
        
        <FormField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="your.email@example.com"
          required
        />
        
        <FormField
          label="Your Message"
          id="message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={onChange}
          placeholder="Tell me about your project..."
          required
          rows={6}
        />
        
        <div className="flex items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <FiSend className="ml-2" />
          </button>
          
          <span className="ml-4 text-sm text-gray-500">
            I typically respond within 24 hours
          </span>
        </div>
      </form>
    </div>
  );
}

// Component: Map Section
function MapSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="h-96 w-full bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9234666765376!2d107.61872931537327!3d-6.893780995019047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64a3e9c1f6d%3A0x2e6e1e5b2e3e1f6d!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="absolute inset-0"
          ></iframe>
        </div>
        <div className="p-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">My Location</h3>
          <p className="text-gray-600 mt-1">Bandung, West Java, Indonesia</p>
        </div>
      </div>
    </section>
  );
}

// Component: Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <FooterAbout />
          <FooterLinks />
          <FooterContact />
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
}

// Sub-components
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

const ContactInfoItem = ({ icon, title, content, link }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1 mr-4">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      {link ? (
        <a href={link} className="text-lg text-gray-800 hover:text-blue-600 transition">
          {content}
        </a>
      ) : (
        <p className="text-lg text-gray-800">{content}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon, platform }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition group"
    aria-label={platform}
  >
    {icon}
    <span className="sr-only">{platform}</span>
  </a>
);

const FormField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  rows = 4
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) => {
  const commonProps = {
    id,
    name,
    value,
    onChange,
    placeholder,
    required,
    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {type === 'textarea' ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
};

const FooterAbout = () => (
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
);

const FooterLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
    <ul className="space-y-3">
      <FooterLink href="/" text="Home" />
      <FooterLink href="/profile" text="Profile" />
      <FooterLink href="/work" text="Projects" />
      <FooterLink href="/contact" text="Contact" />
    </ul>
  </div>
);

const FooterContact = () => (
  <div>
    <h3 className="text-lg font-semibold mb-6">Connect</h3>
    <div className="flex space-x-4 mb-6">
      <SocialIcon href="https://www.linkedin.com/in/genta-halilintar/" icon={<FiLinkedin />} />
      <SocialIcon href="https://github.com/Gentahal" icon={<FiGithub />} />
      <SocialIcon href="#" icon={<FiTwitter />} />
      <SocialIcon href="mailto:gentahalilintar36@gmail.com" icon={<FiMail />} />
    </div>
    <p className="text-gray-400">gentahalilintar36@gmail.com</p>
    <p className="text-gray-400">+62 813-1560-3835</p>
  </div>
);

const FooterBottom = () => (
  <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Genta Halilintar. All rights reserved.</p>
    <div className="flex space-x-6 mt-4 md:mt-0">
      <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Privacy Policy</Link>
      <Link href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Terms</Link>
    </div>
  </div>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link 
    href={href} 
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
);