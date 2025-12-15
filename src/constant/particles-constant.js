// Particles options for hero background
// Works with both tsparticles-slim and tsparticles full loader

export function getParticlesOptions({ dark = false } = {}) {
  const color = dark ? "#475569" : "#94a3b8"; // slate-600 vs slate-400
  const linkColor = dark ? "#64748b" : "#94a3b8"; // slate-500/400

  return {
    fpsLimit: 60,
    detectRetina: true,
    background: { color: { value: "transparent" } },
    fullScreen: { enable: false },
    particles: {
      number: { value: 50, density: { enable: true, area: 900 } },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: false, animation: { enable: false } },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 130,
        color: linkColor,
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: false },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
  };
}

