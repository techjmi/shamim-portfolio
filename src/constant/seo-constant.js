import { main_url, logoUrl, site_type, site_author } from "./global-constant";
//default seo constant for this porftfolio project
export const default_seo_constant = {
    description: 'Md Shamim Akhter — Full Stack Developer from Bengaluru. I build fast, scalable web apps with React, Next.js, Node.js & MongoDB. Open to full-time roles and freelance projects.',
    keywords: [
        // Name & identity
        'Md Shamim Akhter', 'Shamim Akhter', 'Shamim Portfolio',
        // Role
        'Full Stack Developer', 'Full Stack Web Developer', 'MERN Stack Developer',
        'Frontend Developer', 'Backend Developer', 'Web Developer', 'Freelance Developer',
        // Tech stack
        'React Developer', 'Next.js Developer', 'Node.js Developer',
        'MongoDB Developer', 'JavaScript Developer', 'TypeScript Developer',
        'REST API Developer', 'Tailwind CSS Developer',
        // Location
        'Full Stack Developer Bengaluru', 'Web Developer India',
        // Portfolio
        'Developer Portfolio', 'Personal Portfolio', 'Portfolio Website',
    ],
    canonical: main_url,
    image: logoUrl,
    type: site_type,
    author: site_author,
}
