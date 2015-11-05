import React, { Component } from 'react';
import { render } from 'react-dom';

export class Child extends Component {
  render() {
    const { params: { id }} = this.props;

    return (
      <div>
        <h2>Child</h2>
        {id && <p>{id}</p>}
      </div>
    );
  }
}