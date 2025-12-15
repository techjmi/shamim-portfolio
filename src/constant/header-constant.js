//this is the header constant file for this portfolio project
import {
  candidate_name,
  Navigation_Url,
  logoUrl,
  alt_text
} from './global-constant';

export const HEADER = {
  title: candidate_name,
  logoUrl: logoUrl,
  altText: `${alt_text}_logo`,
  navLinks: [
    { label: 'Home', href: Navigation_Url.HOME },
    { label: 'About', href: Navigation_Url.ABOUT },
    { label: 'Projects', href: Navigation_Url.PROJECTS },
    { label: 'Blog', href: Navigation_Url.BLOG },
    { label: 'Contact', href: Navigation_Url.CONTACT },
  ],
  cta: {
    label: 'Resume',
    href: '/resume.pdf',
  },
};

