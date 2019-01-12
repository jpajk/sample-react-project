import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'

import Navbar from './components/layout/Navbar'
import Footer from "./components/layout/Footer"
import Routes from "./Routes"
import Messages from "./components/layout/Messages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Messages/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
