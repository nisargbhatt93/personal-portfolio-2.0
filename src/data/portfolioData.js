// Data for the portfolio
export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
]

export const TECH_ICONS = [
    { name: 'HTML', color: '#E34F26', emoji: '🌐' },
    { name: 'CSS', color: '#1572B6', emoji: '🎨' },
    { name: 'JavaScript', color: '#F7DF1E', emoji: '⚡' },
    { name: 'React', color: '#61DAFB', emoji: '⚛️' },
    { name: 'Node.js', color: '#339933', emoji: '🟢' },
    { name: 'PostgreSQL', color: '#4169E1', emoji: '🐘' },
    { name: 'Shopify', color: '#96BF48', emoji: '🛒' },
    { name: 'WordPress', color: '#21759B', emoji: '📝' },
]

export const SKILLS = [
    { name: 'React.js & TS', level: 90, years: 4, category: 'Frontend', color: '#61DAFB' },
    { name: 'Node.js', level: 88, years: 4, category: 'Backend', color: '#339933' },
    { name: 'AWS Cloud', level: 85, years: 3, category: 'Cloud', color: '#FF9900' },
    { name: 'Docker', level: 80, years: 2, category: 'DevOps', color: '#2496ED' },
    { name: 'PostgreSQL', level: 85, years: 3, category: 'Database', color: '#4169E1' },
    { name: 'CI/CD Pipelines', level: 82, years: 3, category: 'DevOps', color: '#8b5cf6' },
    { name: 'Microservices', level: 78, years: 2, category: 'Architecture', color: '#ec4899' },
    { name: 'System Design', level: 80, years: 2, category: 'Engineering', color: '#06b6d4' },
]

export const PROJECTS = [
    {
        id: 7,
        title: 'Disaster Management System',
        description: 'A comprehensive platform for tracking and responding to natural disasters with real-time resource mapping.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        github: '#',
        live: 'https://disastermanagement90.netlify.app/',
        color: '#ef4444',
        category: 'Full-Stack',
        featured: true,
    },
    {
        id: 6,
        title: 'Expense Tracker',
        description: 'A seamless expense tracking application to manage personal finances, track daily spending, and visualize budget distribution.',
        tech: ['React', 'JavaScript', 'CSS'],
        github: '#',
        live: 'https://miniproject1234.netlify.app/',
        color: '#10b981',
        category: 'Frontend',
        featured: true,
    },
    {
        id: 1,
        title: 'FullStack E-Commerce Platform',
        description: 'A complete e-commerce solution with real-time inventory, payment integration, and admin dashboard. Supports multi-vendor marketplace model.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
        github: '#',
        live: '#',
        color: '#3b82f6',
        category: 'Full-Stack',
        featured: true,
    },
    {
        id: 2,
        title: 'Enterprise ERP System',
        description: 'Modular ERP covering inventory, HR, payroll, and financial reporting. Built for a mid-sized manufacturing company with 200+ users.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'JWT'],
        github: '#',
        live: 'https://minierp1.netlify.app',
        color: '#8b5cf6',
        category: 'Enterprise',
        featured: true,
    },
    {
        id: 3,
        title: 'Process Automation Suite',
        description: 'Workflow automation system that reduced manual data entry by 80%. Integrates with Slack, Zapier, and external REST APIs.',
        tech: ['Node.js', 'Webhooks', 'REST APIs', 'PostgreSQL'],
        github: '#',
        live: '#',
        color: '#06b6d4',
        category: 'Automation',
        featured: false,
    },
    {
        id: 4,
        title: 'Shopify Custom Theme',
        description: 'Bespoke Shopify theme with advanced filtering, wishlist, dynamic search, and mobile-first design achieving 95+ Lighthouse score.',
        tech: ['Liquid', 'Shopify', 'JavaScript', 'CSS', 'AJAX'],
        github: '#',
        live: '#',
        color: '#10b981',
        category: 'E-Commerce',
        featured: false,
    },
    {
        id: 5,
        title: 'AI Data Dashboard',
        description: 'ML-powered analytics dashboard with natural language querying, predictive insights, and real-time chart visualizations.',
        tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js'],
        github: '#',
        live: '#',
        color: '#ec4899',
        category: 'AI/ML',
        featured: true,
    },
]

