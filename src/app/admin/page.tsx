'use client'

import { useState } from 'react';
import { FiSave, FiLink, FiGithub, FiImage, FiCalendar, FiTag, FiType } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';

export default function AdminPage() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    image: '',
    link: '',
    github: '',
    year: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.title) newErrors.title = 'Judul wajib diisi';
    if (!form.description) newErrors.description = 'Deskripsi wajib diisi';
    if (!form.image) newErrors.image = 'Gambar wajib diisi';
    if (!form.year) newErrors.year = 'Tahun wajib diisi';
    if (form.year && !/^\d{4}$/.test(form.year)) newErrors.year = 'Format tahun tidak valid';
    if (form.image && !/^https?:\/\/.+/.test(form.image)) newErrors.image = 'URL gambar tidak valid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/porto', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          tags: form.tags.split(',').map(tag => tag.trim()),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (data.success) {
        alert('✅ Portfolio berhasil ditambahkan');
        setForm({
          title: '',
          description: '',
          tags: '',
          image: '',
          link: '',
          github: '',
          year: '',
        });
      } else {
        alert(`❌ Gagal menambahkan portfolio: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert('❌ Terjadi kesalahan jaringan');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Tambah Portfolio Baru</h1>
            <p className="text-gray-600">Isi detail proyek Anda</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Judul Proyek</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiType className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Contoh: Aplikasi E-Commerce"
                  className={`block w-full pl-10 pr-3 py-2 border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              {errors.title && <p className="mt-1 text-sm text-red-600 flex items-center"><FiAlertCircle className="mr-1" /> {errors.title}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Jelaskan tentang proyek ini..."
                className={`block w-full px-3 py-2 border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.description && <p className="mt-1 text-sm text-red-600 flex items-center"><FiAlertCircle className="mr-1" /> {errors.description}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiTag className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="Contoh: React, Next.js, Tailwind"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Pisahkan dengan koma</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">URL Gambar</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiImage className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="Contoh: https://example.com/image.jpg"
                  className={`block w-full pl-10 pr-3 py-2 border ${errors.image ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              {errors.image && <p className="mt-1 text-sm text-red-600 flex items-center"><FiAlertCircle className="mr-1" /> {errors.image}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">URL Proyek (Opsional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLink className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="Contoh: https://example.com"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">URL GitHub (Opsional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGithub className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="Contoh: https://github.com/user/repo"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Tahun</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiCalendar className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="Contoh: 2023"
                  className={`block w-full pl-10 pr-3 py-2 border ${errors.year ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
              {errors.year && <p className="mt-1 text-sm text-red-600 flex items-center"><FiAlertCircle className="mr-1" /> {errors.year}</p>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <FiSave className="mr-2" />
                    Simpan Portfolio
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}