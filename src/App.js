import React from 'react';
import './App.css';

import CPPIcon from './icons/cpp.svg';
import PythonIcon from './icons/python.svg';
import MySQLIcon from './icons/mysql.svg';    
import JavaScriptIcon from './icons/javascript.svg';
import HTMLIcon from './icons/html.svg';     
import ReactIcon from './icons/react.svg'; 
import CSSIcon from './icons/css.svg'; 
import LinkedInIcon from './icons/linkedin-icon.svg';
import GithubIcon from './icons/github-icon.svg';


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
        <img src="/assets/nyu-logo.png" alt="NYU Logo" className="nyu-logo" />
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
              <img src={CPPIcon} alt="C++" className="icon" />
            </div>
            <div className="skill-box">
              <img src={PythonIcon} alt="python" className="icon" />
            </div>
            <div className="skill-box">
              <img src={JavaScriptIcon} alt="JavaScript" className="icon" /> 
            </div>
            <div className="skill-box">
              <img src={CSSIcon} alt="CSS" className="icon" /> 
            </div>
            <div className="skill-box">
              <img src={HTMLIcon} alt="HTML" className="icon" /> 
            </div>
            <div className="skill-box">
              <img src={ReactIcon} alt="React" className="icon" /> 
            </div>
            <div className="skill-box">
              <img src={MySQLIcon} alt="MySQL" className="icon" /> 
            </div>
          </div>
        </div>
        <div id="experiences" className="section experiences-section">
          <h1 className="section-title">Experiences</h1>
          <div className="experiences-container">
            {/* Fintech Summer Internship */}
            <div className="experience-item">
              <img
                src="/assets/NVT.png"
                alt="Fintech Internship"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">Fintech Summer Internship</h3>
                <div className="tags-container">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JavaScript</div>
                </div>
                <p className="experience-description">
                  Worked directly under head of technology to make the company website of New Vision Technology as the sole developer. 
                  Implemented numerous interactive and user friendly modules to help users understand our finanical product.
                </p>
              </div>
            </div>

            {/* Chameleon Wallpaper Changer */}
            <div className="experience-item">
              <img
                src="/assets/wallpaperchanger.png"
                alt="Chameleon Wallpaper Changer"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">Chameleon Wallpaper Changer</h3>
                <div className="tags-container">
                  <div className="tag">JavaScript</div>
                  <div className="tag">React</div>
                  <div className="tag">AWS</div>
                </div>
                <p className="experience-description">
                  Coded a AI generated Wallpaper Changer on Android. Ran tests and developed in Androidn Studio.
                  Generated photos are made with Stable Diffusion model stored in AWS.
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
                  <div className="tag">HTML</div>
                  <div className="tag">MySQL</div>
                  <div className="tag">MAMP</div>
                </div>
                <p className="experience-description">
                  Designed and implemented airport databse covering staff, tickets, customers, flights and connecting airports and more. 
                  Database ran on MAMP. CRUD was handled in mySQL.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <img
                src="/assets/CPU.png"
                alt="CPU Simulator (E20)"
                className="experience-image"
              />
              <div className="experience-content">
                <h3 className="experience-title">CPU simulator</h3>
                <div className="tags-container">
                  <div className="tag">C++</div>
                </div>
                <p className="experience-description">
                  E20 is a simplified version of assembly code native to Tandon School of Engineering.
                  In this project I simulated a CPU capably of processing E20 code, including multi-caching capabilities (L1 and L2).
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
              <a href="https://www.linkedin.com/in/hockey-lam-448153252/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/hockeylam" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <img src={GithubIcon} alt="GitHub" />
              </a>
            </div>

            {/* Email & Phone */}
            <div className="contact-info">
              <p>Email: hl4779@nyu.edu</p>
              <p>Phone: (917)801-6903 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;