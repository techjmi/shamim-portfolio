// central constants for Hero section
import {
  candidate_name,
  candidate_title,
  candidate_location,
  candidate_email,
  site_github_handle,
  site_linkedin_handle,
  logoUrl,
} from "./global-constant";
import { home_description } from "./home-constant";
import { about_resume } from "./about-constant";

export const hero_heading = `Hi, I'm ${candidate_name}`;
export const hero_role = candidate_title;
export const hero_location = candidate_location;
// export const hero_intro = `I build **production-grade** web applications from the ground up — pixel-perfect frontends with **React & Next.js** and scalable, high-performance backends with **Node.js & MongoDB**. I care deeply about clean architecture, great UX, and shipping things that last.`;
export const hero_intro = `I build **full-stack web applications** that are fast, scalable, and built to last. With a strong foundation in **React & Next.js**, I craft responsive, accessible frontends that feel smooth and look sharp on every device. Behind the scenes, I design reliable, high-performance backends powered by **Node.js & MongoDB** — architected for real-world load and long-term maintainability. I'm driven by clean code, thoughtful architecture, and the belief that every detail matters — from how an API is structured to how a button animates. Whether you're building from scratch or scaling what you have, I bring full ownership across the entire stack.`;
export const hero_stack = [
  'JavaScript', 'TypeScript',
  'React', 'Next.js',
  'Node.js', 'MongoDB', 'REST APIs',
  'Git & GitHub', 'Jira', 'SDLC',
];
export const hero_image = logoUrl
export const hero_image_alt = `${candidate_name} portrait`;

export const hero_socials = [
  { type: "linkedin", href: site_linkedin_handle, label: "LinkedIn" },
  { type: "github", href: site_github_handle, label: "GitHub" },
  { type: "twitter", href: "site_twitter_handle", label: "Twitter" },
];

export const BASIC_DETAILS = {
  site_name: candidate_name,
  site_description_long: home_description,
};

