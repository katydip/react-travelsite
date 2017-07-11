import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import TheCarousel from './components/thecarousel/TheCarousel';
import Flags from './components/flags/Flags';
import TheTable from './components/thetable/TheTable';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        <TheCarousel />
        <Flags />
        <TheTable />
        <Footer />
        
      </div>
    );
  }
}

export default App;
