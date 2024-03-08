zz>zx// App.jsx

 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SocialIcon from  './componets/SocialIcons'
import NavBar from './componets/NavBar';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Briefcase from './Screens/Briefcase';
import Reviews from './Screens/Reviews';
import Technologies from './Screens/Technologies';
import About from './Screens/About';
 

function App() {
  return (
    <div className="app">
      <Router>
         <SocialIcon/>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/briefcase" element={<Briefcase />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
