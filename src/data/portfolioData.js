export const portfolioData = {
  personalInfo: {
    name: "Alex Rivera",
    title: "Creative Full-Stack Developer",
    subtitle: "Architecting immersive web experiences & scalable systems",
    tagline: "I build high-performance web applications that merge cutting-edge technology with visually stunning user experiences.",
    email: "alex.rivera.dev@gmail.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA (Open to Remote)",
    resumeUrl: "#", // Add resume download path
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      medium: "https://medium.com",
      dribbble: "https://dribbble.com"
    },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" // Premium Unsplash avatar placeholder
  },
  
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "99.9%", label: "Client Satisfaction" }
  ],

  about: {
    bio: "I am a Passionate Full-Stack Engineer with a strong design sensibility. I specialize in building rich frontend interfaces using React & Framer Motion, and robust backend architectures with Node.js, GraphQL, and microservices. I am obsessed with web performance, responsive layouts, accessibility, and modern UI/UX design trends.",
    story: "My journey started in graphic design before I transitioned to code. This unique background allows me to bridge the gap between creative design and engineering, translating complex concepts into clean, maintainable, and interactive web applications.",
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Stanford University",
        duration: "2019 - 2021",
        description: "Specialized in Human-Computer Interaction and Distributed Systems."
      },
      {
        degree: "B.S. in Software Engineering",
        institution: "UC Berkeley",
        duration: "2015 - 2019",
        description: "Graduated with Honors. Core coursework in Data Structures, Algorithms, and Software Design."
      }
    ],
    achievements: [
      {
        title: "Best UX/UI Design Award",
        organization: "Webby Awards",
        year: "2025",
        description: "Awarded for the design and development of the interactive Web3 platform 'Solara'."
      },
      {
        title: "Open Source Contributor of the Year",
        organization: "Tech Innovators",
        year: "2024",
        description: "Recognized for significant contributions to the React & Framer Motion ecosystem."
      }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js / Next.js", percentage: 95, color: "#3B82F6" },
      { name: "TypeScript", percentage: 90, color: "#8B5CF6" },
      { name: "Tailwind CSS", percentage: 95, color: "#06B6D4" },
      { name: "Framer Motion / GSAP", percentage: 85, color: "#EC4899" },
      { name: "Redux / Zustand", percentage: 88, color: "#F59E0B" }
    ],
    backend: [
      { name: "Node.js / Express", percentage: 90, color: "#10B981" },
      { name: "GraphQL / Apollo", percentage: 85, color: "#6366F1" },
      { name: "PostgreSQL / MongoDB", percentage: 88, color: "#14B8A6" },
      { name: "Docker / AWS", percentage: 80, color: "#EF4444" },
      { name: "Python / FastAPI", percentage: 75, color: "#84CC16" }
    ]
  },

  experience: [
    {
      position: "Senior Full-Stack Engineer",
      company: "Innovate Labs",
      duration: "2023 - Present",
      description: "Leading the development of a micro-frontend design system used by over 500k monthly active users. Orchestrated migration to Next.js resulting in a 40% performance boost.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "AWS"]
    },
    {
      position: "Software Engineer II",
      company: "CoreTech Solutions",
      duration: "2021 - 2023",
      description: "Designed and implemented interactive data analytics dashboards. Scaled a distributed task execution service, handling up to 10M events daily with 99.9% uptime.",
      technologies: ["React", "Redux", "Zustand", "Express.js", "PostgreSQL", "Docker"]
    },
    {
      position: "Frontend Developer",
      company: "PixelPerfect Studios",
      duration: "2019 - 2021",
      description: "Collaborated closely with designers to build high-fidelity, interactive, and fully accessible landing pages. Managed integration of third-party APIs and custom CMS modules.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass", "Framer Motion"]
    }
  ],

  projects: [
    {
      id: "ai-content-genius",
      name: "AI Content Genius",
      category: "AI & Web Apps",
      description: "An AI-powered copywriting platform leveraging OpenAI's GPT models to generate engaging SEO-optimized copy, marketing designs, and blog articles instantly.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Tailwind CSS", "Node.js", "OpenAI API", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "This application provides copywriters and marketing teams with real-time editing, formatting, and generation tools. Included multi-tenant billing, analytics, and content templates."
    },
    {
      id: "solara-defi",
      name: "Solara DeFi Dashboard",
      category: "Blockchain / Web3",
      description: "A premium decentralized finance portfolio tracker offering multi-chain analytics, real-time token price charts, gas fee predictions, and yield optimization alerts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "TypeScript", "Ethers.js", "ChartJS", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Integrating multiple API nodes to fetch wallet balances across Ethereum, Polygon, and Solana. Users can view asset breakdowns, transaction history, and yield farming analytics in a unified dashboard."
    },
    {
      id: "apex-design-system",
      name: "Apex Design System",
      category: "UI/UX & Library",
      description: "An open-source, highly accessible, custom React component library built with Tailwind CSS and Framer Motion, adhering to strict WCAG 2.1 AA requirements.",
      image: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Storybook", "NPM"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Designed for rapid prototyping and production-ready applications. Features full keyboard navigation, screen reader support, automatic dark mode switching, and extensive theme customizability."
    },
    {
      id: "collab-space",
      name: "CollabSpace Canvas",
      category: "Web Apps",
      description: "A collaborative real-time digital whiteboard application enabling remote teams to brainstorm, design workflows, and outline database structures simultaneously.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "SocketJS", "Canvas API", "Tailwind CSS", "Express.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      details: "Supports simultaneous editing with cursor indicators, customizable vector shapes, sticky notes, image uploads, and PDF exports. Implemented cursor positioning optimizations using web sockets."
    }
  ],

  services: [
    {
      title: "Frontend Engineering",
      description: "Building fast, dynamic, and accessible frontend interfaces with React, Next.js, and modern state-management frameworks. Optimizing for excellent PageSpeed and Web Vitals.",
      icon: "Code"
    },
    {
      title: "Backend Development",
      description: "Designing scalable microservices, REST & GraphQL APIs using Node.js, Express, Fastify, and integrating secure relational or non-relational database architectures.",
      icon: "Server"
    },
    {
      title: "Interaction Design",
      description: "Crafting beautiful interactive user interfaces with rich animations using Framer Motion, GSAP, and custom SVG animations to elevate user engagement.",
      icon: "Sparkles"
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying and scaling applications on AWS or Vercel, configuring CI/CD pipelines, containerization using Docker, and optimizing server operations.",
      icon: "Cloud"
    }
  ],

  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2024",
      verificationUrl: "https://aws.amazon.com",
      credentialId: "AWS-ASA-12345"
    },
    {
      title: "Advanced React Developer",
      issuer: "Meta (via Coursera)",
      date: "Aug 2024",
      verificationUrl: "https://coursera.org",
      credentialId: "META-AR-67890"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "May 2024",
      verificationUrl: "https://mongodb.com",
      credentialId: "MONGO-CD-54321"
    }
  ],

  testimonials: [
    {
      name: "Sarah Jenkins",
      company: "CEO, Innovate Labs",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      review: "Alex is an exceptionally talented developer. He redesigned our dashboard, improving load time by 40% and our conversion rate by 15%. His attention to UX details is world-class!"
    },
    {
      name: "Marcus Chen",
      company: "Product Manager, TechVibe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      review: "Working with Alex was a breeze. He translated our design files into a fully responsive, pixel-perfect React application in record time. His communication and professionalism are outstanding."
    },
    {
      name: "Elena Rostova",
      company: "CTO, Solara DeFi",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      review: "Alex brought deep Web3 and frontend expertise to our project. He wrote clean, high-performance code and helped us deploy on schedule. I highly recommend him for any high-complexity UI project."
    }
  ]
};
