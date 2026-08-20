import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // ONE state object holds all 3 fields together, instead of 3 separate useState calls.
  // Cleaner when fields are related and submitted as a group.

  const [submitted, setSubmitted] = useState(false)

  // Runs on every keystroke in any input. "e" is the event object React gives us automatically.
  const handleChange = (e) => {
    const { name, value } = e.target
    // e.target is the actual input the user typed in. Its "name" attribute (below in JSX)
    // tells us WHICH field changed, "value" is what they typed.
    setFormData((prev) => ({ ...prev, [name]: value }))
    // ...prev spreads the existing object (keeps other fields untouched),
    // [name]: value overwrites just the one field that changed. This is called
    // a "computed property key" — it lets a variable (name) become an object key.
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  // async because we now WAIT for a network response instead of finishing instantly

  try {
    const response = await fetch('https://formspree.io/f/myeglorr', {
      // ⚠️ Replace xyzabcde with YOUR actual endpoint from Step 1
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitted(true)
    } else {
      alert('Something went wrong. Please try again or email me directly.')
    }
  } catch (error) {
    alert('Network error. Please check your connection and try again.')
  }
}

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Get In{' '}
        <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
          Touch
        </span>
      </h2>
      <p className="text-text-muted text-center mb-10">
        Have a project in mind? Let's talk.
      </p>

      {submitted ? (
        // Ternary: if submitted is true, show this thank-you block instead of the form
        <div className="bg-surface border border-primary-start/30 rounded-xl p-8 text-center">
          <p className="text-lg font-semibold text-primary-end">Thanks for reaching out!</p>
          <p className="text-text-muted text-sm mt-2">I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-text-muted mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-primary-start/20 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-start transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-text-muted mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-primary-start/20 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-start transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block text-sm text-text-muted mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-surface border border-primary-start/20 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-start transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-start/40 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact