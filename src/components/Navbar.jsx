import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.1rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(10,10,15,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--accent)' }}>
        LRR.
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: 'var(--muted)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', display: 'none', flexDirection: 'column',
          gap: '5px', padding: '4px',
        }}
        className="nav-hamburger"
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1.5px',
            background: 'var(--text)', borderRadius: '2px',
            transition: 'all 0.3s',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translateY(9px)'
              : i === 2 ? 'rotate(-45deg) translateY(-9px)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '0.5px solid var(--border)',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--muted)', fontSize: '14px', letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        nav { padding: 1.1rem 3rem; }
        @media (max-width: 768px) { nav { padding: 1rem 1.5rem; } }
      `}</style>
    </motion.nav>
  )
}
