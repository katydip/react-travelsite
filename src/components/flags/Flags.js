import React, { Component } from 'react';
import './Flags.css';
import {Col, Grid, Row} from 'react-bootstrap';
import FlagDisplay from './FlagDisplay';


class Flags extends Component {
  render() {
    return (
      <div>
      <Grid id="gridstyle">
        <Row className="show-grid">
          <FlagDisplay country="Spain" photo="/assets/images/spain_flag.svg" link="http://www.spain.info/en_US/" description="Spain Tourism Site" />
          <FlagDisplay country="Chile" photo="/assets/images/chile_flag.svg" link="http://chile.travel/en/" description="Chile Tourism Site" />
          <FlagDisplay country="Aruba" photo="/assets/images/aruba_flag.svg" link="http://www.arubatourism.com/" description="Aruba Tourism Site" />
          <FlagDisplay country="Italy" photo="/assets/images/italy_flag.svg" link="http://www.italia.it/en/home.html" description="Italy Tourism Site" />
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Flags;
