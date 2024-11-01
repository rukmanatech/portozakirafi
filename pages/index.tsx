// pages/index.tsx

import Image from 'next/image';
import { useState, useEffect } from 'react';
import localProfileImg from '../public/foto.jpg';
import imagePorto from '../public/image.png';
import imagePorto2 from '../public/image2.png';
import { FaGithub, FaInstagram, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

export default function Home() {
  const [isReadMore, setIsReadMore] = useState(false);

  // State untuk tema
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // State untuk modal proyek
  const [selectedProject, setSelectedProject] = useState(null);

  // Efek untuk menambahkan atau menghapus kelas tema pada body
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme;
    }
  }, [theme]);

  // Data Skills
  const skills = [
    {
      name: 'AI Integration',
      description:
        'Keahlian dalam memanfaatkan dan mengintegrasikan teknologi AI untuk menciptakan aplikasi web yang inovatif dan fungsional.',
      icon: '🤖',
    },
    {
      name: 'Full Stack Development',
      description:
        'Pengembangan aplikasi web end-to-end dengan bantuan AI, mencakup frontend, backend, dan integrasi database.',
      icon: '💻',
    },
    {
      name: 'AI Prompt Engineering',
      description:
        'Keahlian dalam merancang prompt yang efektif untuk menghasilkan solusi teknis yang optimal.',
      icon: '⚙️',
    },
  ];

  // Data Projects
  const projects = [
    {
      title: 'Analisa Kesehatan Gigi',
      description:
        'Aplikasi web untuk analisa kesehatan gigi menggunakan AI. Memberikan hasil analisis dan rekomendasi perawatan berdasarkan data yang diinput.',
      stack: ['Next.js', 'Gemini API', 'TailwindCSS'],
      thumbnail: imagePorto,
      link: 'https://analisa-gigi.vercel.app',
    },
    {
      title: 'E-Rapor',
      description:
        'E-Rapor adalah aplikasi berbasis web yang dirancang untuk memudahkan proses pengisian dan pengelolaan nilai siswa secara digital. Dengan E-Rapor, guru dapat memasukkan nilai, mencetak rapor, dan memantau perkembangan siswa dengan lebih efisien.',
      stack: ['React', 'TailwindCSS', 'TypeScript', 'Next.js'],
      thumbnail: imagePorto2,
      link: 'https://e-raport.vercel.app',
    },
  ];

  // Definisikan platforms sebagai array konstan
  const PLATFORMS = ['GitHub', 'Instagram', 'Email'] as const;

  // Definisikan tipe Platform
  type Platform = typeof PLATFORMS[number];

  const links: Record<Platform, string> = {
    GitHub: 'https://github.com/rukmanatech',
    Instagram: 'https://instagram.com/zakirukmana',
    Email: 'mailto:rukmanazaki@gmail.com',
  };

  const icons: Record<Platform, JSX.Element> = {
    GitHub: <FaGithub />,
    Instagram: <FaInstagram />,
    Email: <FaEnvelope />,
  };

  return (
    <main
      className={`min-h-screen ${
        theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-900 text-white'
      }`}
    >
      {/* Tombol Tema */}
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300 z-50"
      >
        {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>

      {/* Background Gradients */}
      <div className="fixed inset-0">
        <div
          className={`absolute inset-0 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-blue-200 via-white to-purple-200'
              : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black'
          }`}
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-4 py-10">
          <div className="max-w-6xl w-full mx-auto">
            <div
              className={`${
                theme === 'light' ? 'bg-white/70 text-gray-900' : 'bg-gray-800/70 text-white'
              } backdrop-blur-2xl rounded-2xl p-6 md:p-10 ${
                theme === 'light' ? 'border border-gray-200' : 'border border-transparent'
              }`}
            >
              {/* Hero Content */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Profile Image */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 ${
                      theme === 'light'
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600'
                    } rounded-full opacity-80 group-hover:opacity-100 blur-2xl transition duration-1000`}
                  />
                  <div
                    className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 ${
                      theme === 'light' ? 'border-gray-300' : 'border-gray-700'
                    } transition duration-300`}
                  >
                    <Image
                      src={localProfileImg}
                      alt="Zaki Rafi"
                      fill
                      priority
                      className="object-cover filter hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                  <div>
                    <h1
                      className={`text-4xl md:text-5xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent ${
                        theme === 'light'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'bg-gradient-to-r from-blue-400 to-purple-400'
                      }`}
                    >
                      Zaki Rafi
                    </h1>
                    <div
                      className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full ${
                        theme === 'light' ? 'bg-blue-100 text-blue-500' : 'bg-blue-500/10 text-blue-300'
                      } text-sm md:text-base`}
                    >
                      AI-Driven Full Stack Developer
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="space-y-2 md:space-y-4">
                    <p className="text-base md:text-lg leading-relaxed">
                      AI-driven full-stack developer dengan motivasi untuk menciptakan aplikasi web yang inovatif.
                    </p>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isReadMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 md:pt-6 space-y-6 md:space-y-8">
                        {/* Skills List */}
                        <div className="space-y-4 md:space-y-6">
                          <h3
                            className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full ${
                              theme === 'light' ? 'bg-blue-100 text-blue-500' : 'bg-blue-500/10 text-blue-300'
                            } text-sm md:text-base`}
                          >
                            Keahlian Teknis
                          </h3>
                          <div className="space-y-3 md:space-y-4">
                            {skills.map((skill) => (
                              <div
                                key={skill.name}
                                className={`group p-3 md:p-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 ${
                                  theme === 'light'
                                    ? 'bg-gray-200 hover:bg-gray-300'
                                    : 'bg-gray-800 hover:bg-gray-700'
                                }`}
                              >
                                <div className="flex gap-3 md:gap-4">
                                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                  </span>
                                  <div className="space-y-1">
                                    <h4
                                      className={`font-medium group-hover:text-blue-500 transition-colors ${
                                        theme === 'light' ? 'text-blue-600' : 'text-blue-300'
                                      }`}
                                    >
                                      {skill.name}
                                    </h4>
                                    <p className="text-sm leading-relaxed">
                                      {skill.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <p
                            className={`text-sm p-3 md:p-4 rounded-lg ${
                              theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-gray-300'
                            }`}
                          >
                            Fokus utama pada pengembangan aplikasi yang inovatif dan fungsional, mengoptimalkan setiap proses development untuk menghasilkan solusi yang efektif.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Read More Button */}
                    <button
                      onClick={() => setIsReadMore(!isReadMore)}
                      className={`mt-2 md:mt-4 inline-flex items-center px-5 py-2 md:px-6 md:py-3 rounded-full shadow-lg transform hover:-translate-y-1 text-sm md:text-base transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                          : 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500'
                      }`}
                    >
                      <span className="font-medium">
                        {isReadMore ? 'Tampilkan Lebih Sedikit' : 'Baca Lebih Lanjut'}
                      </span>
                      <svg
                        className={`w-5 h-5 md:w-6 md:h-6 ml-2 transition-transform duration-300 ${
                          isReadMore ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                    {PLATFORMS.map((platform) => (
                      <a
                        key={platform}
                        href={links[platform]}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm md:text-base ${
                          theme === 'light'
                            ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800'
                            : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                        }`}
                      >
                        {icons[platform]}
                        <span>{platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex items-center justify-center px-4 py-2">
          <div className="max-w-6xl w-full">
            <div
              className={`${
                theme === 'light' ? 'bg-white/70 text-gray-900' : 'bg-gray-800/70 text-white'
              } backdrop-blur-2xl rounded-2xl p-6 md:p-10 ${
                theme === 'light' ? 'border border-gray-200' : 'border border-transparent'
              }`}
            >
              <h2
                className={`text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gradient-to-r from-blue-400 to-purple-400'
                }`}
              >
                Proyek Unggulan
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className={`group relative rounded-xl overflow-hidden transition-all duration-300 border cursor-pointer ${
                      theme === 'light'
                        ? 'bg-gray-200 hover:bg-gray-300 border-gray-300'
                        : 'bg-gray-800 hover:bg-gray-700 border-gray-700'
                    }`}
                  >
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                      {project.thumbnail && (
                        <div className="w-full h-40 md:h-48 relative">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-t-lg"
                          />
                        </div>
                      )}

                      <h3
                        className={`text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors ${
                          theme === 'light' ? 'text-gray-800' : 'text-white'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`text-sm line-clamp-3 ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full ${
                              theme === 'light'
                                ? 'bg-blue-100 text-blue-500'
                                : 'bg-blue-500/10 text-blue-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Tombol 'Lihat Project' */}
                      <div className="flex justify-end mt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2 ${
                            theme === 'light'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                              : 'bg-gradient-to-r from-blue-600 to-purple-600'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Lihat Project
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal untuk Project Detail */}
              {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
                  <div
                    className={`relative max-w-md w-full mx-4 ${
                      theme === 'light'
                        ? 'bg-white text-gray-900 border border-gray-300'
                        : 'bg-gray-900 text-white border border-gray-700'
                    } rounded-2xl p-6`}
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    {selectedProject.thumbnail && (
                      <div className="w-full h-48 relative mb-4">
                        <Image
                          src={selectedProject.thumbnail}
                          alt={selectedProject.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                    <h2
                      className={`text-xl font-bold mb-2 ${
                        theme === 'light' ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {selectedProject.title}
                    </h2>
                    <p
                      className={`mb-4 ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                      }`}
                    >
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded-full ${
                            theme === 'light'
                              ? 'bg-blue-100 text-blue-500'
                              : 'bg-blue-500/10 text-blue-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 flex items-center gap-2 ${
                          theme === 'light'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600'
                        }`}
                      >
                        Kunjungi Situs
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="flex items-center justify-center px-4 py-10">
          <div className="max-w-6xl w-full">
            <div
              className={`${
                theme === 'light' ? 'bg-white/70 text-gray-900' : 'bg-gray-800/70 text-white'
              } backdrop-blur-2xl rounded-2xl p-6 md:p-10 ${
                theme === 'light' ? 'border border-gray-200' : 'border border-transparent'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <h3
                  className={`text-2xl font-bold bg-clip-text text-transparent ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gradient-to-r from-blue-400 to-purple-400'
                  }`}
                >
                  Zaki Rafi
                </h3>

                <p
                  className={`text-center text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  AI-Driven Full Stack Developer | Membangun solusi web inovatif
                </p>

                <div className="flex gap-4 mt-2">
                  {PLATFORMS.map((platform) => (
                    <a
                      key={platform}
                      href={links[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
                        theme === 'light'
                          ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
                      }`}
                    >
                      {icons[platform]}
                    </a>
                  ))}
                </div>

                <div
                  className={`mt-4 text-sm ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  © {new Date().getFullYear()} Zaki Rafi. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
