import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background elements (sekarang bebas full screen) */}
      <div className="glow-blob blob-1" />
      <div className="glow-blob blob-2" />
      <div className="bg-grid" />

      {/* Wrapper baru untuk membatasi lebar konten saja */}
      <div className="container">
        <div className="hero-content">
          <motion.div {...fadeUp(0.1)} className="glass-badge">
            <span className="status-dot" />
            <span>Open to new opportunities</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)}>
            Lalu <br className="mobile-break" />
            <em className="text-accent-gradient">Rifqi</em>
            <br />
            <span className="text-gradient">Ramadhan</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="role-text">
            He/Him <span className="separator">·</span> Informatics Engineering Student
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="description-text">
            Deeply interested in <strong>UI/UX Design</strong> & <strong>Full-Stack Web Development</strong>. 
            I build digital experiences that are beautiful, purposeful, and human-centered — bridging the gap between design and engineering.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="meta-container">
            <span className="meta-item">
              <MapPin size={14} className="meta-icon" />
              Mataram, Indonesia
            </span>
            <span className="meta-item">
              <Calendar size={14} className="meta-icon" />
              Universitas Mataram · 2023–2028
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="cta-container">
            <a href="https://www.linkedin.com/in/lalurifqiramadhan" target="_blank" rel="noreferrer" className="btn btn-primary">
              LinkedIn Profile
              <ExternalLink size={16} className="btn-icon" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
              <ArrowRight size={16} className="btn-icon arrow-icon" />
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* --- LAYOUT & BACKGROUND --- */
        .hero-section {
          min-height: 100vh;
          width: 100%; /* Sekarang lebarnya full 100% */
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: #0a0a0f; /* Tambahkan base background color jika diperlukan */
        }
        
        .container {
          width: 100%;
          max-width: 1200px; /* Konten dibatasi 1200px */
          margin: 0 auto;    /* Konten di tengah */
          padding: 7rem 3rem 5rem;
          position: relative;
          z-index: 10;
        }
        
        .hero-content {
          max-width: 800px;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }

        /* --- BLOBS --- */
        .glow-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
          animation: float 10s infinite ease-in-out alternate;
        }
        .blob-1 {
          width: 600px; height: 600px;
          background: var(--accent2, #3b82f6);
          top: -10%; right: -5%;
          animation-delay: -2s;
        }
        .blob-2 {
          width: 500px; height: 500px;
          background: var(--accent, #8b5cf6);
          bottom: -10%; left: -5%;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, 50px) scale(1.1); }
        }

        /* --- COMPONENTS --- */
        .glass-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 999px;
          padding: 8px 20px;
          font-size: 12px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2.5rem;
          font-weight: 500;
        }

        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green, #10b981);
          box-shadow: 0 0 12px var(--green, #10b981);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* --- TYPOGRAPHY --- */
        h1 {
          font-family: var(--serif, inherit);
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 1.05;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          color: var(--text, #ffffff);
        }

        .text-gradient {
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-accent-gradient {
          font-style: italic;
          background: linear-gradient(135deg, var(--accent, #8b5cf6) 0%, var(--accent2, #3b82f6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-right: 5px;
        }

        .role-text {
          font-size: 1.15rem;
          color: var(--muted, #a1a1aa);
          margin-bottom: 1.75rem;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .separator {
          color: rgba(255, 255, 255, 0.2);
          margin: 0 8px;
        }

        .description-text {
          font-size: 1.1rem;
          color: var(--text, #e4e4e7);
          opacity: 0.85;
          max-width: 600px;
          margin-bottom: 2.5rem;
          line-height: 1.7;
          font-weight: 300;
        }
        
        .description-text strong {
          color: #ffffff;
          font-weight: 500;
        }

        /* --- META INFO --- */
        .meta-container {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }

        .meta-item {
          font-size: 14px;
          color: var(--muted, #a1a1aa);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .meta-icon {
          color: var(--accent, #8b5cf6);
          opacity: 0.8;
        }

        /* --- BUTTONS --- */
        .cta-container {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0.9rem 2.2rem;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary {
          background: var(--text, #ffffff);
          color: #000000;
          box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.15);
        }

        .btn-primary:hover .btn-icon {
          transform: scale(1.1);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text, #ffffff);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .btn-secondary:hover .arrow-icon {
          transform: translateX(4px);
        }

        /* --- RESPONSIVE --- */
        .mobile-break {
          display: none;
        }

        @media (max-width: 768px) {
          .container { padding: 8rem 1.5rem 4rem; }
          .mobile-break { display: block; }
          .meta-container { flex-direction: column; gap: 1rem; }
          .cta-container { flex-direction: column; width: 100%; gap: 1rem; }
          .btn { width: 100%; justify-content: center; }
          .blob-1 { width: 400px; height: 400px; }
          .blob-2 { width: 300px; height: 300px; }
        }
      `}</style>
    </section>
  )
}