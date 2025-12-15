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
  site_facebook_handle,
  Navigation_Url,
  logo_url,
} from './global-constant';

export const FOOTER = {
  brand: {
    name: candidate_name,
    logoUrl: logo_url,
    tagline: `${candidate_title} | Building amazing web experiences`,
  },
  description: 'Passionate about creating scalable, user-friendly applications with modern technologies.',
  sections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: Navigation_Url.HOME },
        { label: 'About', href: Navigation_Url.ABOUT },
        { label: 'Projects', href: Navigation_Url.PROJECTS },
        { label: 'Blog', href: Navigation_Url.BLOG },
        { label: 'Contact', href: Navigation_Url.CONTACT },
      ],
    },
    {
      title: 'Sections',
      links: [
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
  ],
  contact: {
    email: candidate_email,
    location: candidate_location,
  },
  socials: [
    { key: 'github', href: site_github_handle, label: 'GitHub' },
    { key: 'linkedin', href: site_linkedin_handle, label: 'LinkedIn' },
    { key: 'facebook', href: site_facebook_handle, label: 'Facebook' },
    { key: 'instagram', href: site_instagram_handle, label: 'Instagram' },
    { key: 'twitter', href: site_twitter_handle, label: 'Twitter' },
  ],
  copyright: `© ${new Date().getFullYear()} ${candidate_name}. All rights reserved.`,
  builtWith: 'Built with Next.js & Tailwind CSS',
};

