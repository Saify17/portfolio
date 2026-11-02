function Hero() {
  return (
    <section id="home" className="min-h-[600px] flex items-center relative overflow-hidden px-6 py-16">
      
      {/* Background glow — positioned behind content using absolute + z-index */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary-start via-secondary-start to-secondary-end -z-10" />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black leading-tight mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            Saif ur Rehman
          </span>
        </h1>

        <p className="text-lg text-text-muted max-w-xl mb-8">
          Full Stack Developer crafting responsive web experiences with React.
          I build applications that solve real problems — from food delivery
          apps to educational platforms.
        </p>

        <div className="flex gap-4 flex-wrap">
         <a href="/projects"
          className="bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-start/40 transition-all duration-300">
            View Projects
          </a>
          <a href="/contact" className="bg-gradient-to-r from-secondary-start to-secondary-end text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-start/40 transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero