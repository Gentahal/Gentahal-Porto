'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <>
            <Head>
                <title>Contact Me | Professional Portfolio</title>
                <meta name="description" content="Get in touch for collaborations and opportunities" />
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
                            <Link href="/work" className="text-gray-600 hover:text-blue-600 transition">Work</Link>
                            <Link href="/contact" className="text-blue-600 font-medium relative">
                                Contact
                                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Contact Header */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
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
                                    content="+1 (555) 123-4567"
                                    link="tel:+15551234567"
                                />

                                <ContactInfoItem
                                    icon={<FiMapPin className="text-blue-600" />}
                                    title="Location"
                                    content="San Francisco, CA"
                                />
                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <SocialLink href="#" icon={<FiLinkedin />} platform="LinkedIn" />
                                    <SocialLink href="#" icon={<FiGithub />} platform="GitHub" />
                                    <SocialLink href="#" icon={<FiTwitter />} platform="Twitter" />
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

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center">
                                    <button
                                        type="submit"
                                        className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                                    >
                                        Send Message
                                        <FiSend className="ml-2" />
                                    </button>

                                    <span className="ml-4 text-sm text-gray-500">
                                        I typically respond within 24 hours
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="h-96 w-full bg-gray-200 relative">
                            {/* Replace with actual map component */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-500">Interactive Map Here</span>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800">My Office Location</h3>
                            <p className="text-gray-600 mt-1">123 Design Street, Suite 456, San Francisco, CA 94107</p>
                        </div>
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
                                <p className="text-gray-400">+62 813 1560 3835</p>
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
    title: string;
    content: string;
    link: string;
    href: string;
    text?: string;
    active?: boolean;
    icon?: React.ReactNode;
    platform: string;
};

// Reusable Components
const ContactInfoItem = ({ icon, title, content, link }: NavLinkProps) => (
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

const SocialLink = ({ href, icon, platform }: NavLinkProps) => (
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