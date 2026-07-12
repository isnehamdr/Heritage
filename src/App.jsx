// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<AboutPage />} />

          </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;