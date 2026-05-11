import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { buildSeo, default_json_ld } from "@/utils/seo";
import { default_seo_constant } from "@/constant/seo-constant";
import {
  alt_text,
  candidate_name,
  candidate_title,
  Canonical_Url,
  logoUrl,
  site_author,
  site_github_handle,
  site_image,
  site_linkedin_handle,
  site_name,
  site_twitter_handle,
} from "@/constant/global-constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rootSeo = buildSeo({
  title: site_name,
  description: default_seo_constant.description,
  keywords: default_seo_constant.keywords,
  canonical: Canonical_Url.HOME,
  image: logoUrl,
  type: default_seo_constant.type,
  author: site_author,
});

export const metadata = {
  ...rootSeo,
  title: {
    default: rootSeo.title,
    template: `%s | ${candidate_name}`,
  },
  applicationName: alt_text,
  authors: [{ name: site_author }],
  creator: site_author,
  publisher: site_author,
  category: "portfolio",
  classification: candidate_title,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: site_image,
    apple: site_image,
    shortcut: site_image,
  },
  openGraph: {
    ...rootSeo.openGraph,
    locale: "en_US",
  },
  twitter: {
    ...rootSeo.twitter,
    creator: site_twitter_handle,
  },
  other: {
    "profile:first_name": candidate_name.split(" ")[1] || candidate_name,
    "profile:last_name": candidate_name.split(" ").slice(2).join(" "),
    "same-as": [site_linkedin_handle, site_github_handle, site_twitter_handle].join(", "),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(default_json_ld) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* {children} */}
      </body>
    </html>
  );
}
