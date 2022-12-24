import { useEffect, useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import { motion } from "framer-motion"
import Social from './components/Social/Social';
import AnimatedRoute from './routers/AnimatedRoute';


function App() {
  const [mousePosition, setMousePosition] =useState({
    x:0,
    y:0
  })

  const variants = {
    default:{
      x:mousePosition.x  + 12 ,
      y:mousePosition.y + 12 
      
    }
  }



  useEffect(()=>{

    const mouseMove = e =>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }

    window.addEventListener("mousemove",mouseMove)
    return ()=> window.removeEventListener("mousemove",mouseMove)
  },[])

  return (
    <div className=''>
     <div className="lightLine"></div>
     <div className="lightLine2"></div>

      <Router>
      <motion.div 
      className='cursor hidden md:block'
      variants={variants}
      animate="default"
      ></motion.div>
        <Header></Header>
        <Social></Social>
      <AnimatedRoute></AnimatedRoute>
      </Router>
        
      {/* <RouterProvider router={router}>
        
      </RouterProvider> */}

    </div>
 );
}

export default App;
