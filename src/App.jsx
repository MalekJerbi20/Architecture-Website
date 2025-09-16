import {Routes, Route} from 'react-router-dom';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contacts';
import Projects from './components/projects';
import LandingPage from './components/landing-page';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';




function App() {
  return (
<>
  <Navbar />
    <AnimatePresence>
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
  </Routes>
  </AnimatePresence>
  </> 
  ) ;
};

export default App
