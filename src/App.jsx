import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact, { Footer } from './components/Contact'
import Signature from './components/Signature'
import { Divider } from './components/SectionWrapper'

// Dimuat terpisah karena Paper Crumple memakai three.js (ukurannya besar)
const Playground = lazy(() => import('./components/Playground'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Certifications />
        <Divider />
        <Projects />
        <Divider />
        <Suspense fallback={<div id="playground" style={{ minHeight: 600 }} />}>
          <Playground />
        </Suspense>
        <Divider />
        <Contact />
      </main>
      <Signature />
      <Footer />
    </>
  )
}
