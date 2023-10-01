import React from 'react';
import Header from './components/Header';
import Context from './components/Context';
import Footer from './components/Footer';
import Employees from './components/Employees';
import img1 from './images/female.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <h2>Hello This Chisty</h2>
      /* Method 1 of adding pics through importing */
      <img src={img1} alt="here is a female icon" />
      /* Method 2 of adding pics through using require */
      <img src={require('./images/male.png')} alt="" />
      <Context/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
