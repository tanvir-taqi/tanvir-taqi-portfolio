import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Skill from "../components/Skill/Skill";
import Animate from "../layout/Animate";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            
            {
                path: '/',
                element: <Home></Home> 
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/skills',
                element: <Skill></Skill>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])
