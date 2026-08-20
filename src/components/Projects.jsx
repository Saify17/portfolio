import ydaImg from '../assets/projects/yda.png'
import foodpandaImg from '../assets/projects/foodpanda.png'
import currencyImg from '../assets/projects/currency.png'
import guidingzoneImg from '../assets/projects/guidingzone.png'

function Projects() {
  const projects = [
    {
      title: 'Youth Diplomatic Academy',
      desc: 'Professional organization website with responsive design and modern UI/UX.',
      image: ydaImg,
      tags: ['HTML', 'CSS', 'Bootstrap', 'JS'],
      link: 'https://youthdiplomaticacademy.netlify.app',
    },
    {
      title: 'FoodPanda Clone',
      desc: 'Full-featured food delivery app with login, cart, favorites, and search — using local storage.',
      image: foodpandaImg,
      tags: ['JavaScript', 'Local Storage'],
      link: 'https://saify17.github.io/FoodPanda/',
    },
    {
      title: 'Currency Converter',
      desc: 'Real-time currency conversion with live exchange rates via API.',
      image: currencyImg,
      tags: ['API', 'JavaScript'],
      link: 'https://saify17.github.io/currency-converter/',
    },
    {
      title: 'Guiding Zone',
      desc: 'Education course landing page with stats, career highlights, and demo booking form.',
      image: guidingzoneImg,
      tags: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://saify17.github.io/GuidingZone/',
    },
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured{' '}
        <span className="bg-gradient-to-r from-primary-start to-secondary-end bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          // flex + flex-col + h-full: makes every card the SAME height as its
          // tallest neighbor in the row, and stacks its content vertically
          <div
            key={project.title}
            className="bg-surface border border-primary-start/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-start hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-start/20 flex flex-col h-full"
          >
            {/* Image wrapper - overflow-hidden clips the zoomed image so it never spills past this box */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* flex-1 + flex-col: this content area grows to fill remaining space,
                so mt-auto on the button below actually has room to push down into */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-text-muted text-sm mb-4">{project.desc}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-start/20 text-primary-end text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* mt-auto pushes this button to the bottom of the flex column,
                  regardless of how much text sits above it */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-2 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-start/40 transition-all duration-300"
              >
                View Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects