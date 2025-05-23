import React from 'react';
import Navbar from './Componets/Navbar';
import Intro from './Componets/Intro';
import Skill from './Componets/Skill';
import Portfolio from './Componets/Portfolio';
import Contact from './Componets/Contact'; // 👈 Add this

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
