import { SectionWrapper, SectionHeader } from './SectionWrapper'

const certs = [
  { icon: '🧠', title: 'Belajar Penggunaan Generative AI', issuer: 'Dicoding Indonesia', date: 'Apr 2026 · Valid until Apr 2029', id: '1OP8R45JVZQK' },
  { icon: '⚡', title: 'AI Praktis untuk Produktivitas', issuer: 'Dicoding Indonesia', date: 'Apr 2026 · Valid until Apr 2029', id: 'QLZ99V237Z5D' },
  { icon: '🏦', title: 'Banking 101', issuer: 'PT Bank Jago Tbk', date: 'Feb 2026' },
  { icon: '🔄', title: 'Agile and Lean Development Culture', issuer: 'PT Bank Jago Tbk', date: 'Feb 2026' },
  { icon: '🤖', title: 'GSA AI Mini Bootcamp: Google AI for Education & Career Planning', issuer: 'Google Student Ambassador Indonesia', date: 'Nov 2025 · Valid until Nov 2030' },
  { icon: '🚀', title: 'Akselerasi Karier & Produktivitas dengan Gemini', issuer: 'Dicoding Indonesia', date: 'Oct 2025 · Valid until Oct 2028', id: '0LZ056N2NX65' },
  { icon: '🐍', title: 'Programming with Python Fundamentals', issuer: 'Dicoding Indonesia', date: 'Sep 2025 · Valid until Sep 2028', id: '07Z6JVNV2XQR' },
  { icon: '🎓', title: 'Gemini Certified Educator', issuer: 'Google', date: 'Sep 2025 · Valid until Sep 2028' },
  { icon: '💡', title: 'AI Fundamentals', issuer: 'Dicoding Indonesia', date: 'Sep 2025 · Valid until Sep 2028', id: '98XWOG979ZM3' },
  { icon: '☁️', title: 'Basic Cloud & Generative AI on AWS', issuer: 'Dicoding Indonesia', date: 'Aug 2025 · Valid until Aug 2028', id: '72ZDK9EYVPYW' },
  { icon: '🌐', title: 'Fundamentals of JavaScript Programming', issuer: 'Dicoding Indonesia', date: 'Sep 2025 · Valid until Sep 2028', id: '0LZ05G2E3X65' },
  { icon: '📷', title: 'Lomba Fotografi — Juara 3', issuer: 'TERAGAMA UGM', date: 'Jan 2022' },
]

export default function Certifications() {
  return (
    <SectionWrapper id="certs">
      <SectionHeader label="04 — Certifications" title="Licenses & credentials" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
      }}>
        {certs.map((cert, i) => (
          <CertCard key={i} cert={cert} />
        ))}
      </div>
    </SectionWrapper>
  )
}

function CertCard({ cert }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '0.5px solid var(--border)',
        borderRadius: '14px',
        padding: '1.25rem',
        display: 'flex', gap: '1rem', alignItems: 'flex-start',
        transition: 'border-color 0.25s, transform 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{
        minWidth: '38px', height: '38px', borderRadius: '8px',
        background: 'var(--surface2)', border: '0.5px solid var(--border2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '16px',
      }}>
        {cert.icon}
      </div>
      <div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4, marginBottom: '4px' }}>
          {cert.title}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '3px' }}>
          {cert.issuer}
        </p>
        <p style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          {cert.date}
        </p>
        {cert.id && (
          <p style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'var(--mono)', marginTop: '2px', opacity: 0.6 }}>
            ID: {cert.id}
          </p>
        )}
      </div>
    </div>
  )
}
