import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  state = {
    viewed: 0,
    maxViews: 10
  }
  incrementViewed = () => {
    console.log('Increase viewed by one')
    this.setState(prevState => ({
      viewed: ++prevState.viewed
    }))
  }
  render() {
    const {viewed, maxViews} = this.state
    return (
      <div className="App">
        <p>You have viewed {viewed}/{maxViews} profiles</p>
        <Profile incrementViewed={this.incrementViewed}/>
      </div>
    );
  }
}

export default App;
