import React from 'react';
import './App.css';

const App = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Index Section */}
      <div className="index-container">
        <div className="index-content">
          <div className="left-section">
            <h1>Hockey Lam</h1>
            <img src="/assets/mypicture.png" alt="Your Name" className="profile-picture" />
          </div>
          <div className="right-section">
            <button onClick={() => handleScroll('about')} className="scroll-button">About</button>
            <button onClick={() => handleScroll('skills')} className="scroll-button">Skills</button>
            <button onClick={() => handleScroll('experiences')} className="scroll-button">Experiences</button>
            <button onClick={() => handleScroll('contact')} className="scroll-button">Contact</button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="sections-container">
        <div id="about" className="section about-section">About Section</div>
        <div id="skills" className="section skills-section">
          <h2 className="section-title">Skills Section</h2>
          <div className="skills-container">
            <div className="skill-box">C++</div>
            <div className="skill-box">Python</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">HTML</div>
            <div className="skill-box">React Native</div>
            <div className="skill-box">MySQL</div>
            <div className="skill-box">React</div>
          </div>
        </div>
        <div id="experiences" className="section experiences-section">Experiences Section</div>
        <div id="contact" className="section contact-section">Contact Section</div>
      </div>
    </div>
  );
};

export default App;