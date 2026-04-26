import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function SectionWrapper({ children, id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ padding: '5rem 0', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem' }}>
        {children}
      </div>
      <style>{`@media(max-width:768px){ section > div { padding: 0 1.5rem !important; } }`}</style>
    </motion.section>
  )
}

export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px', color: 'var(--accent)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: '0.6rem',
      }}>{label}</p>
      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
        color: 'var(--text)', lineHeight: 1.1,
      }}>{title}</h2>
    </div>
  )
}

export function Divider() {
  return <div style={{ width: '100%', height: '0.5px', background: 'var(--border)' }} />
}
