function Services() {
  const services = [
    {
      icon: '💻',
      title: 'Frontend Development',
      desc: 'Building responsive, pixel-perfect interfaces with React and Tailwind CSS that work on any device.',
    },
    {
      icon: '⚡',
      title: 'Full Stack Apps',
      desc: 'End-to-end applications using the MERN stack — from database design to a working UI.',
    },
    {
      icon: '🔧',
      title: 'Website Maintenance',
      desc: 'Fixing bugs, updating content, and keeping WordPress or custom sites running smoothly.',
    },
  ]

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        What I{' '}
        <span className="bg-gradient-to-r from-secondary-start to-secondary-end bg-clip-text text-transparent">
          Offer
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-surface border border-secondary-start/20 rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary-start hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary-start/20"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-text-muted text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services