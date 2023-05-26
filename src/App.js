
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
    
}   
from 'react-router-dom';  
function App() {
  return (
 <>
 <Navbar/>
 <Router>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="register" element={<Register />} />
  </Routes>
  </Router>
 </>
  );
}

export default App;
