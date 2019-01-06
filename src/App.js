import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'

import Navbar from './components/layout/Navbar'
import Footer from "./components/layout/Footer"
import Routes from "./Routes"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
