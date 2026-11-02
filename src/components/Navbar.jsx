import { useState, useEffect } from 'react'   // 👈 added useEffect

const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact']

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')   // 👈 new: tracks visible section
  // isMenuOpen is the current value (starts false = closed). setIsMenuOpen is the function we call to change it.

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  // storing links as an array lets us generate them with .map() instead of writing 5 <a> tags by hand
useEffect(() => {   // 👈 new block
  const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      const section = entry.target.id
      setActiveSection(section)
      window.history.replaceState(null, '', section === 'home' ? '/' : `/${section}`)
    }),
  { rootMargin: '-50% 0px -50% 0px' }
)
sectionIds.forEach((id) => {
  const el = document.getElementById(id)
  if (el) observer.observe(el)
})
  return () => observer.disconnect()
}, [])

const linkClass = (link) =>   // 👈 new: one function decides the color for ANY link
  `transition-colors duration-300 ${
    link.toLowerCase() === activeSection
      ? 'text-primary-start font-semibold'
      : 'text-text-muted hover:text-primary-start'
  }`


  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary-start/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
          Saif.dev
        </div>

        {/* DESKTOP LINKS - hidden on small screens, visible on medium+ */}
       <div className="hidden md:flex gap-6">
  {navLinks.map((link) => (
    <a
      key={link}
      href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
      className={linkClass(link)}   // 👈 replaced hardcoded className with linkClass(link)
    >
      {link}
    </a>
  ))}
</div>

        {/* CTA BUTTON - hidden on small screens */}
        <a
        href="/contact"
        className="hidden md:block bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-2 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-start/40 transition-all duration-300">
  Let's Talk
</a>

        {/* HAMBURGER ICON - only visible on small screens */}
        <button
          className="md:hidden text-text-primary text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU - only renders when isMenuOpen is true */}
   {isMenuOpen && (
  <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
    {navLinks.map((link) => (
      <a
        key={link}
        href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
        className={linkClass(link)}
        onClick={() => setIsMenuOpen(false)}
      >
        {link}
      </a>
    ))}
  </div>
)}
    </nav>
  )
}

export default Navbar