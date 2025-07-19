import React, { useState, useEffect, useRef } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const subject = `Message from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:aayansh.chaudhary03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:aayansh.chaudhary03@gmail.com" className="contact-value">
                  aayansh.chaudhary03@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Meerut, Uttar Pradesh, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <a href="https://linkedin.com/in/aayansh03" target="_blank" rel="noopener noreferrer" className="contact-value">
                  linkedin.com/in/aayansh03
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub</span>
                <a href="https://github.com/a-ayansh" target="_blank" rel="noopener noreferrer" className="contact-value">
                  github.com/a-ayansh
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact