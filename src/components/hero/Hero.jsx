"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ICONS } from "@/icons";
import {
  hero_heading,
  hero_role,
  hero_intro,
  hero_image,
  hero_image_alt,
  hero_location,
  hero_stack,
} from "@/constant/hero-constant";
import "./hero.scss";
import { FOOTER } from "@/constant/footer-constant";
import { parseHighlightedText } from "@/utils/textParser";
import {
  Shader,
  SolidColor,
  Surface3D,
  DotGrid,
  Prism,
  LinearGradient,
} from "shaders/react";
import Button from "@/components/ui/Button";
import { Badge, Icon } from "tektokit"

// const TECH_COLORS = {
//   "JavaScript":  "!bg-yellow-500/20 !text-yellow-300 !border-yellow-500/35",
//   "TypeScript":  "!bg-blue-500/20 !text-blue-300 !border-blue-500/35",
//   "React":       "!bg-cyan-500/20 !text-cyan-300 !border-cyan-500/35",
//   "Next.js":     "!bg-white/10 !text-white/80 !border-white/25",
//   "Node.js":     "!bg-green-500/20 !text-green-300 !border-green-500/35",
//   "MongoDB":     "!bg-emerald-500/20 !text-emerald-300 !border-emerald-500/35",
//   "REST APIs":   "!bg-violet-500/20 !text-violet-300 !border-violet-500/35",
//   "Git & GitHub":"!bg-orange-500/20 !text-orange-300 !border-orange-500/35",
//   "Jira":        "!bg-blue-600/20 !text-blue-300 !border-blue-600/35",
//   "SDLC":        "!bg-rose-500/20 !text-rose-300 !border-rose-500/35",
// };

export default function Hero() {
  const router = useRouter();

  return (
    <main className="relative isolation-isolate min-h-dvh overflow-hidden bg-[#080808] text-white antialiased">
      {/* Shader background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Shader toneMapping="aces" className="w-full h-full block">
          <SolidColor color="#080808" />
          <Surface3D
            amplitude={0.31}
            cursorIntensity={0.83}
            edgePinning={0.4}
            farCutoff={0.12}
            frequency={1.8}
            height={0.31}
            highlights={6}
            lighting={29}
            lightX={-0.8}
            lightY={-0.95}
            octaves={1}
            tilt={73}
            zoom={1.1}
          >
            <DotGrid
              density={57}
              dotSize={{
                type: "map",
                source: "idmrf0jzpi1json7rda",
                channel: "luminance",
                inputMin: 0,
                inputMax: 1,
                outputMin: 0,
                outputMax: 0.1,
                curve: 0.5,
              }}
              speed={0.91}
              visible={true}
            />
          </Surface3D>
          <Prism
            endFalloff={0.44}
            intensity={0.24}
            position={{ x: 1.01, y: 1.23 }}
            saturation={0.79}
            softness={0.001}
            speed={0.16}
            splitPosition={{ x: 0.99, y: 1.11 }}
            spread={3}
            startFalloff={0.64}
          />
          <LinearGradient
            id="idmrf0jzpi1json7rda"
            colorSpace="oklab"
            start={{ x: 0.5, y: 1.01 }}
            end={{ x: 0.5, y: 0.15 }}
            stops={[
              { color: "#ffffff", position: 0 },
              { color: "#000000", position: 1 },
            ]}
            visible={false}
          />
        </Shader>
      </div>

      <section className="relative z-10 px-6 pt-20 pb-20 md:pt-24">
        <div className="hero-container flex flex-col-reverse items-center gap-12 md:flex-row md:items-center">
          {/* <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-14 lg:gap-20"> */}

            {/* ── Left: content ── */}
            <motion.div
              className="flex flex-1 flex-col items-center text-center md:items-start md:text-left bg-blue"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Status + location row */}
              <div className="mb-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] text-emerald-400 backdrop-blur-sm"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for work
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] text-white/50 backdrop-blur-sm"
                  style={{ fontFamily: '"Geist Mono", monospace' }}
                >
                  <Icon name='location' />
                  {hero_location}
                </span>
              </div>

              {/* Name */}
              <h1 className="font-extrabold leading-tight tracking-tight text-2xl lg:text-5xl md:text-3xl">
                {hero_heading} 
                {/* <span className="wave">👋</span> */}
              </h1>

              {/* Role — gradient accent */}
              <p className="mt-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
                {hero_role}
              </p>

              {/* Description */}
              <p className="mt-4 max-w-lg text-[15px] leading-[1.85] text-white/65 md:text-[15.5px]">
                {parseHighlightedText(hero_intro)}
              </p>

              {/* <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                {hero_stack.map((tech) => (
                  <Badge
                    key={tech}
                    size="md"
                    radius="md"
                    className={`font-medium tracking-wide padding-2px ${TECH_COLORS[tech] ?? "!bg-white/10 !text-white/75 !border-white/20"}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div> */}

              {/* Social links */}
              <div className="mt-6 flex items-center gap-2.5">
                {FOOTER.socials.slice(0, 4).map((social) => {
                  const SocialIcon = ICONS[social.key];
                  if (!SocialIcon) return null;
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="social-link"
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* CTA buttons */}
              <div className="mt-7 flex gap-20">
                <Button
                  variant="filled"
                  color="primary"
                  size="lg"
                  onClick={() => router.push('https://intervieworbit.site/projects')}
                  className="cursor-pointer"
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  color="primary"
                  size="lg"
                  onClick={() => window.open("/assets/resume/Akhter_Shamim_resume.pdf", "_blank")}
                   className="cursor-pointer"
                >
                  Download CV
                </Button>
              </div>
            </motion.div>

            {/* ── Right: profile image ── */}
            <motion.div
              className="hero-image-wrapper flex-shrink-0"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="hero-image-container"
                // style={{ maxWidth: "340px", width: "min(340px, 72vw)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero_image}
                  alt={hero_image_alt}
                  className="hero-image"
                />
              </div>
            </motion.div>

          {/* </div> */}
        </div>
      </section>
    </main>
  );
}
