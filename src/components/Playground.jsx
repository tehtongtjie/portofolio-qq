import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeader } from './SectionWrapper'
import PaperCrumple from './reactbits/PaperCrumple'
import FolderFloat from './reactbits/FolderFloat'

// Kertas catatan dibuat sebagai SVG, jadi tidak perlu file gambar tambahan
const noteSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="800" viewBox="0 0 640 800">
  <rect width="640" height="800" fill="#fbf8f1"/>
  ${Array.from({ length: 22 }, (_, i) => `<line x1="48" x2="592" y1="${170 + i * 28}" y2="${170 + i * 28}" stroke="#d9e3ef" stroke-width="2"/>`).join('')}
  <line x1="96" x2="96" y1="0" y2="800" stroke="#f0b4b4" stroke-width="2"/>
  <text x="120" y="110" font-family="Georgia, serif" font-size="46" fill="#1c1b22">Note to visitor,</text>
  <text x="120" y="222" font-family="Georgia, serif" font-size="30" fill="#3a3845">Hold &amp; drag this page</text>
  <text x="120" y="278" font-family="Georgia, serif" font-size="30" fill="#3a3845">to crumple it. Let go</text>
  <text x="120" y="334" font-family="Georgia, serif" font-size="30" fill="#3a3845">and it smooths back out.</text>
  <text x="120" y="446" font-family="Georgia, serif" font-size="30" fill="#3a3845">I design and build things</text>
  <text x="120" y="502" font-family="Georgia, serif" font-size="30" fill="#3a3845">that people in Lombok</text>
  <text x="120" y="558" font-family="Georgia, serif" font-size="30" fill="#3a3845">actually use.</text>
  <text x="120" y="690" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#a07a38">LRR</text>
  <text x="400" y="760" font-family="monospace" font-size="18" fill="#9a97a6">-8.5833, 116.1167</text>
</svg>`
const noteSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(noteSvg)}`

const folders = [
  { label: 'Frontend', sublabel: 'UI & web', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma'] },
  { label: 'Backend', sublabel: 'Data & API', items: ['Laravel', 'Node.js', 'PostgreSQL', 'Supabase', 'Kotlin'] },
  { label: 'GIS & AI', sublabel: 'Maps & models', items: ['PostGIS', 'Leaflet', 'QGIS', 'Gemini AI', 'Python'] },
]

export default function Playground() {
  return (
    <SectionWrapper id="playground">
      <SectionHeader label="06 — Playground" title="Go ahead, play with it" />

      <div className="pg-grid">
        <motion.div
          className="pg-card pg-paper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pg-hint">Hold &amp; drag</span>
          <PaperCrumple
            src={noteSrc}
            alt="Catatan untuk pengunjung"
            width={260}
            height={325}
            sceneHeight={440}
            paperColor="#fbf8f1"
            shadowOpacity={0.12}
          />
        </motion.div>

        <motion.div
          className="pg-card pg-folders"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pg-hint">Hover a folder · drag the notes</span>
          <p className="pg-caption">My toolbox</p>
          <div className="pg-folder-row">
            {folders.map(f => (
              <FolderFloat
                key={f.label}
                label={f.label}
                sublabel={f.sublabel}
                items={f.items}
                width={150}
                height={112}
                spread={130}
                closeOnSelect={false}
                folderColor="var(--accent)"
                frontColor="var(--folder-front)"
                paperColor="var(--surface)"
                itemColor="var(--surface)"
                itemTextColor="var(--text)"
                labelColor="var(--on-accent)"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .pg-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.9fr) minmax(300px, 1.4fr);
          gap: 1.25rem;
        }
        .pg-card {
          position: relative;
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
        }
        .pg-paper { color: var(--muted); }
        .pg-folders {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4.5rem 1.5rem 3rem;
          min-height: 440px;
          overflow: visible;
        }
        .pg-hint {
          position: absolute;
          top: 14px;
          left: 16px;
          z-index: 3;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 4px 10px;
          border: 0.5px solid var(--border2);
          border-radius: 999px;
          background: var(--bg);
        }
        .pg-caption {
          font-family: var(--serif);
          font-size: 1.6rem;
          color: var(--text);
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .pg-folder-row {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
        }
        @media (max-width: 820px) {
          .pg-grid { grid-template-columns: 1fr; }
          .pg-folder-row { gap: 2.5rem 1.5rem; }
        }
      `}</style>
    </SectionWrapper>
  )
}
