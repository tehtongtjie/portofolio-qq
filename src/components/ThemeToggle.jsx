import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) { /* localStorage tidak tersedia */ }
  return 'light'
}

export default function ThemeToggle({ size = 36 }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) { /* abaikan */ }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
      title={isDark ? 'Tema terang' : 'Tema gelap'}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '999px',
        border: '1px solid var(--border2)',
        background: 'var(--surface2)',
        color: 'var(--text)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border2)' }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
