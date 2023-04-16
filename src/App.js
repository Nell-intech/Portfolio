import './index.css';
import { Routes, Route} from 'react-router-dom'
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components folder
import Navbar1 from './Components/Navbar';

// Pages folder
import Home from './Pages/Home'
import CProject from './Pages/CProject'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currentprojects" element={<CProject />} />
          {/* <Route path="/projects/:symbol" element={<Project stocks={stocksData} />} /> */}
          {/* stocks:symbol holds 1 prpject from projects */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
