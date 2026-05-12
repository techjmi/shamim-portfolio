import { main_url } from '@/constant/global-constant';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${main_url}/sitemap.xml`,
  };
}
