import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Importing components
import NavBar from './components/nav.js';
import Header from './components/header.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contacts';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
       < NavBar />
       < Header />
       < Portfolio /> 
       < Contact />
       < Footer /> 
    </div>
  );
}

export default App;

