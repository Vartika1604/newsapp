import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News key='general' pageSize={6} country="in" category="general"/>
      </div>
    )
  }
}
