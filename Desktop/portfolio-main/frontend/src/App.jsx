import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import resumePDF from "./assets/resume.pdf";

const StartupEffect = ({ theme, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-white'
      } overflow-hidden`}
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${
          theme === 'dark' ? 'rgba(0,255,255,0.15)' : 'rgba(0,100,255,0.15)'
        },transparent)] animate-pulse`}
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.05) 25%, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.05) 50%, transparent 50%, transparent 75%, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.05) 75%, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.05))`,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite',
        }}
      />
      <div className="relative flex flex-col items-center justify-center">
        <div
          className={`absolute w-64 h-64 md:w-96 md:h-96 rounded-full ${
            theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-600/20'
          } animate-[spin_15s_linear_infinite] shadow-[0_0_50px_rgba(0,${
            theme === 'dark' ? '255,255' : '100,255'
          },0.3)]`}
          style={{
            transform: 'perspective(1000px) rotateX(60deg) rotateZ(45deg)',
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24.248" fill="none" stroke="${
              theme === 'dark' ? '%2300FFFF' : '%230064FF'
            }" stroke-width="0.5" opacity="0.4"%3E%3Cpath d="M7 0l5.5 9.526h-11zM21 0l5.5 9.526h-11zM0 14.722l5.5 9.526h-11zM14 14.722l5.5 9.526h-11zM28 14.722l5.5 9.526h-11z"/%3E%3C/svg%3E')`,
            backgroundSize: '40px 34.641px',
          }}
        />
        <div
          className={`absolute w-40 h-40 md:w-64 md:h-64 rounded-full ${
            theme === 'dark' ? 'bg-cyan-400/30' : 'bg-cyan-600/30'
          } animate-pulse shadow-[0_0_60px_rgba(0,${
            theme === 'dark' ? '255,255' : '100,255'
          },0.5)]`}
        >
          <div
            className={`absolute inset-4 rounded-full ${
              theme === 'dark' ? 'bg-cyan-300/50' : 'bg-cyan-500/50'
            } animate-pulse`}
          />
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              theme === 'dark' ? 'bg-cyan-200' : 'bg-cyan-400'
            } shadow-[0_0_15px_rgba(0,${
              theme === 'dark' ? '255,255' : '100,255'
            },0.8)]`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `orbit ${3 + i * 0.8}s linear infinite`,
              transform: `rotate(${i * 45}deg) translateX(${40 + i * 8}px)`,
            }}
          >
            <div
              className={`absolute w-6 h-1 ${
                theme === 'dark' ? 'bg-cyan-200/50' : 'bg-cyan-400/50'
              } animate-trail`}
              style={{ transform: 'translateX(-6px)' }}
            />
          </div>
        ))}
        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={theme === 'dark' ? 'rgba(0,255,255,0.2)' : 'rgba(0,100,255,0.2)'}
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={theme === 'dark' ? '#00FFFF' : '#0064FF'}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 283', strokeDashoffset: 0 }}
              animate={{
                strokeDasharray: `${(progress / 100) * 283} 283`,
                strokeDashoffset: 0,
              }}
              transition={{ duration: 0.2, ease: 'linear' }}
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
          </svg>
          <div
            className={`absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-['Orbitron'] ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            } animate-flicker`}
          >
            {Math.round(progress)}%
          </div>
        </div>
        <div className="relative mt-6">
          <h2
            className={`text-3xl md:text-5xl font-['Orbitron'] ${
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            } animate-glitch tracking-wider relative z-10`}
            data-text="Initializing JARVIS Systems..."
          >
            Initializing JARVIS Systems...
          </h2>
          <div
            className={`absolute top-0 left-0 w-full h-1 ${
              theme === 'dark' ? 'bg-cyan-400/50' : 'bg-cyan-600/50'
            } animate-scan-line z-20`}
          />
          <div
            className={`absolute inset-0 ${
              theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-600/20'
            } animate-scan`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`node-${i}`}
            className={`absolute w-3 h-3 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-500'
            } rounded-full animate-spark`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Header = ({ theme, toggleTheme }) => (
  <header className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-lg z-20 shadow-[0_0_20px_rgba(0,255,255,0.3)]`}>
    <nav className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="JARVIS Logo" className="h-10 w-10 animate-pulse" />
          <h1 className={`text-2xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} tracking-wider`}>JARVIS</h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full sm:hidden ${
            theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
          } hover:opacity-80 transition-all duration-300`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
      <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-2 sm:mt-0 text-center">
        {['Home', 'About', 'Skills', 'Resume', 'Education', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
              } transition-all duration-300 glow text-base font-['Orbitron'] tracking-wide block py-1 sm:py-0`}
              aria-label={`Navigate to ${item} section`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full hidden sm:block ${
          theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
        } hover:opacity-80 transition-all duration-300`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  </header>
);

const Hero = ({ theme }) => {
  const [text, setText] = useState('');
  const phrases = [
    'Dhananjai | Web Developer',
    'Dhananjai | Innovator',
    'Dhananjai | Problem Solver',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentPhrase = phrases[phraseIndex];
    const typing = setInterval(() => {
      if (i < currentPhrase.length) {
        setText(currentPhrase.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setText('');
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [phraseIndex]);

  return (
    <motion.section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-cyan-950/20' : 'bg-gradient-to-br from-white to-cyan-100/20'
      } relative overflow-hidden px-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${
          theme === 'dark' ? 'rgba(0,255,255,0.1)' : 'rgba(0,100,255,0.1)'
        },transparent)]`}
      />
      <div className="text-center z-10">
        <h2
          className={`text-4xl sm:text-6xl md:text-7xl font-['Orbitron'] ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          } mb-4 animate-pulse tracking-tight`}
        >
          {text}
        </h2>
        <p
          className={`text-lg sm:text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          } max-w-xl mx-auto font-['Roboto_Mono']`}
        >
          Explore my work and discover innovative web solutions
        </p>
        <a
          href="#contact"
          className={`mt-6 inline-block px-6 py-3 ${
            theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
          } rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse font-['Orbitron'] text-base sm:text-lg`}
          aria-label="Contact me"
        >
          Engage Systems
        </a>
      </div>
    </motion.section>
  );
};

