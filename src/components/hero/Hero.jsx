"use client";
import { motion } from "framer-motion";
import { Icon, ICONS } from "@/icons";
import {
  hero_heading,
  hero_role,
  hero_intro,
  hero_socials,
  hero_image,
  hero_image_alt,
} from "@/constant/hero-constant";
import "./hero.scss";
import { FOOTER } from "@/constant/footer-constant";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-heading">
            {hero_heading} <span className="wave">👋</span>
          </h1>

          <p className="hero-description">{hero_intro}</p>

          {/* Social Links */}
          {/* <div className="hero-socials">
            {FOOTER.socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                 className="hero-socials"
              >
                {ICONS[social.key]}
              </a>
            ))}
          </div> */}
        </motion.div>

        {/* Right Image with Glassmorphism */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero_image} alt={hero_image_alt} className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
