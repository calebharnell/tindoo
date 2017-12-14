import React, { Component } from 'react';
import { Button, Image } from 'reactbulma';

class Profile extends Component {
  state = {
    user: null
  }
  getNextUser = () => {
    this.setState({
      user: null
    })
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
        { !user ? (<p>Loading...</p>) : (
          <div>
            <Image className="profile-img" is="128x128" src={user.picture.large} />
            <h1>{ user.name.first }</h1>
            { this.props.viewed < this.props.maxViews ? <Button info onClick={this.getNextUser}>Next</Button> : ''}
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
