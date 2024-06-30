import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mon Portfolio</h1>
        <button
          className="block md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul className={`nav-items ${isOpen ? 'hidden' : 'hidden'} md:flex space-x-4`}>
          <li><Link to="home" smooth={true} duration={500} className="btn btn-ghost">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="btn btn-ghost">About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="btn btn-ghost">Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="btn btn-ghost">Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="btn btn-ghost">Contact</Link></li>
        </ul>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center md:hidden">
          <li className="my-2"><Link to="home" smooth={true} duration={500} className="btn btn-ghost" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="my-2"><Link to="about" smooth={true} duration={500} className="btn btn-ghost" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="my-2"><Link to="projects" smooth={true} duration={500} className="btn btn-ghost" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li className="my-2"><Link to="skills" smooth={true} duration={500} className="btn btn-ghost" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li className="my-2"><Link to="contact" smooth={true} duration={500} className="btn btn-ghost" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
