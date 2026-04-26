import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const education = [
  {
    icon: '🎓',
    school: 'Universitas Mataram',
    degree: 'S.Kom · Teknik Informatika (Informatics Engineering)',
    year: '2023 — 2028',
    tags: ['UI/UX Design', 'Figma', 'Database Systems', 'Web Development', 'Algorithms'],
  },
  {
    icon: '📚',
    school: 'MAN 2 Mataram',
    degree: 'Ilmu Pengetahuan Alam (Science)',
    year: 'Until 2023',
    tags: [],
  },
]

// Animasi staggered untuk kemunculan kartu
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
}

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader label="03 — Education" title="Academic background" />
      
      <motion.div 
        className="edu-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {education.map((edu, i) => (
          <motion.div key={i} variants={itemVariants} className="edu-card">
            {/* Header Card: Icon & School Info */}
            <div className="edu-header">
              <div className="icon-box">
                {edu.icon}
              </div>
              <div className="edu-titles">
                <h3 className="school-name">{edu.school}</h3>
                <p className="degree-text">{edu.degree}</p>
                <p className="year-text">{edu.year}</p>
              </div>
            </div>

            {/* Tags (jika ada) */}
            {edu.tags.length > 0 && (
              <div className="edu-tags">
                {edu.tags.map(t => (
                  <span key={t} className="edu-tag">{t}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Internal CSS */}
      <style>{`
        /* --- LAYOUT --- */
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        /* --- CARD STYLING --- */
        .edu-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .edu-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-5px);
          box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.3);
        }

        /* --- CARD HEADER (ICON + TEXT) --- */
        .edu-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.02);
          transition: transform 0.3s ease;
        }

        .edu-card:hover .icon-box {
          transform: scale(1.05) rotate(-5deg);
        }

        .edu-titles {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .school-name {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text, #ffffff);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .degree-text {
          font-size: 13.5px;
          color: var(--accent, #8b5cf6);
          margin: 0;
          line-height: 1.4;
        }

        .year-text {
          font-size: 12px;
          color: var(--muted, #a1a1aa);
          font-family: var(--mono, monospace);
          letter-spacing: 0.05em;
          margin: 0;
          margin-top: 4px;
        }

        /* --- TAGS --- */
        .edu-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .edu-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--muted, #a1a1aa);
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 999px;
          font-family: var(--mono, monospace);
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
        }

        .edu-card:hover .edu-tag {
          border-color: rgba(255, 255, 255, 0.15);
          color: var(--text, #e4e4e7);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 640px) {
          .edu-card {
            padding: 1.5rem;
          }
          .icon-box {
            width: 46px;
            height: 46px;
            font-size: 20px;
          }
        }
      `}</style>
    </SectionWrapper>
  )
}