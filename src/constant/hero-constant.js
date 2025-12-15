// central constants for Hero section
import {
  candidate_name,
  candidate_title,
  candidate_location,
  candidate_email,
  site_github_handle,
  site_linkedin_handle,
} from "./global-constant";
import { home_description } from "./home-constant";
import { about_resume } from "./about-constant";

export const hero_heading = `Hello I'm ${candidate_name} ,`;
export const hero_role = candidate_title;
export const hero_location = candidate_location;
export const hero_intro = home_description;
export const hero_image = "/assets/hero/avatar.svg"; // placeholder, replace with your photo later
export const hero_image_alt = `${candidate_name} portrait`;

export const hero_socials = [
  { type: "linkedin", href: site_linkedin_handle, label: "LinkedIn" },
  { type: "github", href: site_github_handle, label: "GitHub" },
  { type: "twitter", href: "https://twitter.com/shamim", label: "Twitter" },
];

