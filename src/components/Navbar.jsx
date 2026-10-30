import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = links.map(l => l.href.slice(1))
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.85rem 2.5rem' : '1.25rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled
            ? 'var(--nav-bg)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(var(--ink-rgb), 0.06)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.35)'
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMenuOpen(false)
          }}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.4rem',
            fontWeight: 600,
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            position: 'relative',
            zIndex: 10,
          }}
        >
          LRR
          <span
            style={{
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: '100%',
              height: '1.5px',
              background: 'var(--accent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease',
            }}
            className="logo-underline"
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  position: 'relative',
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  transition: 'color 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            )
          })}

          <div style={{ marginLeft: '0.75rem' }}>
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            style={{
              marginLeft: '0.75rem',
              padding: '0.55rem 1.35rem',
              background: 'var(--accent)',
              color: 'var(--on-accent)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '999px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 0 0 rgba(var(--accent-rgb), 0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(var(--accent-rgb), 0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 0 0 transparent'
            }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '6px',
            padding: '8px',
            zIndex: 10,
            width: 40,
            height: 40,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen
                  ? i === 0 ? 45 : i === 2 ? -45 : 0
                  : 0,
                y: menuOpen
                  ? i === 0 ? 8 : i === 2 ? -8 : 0
                  : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
                scaleX: menuOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: 'var(--text)',
                borderRadius: 2,
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'var(--menu-bg)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  delay: 0.05 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  color: activeSection === l.href.slice(1) ? 'var(--accent)' : 'var(--text)',
                  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  padding: '0.6rem 1.5rem',
                  transition: 'color 0.2s ease',
                }}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                marginTop: '2rem',
                padding: '0.9rem 2.2rem',
                background: 'var(--accent)',
                color: 'var(--on-accent)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '999px',
              }}
            >
              Let's Talk
            </motion.a>

            <div style={{ marginTop: '1.25rem' }}>
              <ThemeToggle size={44} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        nav a:hover .logo-underline {
          transform: scaleX(1) !important;
        }

        /* Smooth scroll for the whole page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}