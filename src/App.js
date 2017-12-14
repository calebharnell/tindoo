import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import ProgressBar from './components/ProgressBar/';
import { Button } from 'reactbulma';

class App extends Component {
  state = {
    viewed: 0,
    maxViews: 10
  }
  incrementViewed = () => {
    this.setState(prevState => ({
      viewed: prevState.viewed + 1
    }))
  }
  gambleMaxViews = () => {
    const newMax = Math.floor(Math.random() * 21);
    this.setState({
      maxViews: newMax
    })
  }
  render() {
    const {viewed, maxViews} = this.state
    return (
      <div className="App">
        <ProgressBar viewed={viewed} maxViews={maxViews}/>
        <Button danger onClick={this.gambleMaxViews}>Gamble</Button>
        <p>You have viewed {viewed}/{maxViews} profiles</p>
        <Profile viewed={viewed} maxViews={maxViews} incrementViewed={this.incrementViewed}/>
      </div>
    );
  }
}

export default App;