const ArcReactor = ({ theme }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <motion.section
      className={`py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'} flex justify-center items-center relative overflow-hidden`}
      aria-label="Arc Reactor animation"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-pointer ${isClicked ? 'scale-110 transition-transform duration-500' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Interact with Arc Reactor"
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            theme === 'dark' ? 'border-cyan-500/60 bg-cyan-900/10' : 'border-cyan-600/60 bg-cyan-200/10'
          } animate-[spin_12s_linear_infinite] shadow-[0_0_50px_rgba(0,255,255,0.4)]`}
        >
          <div
            className={`absolute w-4 h-4 ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker ${isClicked ? 'scale-150' : ''}`}
          />
        </div>
        <div
          className={`absolute inset-6 sm:inset-8 rounded-full border-3 ${
            theme === 'dark' ? 'border-cyan-400/70 bg-cyan-800/15' : 'border-cyan-500/70 bg-cyan-300/15'
          } animate-[spin_8s_linear_infinite_reverse] shadow-[0_0_30px_rgba(0,255,255,0.3)]`}
        >
          <div
            className={`absolute w-3 h-3 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-500'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker`}
          />
        </div>
        <div
          className={`absolute inset-12 sm:inset-16 rounded-full border-2 ${
            theme === 'dark' ? 'border-cyan-300/80 bg-cyan-700/20' : 'border-cyan-400/80 bg-cyan-400/20'
          } animate-[spin_5s_linear_infinite] shadow-[0_0_20px_rgba(0,255,255,0.5)]`}
        >
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-200' : 'bg-cyan-400'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker`}
          />
        </div>
        <div
          className={`absolute inset-18 sm:inset-24 rounded-full ${
            theme === 'dark' ? 'bg-cyan-500/60' : 'bg-cyan-600/60'
          } animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_60px_rgba(0,255,255,0.8)] flex items-center justify-center ${
            isClicked ? 'shadow-[0_0_100px_rgba(0,255,255,1)]' : ''
          }`}
        >
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 ${theme === 'dark' ? 'bg-white' : 'bg-gray-200'} rounded-full shadow-[0_0_80px_rgba(0,255,255,1)] animate-[pulse_1.5s_ease-in-out_infinite]`}
          />
        </div>
        <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-500'
            } rounded-full top-8 left-8 animate-spark`}
          />
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-200' : 'bg-cyan-400'
            } rounded-full top-16 left-16 animate-spark delay-500`}
          />
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
            } rounded-full bottom-8 right-8 animate-spark delay-1000`}
          />
        </div>
        <div
          className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,${
            theme === 'dark' ? 'rgba(0,255,255,0.3)' : 'rgba(0,100,255,0.3)'
          },transparent)] animate-[flare_4s_ease-in-out_infinite] hover:shadow-[0_0_100px_rgba(0,255,255,0.9)] transition-shadow duration-300`}
        />
      </div>
    </motion.section>
  );
};

const About = ({ theme }) => (
  <motion.section
    id="about"
    className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
      <h2 className={`text-4xl sm:text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-12 tracking-wider`}>
        Core Systems
      </h2>
      <div
        className={`max-w-3xl mx-auto ${
          theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-200/30'
        } p-6 sm:p-10 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] card-glow backdrop-blur-sm`}
      >
        <img
          src={profile}
          alt="Profile photo"
          className="h-32 w-32 sm:h-40 sm:w-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
        />
        <p
          className={`text-center text-base sm:text-lg font-['Roboto_Mono'] ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          I am a full stack web developer specializing in innovative web design and creative problem-solving solutions.
        </p>
      </div>
    </div>
  </motion.section>
);

