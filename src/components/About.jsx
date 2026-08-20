function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        About{' '}
        <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="text-center space-y-4">
        <p className="text-text-muted text-base leading-relaxed">
          I'm an aspiring MERN full stack developer with strong front-end
          skills and growing expertise in back-end technologies. With
          hands-on experience at Global Peace Chain and multiple project
          completions, I'm passionate about building modern web applications
          that make a real impact.
        </p>
        <p className="text-text-muted text-base leading-relaxed">
          Currently based in Multan, Pakistan, I'm constantly learning and
          pushing myself to create better solutions every day.
        </p>
      </div>
    </section>
  )
}

export default About