// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import Rooms from './Pages/Rooms';
import RoomDetail from './Pages/RoomDetail';
import Dining from './Pages/Dining';
import Experiences from './Pages/Experiences';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import Backtotop from './Components/Backtotop';

// Scrolls to top on every route change so inner pages don't inherit
// the previous page's scroll position.
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
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Backtotop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<AboutPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;