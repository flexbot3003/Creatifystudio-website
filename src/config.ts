// Site Configuration
// Design Agency - Teal & White Theme

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Nexus Design Studio | Creative Design Agency",
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
  heroImage: "/hero-designer.png",
  heroImageAlt: "Creative designer with tablet",
  overlayText: "Crafted by Nexus Studio",
  brandName: "NEXUS",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
  accentText: "Selected Works - 2024",
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
  viewAllHref: "#work",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "Lumina Tech Rebrand",
      category: "Brand Identity",
      year: "2024",
      image: "/project-1.jpg",
      description: "Complete brand transformation for a leading SaaS company, including logo redesign, visual identity system, and brand guidelines.",
    },
    {
      id: 2,
      title: "Artisan Coffee Co.",
      category: "Packaging Design",
      year: "2024",
      image: "/project-2.jpg",
      description: "Premium packaging design for specialty coffee brand, blending artisanal craftsmanship with modern aesthetics.",
    },
    {
      id: 3,
      title: "Nova Finance App",
      category: "UI/UX Design",
      year: "2023",
      image: "/project-3.jpg",
      description: "Intuitive mobile banking experience designed to simplify financial management for the next generation.",
    },
    {
      id: 4,
      title: "Elevate Wellness",
      category: "Web Design",
      year: "2023",
      image: "/project-4.jpg",
      description: "Holistic wellness platform website featuring immersive visuals and seamless user journey.",
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
  titleRegular: "The Nexus",
  titleItalic: "Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 45, suffix: "+", label: "Awards Won" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Creative team collaboration",
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring every design decision aligns with your vision and goals.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Design process",
      title: "Strategic Thinking",
      description: "Every pixel serves a purpose. Our designs are backed by research, strategy, and a deep understanding of your audience.",
    },
  ],
  wideImage: "/feature-wide.jpg",
  wideImageAlt: "Our design studio workspace",
  wideTitle: "Where Creativity Meets Strategy",
  wideDescription: "Our studio is a hub of innovation where talented designers, strategists, and technologists come together to create extraordinary work.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What They",
  titleItalic: "Say About Us",
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, Lumina Tech",
      image: "/testimonial-1.jpg",
      quote: "Nexus Studio transformed our brand completely. Their attention to detail and creative vision exceeded all our expectations. The rebrand increased our market recognition by 200%.",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Founder, Artisan Coffee",
      image: "/testimonial-2.jpg",
      quote: "Working with Nexus was an absolute pleasure. They understood our brand essence and created packaging that truly stands out on the shelves. Sales increased by 45% after the rebrand.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "CMO, Nova Finance",
      image: "/testimonial-3.jpg",
      quote: "The UI/UX design Nexus delivered for our app was phenomenal. User engagement increased by 80% and our app store ratings jumped to 4.8 stars. Highly recommended!",
    },
    {
      id: 4,
      name: "David Park",
      role: "Director, Elevate Wellness",
      image: "/testimonial-4.jpg",
      quote: "Nexus Studio doesn't just design—they craft experiences. Our website has become a powerful conversion tool, with bookings up 120% since launch.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked Questions",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "What services does Nexus Studio offer?",
      answer: "We offer comprehensive design services including brand identity, web design, UI/UX design, packaging design, and digital marketing assets. Each project is tailored to meet your specific needs and goals.",
    },
    {
      id: "faq-2",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A brand identity project typically takes 4-8 weeks, while website design can range from 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      id: "faq-3",
      question: "What is your design process?",
      answer: "Our process includes discovery and research, strategy development, concept creation, design refinement, and final delivery. We maintain close communication throughout, ensuring the final result aligns perfectly with your vision.",
    },
    {
      id: "faq-4",
      question: "Do you work with clients internationally?",
      answer: "Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration, using tools like Figma, Slack, and video conferencing to ensure seamless communication across time zones.",
    },
    {
      id: "faq-5",
      question: "What are your pricing structures?",
      answer: "We offer both project-based and retainer pricing models. Each project is quoted individually based on scope, complexity, and timeline. Contact us for a free consultation and customized quote.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "NEXUS",
  contactLabel: "Get in Touch",
  email: "hello@nexusstudio.com",
  locationText: "123 Creative Avenue\nSan Francisco, CA 94102",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hello@nexusstudio.com", label: "Email" },
  ],
  tagline: "Creating exceptional designs\nthat inspire and convert",
  copyright: "© 2024 Nexus Design Studio. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
