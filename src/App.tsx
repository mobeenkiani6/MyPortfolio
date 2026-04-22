import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent">
      <Cursor />
      <ThreeBackground />
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;