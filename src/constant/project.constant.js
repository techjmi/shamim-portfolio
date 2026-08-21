//this is the project constant file for this porftfolio project
import { Canonical_Url, site_type, site_author, site_publisher, main_url, logoUrl, site_author_url} from "./global-constant";
export const project_title = 'Featured Projects';
export const project_description = 'A selection of things I\'ve shipped — production platforms, full-stack apps, and side experiments. Real code, real users.';

export const project_list = [
  {
    title: 'InterviewOrbit',
    description: 'A full-stack career platform with curated interview prep, a job tracker, and placement support. Built to help developers land their first role faster.',
    image: '/project1.png',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github_link: 'https://github.com/techjmi',
    live_link: 'https://intervieworbit.site',
  },
  {
    title: 'Dev Portfolio',
    description: 'This portfolio — animated shader backgrounds, smooth motion transitions, dark-first design, and fully responsive across all devices.',
    image: '/project2.png',
    tech: ['Next.js', 'React', 'SCSS', 'Framer Motion'],
    github_link: 'https://github.com/techjmi',
    live_link: 'https://shamim-akhter-tawny.vercel.app',
  },
  {
    title: 'E-Commerce REST API',
    description: 'A scalable backend API with JWT authentication, product & inventory management, cart, order processing, and Stripe payment integration.',
    image: '/project3.png',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github_link: 'https://github.com/techjmi',
    live_link: null,
  },
];
//project seo constant
export const project_seo_constant = {
  title: 'Projects - Shamim Portfolio',
  description:project_description,
  keywords: ['Shamim Portfolio', 'Md Shamim Akhter', 'Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Node.js Developer', 'MongoDB Developer', 'MERN Stack Developer', 'MEAN Stack Developer', 'JavaScript Developer', 'TypeScript Developer', 'HTML Developer', 'CSS Developer', 'SCSS Developer', 'Tailwind CSS Developer', 'Bootstrap Developer', 'Responsive Web Design',
  'Portfolio Website', 'Personal Portfolio', 'Developer Portfolio', 'Freelance Developer', 'Open Source Contributor', 'Tech Blogger', 'Coding Enthusiast'],
  canonical: Canonical_Url.PROJECT,
  image: Math.random() > 0.5 ? project_list[0].image : project_list[1].image,
  type: site_type,
  author: site_author,
}
//project json ld constant
export const project_json_ld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": project_seo_constant.title,
  "description": project_seo_constant.description,
  "url": Canonical_Url.PROJECT,
  "image": project_seo_constant.image,
  "author": {
    "@type": "Person",
    "name": site_author,
    "url": site_author_url
  },
  "publisher": {
    "@type": "Organization",
    "name": site_publisher,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl
    }
  }
}