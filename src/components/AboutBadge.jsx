import { lazy, Suspense } from 'react'
import cardFront from '../assets/lanyard/card-front.jpg'
import cardBack from '../assets/lanyard/card-back.jpg'
import strap from '../assets/lanyard/lanyard.jpg'

// Lanyard memakai three.js, jadi dimuat terpisah supaya halaman awal tetap ringan
const Lanyard = lazy(() => import('./reactbits/Lanyard'))

export default function AboutBadge() {
  return (
    <div className="about-badge">
      <Suspense fallback={null}>
        <Lanyard
          frontImage={cardFront}
          backImage={cardBack}
          strapImage={strap}
          strapColor="#1c1b22"
          metal="gold"
          finish="glossy"
          size={0.72}
          strapLength={0.42}
          strapWidth={0.6}
          breeze={0.4}
        />
      </Suspense>
      <span className="about-badge-hint">Drag · throw · click to flip</span>

      <style>{`
        .about-badge {
          position: relative;
          height: 620px;
          border-radius: 18px;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 35%, rgba(var(--accent-rgb), 0.10), transparent 65%),
            var(--surface);
          border: 0.5px solid var(--border);
        }
        .about-badge-hint {
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 4px 12px;
          border: 0.5px solid var(--border2);
          border-radius: 999px;
          background: var(--bg);
          pointer-events: none;
          white-space: nowrap;
        }
        @media (max-width: 900px) {
          .about-badge { height: 520px; }
        }
      `}</style>
    </div>
  )
}
