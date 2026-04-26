import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const skills = [
  'UI/UX Design', 'Figma', 'React', 'JavaScript', 'TypeScript',
  'Python', 'Node.js', 'SQL / PostgreSQL', 'Tailwind CSS',
  'ERD & DB Design', 'Generative AI', 'Prompt Engineering',
  'LLMs', 'AWS Cloud', 'Agile / Lean', 'Personal Branding',
]

// Variasi animasi untuk efek scroll-reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
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
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Kolom Kiri: Teks Deskripsi */}
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
        </div>

        {/* Kolom Kanan: Tech Stack Card */}
        <motion.div variants={itemVariants} className="skills-card">
          <div className="skills-card-header">
            <span className="dot-indicator" />
            <h3>Tech Stack & Skills</h3>
          </div>
          
          <div className="skills-container">
            {skills.map(s => (
              <SkillTag key={s}>{s}</SkillTag>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Internal CSS */}
      <style>{`
        /* --- LAYOUT --- */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* --- TYPOGRAPHY (TEXT KOLOM KIRI) --- */
        .about-text-content p {
          color: var(--text, #e4e4e7);
          line-height: 1.85;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          font-weight: 300;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .about-text-content p:hover {
          opacity: 1;
        }

        /* --- SKILLS CARD (KOLOM KANAN) --- */
        .skills-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent, #8b5cf6);
          box-shadow: 0 0 10px var(--accent, #8b5cf6);
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

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* --- SKILL TAGS --- */
        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--muted, #a1a1aa);
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 999px;
          font-family: var(--mono, monospace);
          letter-spacing: 0.02em;
          cursor: default;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-tag:hover {
          background: rgba(139, 92, 246, 0.1); /* Gunakan var(--accent) jika ada fallback rgba-nya */
          border-color: var(--accent, #8b5cf6);
          color: var(--text, #ffffff);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 6px 15px rgba(139, 92, 246, 0.15);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .skills-card {
            padding: 2rem;
          }
        }
      `}</style>
    </SectionWrapper>
  )
}

function SkillTag({ children }) {
  // Komponen tag sekarang jauh lebih bersih karena stylenya dipindah ke CSS class
  return (
    <span className="skill-tag">
      {children}
    </span>
  )
}