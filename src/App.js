import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Importing components
import NavBar from './components/nav';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Contact from './components/contacts';
import Footer from './components/footer';

function App() {
  const [pages] = useState([
      { name: "about me" },
      { name: "portfolio" },
      { name: "contact" },
      { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <div>
          <Header>
              <NavBar
                  pages={pages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
              ></NavBar>
          </Header>
          <main>
              <Page currentPage={currentPage}></Page>
          </main>
          <Footer />
      </div>
  );
}

export default App;

