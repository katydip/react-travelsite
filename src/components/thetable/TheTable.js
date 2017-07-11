import React, { Component } from 'react';
import './TheTable.css';
import {Table} from 'react-bootstrap';

class TheTable extends Component {
  render() {
    return (
      <div id="style">
       <Table striped bordered condensed hover>
      <tbody>
        <tr>
        <td>{this.props.country}</td>
        <td>{this.props.capital}</td>
        <td>{this.props.language}</td>
        <td>{this.props.population}</td>
        <td>{this.props.bird}</td>
        </tr>
        </tbody>
        </Table>
      </div>
    );
  }
}

export default TheTable;
