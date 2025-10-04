import React, { useState } from "react";
import { FaReact, FaNode, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";
import EcommerceImage from "../assets/Ecommerce-product-page.png";
import ShopMeImage from "../assets/shopme-preview.png";
import PortfolioImage from "../assets/portfolio.png";
import BlogSphereImage from "../assets/BlogSphereWithAI.png";
 import WanderLogImage from "../assets/WanderLogImage.png";
import "./Projects.css";

// Technology icons mapping
const techIcons = {
  "React.js": <FaReact className="tech-icon react" />,
  "Next.js": <SiNextdotjs className="tech-icon nextjs" />,
  "Node.js": <FaNode className="tech-icon nodejs" />,
  "MongoDB": <SiMongodb className="tech-icon mongodb" />,
  "Express.js": <SiExpress className="tech-icon express" />,
  "TailwindCSS": <SiTailwindcss className="tech-icon tailwind" />,
  "JavaScript": <SiJavascript className="tech-icon javascript" />
};

const projectsData = {
  "Next.js Projects": [
    {
      id: 5,
      title: "BlogSphere With AI",
      subtitle: "Advanced AI-Powered Storytelling Platform",
      description: "A comprehensive full-stack blogging platform featuring AI writing assistance, real-time engagement, and advanced analytics. Built with cutting-edge technologies for optimal performance and user experience.",
      category: "Full-Stack Application",
      status: "Production Ready",
      primaryTech: "Next.js 14",
      technologies: [
        "Next.js 14", "React 18", "MongoDB", "NextAuth.js", "TailwindCSS", 
        "Pusher", "Cloudinary", "TipTap Editor", "Redis", "Chart.js"
      ],
      features: [
        "🤖 AI Writing Assistant & Content Optimization",
        "🔐 Multi-Provider Authentication (Google, GitHub, Email)",
        "📝 Rich Text Editor with Advanced Features",
        "💬 Real-time Comments & Reactions System",
        "📊 Comprehensive Analytics Dashboard",
        "🔍 Advanced Search & Content Discovery",
        "📱 Fully Responsive Design",
        "⚡ SSR & Performance Optimization"
      ],
      highlights: [
        "AI-Enhanced Content Creation",
        "Real-time Social Features",
        "Advanced Analytics",
        "Production-Grade Security"
      ],
      image: BlogSphereImage,
      liveDemo: "https://ai-blog-platform-theta.vercel.app/",
      github: "https://github.com/mZeeshan-IQBAL/ai-blog-platform",
      complexity: "Advanced",
      duration: "3 Weeks"
    }
  ],
  "MERN Stack Projects": [
    {
      id: 1,
      title: "ShopMe E-Commerce",
      subtitle: "Complete Fashion E-Commerce Solution",
      description: "A full-featured e-commerce platform with modern UI, secure payment processing, inventory management, and comprehensive admin dashboard. Deployed on multiple cloud platforms.",
      category: "MERN (frontend & backend)",
      status: "Live & Deployed",
      primaryTech: "MERN Stack",
      technologies: [
        "React.js", "Node.js", "Express.js", "MongoDB Atlas", "TailwindCSS",
        "JWT", "Cloudinary", "Nodemailer", "Vercel", "Railway"
      ],
      features: [
        "🛒 Complete Shopping Cart & Checkout System",
        "👤 User Authentication & Profile Management",
        "🎛️ Advanced Admin Dashboard & Analytics",
        "💳 Secure Payment Integration",
        "📦 Order Management & Tracking",
        "📧 Email Notifications & Confirmations",
        "🖼️ Image Upload & Management",
        "📱 Mobile-First Responsive Design"
      ],
      highlights: [
        "Full E-Commerce Functionality",
        "Admin Panel with Analytics",
        "Cloud Integration",
        "Payment Processing"
      ],
      image: ShopMeImage,
      liveDemo: "https://shopme-frontend-zeta.vercel.app/",
      github: "https://github.com/mZeeshan-IQBAL/shopme",
      complexity: "Advanced",
      duration: "2 Weeks"
    },
    {
      id: 2,
      title: "WanderLog",
      subtitle: "Intelligent Trip Planning & Collaboration Platform",
      description: "A comprehensive full-stack travel planning application featuring AI-powered itinerary generation, real-time collaboration, interactive maps, and extensive travel data integration. Built with modern technologies for optimal user experience and scalability.",
      category: "MERN (Full-Stack)",
      status: "Live & Deployed",
      primaryTech: "MERN Stack",
      technologies: [
        "React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO",
        "TailwindCSS", "OpenRouter AI", "JWT", "Cloudinary", "Axios",
        "React Leaflet", "Recharts", "OpenWeather API", "Amadeus API",
        "Unsplash API", "React Router", "Helmet", "Multer", "PDFKit"
      ],
      features: [
        "🤖 AI-Powered Itinerary Generation with Claude 3.5",
        "🗺️ Interactive Maps with Real-time Location Services",
        "⚡ Real-time Collaboration with Socket.IO",
        "🔐 Multi-Provider Authentication (JWT, Google, Facebook)",
        "🌤️ Live Weather Integration & Forecasts",
        "📸 Image Upload & Management with Cloudinary",
        "📊 Advanced Trip Analytics & Visualizations",
        "💰 Budget Tracking & Expense Management",
        "📱 Fully Responsive Mobile-First Design",
        "🔍 Smart Search with AI-Enhanced Suggestions",
        "📄 PDF Export & Trip Documentation",
        "🏨 Hotel & Flight Data Integration",
        "👥 Trip Sharing & Collaborative Planning",
        "📧 Email Notifications & Confirmations"
      ],
      highlights: [
        "AI-Enhanced Trip Planning",
        "Real-time Collaboration",
        "Interactive Map Integration",
        "Multi-API Travel Data"
      ],
      image: WanderLogImage,
      liveDemo: "https://travel-planner-client-iota.vercel.app/",
      github: "https://github.com/mZeeshan-IQBAL/TravelPlanner-Client",
      serverDemo: "https://travel-planner-server-woad.vercel.app/",
      complexity: "Advanced",
      duration: "4 Weeks"
    }
  ],
  "React.js Projects": [
    {
      id: 3,
      title: "Personal Portfolio",
      subtitle: "Modern React Portfolio Website",
      description: "A sleek, responsive portfolio website showcasing my projects, skills, and experience. Features smooth animations, dark mode, and optimized performance.",
      category: "Frontend with React",
      status: "Live",
      primaryTech: "React.js",
      technologies: [
        "React.js", "JavaScript", "CSS3", "FontAwesome", "React Router", "React Hooks"
      ],
      features: [
        "🌓 Dark/Light Theme Toggle",
        "📱 Fully Responsive Design",
        "🎨 Smooth Animations & Transitions",
        "📜 Certificate Showcase",
        "🚀 Optimized Performance",
        "📧 Contact Form Integration",
        "🔗 Social Media Links",
        "💼 Project Gallery"
      ],
      highlights: [
        "Modern UI/UX Design",
        "Performance Optimized",
        "Interactive Elements",
        "Mobile-First Approach"
      ],
      image: PortfolioImage,
      liveDemo: "http://localhost:5173/zeeshan-react-portfolio/",
      github: "https://github.com/mZeeshan-IQBAL/zeeshan-react-portfolio",
      complexity: "Beginner",
      duration: "2 weeks"
    },
    {
      id: 4,
      title: "E-Commerce Product Page",
      subtitle: "Interactive Product Showcase",
      description: "A modern product detail page with image gallery, interactive features, and smooth user experience. Built with React and styled with Tailwind CSS.",
      category: "React Frontend",
      status: "Live Demo",
      primaryTech: "React.js",
      technologies: [
        "React.js", "TailwindCSS", "React-Icons", "React-Slick", "JavaScript"
      ],
      features: [
        "🖼️ Interactive Image Gallery",
        "🛒 Add to Cart Functionality",
        "📱 Mobile-First Design",
        "✨ Hover Effects & Animations",
        "🎨 Modern UI Components",
        "⚡ Fast Loading & Performance",
        "🔄 Image Carousel",
        "💫 Smooth Transitions"
      ],
      highlights: [
        "Interactive UI Elements",
        "Responsive Gallery",
        "Modern Design",
        "Performance Focused"
      ],
      image: EcommerceImage,
      liveDemo: "https://mzeeshan-iqbal.github.io/Ecommerce-product-page/",
      github: "https://github.com/mZeeshan-IQBAL/Ecommerce-product-page",
      complexity: "Intermediate",
      duration: "1 week"
    }
  ]
};

const ComplexityBadge = ({ complexity }) => {
  const colors = {
    "Beginner": "complexity-beginner",
    "Intermediate": "complexity-intermediate", 
    "Advanced": "complexity-advanced"
  };
  return <span className={`complexity-badge ${colors[complexity]}`}>{complexity}</span>;
};

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    if (status.includes("Production")) return "status-production";
    if (status.includes("Live")) return "status-live";
    return "status-demo";
  };
  return <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>;
};

