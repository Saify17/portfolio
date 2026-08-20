function Skills() {
  const skills = [
    { icon: '⚛️', name: 'React.js', desc: 'Building modern, interactive user interfaces with hooks', percent: 85 },
    { icon: '🎨', name: 'Tailwind CSS', desc: 'Crafting responsive designs with utility-first CSS', percent: 90 },
    { icon: '⚙️', name: 'JavaScript', desc: 'Solid JS fundamentals and modern ES6+ concepts', percent: 88 },
    { icon: '🗄️', name: 'MongoDB', desc: 'NoSQL database design and management', percent: 75 },
    { icon: '🔌', name: 'Node.js', desc: 'Building scalable backend applications', percent: 78 },
    { icon: '📚', name: 'HTML & CSS', desc: 'Semantic HTML and advanced CSS techniques', percent: 95 },
  ]
  // Storing all 6 skills as objects in an array — each object holds everything one card needs.
  // This means the CARD ITSELF only needs to be written ONCE below, then .map() stamps it out 6 times with different data.

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        My{' '}
        <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-surface border border-primary-start/20 rounded-xl p-6 transition-all duration-300 hover:border-primary-start hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-start/20"
          >
            <div className="text-3xl mb-3">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-text-muted text-sm mb-4">{skill.desc}</p>

            {/* Progress bar track */}
            <div className="bg-primary-start/10 h-2 rounded-full overflow-hidden mb-2">
              {/* Progress bar fill - width is set dynamically from skill.percent */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-start to-primary-end"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
            <span className="text-xs text-text-muted">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills