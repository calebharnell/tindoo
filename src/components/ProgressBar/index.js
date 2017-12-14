import React, { Component } from 'react';
import { Progress } from 'reactbulma';
import './ProgressBar.css'; 


class ProgressBar extends Component {
  render() {
    const { viewed, maxViews } = this.props
    return (
      <div>
        <Progress info value={viewed} max={maxViews}>45%</Progress>
      </div>
    );
  }
}

export default ProgressBar;
