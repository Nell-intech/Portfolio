import './index.css';
import { Routes, Route} from 'react-router-dom'
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components folder
import Navbar1 from './Components/Navbar';

// Pages folder
import Home from './Pages/Home'
import Currentproject from './Pages/CurrentProject'
import Contact from './Pages/Contact'
import Resume from './Pages/Resume';
import About from './Pages/About';



function App() {

  return (
    <>
      <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Currentproject" element={<Currentproject />} />
          {/* <Route path="/projects/:symbol" element={<Project stocks={stocksData} />} /> */}
          {/* stocks:symbol holds 1 project from projects */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </>
  );
}

export default App;
