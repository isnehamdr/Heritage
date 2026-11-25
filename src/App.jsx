
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Rooms from './Pages/Rooms';
import RoomDetail from './Pages/RoomDetail';
import Services from './Pages/Services';
import Dining from './Pages/Dining';
import Experiences from './Pages/Experiences';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import Backtotop from './Components/Backtotop';
import Mission from './Pages/Mission';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="">
        <Navbar />
          <Backtotop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-mission" element={<Mission/>} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} /> 
          <Route path="/dining" element={<Dining />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
      
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;