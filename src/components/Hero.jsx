import { motion } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import Topography from './reactbits/Topography'
import useTheme from './useTheme'
import ParticleText from './reactbits/ParticleText'
import RotatingText from './reactbits/RotatingText'

// Kotak batas kira-kira Pulau Lombok untuk label koordinat
const BBOX = { lonMin: 115.82, lonMax: 116.72, latMax: -8.2, latMin: -8.95 }
import { MapPin, Calendar, ExternalLink, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36, filter: 'blur(12px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const [coord, setCoord] = useState(null)
  const theme = useTheme()
  const dark = theme === 'dark'

  // Di layar sempit nama dipecah jadi dua baris supaya tetap terbaca
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const on = () => setNarrow(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const particleProps = {
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    color: dark ? '#f0eee8' : '#1c1b22',
    highlightColor: dark ? '#c9a96e' : '#a07a38',
    particleSize: 2.4,
    density: 3,
    intro: "gather",
    scatter: 220,
    gatherDuration: 1800,
    pointerRepel: 45,
    repelRadius: 110,
    idleDrift: 0.6,
    glow: dark,
  }

  const handleMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const lon = BBOX.lonMin + x * (BBOX.lonMax - BBOX.lonMin)
    const lat = BBOX.latMax - y * (BBOX.latMax - BBOX.latMin)
    setCoord(`${lat.toFixed(4)}°, ${lon.toFixed(4)}°`)
  }, [])

  return (
    <section id="hero" className="hero-section" onPointerMove={handleMove} onPointerLeave={() => setCoord(null)}>
      {/* Ambient Background */}
      <div className="glow-blob blob-1" />
      <div className="glow-blob blob-2" />
      <div className="glow-blob blob-3" />
      <div className="noise-overlay" />
      <div className="hero-topo" aria-hidden="true">
        <Topography
          color={dark ? '#c9a96e' : '#a07a38'}
          lightMode={!dark}
          lineCount={24}
          lineWidth={1.4}
          elevation={1.1}
          tilt={34}
          speed={0.2}
          glow={dark ? 0.5 : 0.3}
          brightness={dark ? 0.85 : 1.2}
          fog={0.35}
          opacity={1}
          hoverEffect="lift"
          clickEffect="pulse"
          markers="none"
        />
      </div>

      {/* Petunjuk interaksi + koordinat kursor */}
      <div className="map-hud" aria-hidden="true">
        <span className="map-hud-dot" />
        {coord ? coord : 'Move your cursor · click the terrain'}
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Status Badge */}
          <motion.div {...fadeUp(0.1)} className="glass-badge">
            <span className="status-dot" />
            <span>Open to new opportunities</span>
          </motion.div>

          {/* Name */}
          <h1 className="hero-name" aria-label="Lalu Rifqi Ramadhan">
            {narrow ? (
              <>
                <div className="name-row"><ParticleText key="l1" text="Lalu Rifqi" fontSize={88} {...particleProps} /></div>
                <div className="name-row"><ParticleText key="l2" text="Ramadhan" fontSize={88} {...particleProps} /></div>
              </>
            ) : (
              <ParticleText key="one" text="Lalu Rifqi Ramadhan" fontSize="clamp(4.5rem, 11vw, 10.5rem)" {...particleProps} />
            )}
          </h1>

          {/* Role */}
          <motion.p {...fadeUp(0.3)} className="role-text">
            <span>Informatics Engineering Student</span>
            <span className="separator">·</span>
            <RotatingText
              texts={['UI/UX Designer', 'Full-Stack Developer', 'GIS Explorer']}
              mainClassName="role-rotate"
              highlight
              highlightColor="var(--accent)"
              effect="slide"
              direction="up"
              staggerDuration={0.02}
              staggerFrom="last"
              rotationInterval={2600}
              transition={{ type: 'spring', damping: 26, stiffness: 380 }}
            />
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="description-text">
            Deeply interested in <strong>UI/UX Design</strong> & <strong>Full-Stack Web Development</strong>.
            I build digital experiences that are beautiful, purposeful, and human-centered — bridging the gap between design and engineering.
          </motion.p>

          {/* Meta Info */}
          <motion.div {...fadeUp(0.5)} className="meta-container">
            <span className="meta-item">
              <MapPin size={15} strokeWidth={1.75} className="meta-icon" />
              Mataram, Indonesia
            </span>
            <span className="meta-divider" />
            <span className="meta-item">
              <Calendar size={15} strokeWidth={1.75} className="meta-icon" />
              Universitas Mataram · 2023–2028
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="cta-container">
            <a
              href="https://www.linkedin.com/in/lalurifqiramadhan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              LinkedIn Profile
              <ExternalLink size={16} className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
              <ArrowRight size={16} className="btn-icon arrow-icon" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            {...fadeUp(0.85)}
            className="scroll-indicator"
            aria-hidden="true"
          >
            <div className="scroll-line" />
            <span>Scroll</span>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* ========== SECTION ========== */
        .hero-section {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: var(--hero-bg);
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 8rem 3rem 6rem;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* ========== TOPOGRAPHY ========== */
        .hero-topo {
          position: absolute;
          inset: 0;
          z-index: 2;
          /* Garis kontur dipudarkan di tengah supaya nama & teks tetap terbaca */
          mask-image: radial-gradient(ellipse 50% 42% at 50% 47%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 55%, black 100%);
          -webkit-mask-image: radial-gradient(ellipse 50% 42% at 50% 47%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 55%, black 100%);
        }

        .hero-content::before {
          content: '';
          position: absolute;
          inset: -5rem -6rem;
          z-index: -1;
          background: radial-gradient(closest-side, var(--hero-bg) 60%, transparent 100%);
          opacity: 0.95;
          pointer-events: none;
        }

        /* ========== MAP HUD ========== */
        .map-hud {
          position: absolute;
          right: 2rem;
          bottom: 2rem;
          z-index: 11;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--muted);
          background: rgba(var(--ink-rgb), 0.04);
          border: 1px solid var(--border2);
          border-radius: 999px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          pointer-events: none;
          min-width: 190px;
          justify-content: center;
        }

        .map-hud-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }

        @media (hover: none) {
          .map-hud { display: none; }
        }

        /* ========== BACKGROUND ========== */
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(var(--ink-rgb), 0.045) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 70% 60% at 40% 40%, black 20%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 40% 40%, black 20%, transparent 75%);
          pointer-events: none;
          z-index: 0;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          pointer-events: none;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .glow-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          z-index: 0;
          animation: float 14s infinite ease-in-out alternate;
        }

        .blob-1 {
          width: 620px;
          height: 620px;
          background: #3b82f6;
          top: -18%;
          right: -8%;
          opacity: 0.13;
          animation-delay: -3s;
        }

        .blob-2 {
          width: 480px;
          height: 480px;
          background: #8b5cf6;
          bottom: -15%;
          left: -10%;
          opacity: 0.14;
        }

        .blob-3 {
          width: 320px;
          height: 320px;
          background: #ec4899;
          top: 35%;
          left: 45%;
          opacity: 0.07;
          animation-delay: -7s;
          animation-duration: 18s;
        }

        @keyframes float {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(40px, 55px) scale(1.12); }
        }

        /* ========== BADGE ========== */
        .glass-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(var(--ink-rgb), 0.035);
          border: 1px solid rgba(var(--ink-rgb), 0.09);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 999px;
          padding: 9px 20px;
          font-size: 12px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2.75rem;
          font-weight: 500;
          box-shadow: 0 0 0 1px rgba(var(--ink-rgb), 0.02) inset;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5);
          animation: pulse-ring 2.4s ease-out infinite;
        }

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45); }
          70%  { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
        }

        /* ========== TYPOGRAPHY ========== */
        h1 {
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(3.6rem, 8.5vw, 6.8rem);
          line-height: 1.02;
          margin-bottom: 1.1rem;
          letter-spacing: -0.03em;
          color: var(--text);
          font-weight: 500;
        }

        .text-gradient {
          background: linear-gradient(180deg, var(--text) 15%, rgba(var(--ink-rgb), 0.55) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-accent-gradient {
          font-style: italic;
          background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 55%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-right: 4px;
        }

        .hero-name {
          /* Lebih lebar dari kolom konten supaya nama bisa tampil besar */
          width: min(96vw, 1500px);
          height: clamp(160px, 14vw, 240px);
          margin: 0 0 0.6rem;
        }

        .hero-name .particle-text { min-height: 0; }

        @media (max-width: 640px) {
          .hero-name { height: auto; display: flex; flex-direction: column; }
          .name-row { height: 104px; }
        }

        .name-line {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 0 0.22em;
        }

        .name-word { color: var(--text); }

        .name-accent {
          font-style: italic;
          padding-right: 0.06em;
          display: inline-block;
        }

        .role-text {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 6px 0;
          font-size: 1.12rem;
          color: var(--muted, #a1a1aa);
          margin-bottom: 1.6rem;
          font-weight: 400;
          letter-spacing: 0.015em;
        }

        .separator {
          color: rgba(var(--ink-rgb), 0.22);
          margin: 0 12px;
        }

        .role-rotate {
          color: var(--on-accent);
          font-weight: 600;
          font-size: 0.98rem;
          letter-spacing: 0.01em;
          border-radius: 8px !important;
          padding: 0.22em 0.6em !important;
        }

        .description-text {
          font-size: 1.1rem;
          color: rgba(var(--ink-rgb), 0.78);
          max-width: 580px;
          margin-bottom: 2.4rem;
          line-height: 1.75;
          font-weight: 300;
        }

        .description-text strong {
          color: var(--text);
          font-weight: 500;
        }

        /* ========== META ========== */
        .meta-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3.25rem;
        }

        .meta-item {
          font-size: 14px;
          color: var(--muted, #a1a1aa);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .meta-icon {
          color: var(--accent);
          opacity: 0.9;
          flex-shrink: 0;
        }

        .meta-divider {
          width: 1px;
          height: 14px;
          background: rgba(var(--ink-rgb), 0.12);
        }

        /* ========== BUTTONS ========== */
        .cta-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.95rem 1.9rem;
          border-radius: 14px;
          font-size: 14.5px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .btn-icon {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .btn-primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-text);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.25) inset,
            0 8px 24px rgba(0,0,0,0.25);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.25) inset,
            0 14px 32px rgba(var(--ink-rgb),0.15);
        }

        .btn-primary:hover .btn-icon {
          transform: scale(1.12) translateY(-1px);
        }

        .btn-secondary {
          background: rgba(var(--ink-rgb), 0.04);
          border: 1px solid rgba(var(--ink-rgb), 0.12);
          color: var(--text);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .btn-secondary:hover {
          background: rgba(var(--ink-rgb), 0.08);
          border-color: rgba(var(--ink-rgb), 0.22);
          transform: translateY(-3px);
        }

        .btn-secondary:hover .arrow-icon {
          transform: translateX(5px);
        }

        /* ========== SCROLL INDICATOR ========== */
        .scroll-indicator {
          position: absolute;
          bottom: -4.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--muted, #71717a);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          position: relative;
          overflow: hidden;
        }

        .scroll-line::after {
          content: '';
          position: absolute;
          top: -40%;
          left: 0;
          width: 100%;
          height: 40%;
          background: var(--text);
          animation: scroll-down 1.8s ease-in-out infinite;
        }

        @keyframes scroll-down {
          0%   { top: -40%; opacity: 0; }
          30%  { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 768px) {
          .hero-section { align-items: flex-start; }

          .container {
            padding: 7.5rem 1.5rem 5rem;
          }

          .meta-container {
            flex-direction: column;
            align-items: center;
            gap: 0.85rem;
          }

          .meta-divider {
            display: none;
          }

          .cta-container {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .scroll-indicator {
            display: none;
          }

          .blob-1 { width: 380px; height: 380px; opacity: 0.11; }
          .blob-2 { width: 280px; height: 280px; opacity: 0.12; }
          .blob-3 { display: none; }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: clamp(3rem, 12vw, 4rem);
          }
        }
      `}</style>
    </section>
  )
}