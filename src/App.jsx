import { useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FadeIn from './components/FadeIn'

function App() {
  useLayoutEffect(() => {
    const section = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home'
    const target = document.getElementById(section)

    if (target) {
      target.scrollIntoView({ block: 'start' })
    }
  }, [])

  return (
    <div className=" text-text-primary min-h-screen">
      <Navbar />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </div>
  )
}

export default App