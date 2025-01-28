import React from 'react';
import './App.css';

import CPPIcon from './icons/cpp.svg';
import PythonIcon from './icons/python.svg';
import MySQLIcon from './icons/mysql.svg';    
import JavaScriptIcon from './icons/javascript.svg';
import HTMLIcon from './icons/html.svg';     
import ReactIcon from './icons/react.svg'; 
import CSSIcon from './icons/css.svg'; 

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
        <div className="about-section">
          <div className="about-container">
            <h1 className="section-title">About Me</h1>
            <p className="about-description">
              I am a student at the Tandon School of Engineering, studying Computer Science with minors in Mathematics, Cybersecurity, and Finance. My primary interest lies in software engineering, and I have gained valuable experience through internships in the field. In my free time, I enjoy cooking and keeping a close eye on cryptocurrency markets. I'm always eager to learn and explore new opportunities in tech and finance.
            </p>
          </div>
        </div>
        <div id="skills" className="section skills-section">
          <h1 className="section-title">Skills</h1>
          <div className="skills-container">
            <div className="skill-box">
              <img src={CPPIcon} alt="C++" className="cpp-icon" />
            </div>
            <div className="skill-box">
              <img src={PythonIcon} alt="python" className="python-icon" />
            </div>
            <div className="skill-box">
              <img src={JavaScriptIcon} alt="JavaScript" className="javascript-icon" /> {/* Added JavaScript */}
            </div>
            <div className="skill-box">
              <img src={CSSIcon} alt="CSS" className="css-icon" /> {/* Added CSS */}
            </div>
            <div className="skill-box">
              <img src={HTMLIcon} alt="HTML" className="html-icon" /> {/* Added HTML */}
            </div>
            <div className="skill-box">
              <img src={ReactIcon} alt="React" className="react-icon" /> {/* Added React */}
            </div>
            <div className="skill-box">
              <img src={MySQLIcon} alt="MySQL" className="mysql-icon" /> {/* Added MySQL */}
            </div>
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

        <div id="contact" className="section contact-section">
          <h1 className="section-title">Contacts</h1>
          <div className="contact-container">
            {/* Top Section: LinkedIn & GitHub Icons */}
            <div className="contact-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <img src="/assets/github-icon.png" alt="GitHub" />
              </a>
            </div>

            {/* Email & Phone */}
            <div className="contact-info">
              <p>Email: example@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;