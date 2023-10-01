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
      //method 1
      <img src={img1} alt="here is a female icon" />
      //method 2
      <img src={require('./images/male.png')} alt="" />
      <Context/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
