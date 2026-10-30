import { useEffect, useRef } from 'react'

// Kotak batas kira-kira Pulau Lombok, dipakai untuk label koordinat
const BBOX = { lonMin: 115.82, lonMax: 116.72, latMax: -8.2, latMin: -8.95 }
const GAP = 46          // jarak antar titik
const RADIUS = 170      // radius pengaruh kursor
const LINK = 70         // jarak maksimal garis antar titik

function readColors() {
  const cs = getComputedStyle(document.documentElement)
  return {
    accent: cs.getPropertyValue('--accent-rgb').trim() || '201, 169, 110',
    ink: cs.getPropertyValue('--ink-rgb').trim() || '255, 255, 255',
  }
}

export default function HeroCanvas({ onCoord }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0, h = 0, dpr = 1
    let nodes = []
    let pings = []
    let colors = readColors()
    const mouse = { x: -9999, y: -9999, active: false }
    let raf = null
    let visible = true

    const build = () => {
      const rect = section.getBoundingClientRect()
      w = rect.width; h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr; canvas.height = h * dpr
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      nodes = []
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const bx = x + (Math.random() - 0.5) * GAP * 0.5
          const by = y + (Math.random() - 0.5) * GAP * 0.5
          nodes.push({ bx, by, x: bx, y: by, phase: Math.random() * Math.PI * 2 })
        }
      }
    }

    const toCoord = (x, y) => {
      const lon = BBOX.lonMin + (x / w) * (BBOX.lonMax - BBOX.lonMin)
      const lat = BBOX.latMax - (y / h) * (BBOX.latMax - BBOX.latMin)
      return `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const { accent, ink } = colors

      // gerak titik
      for (const n of nodes) {
        let tx = n.bx + Math.sin(t / 1800 + n.phase) * 3
        let ty = n.by + Math.cos(t / 2100 + n.phase) * 3
        if (mouse.active) {
          const dx = n.bx - mouse.x, dy = n.by - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < RADIUS && d > 0.01) {
            const f = (1 - d / RADIUS) * 22
            tx += (dx / d) * f; ty += (dy / d) * f
          }
        }
        n.x += (tx - n.x) * 0.12
        n.y += (ty - n.y) * 0.12
      }

      // garis jaringan di sekitar kursor
      if (mouse.active) {
        const near = nodes.filter(n => Math.hypot(n.x - mouse.x, n.y - mouse.y) < RADIUS)
        ctx.lineWidth = 1
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const a = near[i], b = near[j]
            const d = Math.hypot(a.x - b.x, a.y - b.y)
            if (d < LINK) {
              const fade = 1 - Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) / RADIUS
              ctx.strokeStyle = `rgba(${accent}, ${Math.max(0, fade) * 0.45})`
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
            }
          }
        }
      }

      // titik
      for (const n of nodes) {
        const d = mouse.active ? Math.hypot(n.x - mouse.x, n.y - mouse.y) : 9999
        if (d < RADIUS) {
          const k = 1 - d / RADIUS
          ctx.fillStyle = `rgba(${accent}, ${0.35 + k * 0.6})`
          ctx.beginPath(); ctx.arc(n.x, n.y, 1.3 + k * 1.8, 0, Math.PI * 2); ctx.fill()
        } else {
          ctx.fillStyle = `rgba(${ink}, 0.12)`
          ctx.beginPath(); ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2); ctx.fill()
        }
      }

      // ping (efek drop pin saat klik)
      pings = pings.filter(p => t - p.start < 1600)
      for (const p of pings) {
        const age = (t - p.start) / 1600
        for (let r = 0; r < 3; r++) {
          const a = Math.max(0, age - r * 0.15)
          if (a <= 0) continue
          ctx.strokeStyle = `rgba(${accent}, ${(1 - a) * 0.7})`
          ctx.lineWidth = 1.5
          ctx.beginPath(); ctx.arc(p.x, p.y, a * 90, 0, Math.PI * 2); ctx.stroke()
        }
        ctx.fillStyle = `rgba(${accent}, ${1 - age})`
        ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fill()
        ctx.font = '11px "DM Mono", monospace'
        ctx.fillStyle = `rgba(${ink}, ${(1 - age) * 0.8})`
        ctx.fillText(p.label, p.x + 10, p.y - 10)
      }
    }

    const loop = (t) => {
      draw(t)
      raf = visible && !document.hidden ? requestAnimationFrame(loop) : null
    }
    const start = () => { if (!raf && !reduce) raf = requestAnimationFrame(loop) }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = mouse.y >= 0 && mouse.y <= h
      if (onCoord) onCoord(mouse.active ? toCoord(mouse.x, mouse.y) : null)
      if (reduce) draw(performance.now())
    }
    const onLeave = () => { mouse.active = false; if (onCoord) onCoord(null) }
    const onDown = (e) => {
      if (e.target.closest('a, button')) return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      pings.push({ x, y, start: performance.now(), label: toCoord(x, y) })
      if (pings.length > 6) pings.shift()
      start()
    }

    build()
    if (reduce) draw(0); else start()

    const ro = new ResizeObserver(() => { build(); if (reduce) draw(0) })
    ro.observe(section)
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start() })
    io.observe(section)
    const mo = new MutationObserver(() => { colors = readColors(); if (reduce) draw(0) })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    const onVis = () => { if (!document.hidden) start() }
    document.addEventListener('visibilitychange', onVis)

    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    section.addEventListener('pointerdown', onDown)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect(); io.disconnect(); mo.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      section.removeEventListener('pointerdown', onDown)
    }
  }, [onCoord])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
    />
  )
}
