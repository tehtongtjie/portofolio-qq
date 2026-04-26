import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const experiences = [
  {
    role: 'Web Development & UI/UX Intern',
    company: 'PT. Bank BPR NTB (Perseroda)',
    type: 'Internship',
    period: 'Dec 2025 — Apr 2026',
    duration: '5 months',
    location: 'Mataram, NTB · On-site',
    desc: 'Involved in the development and improvement of the bank\'s official website, focusing on UI/UX design, information architecture, and non-transactional backend features such as content management, UMKM listings, training programs, and job vacancy systems. Gained hands-on experience building digital services within a regulated financial institution while ensuring compliance with data protection and banking regulations.',
    tags: ['UI/UX Design', 'User Research', 'Information Architecture', 'Backend Dev', 'Content Management'],
  },
  {
    role: 'Google Student Ambassador',
    company: 'Google',
    type: 'Part-time',
    period: 'Sep 2025 — Jan 2026',
    duration: '5 months',
    location: 'West Nusa Tenggara · Remote',
    desc: 'Selected as one of 800 ambassadors from a competitive pool of 12,000 applicants to champion Google\'s products and AI initiatives on campus. Led hands-on sessions for Google Gemini, organized AI education workshops, gathered user feedback on AI adoption, and served as the primary knowledge source for Google\'s latest AI developments for students and faculty.',
    tags: ['Google AI', 'Gemini', 'Community Outreach', 'AI Education', 'Marketing'],
  },
  {
    role: 'Database Systems Lab Assistant',
    company: 'Universitas Mataram',
    type: 'Contract',
    period: 'Aug 2025 — Jan 2026',
    duration: '6 months',
    location: 'Mataram, NTB · On-site',
    desc: 'Assisted in conducting Database Systems laboratory sessions for Informatics Engineering undergraduates. Guided students through relational database design, ER diagram creation (ERD), and SQL implementation including DDL and DML operations. Supported lecturers in preparing lab materials, assignments, and evaluations while troubleshooting database issues during practicals.',
    tags: ['SQL', 'ERD Design', 'DDL / DML', 'Teaching', 'PostgreSQL'],
  },
]

// Animasi staggered untuk kemunculan list
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

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader label="02 — Experience" title="Where I've worked" />
      
      <motion.div 
        className="exp-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, i) => (
          <ExpItem key={i} exp={exp} />
        ))}
      </motion.div>

      {/* Internal CSS */}
      <style>{`
        .exp-container {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
        }

        /* --- EXPERIENCE ITEM LAYOUT --- */
        .exp-item {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 3rem;
          padding: 3rem 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
          position: relative;
        }

        /* Hilangkan border top di elemen pertama agar tidak dobel dengan header */
        .exp-item:first-child {
          border-top: 1px solid transparent;
        }

        /* Efek Hover Row */
        .exp-item:hover {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.2);
        }

        /* --- LEFT COLUMN: TIMELINE/META --- */
        .exp-meta {
          padding-top: 0.25rem;
        }

        .exp-period {
          font-family: var(--mono, monospace);
          font-size: 13px;
          color: var(--muted, #a1a1aa);
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .exp-duration {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 11px;
          color: var(--muted, #a1a1aa);
          font-family: var(--mono, monospace);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* --- RIGHT COLUMN: CONTENT --- */
        .exp-role {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text, #ffffff);
          margin-bottom: 0.25rem;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .exp-item:hover .exp-role {
          color: var(--accent, #8b5cf6);
        }

        .exp-company-info {
          font-size: 14px;
          color: var(--muted, #a1a1aa);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .company-name {
          color: var(--text, #e4e4e7);
          font-weight: 500;
        }

        .exp-desc {
          font-size: 1.05rem;
          color: var(--muted, #a1a1aa);
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        /* --- TAGS --- */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-tag {
          font-family: var(--mono, monospace);
          font-size: 12px;
          color: var(--accent2, #3b82f6);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          padding: 6px 14px;
          border-radius: 999px;
          transition: all 0.2s ease;
        }

        .exp-tag:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
          .exp-item {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 2.5rem 1rem;
          }
          
          .exp-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-top: 0;
            margin-bottom: 0.5rem;
          }
          
          .exp-period {
            margin-bottom: 0;
          }
        }
      `}</style>
    </SectionWrapper>
  )
}

function ExpItem({ exp }) {
  return (
    <motion.div variants={itemVariants} className="exp-item">
      {/* Kolom Kiri: Waktu & Durasi */}
      <div className="exp-meta">
        <p className="exp-period">{exp.period}</p>
        <span className="exp-duration">{exp.duration}</span>
      </div>

      {/* Kolom Kanan: Detail Pekerjaan */}
      <div className="exp-content">
        <h3 className="exp-role">{exp.role}</h3>
        
        <div className="exp-company-info">
          <span className="company-name">{exp.company}</span>
          <span>·</span>
          <span>{exp.type}</span>
          <span>·</span>
          <span>{exp.location}</span>
        </div>
        
        <p className="exp-desc">{exp.desc}</p>
        
        <div className="exp-tags">
          {exp.tags.map(t => (
            <span key={t} className="exp-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}