const TechStack = ({ technologies, primaryTech }) => (
  <div className="tech-stack">
    <div className="primary-tech">
      {techIcons[primaryTech] || <FaCode />}
      <span className="primary-tech-name">{primaryTech}</span>
    </div>
    <div className="tech-list">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">
          {techIcons[tech] || null}
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card modern">
      <div className="project-header">
        <div className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-overlay">
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="demo-link">
                <FaExternalLinkAlt /> Live Demo
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                  <FaGithub /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-info">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <div className="project-badges">
              <StatusBadge status={project.status} />
              <ComplexityBadge complexity={project.complexity} />
            </div>
          </div>
          
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          
          <div className="project-stats">
            <span className="project-duration">⏱️ {project.duration}</span>
          </div>
        </div>
      </div>

      <TechStack technologies={project.technologies} primaryTech={project.primaryTech} />
      
      <div className="project-highlights">
        <h4>🚀 Key Highlights</h4>
        <div className="highlights-grid">
          {project.highlights.map((highlight, index) => (
            <span key={index} className="highlight-tag">{highlight}</span>
          ))}
        </div>
      </div>

      <div className="project-features">
        <button 
          className="features-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '🔼 Hide Features' : '🔽 Show Features'} ({project.features.length})
        </button>
        
        {isExpanded && (
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item">{feature}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const categories = ["All Projects", ...Object.keys(projectsData)];
  
  const getFilteredProjects = () => {
    if (activeCategory === "All Projects") {
      return Object.values(projectsData).flat();
    }
    return projectsData[activeCategory] || [];
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaCode className="section-icon" />
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Showcasing my expertise across different technology stacks and project complexities
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category === "Next.js Projects" && <SiNextdotjs />}
              {category === "MERN Stack Projects" && <FaNode />}
              {category === "React.js Projects" && <FaReact />}
              {category === "All Projects" && <FaCode />}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
