//this is the footer constant file for this portfolio project
import {
  candidate_name,
  candidate_title,
  candidate_email,
  candidate_location,
  site_linkedin_handle,
  site_github_handle,
  site_twitter_handle,
  site_instagram_handle,
  Navigation_Url,
} from './global-constant';

export const footer_name = candidate_name;
export const footer_tagline = `${candidate_title} | Building amazing web experiences`;
export const footer_description = 'Passionate about creating scalable, user-friendly applications with modern technologies.';

export const footer_quick_links = [
  { label: 'Home', href: Navigation_Url.HOME },
  { label: 'About', href: Navigation_Url.ABOUT },
  { label: 'Projects', href: Navigation_Url.PROJECTS },
  { label: 'Blog', href: Navigation_Url.BLOG },
  { label: 'Contact', href: Navigation_Url.CONTACT },
];

export const footer_sections_links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const footer_social_links = [
  { label: 'LinkedIn', href: site_linkedin_handle, icon: 'linkedin' },
  { label: 'GitHub', href: site_github_handle, icon: 'github' },
  { label: 'Twitter', href: site_twitter_handle, icon: 'twitter' },
  { label: 'Instagram', href: site_instagram_handle, icon: 'instagram' },
];

export const footer_contact_info = {
  email: candidate_email,
  location: candidate_location,
};

export const footer_copyright = `© ${new Date().getFullYear()} ${candidate_name}. All rights reserved.`;
export const footer_built_with = 'Built with Next.js & Tailwind CSS';

