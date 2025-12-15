"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { getParticlesOptions } from "../../constant/particles-constant";

const Particles = dynamic(() => import("react-tsparticles").then(m => m.Particles), {
  ssr: false,
});

async function initEngine(engine) {
  // Load the full engine; avoids dev warnings for missing slim package
  const { loadFull } = await import("tsparticles");
  await loadFull(engine);
}

export default function ParticlesBackground({ dark = false, className = "" }) {
  const options = useMemo(() => getParticlesOptions({ dark }), [dark]);
  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className}`}>
      <Particles id="tsparticles-hero" init={initEngine} options={options} />
    </div>
  );
}

