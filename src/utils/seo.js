//this is seo utility file for this porftfolio project
import {  site_name, site_image, site_author, site_author_url, site_publisher, site_type, main_url,  Canonical_Url, logoUrl } from "../constant/global-constant";
import { default_seo_constant } from "../constant/seo-constant";
export const DEFAULT_SEO = {
  title: site_name,
  description: default_seo_constant.description,
  metadataBase: new URL(main_url),
  keywords: default_seo_constant.keywords,
  openGraph: {
    title: site_name,
    description: default_seo_constant.description,
    type: site_type,
    url: main_url,
    images: [{ url: logoUrl, width: 1200, height: 630, alt: site_name }],
    siteName: site_name,
  },
  twitter: {
    card: 'summary_large_image',
    title: site_name,
    description: default_seo_constant.description,
    images: [logoUrl],
    creator: site_author,
  },
  alternates: { canonical: Canonical_Url.HOME },
  robots: { index: true, follow: true },
};
//build seo function for each page/route
export const buildSeo = ({ title, description, keywords = [], canonical = Canonical_Url.HOME, image, type = 'website', author = site_author,
  article = {}, // { publishedTime, modifiedTime, authors, tags }
}) => {  
  const mergedKeywords = Array.from(new Set([...(DEFAULT_SEO.keywords || []), ...keywords]));
  const canonicalUrl = new URL(canonical, DEFAULT_SEO.metadataBase).toString();
  const ogImages = [{ url: image || logoUrl, width: 1200, height: 630, alt: title }];

  const ogArticle = {
    ...(article || {}),
    authors: article?.authors || [author],
    publishedTime: article?.publishedTime,
    modifiedTime: article?.modifiedTime || article?.publishedTime,
    tags: article?.tags,
  };

  return {
    ...DEFAULT_SEO,
    keywords: mergedKeywords,
    title,
    description,
    article,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title,
      description,
      type,
      url: canonicalUrl,
      images: ogImages,
      article: type === 'article' ? ogArticle : undefined,
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      title,
      description,
      images: [image || logoUrl],
    },
    alternates: { canonical },
    robots: { index: true, follow: true },
  };
};
//json ld for the website
//default json ld for the website
export const default_json_ld = {
  "@context": "https://schema.org",
  "@type": site_type,
  "name": site_name,
  "url": main_url,
  "description": default_seo_constant.description,
  "image": logoUrl,
  "author": {
    "@type": "Person",
    "name": site_author,
    "url": site_author_url
  },
  "publisher": {
    "@type": "Organization",
    "name": site_publisher,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl
    }
  }
}
//build json ld for each page/route
export const buildJsonLd = ({ title, description, image, type = site_type, author = site_author,
  article = {},
}) => {  
  const jsonLd = {
    ...default_json_ld,
    name: title,
    description,
    image: image || logoUrl,
    author: {
      "@type": "Person",
      "name": author,
      "url": site_author_url
    },
    publisher: {
      "@type": "Organization",
      "name": site_publisher,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    }
  };
  return jsonLd;
};

