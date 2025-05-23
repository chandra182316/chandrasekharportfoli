import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.png';
import javascript from '../assets/JavaScript.png';
import bootstrap from '../assets/BootStrap.png';
import react from '../assets/React.js.png';
import digitalsignature from '../assets/digtalsignature.png';
import foodsite from '../assets/foodsite.png';
import './Portfolio.css';


const Portfolio = () => {
  return (
    <section className="portfolio">
        <h1 className="portfoliotitle">My Portfolio</h1>
        <div className="portfolioheadings">
            <h1 className="subtitle">Skills</h1>
            <div className="skillpart">
                

            <div className="skillcard">
                <img src={java} alt="Java"/>
                <h3>Java</h3>
            </div>
            <div className="skillcard">
                <img src={html} alt="HTML"/>
                <h3>HTML5</h3>
            </div>
            <div className="skillcard">
                <img src={css} alt="CSS"/>
                <h3>CSS3</h3>
            </div>
            <div className="skillcard">
                <img src={javascript} alt="JavaScript"/>
                <h3>JavaScript</h3>
            </div>
            <div className="skillcard">
                <img src={react} alt="React.js"/>
                <h3>React.js</h3>
            </div>
            <div className="skillcard">
                <img src={bootstrap} alt="BootStrap"/>
                <h3>BootStrap</h3>
            </div>
            </div>
            <h1 className="subtitle">Projects</h1>
            <div className="Projects">
            <div className="project">
                <a href="https://github.com"> <img src={foodsite } alt="foodsite"/></a>
                <h3>Food Website</h3>
            </div>
        
            <div className="project">
                <a href="https://github.com"> <img src={digitalsignature} alt="digitalpdf"/></a>
                <h3>Digital Signature</h3>
            </div>
           
            </div>
            
        </div>
    </section>
  )
}

export default Portfolio;