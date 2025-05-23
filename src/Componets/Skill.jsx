import React from 'react';
import './Skill.css';

import Webdesign from '../assets/website-design.png';
import Appdesign from '../assets/app-design.png';

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <h2 className="skilltitle">What I Do</h2>
      <p className="skilldescription">
      I am a passionate Web Designer with a strong background in creating visually appealing and user-friendly websites.
      I have a deep understanding of design principles, a keen eye for detail, and hands-on experience with HTML, CSS, JavaScript, Bootstrap, React.js and have knowledge about backend technologies.
      </p>

      <div className="skillbars">
        <div className="skillbar addition">
          <img src={Webdesign} alt="Web Design" />
          <div>
            <h3>Web Design</h3>
            <p>I design and develop responsive websites that are fast, modern, and user-friendly, ensuring a great user experience across all devices.
            </p>
          </div>
        </div>

        <div className="skillbar">
          <img src={Appdesign} alt="App Design" />
          <div>
            <h3>App Design</h3>
            <p>I create visually appealing and intuitive mobile app designs focused on smooth navigation, usability, and clean interface layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
