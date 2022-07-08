import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
