import React, { Component } from 'react';
import './Flags.css';
import {Col} from 'react-bootstrap';

class FlagDisplay extends Component {
  render() {
    return (
      <div>
        <Col sm={6} md={3}><br/><h4>{this.props.country}</h4><br/><img id="flagicon" src={this.props.photo}></img><br/><a href={this.props.link} target="_blank">{this.props.description}</a></Col>
      </div>
    );
  }
}

export default FlagDisplay;
