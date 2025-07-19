import React from 'react'
import '../styles/LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-text">
          <span>A</span>
          <span>A</span>
          <span>Y</span>
          <span>A</span>
          <span>N</span>
          <span>S</span>
          <span>H</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen