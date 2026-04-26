import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'BPR NTB Website Redesign',
    desc: 'Redesign dan pengembangan website resmi PT Bank BPR NTB Perseroda. Fokus pada peningkatan UI/UX, information architecture, dan implementasi fitur content management, UMKM listing, serta lowongan kerja.',
    tags: ['UI/UX Design', 'Figma', 'React', 'Content Management'],
    type: 'Web · Internship Project',
    year: '2025–2026',
    status: 'Live',
    color: '#c9a96e',
    accent: 'rgba(201,169,110,0.12)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '38px', bg: '#1a1a24', radius: '8px 8px 0 0' },
      { x: 12, y: 10, w: '80px', h: '8px', bg: '#c9a96e33', radius: '4px' },
      { x: 0, y: 38, w: '100%', h: '120px', bg: '#16161e' },
      { x: 24, y: 60, w: '45%', h: '12px', bg: '#c9a96e55', radius: '4px' },
      { x: 24, y: 80, w: '60%', h: '8px', bg: '#ffffff15', radius: '4px' },
      { x: 24, y: 96, w: '40%', h: '8px', bg: '#ffffff10', radius: '4px' },
      { x: 24, y: 118, w: '90px', h: '24px', bg: '#c9a96e', radius: '6px' },
      { x: 0, y: 158, w: '100%', h: '80px', bg: '#111118' },
      { x: 16, y: 170, w: '28%', h: '50px', bg: '#1a1a24', radius: '8px' },
      { x: '38%', y: 170, w: '28%', h: '50px', bg: '#1a1a24', radius: '8px' },
      { x: '72%', y: 170, w: '25%', h: '50px', bg: '#1a1a24', radius: '8px' },
    ],
    links: { live: '#', github: '#' },
  },
  {
    id: 2,
    title: 'AI Study Assistant',
    desc: 'Aplikasi web berbasis Generative AI untuk membantu mahasiswa belajar lebih efektif. Fitur meliputi ringkasan materi otomatis, quiz generator, dan chatbot tutor menggunakan LLM.',
    tags: ['React', 'Node.js', 'Generative AI', 'Prompt Engineering'],
    type: 'Web App · Personal Project',
    year: '2025',
    status: 'In Progress',
    color: '#7c6fff',
    accent: 'rgba(124,111,255,0.12)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '44px', bg: '#111118' },
      { x: 12, y: 14, w: '120px', h: '8px', bg: '#7c6fff44', radius: '4px' },
      { x: 0, y: 44, w: '35%', h: '196px', bg: '#16161e' },
      { x: 8, y: 54, w: '80%', h: '8px', bg: '#ffffff20', radius: '4px' },
      { x: 8, y: 70, w: '65%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: 8, y: 84, w: '70%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: 8, y: 100, w: '55%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: '37%', y: 44, w: '63%', h: '196px', bg: '#0a0a0f' },
      { x: '39%', y: 54, w: '58%', h: '56px', bg: '#16161e', radius: '8px' },
      { x: '39%', y: 118, w: '45%', h: '36px', bg: '#7c6fff22', radius: '8px' },
      { x: '39%', y: 162, w: '58%', h: '60px', bg: '#16161e', radius: '8px' },
      { x: '41%', y: 170, w: '40%', h: '6px', bg: '#7c6fff55', radius: '4px' },
      { x: '41%', y: 182, w: '30%', h: '6px', bg: '#ffffff15', radius: '4px' },
    ],
    links: { live: null, github: '#' },
  },
  {
    id: 3,
    title: 'Database Learning Hub',
    desc: 'Platform belajar interaktif untuk mahasiswa Database Systems. Berisi materi ERD, SQL playground, kuis online, dan submission tugas — dibuat saat menjadi Lab Assistant di Universitas Mataram.',
    tags: ['JavaScript', 'SQL', 'ERD', 'Education'],
    type: 'Web Platform · Lab Project',
    year: '2025',
    status: 'Completed',
    color: '#5ecfa0',
    accent: 'rgba(94,207,160,0.12)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '40px', bg: '#0f1f18' },
      { x: 12, y: 13, w: '90px', h: '8px', bg: '#5ecfa033', radius: '4px' },
      { x: 0, y: 40, w: '100%', h: '50px', bg: '#111118' },
      { x: 12, y: 54, w: '120px', h: '10px', bg: '#5ecfa055', radius: '4px' },
      { x: 12, y: 70, w: '180px', h: '6px', bg: '#ffffff15', radius: '4px' },
      { x: 0, y: 90, w: '100%', h: '150px', bg: '#16161e' },
      { x: 12, y: 102, w: '30%', h: '60px', bg: '#0f1f18', radius: '8px' },
      { x: '36%', y: 102, w: '30%', h: '60px', bg: '#0f1f18', radius: '8px' },
      { x: '70%', y: 102, w: '27%', h: '60px', bg: '#0f1f18', radius: '8px' },
      { x: 12, y: 172, w: '45%', h: '8px', bg: '#5ecfa033', radius: '4px' },
      { x: 12, y: 186, w: '80%', h: '6px', bg: '#ffffff10', radius: '4px' },
      { x: 12, y: 198, w: '60%', h: '6px', bg: '#ffffff10', radius: '4px' },
    ],
    links: { live: null, github: '#' },
  },
  {
    id: 4,
    title: 'Google AI Campus Tour',
    desc: 'Landing page & materi presentasi untuk Google Student Ambassador program. Dirancang untuk mengedukasi mahasiswa tentang Google Gemini, AI tools, dan cara memanfaatkan AI untuk produktivitas akademik.',
    tags: ['Figma', 'UI Design', 'Gemini', 'Google AI'],
    type: 'Design · GSA Project',
    year: '2025',
    status: 'Completed',
    color: '#ff6b6b',
    accent: 'rgba(255,107,107,0.1)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '240px', bg: '#1a0f0f' },
      { x: '50%', y: 30, w: '120px', h: '10px', bg: '#ff6b6b55', radius: '4px', transform: 'translateX(-50%)' },
      { x: '50%', y: 50, w: '180px', h: '24px', bg: '#ff6b6b', radius: '6px', transform: 'translateX(-50%)' },
      { x: '50%', y: 84, w: '200px', h: '8px', bg: '#ffffff20', radius: '4px', transform: 'translateX(-50%)' },
      { x: '50%', y: 100, w: '160px', h: '8px', bg: '#ffffff15', radius: '4px', transform: 'translateX(-50%)' },
      { x: '50%', y: 120, w: '100px', h: '28px', bg: '#ff6b6b33', radius: '999px', transform: 'translateX(-50%)' },
      { x: 12, y: 160, w: '22%', h: '60px', bg: '#ffffff08', radius: '8px' },
      { x: '27%', y: 160, w: '22%', h: '60px', bg: '#ffffff08', radius: '8px' },
      { x: '52%', y: 160, w: '22%', h: '60px', bg: '#ffffff08', radius: '8px' },
      { x: '77%', y: 160, w: '20%', h: '60px', bg: '#ffffff08', radius: '8px' },
    ],
    links: { live: null, github: null },
  },
]

