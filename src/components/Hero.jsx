import React, { useState, useEffect } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full Stack Developer & CS Student"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1O4gp8aIbS4XW-nKuXZal98LBum4Lqheb/view?usp=drive_link'
    link.download = 'https://drive.google.com/file/d/1O4gp8aIbS4XW-nKuXZal98LBum4Lqheb/view?usp=drive_link'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">
            Hi, I'm <span className="highlight">Aayansh</span>
          </h1>
          <h2 className="hero-title">
            {displayText}<span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Computer Science Engineering student at IIIT Kota, passionate about building innovative web applications and solving complex problems through code.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            <button 
              className="btn-download"
              onClick={handleDownloadResume}
            >
              <span className="download-icon">↓</span>
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero