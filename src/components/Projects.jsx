import { SectionWrapper, SectionHeader } from './SectionWrapper'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'SimDampak – Peta Simulasi Dampak Pembangunan',
    desc: 'Platform Web-GIS interaktif bertenaga Generative AI untuk menyimulasikan radius dampak lingkungan (AMDAL) dari proyek industri. Mengintegrasikan data cuaca real-time, validasi ambang batas baku mutu hukum Indonesia, serta otomatisasi pembuatan dokumen advokasi hukum untuk warga terdampak.',
    tags: [
      'Web-GIS',
      'React',
      'Gemini AI',
      'Turf.js',
      'Chart.js',
      'Environmental Advocacy',
    ],
    type: 'AI & Geospatial Platform',
    year: '2026',
    status: 'Live',
    color: '#ef4444', // Crimson/Alert Red
    accent: 'rgba(239, 68, 68, 0.12)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '38px', bg: '#111827', radius: '8px 8px 0 0' },
      { x: 12, y: 10, w: '90px', h: '8px', bg: '#ef444455', radius: '4px' },
      // Layout Peta Spasial (Tengah)
      { x: 0, y: 38, w: '100%', h: '160px', bg: '#0b0f19' },
      // Efek Buffer Rings Lingkaran (Pusat Proyek)
      { x: '50%', y: '100px', w: '80px', h: '80px', bg: 'rgba(239,68,68,0.15)', radius: '50%', transform: 'translate(-50%, -50%)' },
      { x: '50%', y: '100px', w: '40px', h: '40px', bg: 'rgba(239,68,68,0.3)', radius: '50%', transform: 'translate(-50%, -50%)' },
      { x: '50%', y: '100px', w: '6px', h: '6px', bg: '#ef4444', radius: '50%', transform: 'translate(-50%, -50%)' }, // Pinpoint
      // Sidebar Input & Kontrol (Kiri)
      { x: 10, y: 48, w: '65px', h: '140px', bg: '#111827cc', radius: '6px' },
      { x: 16, y: 56, w: '40px', h: '6px', bg: '#ffffff20', radius: '2px' },
      { x: 16, y: 68, w: '50px', h: '6px', bg: '#ffffff10', radius: '2px' },
      { x: 16, y: 160, w: '53px', h: '18px', bg: '#ef4444', radius: '4px' }, // Tombol Simulasi
      // Panel Skor Metrik (Kanan)
      { x: '78%', y: 48, w: '65px', h: '110px', bg: '#111827cc', radius: '6px' },
      { x: '82%', y: 58, w: '45px', h: '35px', bg: '#rgba(255,255,255,0.03)', radius: '4px' }, // Mini Chart Placeholder
    ],
    links: {
      live: 'https://simdampak-403394555424.asia-southeast1.run.app/', // Ganti atau sesuaikan jika URL Cloud Run berbeda
      github: 'https://github.com/tehtongtjie/SimDampak-GIS', // Ganti dengan URL GitHub yang sesuai
    },
  },
  {
    id: 2,
    title: 'SederhanAI',
    desc: 'Platform berbasis AI yang membantu masyarakat Indonesia memahami dokumen dengan bahasa yang lebih sederhana dan mudah dipahami. Mendukung input teks, PDF, dan foto dokumen dengan fokus pada aksesibilitas, edukasi publik, serta pengalaman pengguna yang intuitif.',
    tags: [
      'UI/UX Design',
      'React',
      'Gemini AI',
      'Accessibility',
      'Document Simplification',
    ],
    type: 'AI Web Platform',
    year: '2026',
    status: 'In Progress',
    color: '#4f8cff',
    accent: 'rgba(79,140,255,0.12)',
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '38px', bg: '#111827', radius: '8px 8px 0 0' },
      { x: 12, y: 10, w: '110px', h: '8px', bg: '#4f8cff55', radius: '4px' },
      { x: 0, y: 38, w: '100%', h: '130px', bg: '#0f172a' },
      { x: 24, y: 58, w: '52%', h: '14px', bg: '#4f8cff88', radius: '4px' },
      { x: 24, y: 82, w: '68%', h: '8px', bg: '#ffffff18', radius: '4px' },
      { x: 24, y: 98, w: '55%', h: '8px', bg: '#ffffff10', radius: '4px' },
      { x: 24, y: 122, w: '120px', h: '30px', bg: '#4f8cff', radius: '8px' },
      { x: 0, y: 168, w: '100%', h: '90px', bg: '#111827' },
      { x: 16, y: 184, w: '28%', h: '56px', bg: '#1e293b', radius: '10px' },
      { x: '36%', y: 184, w: '28%', h: '56px', bg: '#1e293b', radius: '10px' },
      { x: '68%', y: 184, w: '28%', h: '56px', bg: '#1e293b', radius: '10px' },
    ],
    links: {
      live: 'https://sederhanai-403394555424.asia-southeast1.run.app/',
      github: null,
    },
  },
  {
    id: 3,
    title: 'AetherPass',
    desc: 'Platform SaaS event premium bergaya dark-mode untuk seminar, konferensi tech, dan bootcamp. Menghadirkan pengalaman "Beyond Attendance" dengan tiket digital glassmorphism, seat picker interaktif, dan gamifikasi badge.',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Recharts'],
    type: 'SaaS Event Platform · Web App',
    year: '2026',
    status: 'Completed',
    color: '#7C3AED', // Electric Violet
    accent: 'rgba(124, 58, 237, 0.15)', // Subtle Violet glow
    mockupLines: [
      { x: 0, y: 0, w: '100%', h: '44px', bg: '#111118' }, // Surface Header
      { x: 12, y: 14, w: '120px', h: '8px', bg: '#7C3AED66', radius: '4px' }, // Logo placement (Violet)
      { x: 0, y: 44, w: '35%', h: '196px', bg: '#111118' }, // Sidebar Surface
      { x: 8, y: 54, w: '80%', h: '8px', bg: '#ffffff20', radius: '4px' },
      { x: 8, y: 70, w: '65%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: 8, y: 84, w: '70%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: 8, y: 100, w: '55%', h: '6px', bg: '#ffffff12', radius: '4px' },
      { x: '37%', y: 44, w: '63%', h: '196px', bg: '#0A0A0F' }, // Main Background (Darkest)
      { x: '39%', y: 54, w: '58%', h: '56px', bg: '#111118', radius: '8px' }, // Card 1
      { x: '39%', y: 118, w: '45%', h: '36px', bg: '#0FCCCE22', radius: '8px' }, // Accent Card (Neon Teal)
      { x: '39%', y: 162, w: '58%', h: '60px', bg: '#111118', radius: '8px' }, // Card 2
      { x: '41%', y: 170, w: '40%', h: '6px', bg: '#7C3AED88', radius: '4px' }, // Highlight line (Violet)
      { x: '41%', y: 182, w: '30%', h: '6px', bg: '#ffffff15', radius: '4px' },
    ],
    links: { live: 'https://aetherpass-403394555424.asia-southeast1.run.app', github: 'https://github.com/tehtongtjie/AetherPass' },
  },
  {
    id: 4,
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
    links: { live: null, github: 'https://github.com/tehtongtjie/BPR-NTB-PT' },
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
        {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
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

const filters = ['All', 'Web', 'Design', 'AI', 'Geospatial']

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
          href="https://github.com/tehtongtjie"
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
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
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
          </span >
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

        {/* Links — hanya render jika URL tersedia (bukan null) */}
        {(project.links.github || project.links.live) && (
          <div style={{ display: 'flex', gap: '8px' }}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  fontSize: '12px', color: 'var(--muted)',
                  border: '0.5px solid var(--border2)',
                  padding: '5px 12px', borderRadius: '6px',
                  transition: 'color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.borderColor = 'var(--border2)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  fontSize: '12px',
                  color: project.color,
                  background: project.accent,
                  border: `0.5px solid ${project.color}44`,
                  padding: '5px 12px', borderRadius: '6px',
                  transition: 'opacity 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <ExternalLink size={12} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}