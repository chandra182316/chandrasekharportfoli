import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.png';
import javascript from '../assets/JavaScript.png';
import bootstrap from '../assets/BootStrap.png';
import react from '../assets/React.js.png';
import employee from '../assets/emplyee.jpg';

import './Portfolio.css';
import springboot from '../assets/spring.png';
import MySQL from '../assets/mysql.png';
import Git from '../assets/gi.png';
import Github from '../assets/githu.png';
import Vercel from '../assets/vercel.png';
import crypto from '../assets/crypto.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1 className="portfoliotitle">My Portfolio</h1>
      <div className="portfolioheadings">
        <h1 className="subtitle">Skills</h1>
        <div className="skillpart">

          <div className="skillcard">
            <img src={java} alt="Java" />
            <h3>Java</h3>
          </div>
          <div className="skillcard">
            <img src={html} alt="HTML5" />
            <h3>HTML5</h3>
          </div>
          <div className="skillcard">
            <img src={css} alt="CSS3" />
            <h3>CSS3</h3>
          </div>
          <div className="skillcard">
            <img src={javascript} alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
          <div className="skillcard">
            <img src={react} alt="React.js" />
            <h3>React.js</h3>
          </div>
          <div className="skillcard">
            <img src={bootstrap} alt="Bootstrap" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skillcard">
            <img src={springboot} alt="Spring Boot" />
            <h3>Spring Boot</h3>
          </div>
          <div className="skillcard">
            <img src={MySQL} alt="MySQL" />
            <h3>MySQL</h3>
          </div>
          <div className="skillcard">
            <img src={Git} alt="Git" />
            <h3>Git</h3>
          </div>
          <div className="skillcard">
            <img src={Github} alt="GitHub" />
            <h3>GitHub</h3>
          </div>
          <div className="skillcard">
            <img src={Vercel} alt="Vercel" />
            <h3>Vercel</h3>
          </div>
        </div>

        <h1 className="subtitle">Projects</h1>
        <div className="Projects">
          <div className="project">
            <a href="https://greatstack.in/cryptoplace/">
              <img src={crypto} alt="Crypto Tracker" />
            </a>
            <h3>Crypto Tracker</h3>
          </div>

          <div className="project">
            <a href=" https://employee-manage-app.vercel.app">
              <img src={employee} alt="Digital Signature" />
            </a>
            <h3>Employee Management</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
