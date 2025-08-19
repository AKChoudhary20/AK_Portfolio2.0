// src/app/data/portfolioData.ts

export const stats = [
  { number: '8.85', label: 'Current CGPA' },
  { number: '3+', label: 'Major Projects' },
  { number: '2', label: 'Internships' },
  { number: '6+', label: 'Programming Languages' },
];

export const skills = [
  'Full Stack Web Development',
  'Three.js & WebGL Development',
  'Backend API Development',
  'React.js & Node.js',
  'Java Programming',
  'Strong Problem solving skills',
];

export const experience = [
  {
    role: 'IT Intern – Quantum Computing',
    company: 'Mecon Limited, Ranchi',
    period: 'June 2024 - July 2024',
    description: 'Worked in the IT Services section...',
    highlights: [
      'Explored quantum algorithms and applications',
      'Studied superposition, interference & entanglement',
      'Exposure to emerging quantum technologies'
    ]
  },
  {
    role: 'Software Development Intern',
    company: 'Bitsphere Infosystem',
    period: 'May 2025 - July 2025',
    description: 'Worked on frontend & backend apps...',
    highlights: [
      'Built 3D visuals with Three.js',
      'Developed backend modules using Node.js & MongoDB',
      'Implemented auth, uploads, interactions'
    ]
  }
];

export const certifications = [
  'Java Programming',
  'Three.js 3D Development',
  'Backend Development',
  'MERN Stack Development',
  'MongoDB Database Design',
  'Oracle Gen AI Certification'
];

// (Do same for projects, categories, contactInfo, faqs)
  // // Projects Data
  export const projects = [
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

  export const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'development', label: 'Development' },
    { value: 'Hardware Iot Project', label: 'Hardware Iot Project' },
    { value: 'experience', label: 'Experience' },
    { value: 'activities', label: 'Activities & Achievements' }
  ];
 export const contactInfo = [
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

  export const faqs = [
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