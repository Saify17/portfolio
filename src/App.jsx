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
  return (
    <div className="bg-background text-text-primary min-h-screen">
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