import { useEffect, useState } from 'react';
import {BrowserRouter as Router, RouterProvider} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import { motion } from "framer-motion"
import Social from './components/Social/Social';
import AnimatedRoute from './routers/AnimatedRoute';
import { router } from './routers/router';


function App() {
  const [mousePosition, setMousePosition] =useState({
    x:-50,
    y:-50
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


    // useEffect(()=>{
    //   document.addEventListener('mousemove', function(e) {
    //     const snake = document.querySelector('.snake');
    //     const x = e.clientX;
    //     const y = e.clientY;
    //     snake.style.left = x + 'px';
    //     snake.style.top = y + 'px';
    // })
    // })
  return (
    <div className=''>
      <RouterProvider router={router}>
     <div className="lightLine"></div>
     <div className="lightLine2"></div>
     {/* <div class="snake"></div> */}

      <Router>
      <motion.div 
      className={`cursor hidden md:block `}
      variants={variants}
      animate="default"
      ></motion.div>
        <Header></Header>
        <Social></Social>
      <AnimatedRoute></AnimatedRoute>
      </Router>
        
      
        
      </RouterProvider>

    </div>
 );
}

export default App
