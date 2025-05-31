import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      {/* Header and Navigation */}
      <header className="sticky top-0 z-10 bg-black bg-opacity-80 p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <img
            src="/cdn/assets/logo1080vec.png"
            alt="Nebula Studios Logo"
            className="h-10 mr-4 rounded-full"
          />
          <span className="text-xl font-bold">NEBULA STUDIOS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio/"
            className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact/"
            className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/about/"
            className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300 font-bold"
          >
            About
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-controls="primary-navigation"
          aria-expanded={isMobileNavOpen}
        >
          ☰
        </button>
      </header>

      {/* Mobile Navigation Overlay – now only ¾ width on the right */}
      <div
        id="primary-navigation"
        className={`mobile-nav fixed top-0 right-0 h-full w-3/4 bg-black bg-opacity-95 z-20 flex flex-col items-center justify-center transform ${
          isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
          onClick={() => setIsMobileNavOpen(false)}
        >
          ×
        </button>

        <nav className="flex flex-col space-y-4 text-xl">
          <Link
            to="/"
            className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300 py-2"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio/"
            className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300 py-2"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact/"
            className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300 py-2"
            onClick={() => setIsMobileNavOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about/"
            className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300 font-bold py-2"
            onClick={() => setIsMobileNavOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>

      {/* Header Background Video */}
      <div className="relative overflow-hidden h-[30vh] md:h-[40vh]">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
          <source src="/cdn/assets/dots_bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Header Container */}
      <div className="relative pt-8 pb-16 md:pt-16 md:pb-24 flex justify-center">
        <div className="text-center">
          <img
            src="/cdn/assets/logo1080vec.png"
            alt="Nebula Studios Logo"
            className="max-w-[100px] md:max-w-[150px] mx-auto rounded-full shadow-md"
          />
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-bold nebulafont uppercase">NEBULA</h1>
            <h2 className="text-xl md:text-2xl tracking-wider">
              <span className="font-bold">ABOUT</span> US
            </h2>
          </div>
        </div>
      </div>

      {/* First Content Div */}
      <div
        className="relative py-16 md:py-24 bg-black flex flex-col items-center justify-center"
        style={{ animation: 'flicker 3s infinite linear alternate' }}
      >
        <p className="font-montserrat-thin text-lg md:text-xl mb-2">FOUNDER</p>
        <img
          src="/cdn/assets/corrupted_file.png"
          alt="Corrupted File"
          className="max-h-[20vh] md:max-h-[30vh] mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold uppercase m-0">
          <span className="font-extrabold">CLARA</span> JONES
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4 text-center">
          Hi, I'm and I'm the main creator in Nebula, particularly for the smaller projects.
          <br />
          This is a normal bio template.
        </p>
      </div>

      <div
        className="relative py-16 md:py-24 bg-black"
        style={{
          backgroundImage: "url('/cdn/assets/crack.png')",
          backgroundColor: '#070709',
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8">
            OUR <span className="font-extrabold">MISSION</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Nebula is centered around coming up with and executing on cool ideas with captivating
            concepts.
            <br />
            From sci-fi HUDs to emotional stories, Nebula productions aim to be top of the
          </p>
        </div>
      </div>

      <div
        className="relative py-16 md:py-24 bg-black"
        style={{
          backgroundImage: "url('/cdn/assets/v_a_l_u_e_s.png')",
          backgroundColor: '#070709',
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-8">
            OUR <span className="font-extrabold">VALUES</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            As a group of multiracial neurodivergent queers, Nebula is accepting of all, even
            potentially misguided artificial intelligence beings . . .
            <br />
            We want nothing more than to be a safe environment, especially for those who've never
            known one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
