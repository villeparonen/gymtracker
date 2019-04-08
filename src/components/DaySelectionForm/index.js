import React, { Component } from 'react';
import DaySelectionRF from './DaySelectionRF';

// SUBMIT Component
// This outer-most component is responsible for supplying a function 
// (via an onSubmit property) to handle the submission of the form

class DaySelection extends Component {
  handleSubmit = () => {
    console.log('SUBMITTED');
  }

  render() {
    return <DaySelectionRF onSubmit={this.handleSubmit} />;
  }
}

export default DaySelection;
