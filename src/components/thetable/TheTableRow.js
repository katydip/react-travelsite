import React, { Component } from 'react';
import './TheTable.css';
import {Table} from 'react-bootstrap';

class TheTableRow extends Component {
  render() {
    return (

      <tr>
      <td>{this.props.country}</td>
      <td>{this.props.capital}</td>
      <td>{this.props.language}</td>
      <td>{this.props.population}</td>
      <td>{this.props.bird}</td>
      </tr>
    );
  }
}

export default TheTableRow;
