
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />                
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes