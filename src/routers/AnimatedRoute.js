import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skill from '../components/Skill/Skill';

const AnimatedRoute = () => {
  const location = useLocation()
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/projects' element={<Projects></Projects>}/>
          <Route path='/skills' element={<Skill></Skill>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;