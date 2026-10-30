import { useEffect, useState } from 'react'

// Membaca tema aktif (light/dark) dari atribut data-theme di <html>
export default function useTheme() {
  const read = () =>
    (typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-theme')) || 'light'
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    const mo = new MutationObserver(() => setTheme(read()))
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => mo.disconnect()
  }, [])

  return theme
}