const Skills = ({ theme }) => {
  const skills = [
    'React', 'Tailwind CSS', 'Socket.IO', 'MongoDB', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'
  ];

  return (
    <motion.section
      id="skills"
      className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl sm:text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-12 tracking-wider`}>
          Tech Matrix
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${
                theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
              } p-3 sm:p-4 rounded-lg card-glow backdrop-blur-sm text-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } font-['Roboto_Mono'] hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Resume = ({ theme }) => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2023 - Present',
      description:
        'Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers to deliver a real-time e-commerce platform.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Creative Solutions Ltd.',
      duration: 'Jun 2022 - Dec 2022',
      description:
        'Designed responsive UI components with Tailwind CSS and implemented Socket.IO for real-time features.',
    },
  ];

  return (
    <motion.section
      id="resume"
      className={`py-16 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-950 to-gray-900'
          : 'bg-gradient-to-b from-gray-100 to-gray-200'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl sm:text-5xl font-['Orbitron'] ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          } text-center mb-12 tracking-wider`}
        >
          Professional Core
        </h2>
        <div
          className={`max-w-3xl mx-auto ${
            theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-200/30'
          } p-6 sm:p-10 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] card-glow backdrop-blur-sm`}
        >
          <div className="text-center mb-6">
            <a
              href={resumePDF}
              download
              className={`inline-block px-6 py-3 ${
                theme === 'dark'
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-cyan-600 text-white'
              } rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] font-['Orbitron'] text-base sm:text-lg`}
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`${
                  theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
                } p-4 sm:p-6 rounded-lg card-glow backdrop-blur-sm`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className={`text-xl sm:text-2xl font-['Orbitron'] ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                  } mb-2`}
                >
                  {exp.title}
                </h3>
                <p
                  className={`text-base sm:text-lg font-['Roboto_Mono'] ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } mb-1`}
                >
                  {exp.company} | {exp.duration}
                </p>
                <p
                  className={`font-['Roboto_Mono'] text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Education = ({ theme }) => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'XYZ Institute of Technology',
      duration: '2019 - 2023',
      details: 'Graduated with honors, specializing in web development and AI.',
    },
    {
      degree: 'High School Diploma',
      institution: 'ABC Senior Secondary School',
      duration: '2017 - 2019',
      details:
        'Focused on Physics, Mathematics, and Computer Science with top grades.',
    },
  ];

  return (
    <motion.section
      id="education"
      className={`py-16 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-950 to-gray-900'
          : 'bg-gradient-to-b from-gray-100 to-gray-200'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl sm:text-5xl font-['Orbitron'] ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          } text-center mb-12 tracking-wider`}
        >
          Knowledge Base
        </h2>
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`${
                theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
              } p-4 sm:p-6 rounded-lg card-glow backdrop-blur-sm`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-xl sm:text-2xl font-['Orbitron'] ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                } mb-2`}
              >
                {edu.degree}
              </h3>
              <p
                className={`text-base sm:text-lg font-['Roboto_Mono'] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } mb-1`}
              >
                {edu.institution} | {edu.duration}
              </p>
              <p
                className={`font-['Roboto_Mono'] text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'Campus Cravings',
      description: 'An e-commerce food platform for campuses using Socket.IO, MongoDB, React, and Tailwind CSS.',
    },
    {
      title: 'Neon Dashboard',
      description: 'A responsive analytics dashboard with Tailwind CSS for real-time data visualization.',
    },
    {
      title: 'AI Nexus',
      description: 'An AI-driven automation tool with a sci-fi interface, powered by machine learning.',
    },
  ];

  return (
    <motion.section
      id="projects"
      className={`py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl sm:text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-12 tracking-wider`}>
          Operational Modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group ${
                theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
              } p-6 rounded-xl card-glow backdrop-blur-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`}
              role="article"
              aria-labelledby={`project-title-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                id={`project-title-${index}`}
                className={`text-2xl sm:text-3xl font-['Orbitron'] ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                } animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.7)] tracking-tight mb-4`}
              >
                {project.title}
              </h3>
              <p
                className={`text-center font-['Roboto_Mono'] text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}
              >
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <motion.section
      id="contact"
      className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-t from-gray-950 to-gray-900' : 'bg-gradient-to-t from-gray-100 to-gray-200'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl sm:text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mb-12 tracking-wider`}>
          Open Comm Link
        </h2>
        <p
          className={`text-base sm:text-lg font-['Roboto_Mono'] ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          } max-w-xl mx-auto mb-8`}
        >
          Connect for collaborations or inquiries. Systems are fully operational.
        </p>
        <div
          className={`${
            theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-200/30'
          } p-6 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] card-glow backdrop-blur-sm max-w-md mx-auto mb-8`}
        >
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base`}
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base`}
              required
              aria-label="Your email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm sm:text-base`}
              required
              aria-label="Your message"
            ></textarea>
            <button
              onClick={handleSubmit}
              className={`px-6 py-3 rounded-full ${
                theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
              } hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] font-['Orbitron'] text-base sm:text-lg`}
              aria-label="Send message"
            >
              Transmit Signal
            </button>
          </div>
          {status && (
            <p
              className={`mt-4 font-['Roboto_Mono'] text-sm sm:text-base ${
                status.includes('successfully') ? 'text-cyan-400' : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a
            href="https://github.com/dhananjaiyadav1234"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-base sm:text-lg font-['Orbitron']`}
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhananjai-yadav-220162307/"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-base sm:text-lg font-['Orbitron']`}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dhananjaiyadav2006@gmail.com"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-base sm:text-lg font-['Orbitron']`}
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isStartupComplete, setIsStartupComplete] = useState(false);

  useEffect(() => {
    let timeout;
    const handleMouseMove = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }, 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={`font-['Roboto_Mono'] relative ${
        theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-500 overflow-x-hidden`}
    >
      {!isStartupComplete && (
        <StartupEffect theme={theme} onComplete={() => setIsStartupComplete(true)} />
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.6) 1px, transparent 1px), linear-gradient(to right, rgba(0, ${
            theme === 'dark' ? '255,255' : '100,255'
          }, 0.6) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          animation: 'pulse 8s ease-in-out infinite',
          zIndex: 1,
          boxShadow: `0 0 20px rgba(0, ${theme === 'dark' ? '255,255' : '100,255'}, 0.4)`,
          transform: `perspective(1000px) rotateX(${
            (mousePos.y / window.innerHeight - 0.5) * 5
          }deg) rotateY(${(mousePos.x / window.innerWidth - 0.5) * 5}deg)`,
        }}
      />
      <div className="absolute inset-0 overflow-hidden z-2">
        <div
          className={`absolute w-2 h-2 ${
            theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600'
          } rounded-full top-[10%] left-[20%] animate-dot`}
          style={{
            transform: `translate(${
              (mousePos.x / window.innerWidth - 0.2) * 10
            }px, ${(mousePos.y / window.innerHeight - 0.1) * 10}px)`,
          }}
        />
        <div
          className={`absolute w-2 h-2 ${
            theme === 'dark' ? 'bg-cyan-300' : 'bg-blue-500'
          } rounded-full top-[30%] left-[70%] animate-dot`}
          style={{
            transform: `translate(${
              (mousePos.x / window.innerWidth - 0.7) * 10
            }px, ${(mousePos.y / window.innerHeight - 0.3) * 10}px)`,
            animationDelay: '500ms',
          }}
        />
        <div
          className={`absolute w-2 h-2 ${
            theme === 'dark' ? 'bg-cyan-500' : 'bg-blue-700'
          } rounded-full top-[50%] left-[40%] animate-dot`}
          style={{
            transform: `translate(${
              (mousePos.x / window.innerWidth - 0.4) * 10
            }px, ${(mousePos.y / window.innerHeight - 0.5) * 10}px)`,
            animationDelay: '1000ms',
          }}
        />
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero theme={theme} />
        <ArcReactor theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Resume theme={theme} />
        <Education theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
};

export default App;