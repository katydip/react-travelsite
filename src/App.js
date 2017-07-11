import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import TheCarousel from './components/thecarousel/TheCarousel';
import Flags from './components/flags/Flags';
import {Grid, Row} from 'react-bootstrap';
import TheTable from './components/thetable/TheTable';
import {Table} from 'react-bootstrap';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <TheCarousel />
        <Grid id="gridstyle">
          <Row className="show-grid">
            <Flags country="Spain" photo="/assets/images/spain_flag.svg" link="http://www.spain.info/en_US/" description="Spain Tourism Site" />
            <Flags country="Chile" photo="/assets/images/chile_flag.svg" link="http://chile.travel/en/" description="Chile Tourism Site" />
            <Flags country="Aruba" photo="/assets/images/aruba_flag.svg" link="http://www.arubatourism.com/" description="Aruba Tourism Site" />
            <Flags country="Italy" photo="/assets/images/italy_flag.svg" link="http://www.italia.it/en/home.html" description="Italy Tourism Site" />
          </Row>
        </Grid>
        <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Destination</th>
          <th>Capital</th>
          <th>Official Language</th>
          <th>Population</th>
          <th>National Bird</th>
        </tr>
      </thead>
        <tbody>
          <tr>
        <TheTable country="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
        <TheTable country="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor" />
        <TheTable country="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
        <TheTable country="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />
          </tr>
        </tbody>
          </Table>
          <Footer />
      </div>
    );
  }
}

export default App;