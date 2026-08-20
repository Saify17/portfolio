function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Saify17' },
    { name: 'Email', url: 'mailto:saifali12082@gmail.com' },
    { name: 'Phone', url: 'tel:+923423663400' },
  ]

  return (
    <footer className="border-t border-primary-start/10 px-6 py-10 text-center">
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary-start transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-text-muted text-sm">© 2026 Saif ur Rehman. All rights reserved.</p>
    </footer>
  )
}

export default Footer