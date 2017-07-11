import React, { Component } from 'react';
import './TheTable.css';
import {Table} from 'react-bootstrap';
import TheTableRow from './TheTableRow';


class TheTable extends Component {
  render() {
    return (
      <div id="style">
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

      <TheTableRow country="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
      <TheTableRow country="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor" />
      <TheTableRow country="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
      <TheTableRow country="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />

      </tbody>
        </Table>

      </div>
    );
  }
}

export default TheTable;
