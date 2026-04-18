import React from 'react';


import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#C8D9E6] text-[#2F4156] min-h-screen font-sans">
      <Header />
      <Navbar />
       <main className="max-w-6xl mx-auto p-6 space-y-12">
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;