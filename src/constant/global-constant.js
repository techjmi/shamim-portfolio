//this is the global constant file for this porftfolio project
//temporary image url
export const temp_image='https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg'

export const main_url = 'https://shamimportfolio.vercel.app';
export const local_url = 'http://localhost:3000';
export const logoUrl = '/assets/profile/portfolio_pic.jpeg';
export const logo_url = logoUrl;
export const user_image='user.png';
export const alt_text = 'Shamim Portfolio';

export const site_type = 'website';
export const site_image = logoUrl;
export const site_author = 'Md Shamim Akhter';
export const site_author_url = 'https://shamimportfolio.vercel.app';
export const site_publisher = 'Shamim Portfolio';

export const site_name = 'Shamim Portfolio | Md Shamim Akhter | Full Stack Developer';
export const candidate_name = 'Md Shamim Akhter';
export const candidate_title = 'Full Stack Developer';
export const candidate_email = 'contactshamim62@gmail.com';
export const candidate_phone = '+91 8287089705';
export const candidate_location = 'Bengaluru, India';

//social handles
export const site_linkedin_handle = 'https://www.linkedin.com/in/md-shamim-akhter-b12624193';
export const site_github_handle = 'https://github.com/techjmi';
export const site_twitter_handle = 'https://twitter.com/saltech23';
export const site_instagram_handle = 'https://www.instagram.com/mernvibes/';
export const site_facebook_handle = 'https://www.facebook.com/profile.php?id=100047398065321';

//routes
export const Navigation_Url = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: 'https://intervieworbit.site/projects',
  BLOG: 'https://intervieworbit.site/',
  CONTACT: '/contact',
};
//some more usefull constant
export const empty_string = '';
export const empty_array = [];

//canonical url constant
export const Canonical_Url = Object.fromEntries(
  Object.entries(Navigation_Url).map(([key, path]) => [key, main_url + path])
);



