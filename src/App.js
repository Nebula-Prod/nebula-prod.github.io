import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'; 
import About from './About';
import NotFound from './404';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} /> {/* This is the catch-all route */}
            </Routes>
        </Router>
    );
}

export default App;