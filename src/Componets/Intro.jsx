import React from 'react';
import bg from '../assets/sekhar.jpg.webp';

import btnImg from '../assets/hireme.png';
import resume from '../assets/CHANDRA SEKHAR KATAM.pdf';

import './Intro.css';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introtext">
          I'am <span className="introname">Chandra Sekhar<br />Web Developer</span>
        </span>
        <p className="intropara">
        I am a skilled Web Developer with experience in crafting visually <br/>appealing, user-friendly, and responsive websites that deliver excellent user experiences.
        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
        <button className="btn">
        <img src={btnImg} alt="Hire" className="btnImg" /> Hire Me
        </button>
        </a>
      </div>
      <img src={bg} alt="bg" className="bgs" />
    </section>
  );
};

export default Intro;
