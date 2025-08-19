'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('Iy0L1II78oU8YC0iJ');

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [filter, setFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Initial check to set active section on load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Approximate height of the fixed navigation
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });

      // Update active section
      setActiveSection(sectionId);
    }
  };

  // Home Page Data
  const stats = [
    { number: '8.85', label: 'Current CGPA' },
    { number: '3+', label: 'Major Projects' },
    { number: '2', label: 'Internships' },
    { number: '6+', label: 'Programming Languages' },
  ];

  const skills = [
    'Full Stack Web Development',
    'Three.js & WebGL Development',
    'Backend API Development',
    'React.js & Node.js',
    'Java Programming',
    'Strong Problem solving skills',
  ];

  // About Page Data - Updated to match your profile
  const experience = [
    {
      role: 'IT Intern – Quantum Computing',
      company: 'Mecon Limited, Ranchi',
      period: 'June 2024 - July 2024',
      description: 'Worked in the IT Services section, focusing and studying on Quantum Computing algorithms and network models.',
      highlights: [
        'Explored quantum algorithms and their applications in secure communication',
        'Studied Quantum physics properties like superposition,Interferance and entanglement ',
        'Gained exposure to emerging technologies in quantum computing and IT services'
      ]

    },
    {
      role: 'Software Development Intern',
      company: 'Bitsphere Infosystem Private Limited',
      period: 'May 2025 - July 2025',
      description: 'Worked on developing and optimizing web applications, contributing to both frontend and backend tasks. Collaborated with the engineering team to implement new features and improve overall system performance.',
      highlights: [
        'Built interactive 3D visuals with Three.js and custom GLSL shaders',
        'Developed backend modules for Vidtube using Node.js, Express.js, and MongoDB',
        'Implemented features like video upload, authentication, and user interactions',
        'Collaborated with the team to deliver scalable and optimized web solutions'
      ]
    }
  ];

  const certifications = [
    'Java Programming',
    'Three.js 3D Development',
    ' Backend Development',
    'Mern Stack Development',
    'MongoDB Database Design',
    'Oracle Gen AI Certification'
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: 'BlobMixer 3D Website',
      category: 'development',
      description: 'A dynamic 3D web experience built using Three.js, WebGL, and GLSL shaders to showcase real-time blob generation and interaction .',
      tags: ['Three.js', 'WebGL', 'GLSL'],
      metrics: ['Custom Shaders', 'Real-Time Interaction', 'Interactive UI'],
      link: 'https://blobmixerportfolio.vercel.app/',
      featured: true

    },
    {
      id: 2,
      title: 'Vidtube Backend Project',
      category: 'development',
      description: 'A full-featured video hosting backend (YouTube clone) built with Node.js, Express.js, and MongoDB. Supports user authentication, video uploads, and interactive features.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      metrics: ['Scalable REST API', 'User Authentication', 'Video Uploads & Interactions'],
      link: 'https://github.com/AKChoudhary20/Vidtube',
      featured: true

    },
    {
      id: 3,
      title: 'Tales Spinner Website',
      category: 'development',
      description: 'A blogging platform where readers and writers can publish and explore stories across multiple genres. Includes user profiles and story management features.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      metrics: ['User Profiles', 'Multi-Genre Support', 'Interactive Blogging'],
      link: 'https://talespinner.pages.dev',
      featured: true

    },
    {
      id: 4,
      title: 'IoT Shuttle Bus Tracker',
      category: 'Hardware Iot Project',
      description: 'A React Native mobile app for VIT students to track shuttle buses in real-time using GPS-enabled IoT devices. Integrated with a Node.js backend and IoT hardware for live tracking and capacity management.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'IoT', 'ESP32', 'Arduino Uno', 'GPS'],
      metrics: ['Real-Time Tracking', 'Capacity Management', 'Live Map Visualization'],
      link: 'https://github.com/AKChoudhary20/ShuttleTracker.git',
      featured: false

    },
    {
      id: 5,
      title: 'Movie Booking Website',
      category: 'development',
      description: 'A movie ticket booking website built with HTML, CSS, and JavaScript for the frontend, integrated with MongoDB for data storage. Allows users to browse movies, check showtimes, and book tickets online.',
      tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      metrics: ['Ticket Booking', 'Showtime Management', 'User-Friendly UI'],
      link: 'https://drive.google.com/drive/folders/1rE7eKb3asMWb-DpNP63FkPfKFPA90X8_',
      featured: false
    },
    {
      id: 6,
      title: 'Hospital Management Website',
      category: 'development',
      description: 'A hospital management system built with ReactJS to manage patients, doctors, and appointments efficiently. Provides an interactive dashboard for streamlined healthcare operations.',
      tags: ['ReactJS', 'JavaScript', 'Web Development'],
      metrics: ['Patient Management', 'Doctor Scheduling', 'Interactive Dashboard'],
      link: 'https://hospitalmanagementmini.netlify.app',
      featured: false

    },
    {
      id: 7,
      title: 'IT Intern – Quantum Computing & Networks',
      category: 'experience',
      description: 'Worked at Mecon Limited, Ranchi in the IT Services section focusing on Quantum Computing algorithms, quantum physics principles, and network models.',
      tags: ['Quantum Computing', 'Networks', 'Quantum Physics', 'Research'],
      metrics: ['Explored Quantum Algorithms', 'Studied Quantum Physics & Properties', 'Report on  Superposition & Entanglement'],
      link: 'https://drive.google.com/file/d/1l4dbXGS3BeSISk4xKG7-_6s7UOoHYNBH/view?usp=drivesdk',
      featured: false
    },
    {
      id: 8,
      title: 'Full Stack Web Developer Intern',
      category: 'experience',
      description: 'Internship at Bitsphere Infosystem where I developed 3D web visuals using Three.js & GLSL and contributed to backend development of Vidtube, a video hosting platform.',
      tags: ['Three.js', 'GLSL', 'Node.js', 'Express.js', 'MongoDB'],
      metrics: ['Built 3D Visuals', 'Developed Backend APIs', 'Implemented Video Upload & Authentication'],
      link: null,
      featured: false
    },
    {
      id: 9,
      title: 'Oracle Cloud Infrastructure – Generative AI Certified',
      category: 'activities',
      description: 'Earned Oracle Cloud Infrastructure Generative AI certification, showcasing knowledge of AI services, model deployment, and practical applications of Generative AI on Oracle Cloud.',
      tags: ['Certification', 'Oracle Cloud', 'Generative AI'],
      metrics: ['Certified in OCI Generative AI', 'Cloud AI Applications', 'AI Model Deployment'],
      link: 'https://drive.google.com/file/d/1AAhtDsuJvD2r1reXazWypYxZhyc4lWWJ/view?usp=drivesdk',
      featured: false
    }, {
      id: 10,
      title: 'Winner – Annual Story Writing & Poetry Competitions',
      category: 'activities',
      description: 'Recognized for excellence in creative writing by winning first place in Annual Story Writing and Annual Poetry competitions at VIT. Contributed poems and short stories to college magazines.',
      tags: ['Creative Writing', 'Poetry', 'Story Writing', 'Achievement'],
      metrics: ['Winner – Annual Story Competition', 'Winner – Annual Poetry Competition', 'College Magazine Contributor'],
      link: 'https://drive.google.com/file/d/1-CZTOYLEwAnxbGJxXjDOpK7KnGRimaPq/view?usp=drivesdk',
      featured: false

    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'development', label: 'Development' },
    { value: 'Hardware Iot Project', label: 'Hardware Iot Project' },
    { value: 'experience', label: 'Experience' },
    { value: 'activities', label: 'Activities & Achievements' }
  ];



  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);


  // Contact Data
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ayushwriter1@gmail.com',
      link: 'mailto:ayushwriter1@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/ayush-choudhary-5b3903267',
      link: 'https://www.linkedin.com/in/ayush-choudhary-5b3903267'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/AKChoudhary20',
      link: 'https://github.com/AKChoudhary20'
    }
  ];

  const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in full-stack development using React.js, Node.js, Express.js, and MongoDB. I also have experience in IoT projects, Java programming, and 3D web development with Three.js & GLSL.'
  },
  {
    question: 'Are you available for internships or job opportunities?',
    answer: 'Yes! I am actively seeking software development and technical roles, including full stack, backend, IoT, and research opportunities.'
  },
  {
    question: 'Do you participate in hackathons or collaborations?',
    answer: 'Absolutely! I enjoy working on hackathons, project collaborations, and technical competitions that involve innovative problem-solving.'
  },
  {
    question: 'What kind of projects interest you most?',
    answer: 'I am passionate about building impactful software solutions, IoT-based applications, backend systems, and projects that combine technical depth with real-world usability.'
  }
];

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_snepco7',
        'template_4dj3pns',
        {
          to_name: 'Ayush',
          to_email: 'ayushwriter1@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Iy0L1II78oU8YC0iJ'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`portfolio-container ${mounted ? 'fade-in' : ''}`}>
      {/* Fixed Navigation - REMOVED */}

      <div className="vertical-scroll-container">

        {/* Home Section */}
        <section id="home" className="hero section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I&apos;m <span className="text-gradient">Ayush Kumar Choudhary</span>
                </h1>
                <h2 className="hero-subtitle">
                  Computer Science Student & Full Stack Developer
                </h2>
                <p className="hero-description">
                  Passionate Computer Science Engineering student at VIT with expertise in full stack
                  development, 3D web experiences, and creative writing. Building innovative projects
                  with modern technologies like Three.js, React, and Node.js while maintaining academic excellence.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                    View My Projects
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                    Get In Touch
                  </button>
                </div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ayush-choudhary-5b3903267" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://github.com/AKChoudhary20" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="mailto:ayushwriter1@gmail.com" className="social-link">
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="hero-image-container">
                  <div className="hero-image-placeholder">
                    <Image
                      src="/images/profile_portfolio.jpg"
                      alt="Ayush Kumar Choudhary"
                      width={300}
                      height={300}
                      className="profile-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <svg viewBox="0 0 200 200" className="hero-avatar" style={{ display: 'none' }}>
                      <defs>
                        <linearGradient id="avatar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'var(--primary-green)', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: 'var(--primary-green-dark)', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="95" fill="url(#avatar-gradient)" />
                      <text x="100" y="110" textAnchor="middle" fill="white" fontSize="60" fontWeight="bold">AC</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card card">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <div className="container">
              <h2 className="section-title">Core Expertise</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">✓</span>
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Highlight */}
          <div className="education-section">
            <div className="container">
              <div className="education-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <h2 className="section-title" style={{ textAlign: 'center' }}>Currently Studying At</h2>
                <div className="education-text" style={{ width: '100%', maxWidth: '800px' }}>
                  <div className="education-card" style={{
                    background: 'var(--card-background)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    boxShadow: 'var(--shadow-md)',
                    textAlign: 'center'
                  }}>
                    <h3 className="university-name" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                      Vellore Institute of Technology
                    </h3>
                    <p className="degree-info" style={{ fontSize: '1.4rem', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                      B.Tech in Computer Science Engineering Core
                    </p>
                    <p className="cgpa-info" style={{
                      fontSize: '1.5rem',
                      margin: '1.5rem 0',
                      color: 'var(--primary-green)'
                    }}>
                      Current CGPA: <span className="highlight" style={{ fontWeight: 'bold' }}>8.85</span>
                      <span style={{ fontSize: '1.1rem', color: 'var(--gray-600)' }}>(till 6th Semester)</span>
                    </p>
                    <p className="duration" style={{ color: 'var(--gray-600)', fontSize: '1.3rem' }}>Sept 2022 – July 2026</p>
                  </div>
                </div>

                <div className="achievements" style={{
                  width: '100%',
                  maxWidth: '800px',
                  background: 'var(--card-background)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <h3 className="achievements-title" style={{
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem',
                    color: 'var(--gray-800)',
                    textAlign: 'center'
                  }}>Academic Achievements</h3>
                  <div className="achievements-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem'
                  }}>
                    <div className="achievement-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: 'var(--gray-100)',
                      borderRadius: '0.5rem'
                    }}>
                      <span className="achievement-icon" style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary-green)'
                      }}></span>
                      <span style={{
                        color: 'green',
                        fontWeight: 'bold'
                      }}>🚀 Hackathons – Actively participated in multiple internal hackathons</span>
                    </div>
                    <div className="achievement-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: 'var(--gray-100)',
                      borderRadius: '0.5rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'pointer'
                    }}>
                      <span className="achievement-icon" style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary-green)'
                      }}></span>
                      <span style={{
                        color: 'green',
                        fontWeight: 'bold'
                      }}>💻 Club Involvement – Active member of technical & cultural clubs</span>
                    </div>
                    <div className="achievement-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: 'var(--gray-100)',
                      borderRadius: '0.5rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'pointer'
                    }}>
                      <span className="achievement-icon" style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary-green)'
                      }}></span>
                      <span style={{
                        color: 'green',
                        fontWeight: 'bold'
                      }}>🏅 Cultural Achievements – Winner of annual Poetry and Story Writing competitions.</span>
                    </div>
                    <div className="achievement-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      background: 'var(--gray-100)',
                      borderRadius: '0.5rem',
                      transition: 'transform 0.2s ease',
                      cursor: 'pointer'
                    }}>
                      <span className="achievement-icon" style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary-green)'
                      }}></span>
                      <span style={{
                        color: 'green',
                        fontWeight: 'bold'
                      }}>💻Workshops & Seminars – Attended sessions on AI, IoT, and Cloud Computing,</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Updated to match About page styling */}
        <section id="about" className="about-section section">
          <div className="container">
            <div className="about-hero-content">
              <h1 className="about-title">About Me</h1>
              <p className="about-subtitle">
                Developer, Student, and Community Builder
              </p>
            </div>

            {/* Story Section */}
            <div className="story-section">
              <div className="story-grid">
                <div className="story-content">
                  <h2 className="story-title">My Journey</h2>
                  <p className="story-text">
                    As a passionate Computer Science Engineering student at VIT with a current CGPA of 8.85,
                    I've embarked on a journey of continuous learning and innovation in the world of technology.
                  </p>
                  <p className="story-text">
                    With expertise in full-stack development, 3D web experiences using Three.js, and creative writing,
                    I bridge the gap between technical excellence and creative expression. I've completed multiple internships
                    and have hands-on experience with modern web technologies.
                  </p>
                  <p className="story-text">
                    My journey goes beyond academics, as I actively engage in hackathons, technical clubs, and cultural activities. These experiences have strengthened my teamwork, leadership, and problem-solving abilities alongside my technical growth.
                  </p>
                  <div className="story-stats">
                    <div className="story-stat">
                      <span className="stat-value">8.85</span>
                      <span className="stat-name">Current CGPA</span>
                    </div>
                    <div className="story-stat">
                      <span className="stat-value">3+</span>
                      <span className="stat-name">Major Projects</span>
                    </div>
                    <div className="story-stat">
                      <span className="stat-value">2</span>
                      <span className="stat-name">Internships</span>
                    </div>
                  </div>
                </div>
                <div className="story-image">
                  <div className="image-card card">
                    <div className="image-placeholder">
                      <Image
                        src="/images/speaking_portfolioE.jpeg"
                        alt="Ayush Kumar Choudhary - About"
                        width={400}
                        height={500}
                        className="about-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <svg viewBox="0 0 400 500" className="story-svg" style={{ display: 'none' }}>
                        <defs>
                          <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'var(--primary-green-light)', stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: 'var(--primary-green)', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <rect width="400" height="500" fill="url(#story-gradient)" rx="20" />
                        <text x="200" y="250" textAnchor="middle" fill="white" fontSize="80" fontWeight="bold">AC</text>
                        <text x="200" y="320" textAnchor="middle" fill="white" fontSize="20">CS Student</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="experience-section">
              <h2 className="section-title">Experience</h2>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content card">
                      <h3 className="timeline-title">{exp.role}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                      <p className="timeline-period">{exp.period}</p>
                      <p className="timeline-description">{exp.description}</p>
                      <ul className="timeline-highlights">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="skills-certs-section">
              <div className="skills-categories">
                <div className="skill-category card">
                  <h3 className="category-title">Development</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Three.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">Git/GitHub</span>
                  </div>
                </div>
                <div className="skill-category card">
                  <h3 className="category-title">Certifications & Skills</h3>
                  <div className="cert-grid">
                    {certifications.map((cert, index) => (
                      <div key={index} className="cert-item">
                        <span className="cert-icon">🏆</span>
                        <span className="cert-name">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section section">
          <div className="container">
            <div className="projects-hero-content">
              <h1 className="section-title">My Projects</h1>
              <p className="projects-subtitle">
                Showcasing creativity through code and innovation
              </p>
            </div>

            {/* Featured Projects */}
            <div className="featured-section">
              <h2 className="subsection-title">Featured Projects</h2>
              <div className="featured-grid">
                {projects.filter(p => p.featured).map((project) => (
                  <div key={project.id} className="featured-card card">
                    <div className="featured-header">
                      <h3 className="featured-title">{project.title}</h3>
                      <span className="featured-badge">Featured</span>
                    </div>
                    <p className="featured-description">{project.description}</p>
                    <div className="featured-metrics">
                      {project.metrics.map((metric, index) => (
                        <span key={index} className="metric-item">{metric}</span>
                      ))}
                    </div>
                    <div className="featured-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="tag-item">{tag}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-link"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* All Projects */}
            <div className="all-projects-section">
              <div className="projects-header">
                <h2 className="subsection-title">All Projects</h2>
                <div className="filter-buttons">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                      onClick={() => setFilter(cat.value)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-card card">
                    <div className="project-category">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section section">
          <div className="container">
            <div className="contact-hero-content">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Let&apos;s connect and explore how we can work together
              </p>
            </div>

            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <div className="form-card card">
                  <h2 className="form-title">Send Me a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Ak choudhary"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="ayush@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="collaboration">Collaboration Opportunity</option>
                        <option value="internship">Internship/Job Inquiry</option>
                        <option value="project">Project Collaboration</option>
                        <option value="hackathon">Hackathon/Competition</option>
                        <option value="research">Research/Technical Inquiry</option>
                        <option value="other">Other</option>

                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-input form-textarea"
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="form-message success">
                        Thank you for your message! I&apos;ll get back to you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="form-message error">
                        Something went wrong. Please try again later.
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="contact-info-wrapper">
                <div className="info-card card">
                  <h2 className="info-title">Connect With Me</h2>
                  <div className="info-grid">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-item"
                      >
                        <span className="info-icon">{item.icon}</span>
                        <div className="info-content">
                          <h3 className="info-label">{item.title}</h3>
                          <p className="info-value">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="availability-card card">
                  <h3 className="availability-title">Current Availability</h3>
                  <div className="availability-status">
                    <span className="status-indicator"></span>
                    <span className="status-text">Open for opportunities</span>
                  </div>
                  <p className="availability-text">
                    Actively seeking opportunities in Software Development (Full Stack, Backend) and Technical roles including Research, Testing, and Cloud/DevOps internships.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section - Moved outside contact-grid */}
            <div className="faq-section">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item card">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        :root {
          --primary-green: #10b981;
          --primary-green-dark: #047857;
          --primary-green-light: #34d399;
          --background: #ffffff;
          --background-secondary: #f9fafb;
          --foreground: #111827;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
          --gray-300: #d1d5db;
          --gray-400: #9ca3af;
          --gray-500: #6b7280;
          --gray-600: #4b5563;
          --gray-700: #374151;
          --gray-800: #1f2937;
          --card-background: #ffffff;
          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          --gradient-primary: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-dark) 100%);
          --gradient-dark: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          color: var(--foreground);
          background: var(--background);
        }

        .portfolio-container {
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .portfolio-container.fade-in {
          opacity: 1;
        }

        /* Common Styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section {
          padding: 5rem 0;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: var(--foreground);
          position: relative;
          padding-bottom: 1rem;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        .subsection-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--foreground);
        }

        .card {
          background: var(--card-background);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
          transition: all 0.3s ease;
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .card:hover {
          box-shadow: var(--shadow-md);
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-primary {
          background: var(--gradient-primary);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-green);
          border: 2px solid var(--primary-green);
        }

        .btn-secondary:hover {
          background: var(--primary-green);
          color: white;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--background);
          padding-top: 6rem;
          padding-bottom: 2rem;
          width: 100%;
        }

        .hero-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        gap: 3rem;
        width: 100%;
        max-width: 100%;
        padding: 2rem 4rem;
        background-color: transparent;
        border-radius: 0;
        box-shadow: none;
        border: none;
        }

        .hero-text {
          flex: 1;
          max-width: 60%;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          max-width: 40%;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
        }

        .text-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--gray-700);
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--gray-600);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gray-100);
          color: var(--gray-600);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--primary-green);
          color: white;
          transform: translateY(-2px);
        }

        .social-icon {
          width: 20px;
          height: 20px;
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-placeholder {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          animation: float 6s ease-in-out infinite;
          position: relative;
          background: var(--gradient-primary);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Stats Section */
        .stats-section {
          background: var(--background-secondary);
          padding: 3rem 0;
          margin-top: 3rem;
        }

        .stats-grid {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          overflow-x: auto;
          padding: 1rem 0;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          min-width: 200px;
          flex: 1;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--gray-600);
        }

        /* Skills Section */
        .skills-section {
          text-align: center;
          padding: 3rem 0;
        }

        .skills-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 3rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--card-background);
          border-radius: 0.75rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          border-left: 4px solid var(--primary-green);
          width: calc(50% - 0.75rem);
          min-width: 250px;
          flex-grow: 1;
        }

        .skill-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .skill-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--primary-green);
          color: white;
          font-weight: bold;
        }

        .skill-text {
          font-weight: 500;
          color: var(--foreground);
        }

        /* Education Section */
        .education-section {
          background: var(--background-secondary);
          padding: 3rem 0;
        }

        .education-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
          width: 100%;
        }

        .education-text {
          text-align: left;
        }

        .university-name {
          font-size: 2rem;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }

        .degree-info {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: 0.5rem;
        }

        .cgpa-info {
          font-size: 1.125rem;
          color: var(--gray-600);
          margin-bottom: 0.5rem;
        }

        .highlight {
          color: var(--primary-green);
          font-weight: bold;
        }

        .duration {
          font-size: 1rem;
          color: var(--gray-500);
        }

        .achievements-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--foreground);
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: var(--card-background);
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          transform: translateX(5px);
          box-shadow: var(--shadow-sm);
        }

        .achievement-icon {
          font-size: 1.5rem;
        }

        /* About Section - Updated styles to match About page */
        .about-section {
          background: var(--background-secondary);
        }

        .about-hero-content {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          color: var(--foreground);
          margin-bottom: 1rem;
        }

        .about-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
        }

        .story-section {
          margin-bottom: 4rem;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .story-content {
          padding: 0;
        }

        .story-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }

        .story-text {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--gray-600);
        }

        .story-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .story-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-green);
        }

        .stat-name {
          font-size: 0.875rem;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-card {
          width: 100%;
          max-width: 400px;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .image-placeholder {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .story-svg {
          width: 100%;
          height: 100%;
          max-width: 400px;
        }

        /* Experience Section */
        .experience-section {
          margin: 4rem 0;
        }

        .experience-timeline {
          position: relative;
          padding-left: 3rem;
          margin-top: 2rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gray-300);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: var(--primary-green);
          border: 3px solid var(--background);
        }

        .timeline-content {
          padding: 2rem;
        }

        .timeline-title {
          color: var(--foreground);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .timeline-company {
          color: var(--primary-green);
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .timeline-period {
          color: var(--gray-500);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .timeline-highlights {
          list-style: none;
          padding: 0;
        }

        .timeline-highlights li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--gray-600);
        }

        .timeline-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: bold;
        }

        /* Skills & Certifications */
        .skills-certs-section {
          margin: 4rem 0;
        }

        .skills-categories {
          display: grid;
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
        }

        .category-title {
          margin-bottom: 1.5rem;
          color: var(--foreground);
          font-size: 1.5rem;
          font-weight: 600;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--primary-green);
          color: white;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--background-secondary);
          border-radius: 0.5rem;
        }

        .cert-icon {
          font-size: 1.25rem;
        }

        .cert-name {
          color: var(--foreground);
          font-weight: 500;
        }

        /* Projects Section */
        .projects-section {
          background: var(--background);
        }

        .projects-hero-content {
          text-align: center;
          margin-bottom: 3rem;
        }

        .projects-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
        }

        .featured-section {
          margin-bottom: 4rem;
        }

        .featured-grid {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          overflow-x: auto;
          padding: 1rem 0;
          scroll-snap-type: x mandatory;
        }

        .featured-card {
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--gray-200);
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          background: var(--card-background);
          min-width: 300px;
          flex: 1;
          scroll-snap-align: start;
        }
        
        .featured-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .featured-title {
          color: var(--foreground);
          font-size: 1.5rem;
        }

        .featured-badge {
          background: var(--primary-green);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .featured-description {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .featured-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .metric-item {
          color: var(--primary-green);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag-item {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .featured-link {
          display: inline-flex;
          align-items: center;
          color: var(--primary-green);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .featured-link:hover {
          transform: translateX(5px);
        }

        .all-projects-section {
          margin-top: 4rem;
        }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          background: transparent;
          border: 2px solid var(--gray-300);
          border-radius: 2rem;
          color: var(--gray-600);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-green);
          color: var(--primary-green);
        }

        .filter-btn.active {
          background: var(--primary-green);
          border-color: var(--primary-green);
          color: white;
        }

        .projects-grid {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          overflow-x: auto;
          padding: 1rem 0;
          scroll-snap-type: x mandatory;
        }

        .project-card {
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          border: 1px solid var(--gray-200);
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          background: var(--card-background);
          min-width: 300px;
          flex: 1;
          scroll-snap-align: start;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
        }

        .project-category {
          color: var(--primary-green);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .project-title {
          color: var(--foreground);
          margin-bottom: 1rem;
        }

        .project-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .project-tag {
          background: var(--background-secondary);
          color: var(--gray-600);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
        }

        .project-link {
          color: var(--primary-green);
          font-weight: 500;
          font-size: 0.875rem;
        }

        /* Contact Section */
        .contact-section {
          background: var(--background-secondary);
        }

        .contact-hero-content {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .form-card,
        .info-card,
        .availability-card {
          padding: 2.5rem;
          border: 1px solid var(--gray-200);
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          background: var(--card-background);
          transition: all 0.3s ease;
        }
        
        .form-card:hover,
        .info-card:hover,
        .availability-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .form-title,
        .info-title {
          margin-bottom: 2rem;
          color: var(--foreground);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--gray-700);
          font-weight: 500;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid var(--gray-300);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--background);
          color: var(--foreground);
          box-shadow: var(--shadow-sm);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-green);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.125rem;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-md);
        }
        
        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
        }

        .form-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: var(--primary-green);
          border: 1px solid var(--primary-green);
        }

        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid #ef4444;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: var(--background);
          transform: translateX(5px);
        }

        .info-icon {
          font-size: 2rem;
        }

        .info-label {
          font-size: 0.875rem;
          color: var(--gray-500);
          margin-bottom: 0.25rem;
        }

        .info-value {
          color: var(--primary-green);
          font-weight: 500;
        }

        .availability-card {
          margin-top: 2rem;
        }

        .availability-title {
          margin-bottom: 1rem;
          color: var(--foreground);
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--primary-green);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .status-text {
          color: var(--primary-green);
          font-weight: 600;
        }

        .availability-text {
          color: var(--gray-600);
          line-height: 1.6;
        }

        .faq-section {
          margin-top: 4rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .faq-item {
          padding: 2rem;
        }

        .faq-question {
          color: var(--foreground);
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .faq-answer {
          color: var(--gray-600);
          line-height: 1.6;
        }

        .stats-grid,
        .featured-grid,
        .projects-grid {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: var(--primary-green) var(--gray-200);
        }

        .stats-grid::-webkit-scrollbar,
        .featured-grid::-webkit-scrollbar,
        .projects-grid::-webkit-scrollbar {
          height: 8px;
        }

        .stats-grid::-webkit-scrollbar-track,
        .featured-grid::-webkit-scrollbar-track,
        .projects-grid::-webkit-scrollbar-track {
          background: var(--gray-200);
          border-radius: 4px;
        }

        .stats-grid::-webkit-scrollbar-thumb,
        .featured-grid::-webkit-scrollbar-thumb,
        .projects-grid::-webkit-scrollbar-thumb {
          background-color: var(--primary-green);
          border-radius: 4px;
        }

        /* Vertical Scrolling Layout */
        .vertical-scroll-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .section {
          min-height: auto;
          padding: 6rem 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-bottom: 1px solid var(--gray-200);
        }

        /* Adjust hero section for vertical layout */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(to bottom, var(--background), var(--background-secondary));
          border-bottom: 1px solid var(--gray-200);
          padding: 2rem;
          padding-top: 6rem;
        }

        /* Adjust section transitions */
        .section {
          position: relative;
        }

        .section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: var(--gray-200);
        }

        .section:last-child::after {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-image {
            order: -1;
            max-width: 100%;
            justify-content: center;
            margin-bottom: 2rem;
          }

          .hero-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .social-links {
            justify-content: center;
          }

          .hero-image-placeholder {
            width: 200px;
            height: 200px;
          }

          .story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .story-image {
            order: -1;
          }

          .story-stats {
            justify-content: center;
          }

          .experience-timeline {
            padding-left: 2rem;
          }

          .timeline-marker {
            left: -1.5rem;
          }

          .projects-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .filter-buttons {
            justify-content: center;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-wrapper {
            order: -1;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 4rem 0;
          }

          .section::after {
            left: 5%;
            right: 5%;
          }

          .cert-grid {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            grid-template-columns: 1fr !important;
          }

          .skills-grid {
            flex-direction: column;
          }

          .skill-item {
            width: 100%;
            min-width: auto;
          }
        }

        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          :root {
            --background: #111827;
            --background-secondary: #1f2937;
            --foreground: #f9fafb;
            --card-background: #1f2937;
            --gray-100: #374151;
            --gray-200: #4b5563;
            --gray-300: #6b7280;
            --gray-400: #9ca3af;
            --gray-500: #6b7280;
            --gray-600: #d1d5db;
            --gray-700: #f3f4f6;
            --gray-800: #1f2937;
          }

          .hero-subtitle {
            color: var(--gray-400);
          }

          .social-link {
            background: var(--gray-800);
            color: var(--gray-400);
          }

          .stat-label {
            color: var(--gray-400);
          }

          .degree-info {
            color: var(--gray-400);
          }

          .cgpa-info {
            color: var(--gray-500);
          }

          .tag-item {
            background: var(--gray-800);
            color: var(--gray-300);
          }

          .filter-btn {
            border-color: var(--gray-600);
            color: var(--gray-400);
          }

          .project-tag {
            background: var(--gray-800);
            color: var(--gray-400);
          }

          .form-group label {
            color: var(--gray-400);
          }

          .form-input {
            border-color: var(--gray-600);
            background: var(--background);
          }

          .info-label {
            color: var(--gray-500);
          }

          .availability-text {
            color: var(--gray-400);
          }

          .faq-answer {
            color: var(--gray-400);
          }

          .timeline-highlights li {
            color: var(--gray-400);
          }

          .stat-name {
            color: var(--gray-400);
          }
        }
      `}</style>
      </div>
    </div>
  );
}