import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Aayansh Chaudhary</h3>
            <p>Full Stack Developer & CS Student</p>
            <p>Indian Institute of Information Technology, Kota</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/a-ayansh" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/aayansh03" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:aayansh.chaudhary03@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Aayansh Chaudhary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer