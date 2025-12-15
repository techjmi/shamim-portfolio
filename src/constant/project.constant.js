//this is the project constant file for this porftfolio project
import { Canonical_Url, site_type, site_author, site_publisher, main_url, logoUrl, site_author_url} from "./global-constant";
export const project_title = 'Projects';
export const project_description = 'I am a Full Stack Developer with 2 years of experience in building scalable and maintainable web applications. I have worked with a variety of technologies including React, Next.js, Node.js, MongoDB, and more. I am also a big fan of open source and have contributed to a number of projects on GitHub.';
//list of project constant
export const project_list = [
  {
    title: 'Project 1',
    description: 'This is the description of project 1',
    image: '/project1.png',
    github_link: 'https://github.com/techjmi',
    live_link: 'https://github.com/techjmi',
  },
  {
    title: 'Project 2',
    description: 'This is the description of project 2',
    image: '/project2.png',
    github_link: 'https://github.com/techjmi',
    live_link: 'https://github.com/techjmi',
  },
  {
    title: 'Project 3',
    description: 'This is the description of project 3',
    image: '/project3.png',
    github_link: 'https://github.com/techjmi',
    live_link: 'https://github.com/techjmi',
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