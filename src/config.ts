// Site Configuration
// Design Agency - Teal & White Theme

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Creatify Design Studio | Creative Design Agency",
  siteDescription: "Premium design agency specializing in brand identity, web design, and digital experiences. We transform visions into stunning visual realities.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "CREATE",
  heroImage: "", 
  heroImageAlt: "Creative designer",
  overlayText: "Website by Creatify",
  brandName: "CREATIFY",
  navLinks: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Design That",
  titleLine2: "Speaks Volumes",
  description: "We are a collective of passionate designers, strategists, and creators dedicated to crafting exceptional brand experiences. From startups to enterprises, we partner with visionary clients to create designs that captivate, communicate, and convert.",
  portfolioImages: [
    { src: "/portfolio-1.jpg", alt: "Brand identity project" },
    { src: "/portfolio-2.jpg", alt: "Web design showcase" },
    { src: "/portfolio-3.jpg", alt: "Digital marketing design" },
    { src: "/portfolio-4.jpg", alt: "UI/UX design project" },
    { src: "/portfolio-5.jpg", alt: "Creative packaging design" },
  ],
  accentText: "", 
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "Selected",
  titleItalic: "Projects",
  viewAllText: "View All Projects",
  viewAllHref: "/work",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "Lumin Dental",
      category: "Brand Identity & Graphics",
      year: "2026",
      image: "/project-1.jpg",
      description: "Brand reveal concepts and promotional materials tailored for a modern dental clinic.",
    },
    {
      id: 2,
      title: "Laomai Dental",
      category: "Print & Digital Layout",
      year: "2026",
      image: "/project-2.jpg",
      description: "Custom flyers, posters, and clinic branding to elevate the patient experience and aesthetic.",
    },
    {
      id: 3,
      title: "Creatify Collective",
      category: "Web Design",
      year: "2026",
      image: "/project-3.jpg",
      description: "The flagship digital home for our own freelance design collective, featuring seamless motion and UX.",
    },
    {
      id: 4,
      title: "Elevate Wellness",
      category: "Web Design",
      year: "2024",
      image: "/project-4.jpg",
      description: "Holistic wellness platform website featuring immersive visuals and seamless user journey.",
    },
    {
      id: 5,
      title: "Lumina Tech Rebrand",
      category: "Brand Identity",
      year: "2024",
      image: "/project-1.jpg",
      description: "Complete brand transformation for a leading SaaS company, including visual identity and guidelines.",
    },
    {
      id: 6,
      title: "Artisan Coffee Co.",
      category: "Packaging Design",
      year: "2024",
      image: "/project-2.jpg",
      description: "Premium packaging design for specialty coffee brand, blending artisanal craftsmanship with modern aesthetics.",
    },
    {
      id: 7,
      title: "Nova Finance App",
      category: "UI/UX Design",
      year: "2023",
      image: "/project-3.jpg",
      description: "Intuitive mobile banking experience designed to simplify financial management for the next generation.",
    },
    {
      id: 8,
      title: "Urban Echo",
      category: "Motion Design",
      year: "2025",
      image: "/project-4.jpg",
      description: "Dynamic motion graphics and social media campaign for an urban lifestyle brand.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What We Offer",
  titleLine1: "Services Built for",
  titleLine2Italic: "Your Success",
  description: "From concept to completion, we offer comprehensive design solutions tailored to elevate your brand and drive measurable results.",
  services: [
    {
      iconName: "Sparkles",
      title: "Brand Identity",
      description: "Strategic brand development including logo design, visual systems, and comprehensive brand guidelines.",
    },
    {
      iconName: "Diamond",
      title: "Web Design",
      description: "Stunning, responsive websites that combine beautiful aesthetics with exceptional user experience.",
    },
    {
      iconName: "Users",
      title: "UI/UX Design",
      description: "User-centered interface design that creates intuitive, engaging digital experiences across all platforms.",
    },
    {
      iconName: "Camera",
      title: "Digital Marketing",
      description: "Creative assets and campaigns that capture attention and drive engagement across digital channels.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Choose Us",
  titleRegular: "Creatify",
  titleItalic: "The Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 83, suffix: "%", label: "Client Satisfaction" },
