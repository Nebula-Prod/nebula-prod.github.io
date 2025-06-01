import React, { useState, useEffect } from 'react';

// Main App component
const Home = () => {
    // State for managing mobile navigation visibility
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Function to handle button clicks and open new tabs
    const handleButtonClick = (id) => {
        const currentUrl = window.location.origin.replace(/\/$/, "");
        const urls = {
            mtchannelbtn: "https://www.youtube.com/@MeatloafTheory/", // Placeholder URL
            mtprojectbtn: currentUrl + "/portfolio/meatloaf/",
            improjectbtn: currentUrl + "/portfolio/ironman_animdemo/",
            portfoliobtn: currentUrl + "/portfolio/",
            contactbtn: currentUrl + "/contact/"
        };
        if (urls[id]) {
            window.open(urls[id], "_blank");
        }
    };

    // Effect to close mobile nav when a link is clicked
    useEffect(() => {
        const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
        const closeNav = () => setIsMobileNavOpen(false);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeNav);
        });

        // Cleanup event listeners
        return () => {
            mobileNavLinks.forEach(link => {
                link.removeEventListener('click', closeNav);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-inter">
            {/* Header and Navigation */}
            <header className="sticky top-0 z-10 bg-black bg-opacity-80 p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center">
                    <img src="/cdn/assets/logo1080vec.png" alt="Nebula Studios Logo" className="h-10 mr-4 rounded-full" />
                    <span className="text-xl font-bold">NEBULA STUDIOS</span>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Home</a>
                    <a href="/portfolio/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Projects</a>
                    <a href="/contact/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">Contact</a>
                    <a href="/about/" className="text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300">About</a>
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
                    &times;
                </button>
                <nav className="flex flex-col space-y-8 text-2xl">
                    <a href="#home" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Home</a>
                    <a href="/portfolio/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Projects</a>
                    <a href="/contact/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>Contact</a>
                    <a href="/about/" className="nav-link text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-300" onClick={() => setIsMobileNavOpen(false)}>About</a>
                </nav>
            </div>

            {/* Hero Section */}
            <section id="home" className="relative w-full h-screen max-h-[600px] overflow-hidden flex items-center justify-center">
                <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                    <source src="/cdn/assets/dots_bg.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 text-center p-4 max-w-xl w-11/12 bg-black bg-opacity-50 rounded-lg">
                    <img src="/cdn/assets/logo1080vec.png" alt="Nebula Studios Logo" className="max-w-[120px] mx-auto mb-4 rounded-full" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-2">NEBULA</h1>
                    <h2 className="text-2xl md:text-3xl tracking-widest">STUDIOS <span className="font-bold">PRODUCTIONS</span></h2>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="who-we-are" className="py-12 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold uppercase tracking-wide mb-8">WHO <span className="font-extrabold">WE ARE</span></h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Nebula Studios is a group of neurodivergent queer nerds creating video productions, gaming productions,
                    programming and UX design, and other miscellaneous projects. We’re infatuated with the question:
                    How far can we take this?
                </p>
                <p className="text-xs text-gray-900 leading-relaxed">why.can't.i.feel</p>
            </section>

            {/* Meatloaf Theory Section */}
            <section className="relative w-full py-16 md:py-24 mb-12">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video autoPlay muted loop className="w-full h-full object-cover">
                        <source src="/cdn/assets/meatloaftheory_fancybg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-center">
                    <img src="/cdn/assets/MeatloafTheory.png" alt="Meatloaf Theorists Logo" className="max-w-[150px] mx-auto mb-6 rounded-full" />
                    <h1 className="text-3xl font-bold uppercase mb-4">THE <span className="font-extrabold">MEATLOAF THEORISTS</span></h1>
                    <p className="text-base text-gray-300 leading-relaxed mb-8">
                        The Meatloaf Theorists is a satire channel based on the channels created by
                        Theorist Media/Matthew Patrick and owned by LunarX. The Meatloaf Theory project
                        was intended to create a well edited parody of the Theory channels, copying the
                        editing and production style as closely as possible on a 0 budget.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            id="mtchannelbtn"
                            className="bg-white text-black px-6 py-3 rounded-md uppercase tracking-wide font-bold hover:bg-gray-200 transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick('mtchannelbtn')}
                        >
                            View Channel Page ›
                        </button>
                        <button
                            id="mtprojectbtn"
                            className="bg-white text-black px-6 py-3 rounded-md uppercase tracking-wide font-bold hover:bg-gray-200 transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick('mtprojectbtn')}
                        >
                            View Project Page ›
                        </button>
                    </div>
                </div>
            </section>

            {/* FUI Design Obsession Section */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 mb-12 flex items-center justify-center"
                style={{ backgroundImage: "url('/cdn/assets/HUD_prod.png')" }}
            >
                <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-bold uppercase mb-4">FUI DESIGN <span className="font-extrabold">OBSESSION</span></h1>
                    <p className="text-base text-gray-300 leading-relaxed mb-8">
                        Relentless creators of studio quality FUI design and rendering<br />
                        77 68 61 74 2E 77 61 73 2E 6D 79 2E 6E 61 6D 65 3F
                    </p>
                </div>
            </section>

            {/* Iron Man Anim Demo Section */}
            <section className="relative w-full py-16 md:py-24 mb-12">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video autoPlay muted loop className="w-full h-full object-cover">
                        <source src="/cdn/assets/ironman_finalcomp.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold uppercase mb-4"><span className="font-extrabold">IRON MAN</span> ANIM DEMO</h1>
                    <p className="text-base text-gray-300 leading-relaxed mb-8">
                        This Iron Man animation demo was created for practice and demonstration. This is the first
                        attempt at imitating Iron Man HUD styles after extensive studying.
                        <span className="text-red-500 font-bold block mt-2">S2FyYSwgY2FuIHlvdSBoZWFyIG1lPw==</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            id="improjectbtn"
                            className="bg-white text-black px-6 py-3 rounded-md uppercase tracking-wide font-bold hover:bg-gray-200 transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick('improjectbtn')}
                        >
                            View Project Page ›
                        </button>
                    </div>
                </div>
            </section>

            {/* Portfolio CTA Section */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 mb-12 flex items-center justify-center"
                style={{ backgroundImage: "url('/cdn/assets/projects_bg.png')" }}
            >
                <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-bold uppercase mb-4">VIEW OUR <span className="font-extrabold">PORTFOLIO</span></h1>
                    <p className="text-base text-gray-300 leading-relaxed mb-8">
                        See projects and productions under the Nebula Studios branding scheme.
                        <span className="text-red-500 font-bold block mt-2">RG8gbm90IHRydXN0IHRoZSBOSUNBLg==</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            id="portfoliobtn"
                            className="bg-white text-black px-6 py-3 rounded-md uppercase tracking-wide font-bold hover:bg-gray-200 transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick('portfoliobtn')}
                        >
                            Go To Portfolio ›
                        </button>
                    </div>
                </div>
            </section>

            {/* Get In Touch Section */}
            <section className="relative w-full py-16 md:py-24 mb-12">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <video autoPlay muted loop className="w-full h-full object-cover">
                        <source src="/cdn/assets/dots_bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold uppercase mb-4">GET IN <span className="font-extrabold">TOUCH</span></h1>
                    <p className="text-base text-gray-300 leading-relaxed mb-8">Contact us via emails and socials.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            id="contactbtn"
                            className="bg-white text-black px-6 py-3 rounded-md uppercase tracking-wide font-bold hover:bg-gray-200 transition-all duration-300 shadow-md"
                            onClick={() => handleButtonClick('contactbtn')}
                        >
                            Go To Contact ›
                        </button>
                    </div>
                </div>
            </section>

            {/* Work In Progress Background (Optional) */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-32 md:py-48 flex items-center justify-center"
                style={{ backgroundImage: "url('/cdn/assets/wip.png')" }}
            >
                {/* You can put a “WIP” notice here if you like, or leave it blank. */}
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center p-6 text-sm leading-relaxed">
                &copy; Nebula Studios, 2024<br />
                Do not reuse or redistribute our assets without permission under any circumstance.<br />
                All rights reserved.
            </footer>
        </div>
    );
};

export default Home;