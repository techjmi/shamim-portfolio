"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../ui/ParticlesBackground";
import {
  hero_heading,
  hero_role,
  hero_location,
  hero_intro,
  hero_cta_primary,
  hero_cta_secondary,
  hero_cta_resume,
  hero_socials,
  hero_image,
  hero_image_alt,
} from "../../constant/hero-constant";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowRightIcon,
  DownloadIcon,
} from "../../icons";

const socialIcon = (type) => {
  switch (type) {
    case "github":
      return GithubIcon;
    case "linkedin":
      return LinkedinIcon;
    case "email":
      return MailIcon;
    default:
      return null;
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* <ParticlesBackground /> */}
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 px-6 py-8 shadow-lg ring-1 ring-white/10 backdrop-blur-xl dark:bg-white/5 md:px-10 md:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-slate-500 dark:text-slate-400"
        >
          {hero_location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-2 text-4xl font-bold tracking-tight md:text-6xl"
        >
          <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            {hero_heading}
          </span>
          <span className="block text-slate-900 dark:text-slate-100 mt-1">{hero_role}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg"
        >
          {hero_intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href={hero_cta_primary.href}
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-white shadow hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            {hero_cta_primary.label}
            <ArrowRightIcon size={18} />
          </Link>
          <Link
            href={hero_cta_secondary.href}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            {hero_cta_secondary.label}
          </Link>
          <Link
            href={hero_cta_resume.href}
            className="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-2 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            <DownloadIcon size={18} /> {hero_cta_resume.label}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center gap-5"
        >
          {hero_socials.map(({ type, href, label }) => {
            const Icon = socialIcon(type);
            if (!Icon) return null;
            return (
              <a
                key={type}
                href={href}
                aria-label={label}
                target={type === "email" ? undefined : "_blank"}
                rel={type === "email" ? undefined : "noreferrer"}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </motion.div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/10 bg-white/10 backdrop-blur-sm shadow-xl">
                <Image
                  src={hero_image}
                  alt={hero_image_alt}
                  width={420}
                  height={420}
                  className="h-64 w-64 md:h-80 md:w-80 object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
