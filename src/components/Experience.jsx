function Experience() {
  const experience = [
    {
      role: 'React.js Developer Intern',
      company: 'Ghair Mulki Software House',
      duration: 'June 2026 – Currently',
      points: [
        'Studied core concepts of React.js, TailwindCSS, JavaScript and Git/GitHub',
        'Strengthened front-end foundations in React.js, TailwindCSS, and JavaScript',
        'Developed a responsive front-end website as part of company projects',
        
      ],
    },
    {
      role: 'Full Stack Development Training',
      company: 'Global Peace Chain',
      duration: 'Dec 2025 – March 2026',
      points: [
        'Studied core concepts of React.js, Node.js, MongoDB, and Git/GitHub',
        'Strengthened front-end foundations in HTML, CSS, JavaScript, and Bootstrap',
        'Developed a responsive front-end website as part of company projects',
        'Managed WordPress content — blogs, events, and announcements',
      ],
    },
    {
      role: 'WordPress Website Creator & Manager',
      company: 'Freelance',
      duration: 'March 2023 – Nov 2023',
      points: [
        'Built and maintained a blog-focused WordPress website from scratch',
        'Uploaded SEO-friendly blog posts to improve visibility',
        'Handled layout adjustments, plugins, and design tweaks',
      ],
    },
    {
      role: 'Graphic Designer',
      company: 'Local Business',
      duration: 'July 2022 – Jan 2023',
      points: [
        'Created visual content using CorelDRAW and InPage',
        'Composed content in both English and Urdu',
      ],
    },
  ]
  // Same array-of-objects pattern as Skills/Services — each entry has a nested
  // array (points) which we'll loop over with a SECOND .map() inside the first.

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        My{' '}
        <span className="bg-gradient-to-r from-secondary-start to-secondary-end bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      {/* border-l creates the vertical timeline LINE running down the left side */}
      <div className="border-l-2 border-primary-start/30 ml-3">
        {experience.map((job) => (
          <div key={job.role} className="relative pl-8 pb-12 last:pb-0">
            {/* The dot marker sitting ON TOP of the vertical line */}
            <div className="absolute left-0 top-1 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-start to-primary-end" />

            <span className="text-xs text-accent font-semibold">{job.duration}</span>
            <h3 className="text-xl font-bold mt-1">{job.role}</h3>
            <p className="text-primary-end text-sm mb-3">{job.company}</p>

            <ul className="space-y-1">
              {job.points.map((point) => (
                <li key={point} className="text-text-muted text-sm flex gap-2">
                  <span className="text-primary-start">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience