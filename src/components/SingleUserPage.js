import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      age: '',
    };
  }

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    const ref = `/api/users/${this.props.id.toString()}`;
    fetch(ref)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => this.setState({
        avatar: data.avator,
        name: data.name,
        age: data.age
      }))
      .catch(err => {
        console.log('request failed', err);
      });
  }

  render() {
    return (
      <div>
        User {this.props.id}
        <li>Name: {this.state.name}</li>
        <li>Age: {this.state.age}</li>
        <li>Avatar: {this.state.avatar}</li>
      </div>
    );
  }
}

export default SingleUserPage;
