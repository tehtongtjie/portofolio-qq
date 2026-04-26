import { SectionWrapper } from './SectionWrapper'
import { Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

// --- SVG Icons (Perbaikan Path & ViewBox) ---
const LinkedinIcon = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const GithubIcon = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const InstagramIcon = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const WhatsAppIcon = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
)

// --- Contact Data (Update Placeholder Disini) ---
const contactLinks = [
  {
    Icon: LinkedinIcon,
    label: 'linkedin.com/in/lalurifqiramadhan',
    href: 'https://www.linkedin.com/in/lalurifqiramadhan',
  },
  {
    Icon: GithubIcon,
    label: 'github.com/tehtongtjie',
    href: 'https://github.com/tehtongtjie',
  },
  {
    Icon: InstagramIcon,
    label: '@lalurifqi_', // Ganti dengan username asli
    href: 'https://www.instagram.com/lalurifqi_', // Ganti link asli
  },
  {
    Icon: WhatsAppIcon,
    label: '+62 857 3805 1036', // Ganti dengan nomor asli
    href: 'https://wa.me/6285738051036', // Ganti dengan nomor asli (format 62...)
  },
  {
    Icon: Mail,
    label: 'lalurfqi22@gmail.com',
    href: 'mailto:lalurfqi22@gmail.com',
  },
  {
    Icon: MapPin,
    label: 'Mataram, NTB, Indonesia',
    href: null,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="contact-glow" aria-hidden="true" />

        <div className="contact-content-left">
          <p className="contact-label">05 — Contact</p>
          <h2 className="contact-title">
            Let's work <em className="text-accent-gradient">together</em>
          </h2>
          <p className="contact-desc">
            I'm always open to meaningful collaborations, internship opportunities, or just a good conversation about design and technology. Feel free to reach out!
          </p>
        </div>

        <div className="contact-links-container">
          {contactLinks.map(({ Icon, label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-link-item interactive"
              >
                <div className="icon-wrapper">
                  <Icon size={18} className="contact-icon" />
                </div>
                <span>{label}</span>
              </a>
            ) : (
              <div key={label} className="contact-link-item static">
                <div className="icon-wrapper">
                  <Icon size={18} className="contact-icon" />
                </div>
                <span>{label}</span>
              </div>
            )
          )}
        </div>
      </motion.div>

      <style>{`
        .contact-card {
          position: relative;
          background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: clamp(2rem, 6vw, 4rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 3rem;
          overflow: hidden;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .contact-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent, #8b5cf6);
          filter: blur(100px);
          opacity: 0.1;
          top: -150px;
          left: -150px;
          pointer-events: none;
        }

        .contact-content-left {
          max-width: 460px;
          z-index: 1;
        }

        .contact-label {
          font-family: var(--mono, monospace);
          font-size: 12px;
          color: var(--accent, #8b5cf6);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: clamp(2.2rem, 5vw, 3rem);
          color: #fff;
          margin-bottom: 1.2rem;
          line-height: 1.1;
        }

        .text-accent-gradient {
          font-style: italic;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-desc {
          color: var(--muted, #a1a1aa);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .contact-links-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1;
          min-width: 260px;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a1a1aa;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-link-item.interactive:hover {
          color: #fff;
          transform: translateX(6px);
        }

        .contact-link-item.interactive:hover .icon-wrapper {
          background: rgba(139, 92, 246, 0.15);
          border-color: #8b5cf6;
        }

        .contact-link-item.interactive:hover .contact-icon {
          color: #8b5cf6;
        }

        @media (max-width: 850px) {
          .contact-card { flex-direction: column; align-items: flex-start; }
          .contact-links-container { width: 100%; }
        }
      `}</style>
    </SectionWrapper>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <a href="#hero" className="footer-logo">LRR.</a>
        
        <p className="footer-copyright">
          © {new Date().getFullYear()} Lalu Rifqi Ramadhan. <br className="mobile-break" /> Built with React & Framer Motion.
        </p>

        <a href="#hero" className="back-to-top">
          Back to top ↑
        </a>
      </div>

      <style>{`
        .site-footer {
          padding: 3rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 4rem;
        }
        .footer-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-logo {
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }
        .footer-copyright {
          font-size: 13px;
          color: #71717a;
          text-align: center;
        }
        .back-to-top {
          font-size: 11px;
          text-transform: uppercase;
          color: #71717a;
          text-decoration: none;
          letter-spacing: 1px;
        }
        @media (max-width: 640px) {
          .footer-content { flex-direction: column; gap: 1.5rem; }
          .mobile-break { display: block; }
        }
      `}</style>
    </footer>
  )
}