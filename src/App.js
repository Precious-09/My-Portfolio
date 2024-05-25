import Header from './Components/Header'
import './App.css';
import NavBar from './Components/Nav';
import About from './Components/About';
import React from 'react';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Port from './Components/Portfolio';
import Experience from './Components/Experience';

function App() {


  return (
    <div>
      <Header/>
      <NavBar/>
      <About/>
      <Experience/>
      <Port/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
