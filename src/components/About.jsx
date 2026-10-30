import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'
import AboutBadge from './AboutBadge'

const skills = [
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Figma', category: 'design' },
  { name: 'React', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Python', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'SQL / PostgreSQL', category: 'backend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'ERD & DB Design', category: 'backend' },
  { name: 'Generative AI', category: 'ai' },
  { name: 'Prompt Engineering', category: 'ai' },
  { name: 'LLMs', category: 'ai' },
  { name: 'AWS Cloud', category: 'cloud' },
  { name: 'Agile / Lean', category: 'soft' },
  { name: 'Personal Branding', category: 'soft' },
]

const categoryColors = {
  design: 'rgba(236, 72, 153, 0.15)',
  frontend: 'rgba(59, 130, 246, 0.15)',
  backend: 'rgba(34, 197, 94, 0.15)',
  ai: 'rgba(168, 85, 247, 0.15)',
  cloud: 'rgba(249, 115, 22, 0.15)',
  soft: 'rgba(234, 179, 8, 0.12)',
}

const categoryBorders = {
  design: 'rgba(236, 72, 153, 0.35)',
  frontend: 'rgba(59, 130, 246, 0.35)',
  backend: 'rgba(34, 197, 94, 0.35)',
  ai: 'rgba(168, 85, 247, 0.35)',
  cloud: 'rgba(249, 115, 22, 0.35)',
  soft: 'rgba(234, 179, 8, 0.3)',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="01 — About" title="A bit about me" />

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Kartu ID 3D (Lanyard) */}
        <motion.div variants={itemVariants} className="about-badge-col">
          <AboutBadge />
        </motion.div>

        {/* Left Column – Text */}
        <div className="about-text-content">
          {[
            "I'm an Informatics Engineering student at Universitas Mataram with a strong passion for creating digital products that are both functional and visually compelling. My journey spans UI/UX design, web development, database systems, and AI-powered tools.",
            "Beyond code, I love exploring the intersection of design and technology — from crafting intuitive interfaces in Figma to building scalable backends. Real-world experiences at a regulated bank and as a university lab assistant have sharpened my professional instincts considerably.",
            "I'm a firm believer in continuous learning, actively pursuing certifications in AI, cloud, and modern web development — especially in the rapidly evolving world of Generative AI.",
          ].map((text, i) => (
            <motion.p key={i} variants={itemVariants}>
              {text}
            </motion.p>
          ))}

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column – Skills Card */}
        <motion.div variants={itemVariants} className="skills-card">
          <div className="skills-card-header">
            <div className="header-left">
              <span className="dot-indicator" />
              <h3>Tech Stack & Skills</h3>
            </div>
            <span className="skills-count">{skills.length}</span>
          </div>

          <motion.div
            className="skills-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((s) => (
              <motion.span
                key={s.name}
                className="skill-tag"
                variants={tagVariants}
                style={{
                  background: categoryColors[s.category],
                  borderColor: categoryBorders[s.category],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                  transition: { duration: 0.25 },
                }}
              >
                {s.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Legend */}
          <div className="skills-legend">
            {[
              { label: 'Design', color: 'rgba(236, 72, 153, 0.7)' },
              { label: 'Frontend', color: 'rgba(59, 130, 246, 0.7)' },
              { label: 'Backend', color: 'rgba(34, 197, 94, 0.7)' },
              { label: 'AI', color: 'rgba(168, 85, 247, 0.7)' },
              { label: 'Cloud', color: 'rgba(249, 115, 22, 0.7)' },
              { label: 'Soft Skills', color: 'rgba(234, 179, 8, 0.65)' },
            ].map((item) => (
              <div key={item.label} className="legend-item">
                <span
                  className="legend-dot"
                  style={{ background: item.color }}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        /* ========== LAYOUT ========== */
        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 2.5rem 4rem;
          align-items: center;
        }

        .about-badge-col { grid-column: 1; grid-row: 1; }
        .about-text-content { grid-column: 2; grid-row: 1; }
        .skills-card { grid-column: 1 / -1; grid-row: 2; }

        /* ========== TEXT COLUMN ========== */
        .about-text-content p {
          color: var(--text, #e4e4e7);
          line-height: 1.9;
          margin-bottom: 1.6rem;
          font-size: 1.065rem;
          font-weight: 300;
          opacity: 0.82;
          transition: opacity 0.35s ease;
        }

        .about-text-content p:last-of-type {
          margin-bottom: 2.5rem;
        }

        .about-text-content p:hover {
          opacity: 1;
        }

        /* ========== STATS ========== */
        .about-stats {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding: 1.5rem 0 0;
          border-top: 1px solid rgba(var(--ink-rgb), 0.06);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-number {
          font-family: var(--serif, Georgia, serif);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--accent, #a78bfa);
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .stat-label {
          font-size: 12px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(var(--ink-rgb), 0.08);
        }

        /* ========== SKILLS CARD ========== */
        .skills-card {
          background: linear-gradient(
            145deg,
            rgba(var(--ink-rgb), 0.03) 0%,
            rgba(var(--ink-rgb), 0.015) 100%
          );
          border: 1px solid rgba(var(--ink-rgb), 0.07);
          border-radius: 24px;
          padding: 2.25rem 2.4rem;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(var(--ink-rgb), 0.04);
          position: relative;
          overflow: hidden;
        }

        .skills-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(167, 139, 250, 0.35),
            transparent
          );
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent, #a78bfa);
          box-shadow: 0 0 12px var(--accent, #a78bfa);
          animation: pulse 2.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(0.9); }
        }

        .skills-card-header h3 {
          font-family: var(--mono, monospace);
          font-size: 12px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0;
          font-weight: 500;
        }

        .skills-count {
          font-family: var(--mono, monospace);
          font-size: 12px;
          color: var(--accent, #a78bfa);
          background: rgba(167, 139, 250, 0.12);
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 500;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1.75rem;
        }

        /* ========== SKILL TAGS ========== */
        .skill-tag {
          border: 1px solid;
          color: var(--text, #e4e4e7);
          font-size: 13px;
          padding: 8px 15px;
          border-radius: 999px;
          font-family: var(--mono, monospace);
          letter-spacing: 0.015em;
          cursor: default;
          transition: box-shadow 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .skill-tag:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        /* ========== LEGEND ========== */
        .skills-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 16px;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(var(--ink-rgb), 0.06);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.02em;
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-badge-col,
          .about-text-content,
          .skills-card { grid-column: 1; grid-row: auto; }

          .skills-card {
            padding: 2rem;
          }

          .about-stats {
            gap: 1.25rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .about-stats {
            flex-wrap: wrap;
            gap: 1.25rem 1.5rem;
          }

          .stat-divider {
            display: none;
          }
        }
      `}</style>
    </SectionWrapper>
  )
}