import { useState } from 'react'
// useState is a React Hook — it lets a component remember a value between renders (here, whether the mobile menu is open or closed)

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // isMenuOpen is the current value (starts false = closed). setIsMenuOpen is the function we call to change it.

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']
  // storing links as an array lets us generate them with .map() instead of writing 5 <a> tags by hand

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
              href={`#${link.toLowerCase()}`}
              className="text-text-muted hover:text-primary-start transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA BUTTON - hidden on small screens */}
        <a
        href="#contact"
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
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-text-muted hover:text-primary-start"
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