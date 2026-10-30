import LogoLoop from './reactbits/LogoLoop'

// Marquee nama penerbit sertifikat
const issuers = ['Google', 'Dicoding Indonesia', 'PT Bank Jago Tbk', 'AWS', 'Google Student Ambassador', 'Universitas Gadjah Mada']

export default function CertMarquee() {
  const logos = issuers.map(name => ({
    title: name,
    node: (
      <span className="cert-issuer">
        <span className="cert-issuer-dot" />
        {name}
      </span>
    ),
  }))

  return (
    <div className="cert-marquee">
      <LogoLoop logos={logos} speed={45} gap={44} logoHeight={22} pauseOnHover hoverSpeed={12} fadeOut fadeOutWidth={0.15} ariaLabel="Penerbit sertifikat" />
      <style>{`
        .cert-marquee {
          margin: -1.25rem 0 2rem;
          padding: 0.9rem 0;
          border-top: 0.5px solid var(--border);
          border-bottom: 0.5px solid var(--border);
        }
        .cert-issuer {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--serif);
          font-size: 1.25rem;
          color: var(--muted);
          white-space: nowrap;
        }
        .cert-issuer-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
        }
      `}</style>
    </div>
  )
}
