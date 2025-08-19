'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '@/app/styles/page.css';
import { stats, skills, experience, certifications, projects, categories, contactInfo, faqs } from '@/app/data/portfolioData';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);
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


  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);


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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          to_name: 'Ayush',
          to_email: 'ayushwriter1@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
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
                    <p className="duration" style={{ color: 'var(--gray-600)', fontSize: '1.3rem' }}>Sept 2022 — July 2026</p>
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
                        color: '#0da675',
                        fontWeight: 'bold'
                      }}>🚀 Hackathons — Actively participated in multiple internal hackathons</span>
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
                        color: '#0da675',
                        fontWeight: 'bold'
                      }}>💻 Club Involvement — Active member of technical & cultural clubs</span>
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
                        color: '#0da675',
                        fontWeight: 'bold'
                      }}>🏅 Cultural Achievements — Winner of annual Poetry and Story Writing competitions.</span>
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
                        color: '#0da675',
                        fontWeight: 'bold'
                      }}>💻Workshops & Seminars — Attended sessions on AI, IoT, and Cloud Computing,</span>
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
                    I&apos;ve embarked on a journey of continuous learning and innovation in the world of technology.
                  </p>
                  <p className="story-text">
                    With expertise in full-stack development, 3D web experiences using Three.js, and creative writing,
                    I bridge the gap between technical excellence and creative expression. I&apos;ve completed multiple internships
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
      </div>
    </div>
  );
}