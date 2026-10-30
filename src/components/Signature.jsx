import { useEffect, useRef, useState } from 'react'
import TechText from './reactbits/TechText'
import useTheme from './useTheme'

// Wordmark besar interaktif di bagian paling bawah halaman
export default function Signature() {
  const theme = useTheme()
  const dark = theme === 'dark'
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  // Baru dirender saat terlihat, supaya animasi intro tidak lewat begitu saja
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="signature" aria-label="Lalu Rifqi Ramadhan">
      <div className="signature-inner" ref={ref}>
        {show && <TechText
          text="RIFQI"
          fontFamily="Sora, sans-serif"
          fontWeight={600}
          fontSize={220}
          letterSpacing={-0.04}
          color={dark ? '#f0eee8' : '#1c1b22'}
          accentColor={dark ? '#c9a96e' : '#a07a38'}
          reach={180}
          intro="assemble"
          introDuration={1.6}
          labels
          specks={12}
        />}
      </div>
      <p className="signature-hint">Hover the letters · click to ripple · drag them around</p>

      <style>{`
        .signature {
          padding: 3rem 1.5rem 1rem;
          overflow: hidden;
        }
        .signature-inner {
          max-width: 1180px;
          height: clamp(150px, 24vw, 280px);
          margin: 0 auto;
        }
        .signature-hint {
          text-align: center;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  )
}
