import React, { useEffect, useRef } from 'react'
import '../styles/About.css'
import pfp from '../assets/pfp.jpg'

const About = () => {
  const sectionRef = useRef(null)

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

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Aayansh_Resume.pdf'
    link.download = 'Aayansh_Chaudhary_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
I'm currently pursuing a B.Tech from IIIT Kota, where I continue to sharpen my skills and explore new areas of computer science. As a DSA enthusiast, I enjoy diving into data structures and algorithms to solve challenging problems and improve my problem-solving abilities.            </p>
            <p>
When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development. I believe in continuous learning and staying updated with the ever-evolving tech landscape.            </p>
  
          </div>
          <div className="about-visual">
            <div className="profile-placeholder">
             <img src={pfp} alt="Profile" className="profile-img" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About