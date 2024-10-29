// pages/index.tsx
import Image from 'next/image';
import { useState } from 'react';
import localProfileImg from '../public/foto.jpg';
import imagePorto from '../public/image.png';
import imagePorto2 from '../public/image2.png';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [isReadMore, setIsReadMore] = useState(false);

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
        'Expertise dalam merancang prompt yang efektif untuk menghasilkan solusi teknis yang optimal.',
      icon: '⚙️',
    },
  ];

  // Data Projects
  const projects = [
    {
      title: 'Analisa Kesehatan Gigi',
      description:
        'Aplikasi web untuk analisa kesehatan gigi menggunakan AI. Memberikan hasil analisis dan rekomendasi perawatan berdasarkan data yang diinput.',
      stack: ['Next.js', 'OpenAI API', 'TypeScript', 'TailwindCSS'],
      thumbnail: imagePorto,
      link: 'https://analisa-gigi.vercel.app',
    },
    {
      title: 'E-Rapor',
      description:
        'E-Rapor adalah aplikasi berbasis web yang dirancang untuk memudahkan proses pengisian dan pengelolaan nilai siswa secara digital. Dengan E-Rapor, guru dapat memasukkan nilai, mencetak rapor, dan memantau perkembangan siswa dengan lebih efisien.',
      stack: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
      thumbnail: imagePorto2,
      link: 'https://e-rapor.vercel.app',
    },
  ];

  const links = {
    GitHub: 'https://github.com/rukmanatech',
    Instagram: 'https://instagram.com/zkirafi',
    Email: 'mailto:rukmanazaki@gmail.com',
  };

  const icons = {
    GitHub: <FaGithub />,
    Instagram: <FaInstagram />,
    Email: <FaEnvelope />,
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a365d_0%,transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#1e1b4b_0%,transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)] opacity-80" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 pb-10 pt-10">
          <div className="max-w-6xl w-full mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000" />
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition duration-300">
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
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div>
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Zaki Rafi
                    </h1>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-300">
                      AI-Driven Full Stack Developer
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="space-y-4">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      AI-driven full-stack developer dengan motivasi untuk menciptakan aplikasi web yang inovatif.
                    </p>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isReadMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-6 space-y-8">
                        {/* Skills List */}
                        <div className="space-y-6">
                          <h3 className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-300">
                            Keahlian Teknis
                          </h3>
                          <div className="space-y-4">
                            {skills.map((skill) => (
                              <div
                                key={skill.name}
                                className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                              >
                                <div className="flex gap-4">
                                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                  </span>
                                  <div className="space-y-1">
                                    <h4 className="font-medium text-blue-300 group-hover:text-blue-200 transition-colors">
                                      {skill.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                      {skill.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <p className="text-sm text-gray-400 bg-white/5 p-4 rounded-lg">
                            Fokus utama pada pengembangan aplikasi yang inovatif dan fungsional, mengoptimalkan setiap proses development untuk menghasilkan solusi yang efektif.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Read More Button */}
                    <button
                      onClick={() => setIsReadMore(!isReadMore)}
                      className="mt-4 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                    >
                      <span className="font-medium">
                        {isReadMore ? 'Tampilkan Lebih Sedikit' : 'Baca Lebih Lanjut'}
                      </span>
                      <svg
                        className={`w-6 h-6 ml-2 transition-transform duration-300 ${
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
                  <div className="flex gap-4 justify-center lg:justify-start">
                    {['GitHub', 'Instagram', 'Email'].map((platform) => (
                      <a
                        key={platform}
                        href={links[platform]}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300"
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
        <div className="flex items-center justify-center px-6 pb-10 pt-10">
          <div className="text-2xl font-bold text-center text-white bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 max-w-6xl w-full mx-auto">
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Proyek Unggulan
            </h2>

            <section className="py-6 px-6 flex items-center justify-center pb-10 pt-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className="p-6 space-y-4">
                      {project.thumbnail && (
                        <div className="w-full h-48 relative">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-t-lg"
                          />
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-blue-500/10 rounded-full text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-2 px-6 py-2 w-full rounded-full bg-gradient-to-r from-[#4263EB] to-purple-500 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1">
                          View Project
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        {/* Footer Section */}
        <div className="flex items-center justify-center px-6 pb-10">
          <div className="max-w-6xl w-full bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Zaki Rafi
              </h3>

              <p className="text-gray-400 text-center text-sm">
                AI-Driven Full Stack Developer | Membangun solusi web inovatif
              </p>

              <div className="flex gap-4 mt-2">
                {['GitHub', 'Instagram', 'Email'].map((platform) => (
                  <a
                    key={platform}
                    href={links[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {icons[platform]}
                  </a>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Zaki Rafi. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}