import React from 'react';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur px-6 py-3 shadow flex justify-center gap-6">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

    </nav>
  );
}

export default Navbar;