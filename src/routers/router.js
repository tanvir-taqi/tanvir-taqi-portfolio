import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import AddProject from "../components/Dashboard/AddProject";
import Dashboard from "../components/Dashboard/Dashboard";
import Myproject from "../components/Dashboard/Myproject";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Projects from "../components/Projects/Projects";
import SignUp from "../components/SignUp/SignUp";
import Skill from "../components/Skill/Skill";
import Animate from "../layout/Animate";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path: '/project/:id',
                loader: ({params})=> fetch(`https://tanvir-taqi-server.vercel.app/project/${params.id}`),
                element: <ProjectDetails></ProjectDetails>,
                
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
            {
                path: '/tanvirtaqidashboardlogin',
                element: <Login></Login>
            },
            {
                path: '/tanvirtaqidashboardsignup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children:[
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/addprojects',
                        element: <AddProject></AddProject>
                    },
                    {
                        path: '/dashboard/myprojects',
                        element: <Myproject></Myproject>
                    },
                ]
            }

        ]
    }
])