export const SERVICES = [
    {
        icon: '☁️',
        title: 'Cloud Architecture (AWS)',
        description: 'Design and deploy scalable, fault-tolerant cloud infrastructures using AWS. Serverless, EC2, S3, and container orchestration.',
        features: ['Cloud Migration', 'Serverless', 'Infrastructure as Code', 'Cost Optimization'],
        color: '#FF9900',
    },
    {
        icon: '⚙️',
        title: 'DevOps & CI/CD',
        description: 'Streamline the development lifecycle with automated testing, continuous integration, and seamless deployments.',
        features: ['Docker', 'GitHub Actions', 'Jenkins', 'Automated Testing'],
        color: '#2496ED',
    },
    {
        icon: '⚡',
        title: 'Software Engineering',
        description: 'End-to-end application development with robust microservices, RESTful APIs, and scalable database architecture.',
        features: ['React & Node.js', 'Microservices', 'System Design', 'Auth & Security'],
        color: '#8b5cf6',
    },
    {
        icon: '🤖',
        title: 'Automation Systems',
        description: 'Eliminate repetitive tasks with smart workflow automation. Reduce errors and free your team for high-value work.',
        features: ['Data Pipelines', 'Scheduled Jobs', 'Webhooks', 'Internal Tools'],
        color: '#10b981',
    },
    {
        icon: '🌐',
        title: 'Web Development',
        description: 'Pixel-perfect, performant frontend applications built with modern frameworks. SEO-optimized and mobile-first by default.',
        features: ['React.js', 'Next.js', 'TailwindCSS', 'Core Web Vitals'],
        color: '#06b6d4',
    },
]

export const TERMINAL_RESPONSES = {
    help: `Available commands:
  • about       — About Nisarg
  • skills      — Technical skills & expertise  
  • projects    — View featured projects
  • contact     — Get in touch
  • experience  — Work experience
  • clear       — Clear terminal
  • whoami      — Identity check`,

    about: `👋 Hi, I'm Nisarg!
  
  A passionate Software Engineer & Cloud Specialist specializing in 
  building scalable architectures, cloud infrastructure on AWS, 
  and high-performance web applications.

  📍 Location: Ahmedabad, Bhavnagar & Remote
  💼 Status: Available for full-time & freelance roles
  🎯 Roles: Software Engineer / Cloud Engineer / Web Developer`,

    skills: `🛠️ Technical Skills:
  
  Cloud/DevOps: AWS ██████████░ 85%
                Docker █████████░ 80%
                CI/CD ██████████░ 82%
  
  Engineering:  Node.js ██████████░ 88%
                React.js ██████████ 90%
                PostgreSQL █████████░ 85%
  
  Architecture: Microservices ████████░ 78%
                System Design █████████░ 80%`,

    projects: `📁 Featured Projects:

  1. Disaster Management System
     → React + Node.js + PostgreSQL
  
  2. Expense Tracker
     → React + JavaScript + CSS

  3. FullStack E-Commerce Platform
     → React + Node.js + PostgreSQL + Stripe
  
  2. Enterprise ERP System  
     → React + Node.js + PostgreSQL + Docker
  
  3. AI Data Dashboard
     → React + Python + TensorFlow + D3.js
  
  4. Process Automation Suite
     → Node.js + Webhooks + REST APIs
  
  Type "live <number>" to open a project`,

    contact: `📬 Let's Connect!
  
  📧 Email:    nisargbhatt.n@gmail.com
  💼 LinkedIn: linkedin.com/in/nisarg
  🐙 GitHub:   github.com/nisargbhatt93
  
  Or use the contact form below ↓`,

    experience: `💼 Experience:
  
  2023 - Present  |  Software Engineer (Cloud & Full-Stack)
  2021 - 2023     |  Full-Stack Developer  
  2020 - 2021     |  Junior Web Developer
  
  📚 Education:
  B.Tech in Computer Engineering`,

    whoami: `> Nisarg
  
  A developer who turns coffee ☕ into 
  clean, scalable code 🚀
  
  Currently running on:
  • Node.js v20 
  • React 18
  • Caffeine: ████████░ 80%`,

    clear: '__CLEAR__',
}
