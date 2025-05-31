import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const NotFound = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
        const closeNav = () => setIsMobileNavOpen(false);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeNav);
        });

        return () => {
            mobileNavLinks.forEach(link => {
                link.removeEventListener('click', closeNav);
            });
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col font-inter">
            {/* Header and Navigation */}
            <header className="sticky top-0 z-10 bg-black bg-opacity-80 p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center">
                    <img src="/cdn/assets/logo1080vec.png" alt="Nebula Studios Logo" className="h-10 mr-4 rounded-full" />
                    <span className="text-xl font-bold">NEBULA STUDIOS</span>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Home</Link>
                    <Link to="/portfolio/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Projects</Link>
                    <Link to="/contact/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Contact</Link>
                    <Link to="/about/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">About</Link>
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

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-95 z-20 flex flex-col items-center justify-center transform ${
                    isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
                    onClick={() => setIsMobileNavOpen(false)}
                >
                    ×
                </button>
                <nav className="flex flex-col space-y-8 text-2xl">
                    <Link to="/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
                    <Link to="/portfolio/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Projects</Link>
                    <Link to="/contact/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Contact</Link>
                    <Link to="/about/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>About</Link>
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
                    <img src="/cdn/assets/logo1080vec.png" alt="Nebula Studios Logo" className="max-w-[100px] md:max-w-[150px] mx-auto rounded-full shadow-md" />
                    <div className="mt-4">
                        <h1 className="text-3xl md:text-4xl font-bold nebulafont uppercase">NEBULA</h1>
                        <h2 className="text-xl md:text-2xl tracking-wider"><span className="font-bold">CLIENT</span> ERROR</h2>
                    </div>
                </div>
            </div>

            {/* First Content Div (Error 404) */}
            <div className="relative py-16 md:py-24 bg-[#880000] flex flex-col items-center justify-center" style={{ animation: 'flicker 3s infinite linear alternate' }}>
                <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4"><span className="font-extrabold">ERROR</span> 404</h1>
                <p className="text-lg md:text-xl text-white leading-relaxed text-center px-4">
                    The page you are looking for does not exist. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back. Please find your way back.
                </p>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm leading-relaxed mt-auto">
                <div>
                    © Nebula Studios, 2024<br />
                    Do not reuse or redistribute our assets without permission under any circumstance.<br />
                    All rights reserved.<br />
                </div>
            </footer>
        </div>
    );
};

export default NotFound;