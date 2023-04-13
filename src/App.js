import './index.css';
import { Routes, Route} from 'react-router-dom'
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components folder
import Navbar1 from './Components/Navbar';
import Footer from './Components/Footer';

// Pages folder
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:symbol" element={<Project stocks={stocksData} />} /> */}
          {/* stocks:symbol holds 1 prpject from projects */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
