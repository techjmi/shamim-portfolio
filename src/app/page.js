"use client";
import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Skill from "@/components/skill/Skill";
import Project from "@/components/projects/Projetc";
import Popup from "@/components/ui/Popup";
import { active_popup, popup_config } from "@/constant/popup-constant";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(popup_config.enabled);

  return (
    <main className="font-sans">
      {/* Popup Advertisement */}
      {showPopup && (
        <Popup
          title={active_popup.title}
          description={active_popup.description}
          cta={active_popup.cta}
          ctaLink={active_popup.ctaLink}
          image={active_popup.image}
          autoClose={popup_config.autoClose}
          autoCloseTime={popup_config.autoCloseTime}
          onClose={() => setShowPopup(false)}
        />
      )}

      <Hero />
      <Skill />
      <Experience />
      <Project />
    </main>
  );
}
