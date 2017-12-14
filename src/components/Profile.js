import React, { Component } from 'react';
import { Button } from 'reactbulma';

class Profile extends Component {
  state = {
    user: null
  }
  getNextUser = () => {
    fetch('https://randomuser.me/api/')
      .then((response) => {
        return response.json()
      }).then(users => {
        this.setState({
          user: users.results[0]
        })
        this.props.incrementViewed()
      })
  }
  render() {
    const { user } = this.state
    return (
      <div>
        { !this.state.user ? (<p>Loading...</p>) : (
          <div>
            <h1>{ user.name.first }</h1>
            <Button info onClick={this.getNextUser}>Next</Button>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getNextUser()
  }
}

export default Profile;
