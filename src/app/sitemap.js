import { main_url } from '@/constant/global-constant';

export default function sitemap() {
  // Single page portfolio - only home page exists
  // All sections (Hero, Skills, Experience, Projects, Testimonials) are on the same page
  return [
    {
      url: `${main_url}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