const statusColors = {
  Live: { bg: 'rgba(94,207,160,0.15)', color: '#5ecfa0', dot: '#5ecfa0' },
  'In Progress': { bg: 'rgba(201,169,110,0.15)', color: '#c9a96e', dot: '#c9a96e' },
  Completed: { bg: 'rgba(138,136,152,0.15)', color: '#8a8898', dot: '#8a8898' },
}

function MockupSVG({ lines, color }) {
  return (
    <div style={{
      width: '100%', height: '240px',
      background: '#0a0a0f',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      border: '0.5px solid rgba(255,255,255,0.06)',
    }}>
      {/* Browser bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '28px',
        background: '#111118',
        borderBottom: '0.5px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '5px', padding: '0 10px',
      }}>
        {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
          <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
        ))}
        <div style={{
          flex: 1, marginLeft: '8px', height: '14px',
          background: 'rgba(255,255,255,0.06)', borderRadius: '4px',
          maxWidth: '160px',
        }} />
      </div>

      {/* Mockup content */}
      <div style={{ position: 'absolute', top: '28px', left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: typeof l.x === 'string' && l.x.includes('%') ? l.x : `${l.x}px`,
            top: `${l.y}px`,
            width: l.w,
            height: l.h,
            background: l.bg,
            borderRadius: l.radius || '0',
            transform: l.transform || 'none',
          }} />
        ))}
      </div>

      {/* Color glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 50% 80%, ${color}18 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
    </div>
  )
}

const filters = ['All', 'Web', 'Design', 'AI', 'Education']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p =>
        p.tags.some(t => t.toLowerCase().includes(active.toLowerCase())) ||
        p.type.toLowerCase().includes(active.toLowerCase())
      )

  return (
    <SectionWrapper id="projects">
      <SectionHeader label="05 — Projects" title="Things I've built" />

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              background: active === f ? 'var(--accent)' : 'var(--surface2)',
              border: `0.5px solid ${active === f ? 'var(--accent)' : 'var(--border2)'}`,
              color: active === f ? '#0a0a0f' : 'var(--muted)',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '12px',
              fontFamily: 'var(--mono)',
              fontWeight: active === f ? 600 : 400,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: '2.5rem',
        padding: '1.5rem',
        background: 'var(--surface)',
        border: '0.5px solid var(--border)',
        borderRadius: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div>
          <p style={{ fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
            More projects on GitHub
          </p>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
            Eksplorasi semua repo, experiment, dan side projects saya.
          </p>
        </div>
        <a
          href="https://github.com/lalurifqi"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '0.5px solid var(--border2)',
            color: 'var(--text)',
            padding: '0.7rem 1.5rem',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
          View GitHub
        </a>
      </div>
    </SectionWrapper>
  )
}

function ProjectCard({ project }) {
  const status = statusColors[project.status]
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `0.5px solid ${hovered ? project.color + '44' : 'var(--border)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      {/* Mockup */}
      <div style={{ padding: '14px 14px 0' }}>
        <MockupSVG lines={project.mockupLines} color={project.color} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px', color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}>
            {project.type}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: status.dot,
              boxShadow: project.status === 'Live' ? `0 0 6px ${status.dot}` : 'none',
            }} />
            <span style={{ fontSize: '11px', color: status.color, fontFamily: 'var(--mono)' }}>
              {project.status}
            </span>
          </div>
        </div>

        <h3 style={{
          fontSize: '1rem', fontWeight: 600, color: 'var(--text)',
          marginBottom: '8px', lineHeight: 1.3,
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '13px', color: 'var(--muted)',
          lineHeight: 1.75, marginBottom: '1rem',
        }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.1rem' }}>
          {project.tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: project.color,
              background: project.accent,
              border: `0.5px solid ${project.color}33`,
              padding: '3px 10px', borderRadius: '999px',
            }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {project.links.github && (
            <a
              href={project.links.github}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '12px', color: 'var(--muted)',
                border: '0.5px solid var(--border2)',
                padding: '5px 12px', borderRadius: '6px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
              Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '12px',
                color: project.color,
                background: project.accent,
                border: `0.5px solid ${project.color}44`,
                padding: '5px 12px', borderRadius: '6px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
