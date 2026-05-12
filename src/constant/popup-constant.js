// This is the popup constant file for advertisement or promotional content
import { temp_image } from "./global-constant";

// Main popup configuration
export const popup_config = {
  enabled: true, 
  autoClose: true, 
  autoCloseTime: 3000, 
};

// InterviewOrbit website promotion
export const interview_orbit_popup = {
  title: "Ace Your Next Interview!",
  description: "Prepare for your dream job with InterviewOrbit - your complete interview preparation platform with practice questions, coding challenges, and expert tips.",
  cta: "Visit InterviewOrbit",
  ctaLink: "https://intervieworbit.site/",
  image: temp_image, 
};

// Blog promotion
export const blog_popup = {
  title: "Check Out My Latest Blog!",
  description: "Explore insightful articles on web development, coding best practices, and tech trends. Stay updated with the latest in the tech world.",
  cta: "Read Blog",
  ctaLink: "https://intervieworbit.site/",
  image: temp_image, 
};

// Projects promotion
export const projects_popup = {
  title: "Explore My Projects",
  description: "Check out my latest web development projects built with modern technologies like React, Next.js, Node.js, and more.",
  cta: "View Projects",
  ctaLink: "https://intervieworbit.site/projects",
  image: temp_image,
};

// Custom popup - you can add more as needed
export const custom_popup = {
  title: "Welcome! 👋",
  description: "Thanks for visiting my portfolio. Feel free to explore my work and get in touch if you'd like to collaborate!",
  cta: "Get in Touch",
  ctaLink: "/contact",
  image: null, 
};

// Active popup - Change this to switch between different popups
export const active_popup = interview_orbit_popup;
