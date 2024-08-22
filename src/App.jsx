import React from 'react';
import './App.css'
import Hero from './Sections/Hero/hero'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Sections/Navbar/Navbar';
import About from './Sections/About/About'
import Contact from './Sections/Contact/Contact'
import Skills from './Sections/Skills/Skills'
import Project from './Sections/Project/Project';
import Footer from './Sections/Footer/Footer';


function App() {
  return (
    <div>
    <BrowserRouter>
  <Navbar/>
     <Routes>
       <Route path="/" element={<> <Hero/>,<About/> </>}/>
       <Route path="/Home" element={<Hero/>}/>
       <Route path="/Project" element={<><Project/>, <Footer/></>}/>
       <Route path="/Skill" element={<Skills/> }/>
       <Route path="/Contact" element={<><Contact/> , <Footer/></> }/>
       
     </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
