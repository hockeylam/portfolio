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
          <h1 className="section-title">Skills</h1>
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
        <div id="experiences" className="section experiences-section">
          <h1 className="section-title">Experiences</h1>
          <div className="experiences-container">
            {/* Fintech Summer Internship */}
            <div className="experience-item">
              <img
                src="/assets/fintech.png"
                alt="Fintech Internship"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">Fintech Summer Internship</h3>
                <div className="tags-container">
                  <div className="tag">C++</div>
                  <div className="tag">React</div>
                  <div className="tag">Python</div>
                </div>
                <p className="experience-description">
                  Gained hands-on experience in financial technology, developed
                  automation tools, and collaborated with a team to improve backend
                  systems.
                </p>
              </div>
            </div>

            {/* Chameleon Wallpaper Changer */}
            <div className="experience-item">
              <img
                src="/assets/chameleon.png"
                alt="Chameleon Wallpaper Changer"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">Chameleon Wallpaper Changer</h3>
                <div className="tags-container">
                  <div className="tag">C++</div>
                  <div className="tag">React</div>
                  <div className="tag">Python</div>
                </div>
                <p className="experience-description">
                  Created a dynamic wallpaper changer application with customizable
                  themes and automation options, using React Native and Python.
                </p>
              </div>
            </div>

            {/* Airport Database Design */}
            <div className="experience-item">
              <img
                src="/assets/airport.png"
                alt="Airport Database Design"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">Airport Database Design</h3>
                <div className="tags-container">
                  <div className="tag">C++</div>
                  <div className="tag">React</div>
                  <div className="tag">Python</div>
                </div>
                <p className="experience-description">
                  Designed and implemented an efficient relational database system for
                  managing airport operations, ensuring scalability and data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="section contact-section">Contact Section</div>
      </div>
    </div>
  );
};

export default App;