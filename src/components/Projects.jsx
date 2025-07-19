import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Missing Alert System',
      description: 'A comprehensive missing person reporting and case management platform designed to help communities locate missing individuals quickly and efficiently. Features secure authentication, real-time case tracking, and intelligent search capabilities.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/a-ayansh/social-alert',
      live: '#'
    },
    {
      id: 2,
      title: 'MMO Matchmaking Engine',
      description: 'A real-time matchmaking engine for MMO games, offering sub-second latency for player pairing. Features intelligent queue expansion, adjustable K-factor system, and real-time communication.',
      technologies: ["Node.js", "Socket.IO", "Redis", "RabbitMQ", "Docker"],
      github: 'https://github.com/a-ayansh/mmo-engine',
      live: '#'
    },
    {
      id: 3,
      title: 'Task Organizer',
      description: 'A task and event management web app with secure authentication, priority sorting, and RESTful APIs. Built for seamless user experience using MERN stack.',
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "bcrypt"],
      github: 'https://github.com/a-ayansh/task-org',
      live: '#'
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, dark theme, and modern design principles. Built with React and optimized for all devices.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      github: 'https://github.com/a-ayansh/portfolio',
      live: '#'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects