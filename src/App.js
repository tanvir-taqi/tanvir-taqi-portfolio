import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import Social from './components/Social/Social';
import AnimatedRoute from './routers/AnimatedRoute';


function App() {
  return (
    <div className=''>
      
      <Router>
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
